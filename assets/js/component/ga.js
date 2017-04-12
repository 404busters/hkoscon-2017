/**
 * @file Google Analytics related link tracking
 */

// refined ga with local debug
if (location.hostname == 'localhost') {
  // dummy ga tracker for debug in localhost
  console.debug('[GA local debug] override localhost `ga` function');
  window.ga = function() {
    if (typeof arguments[0] === 'function') {
      let tracker = {
        get: function(name) {
          return 'debug:' + name;
        }
      }
      window.setTimeout(arguments[0](tracker), 500);
    } else if (arguments[0] === 'create') {
      let args = Array.from(arguments);
      let [cmd, type, trackingID] = args;
      console.debug(`[GA local debug] ${type} "${trackingID}"`);
    } else if (arguments[0] === 'send') {
      let args = Array.from(arguments);
      let [cmd, type, category, action, label, value] = args;
      if (type === 'pageview') {
        console.debug(`[GA local debug] sending ${type}`);
      } else {
        console.debug(`[GA local debug] sending ${type}`, args.slice(2));
      }
    }
  };
} else {
  // adapt Google Analytics async pattern
  // create placeholder before GA is loaded
  window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
}

// to track normal outbound links
const trackLinkOutbound = function(evt) {
  const url = this.href;
  console.debug('[GA debug] trackLinkOutbound', url);
  ga('send', 'event', 'outbound', 'click', url, {
    'transport': 'beacon',
    'hitCallback': function(){document.location = url;}
  });
}

// to track links
const trackEvent = function(category, action, label, value){
  return function () {
    console.debug(`[GA debug] track event "${category}", "${action}", "${label}", "${value}"`);
    ga('send', 'event', category, action, label, value);
  }
}

// only apply link change if ga is ready and a proper clientId is here
ga(function(tracker) {

  // get ga client ID
  const clientID = tracker.get('clientId');

  $('a').each(function () {
    let link = this;
    let $link = $(this);
    if (link.hostname.match(/^(.+?\.|)eventbrite\.com/)) {

      // rewrite links to add cross domain tracking
      link.search = (link.search === '') ?
        '?_eboga=' + clientID : link.search + '&_eboga=' + clientID;

      // track outbound link
      let category = $link.data('ga-category');
      let action   = $link.data('ga-action');
      let label    = $link.data('ga-label');
      let value    = $link.data('ga-value');
      if ((typeof category != 'undefined') && (category != '')
        && (typeof action != 'undefined') && (action != '')) {
        link.onclick = trackEvent(category, action, label, value);
      }
    } else if (link.href.match(/^mailto:/)) {

      // track clicking of the email link
      let email = link.href.substring(7);
      link.onclick = trackEvent('outbound', 'click', 'email', email);
    } else if (!link.href.match(window.location.hostname)) {

      // track other outbound link, as long as it is not an internal linfk
      link.onclick = trackLinkOutbound;
    }
  });
});
