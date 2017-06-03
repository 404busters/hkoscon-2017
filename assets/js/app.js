// @flow

import $ from 'jquery';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

/* global location */

if (location.hostname !== 'localhost' && location.protocol !== 'https:') {
  // Strict HTTPS
  location.href = `https:${location.href.substring(location.protocol.length)}`;
}

require('./component/sidebar');
require('./component/collapsible');
require('./component/ga');
require('./component/modal');

runtime.register({ scope: `${location.protocol}//${location.host}/2017/` });

$('[data-activates]').sideNav();
$('.collapsible').collapsible();

// $FlowFixMe
require.ensure(['node-waves'], () => {
  const Waves = require('node-waves');
  Waves.init();
});

// $FlowFixMe
require.ensure(['./notice'], () => {
  require('./notice');
});
