!function(e){function t(i){if(a[i])return a[i].exports;var n=a[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var a={};return t.m=e,t.c=a,t.i=function(e){return e},t.d=function(e,a,i){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/2017/js/",t(t.s=8)}([function(e,t){e.exports=jQuery},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var n=a(0),o=i(n);a(5),a(3),(0,o.default)("[data-activates]").sideNav(),(0,o.default)(".collapsible").collapsible(),Promise.resolve().then(function(){var e=a(7);e.init()}.bind(null,a)).catch(a.oe)},,function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var n=a(0),o=i(n);o.default.fn.collapsible=function(e){var t={accordion:void 0,onOpen:void 0,onClose:void 0};return e=o.default.extend(t,e),this.each(function(){function t(e){d=l.find("> li > .collapsible-header"),e.hasClass("active")?e.parent().addClass("active"):e.parent().removeClass("active"),e.parent().hasClass("active")?e.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){(0,o.default)(this).css("height","")}}):e.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){(0,o.default)(this).css("height","")}}),d.not(e).removeClass("active").parent().removeClass("active"),d.not(e).parent().children(".collapsible-body").stop(!0,!1).each(function(){(0,o.default)(this).is(":visible")&&(0,o.default)(this).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){(0,o.default)(this).css("height",""),n((0,o.default)(this).siblings(".collapsible-header"))}})})}function a(e){e.hasClass("active")?e.parent().addClass("active"):e.parent().removeClass("active"),e.parent().hasClass("active")?e.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){(0,o.default)(this).css("height","")}}):e.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){(0,o.default)(this).css("height","")}})}function i(i){e.accordion||"accordion"===r||void 0===r?t(i):a(i),n(i)}function n(t){t.hasClass("active")?"function"==typeof e.onOpen&&e.onOpen.call(this,t.parent()):"function"==typeof e.onClose&&e.onClose.call(this,t.parent())}function s(e){var t=u(e);return t.length>0}function u(e){return e.closest("li > .collapsible-header")}var l=(0,o.default)(this),d=(0,o.default)(this).find("> li > .collapsible-header"),r=l.data("collapsible");l.off("click.collapse","> li > .collapsible-header"),d.off("click.collapse"),l.on("click.collapse","> li > .collapsible-header",function(e){var t=(0,o.default)(e.target);s(t)&&(t=u(t)),t.toggleClass("active"),i(t)}),e.accordion||"accordion"===r||void 0===r?i(d.filter(".active").first()):d.filter(".active").each(function(){i((0,o.default)(this))})})}},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var a=(0,s.default)(e);a.data("hammer")||a.data("hammer",new l.default(a[0],t))}var o=a(0),s=i(o),u=a(6),l=i(u);s.default.fn.hammer=function(e){return this.each(function(){n(this,e)})},l.default.Manager.prototype.emit=function(e){return function(t,a){e.call(this,t,a),(0,s.default)(this.element).trigger({type:t,gesture:a})}}(l.default.Manager.prototype.emit)},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=a(0),s=i(o);a(4);var u={init:function(e){var t={menuWidth:300,edge:"left",closeOnClick:!1,draggable:!0};e=s.default.extend(t,e),(0,s.default)(this).each(function(){var t=(0,s.default)(this),a=t.attr("data-activates"),i=(0,s.default)("#"+a);300!=e.menuWidth&&i.css("width",e.menuWidth);var n=(0,s.default)('.drag-target[data-sidenav="'+a+'"]');e.draggable?(n.length&&n.remove(),n=(0,s.default)('<div class="drag-target"></div>').attr("data-sidenav",a),(0,s.default)("body").append(n)):n=(0,s.default)(),"left"==e.edge?(i.css("transform","translateX(-100%)"),n.css({left:0})):(i.addClass("right-aligned").css("transform","translateX(100%)"),n.css({right:0})),i.hasClass("fixed")&&window.innerWidth>992&&i.css("transform","translateX(0)"),i.hasClass("fixed")&&(0,s.default)(window).resize(function(){window.innerWidth>992?0!==(0,s.default)("#sidenav-overlay").length&&l?o(!0):i.css("transform","translateX(0%)"):l===!1&&("left"===e.edge?i.css("transform","translateX(-100%)"):i.css("transform","translateX(100%)"))}),e.closeOnClick===!0&&i.on("click.itemclick","a:not(.collapsible-header)",function(){o()});var o=function(t){u=!1,l=!1,(0,s.default)("body").css({overflow:"",width:""}),(0,s.default)("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){(0,s.default)(this).remove()}}),"left"===e.edge?(n.css({width:"",right:"",left:"0"}),i.velocity({translateX:"-100%"},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){t===!0&&(i.removeAttr("style"),i.css("width",e.menuWidth))}})):(n.css({width:"",right:"0",left:""}),i.velocity({translateX:"100%"},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){t===!0&&(i.removeAttr("style"),i.css("width",e.menuWidth))}}))},u=!1,l=!1;e.draggable&&(n.on("click",function(){l&&o()}),n.hammer({prevent_default:!1}).bind("pan",function(t){if("touch"==t.gesture.pointerType){var a=t.gesture.center.x,n=(0,s.default)(document.body),u=(0,s.default)("#sidenav-overlay"),d=n.innerWidth();n.css("overflow","hidden"),n.width(d),0===u.length&&(u=(0,s.default)('<div id="sidenav-overlay"></div>'),u.css("opacity",0).click(function(){o()}),(0,s.default)("body").append(u)),"left"===e.edge&&(a>e.menuWidth?a=e.menuWidth:a<0&&(a=0)),"left"===e.edge&&(a<e.menuWidth/2?l=!1:a>=e.menuWidth/2&&(l=!0)),i.css("transform","translateX("+(a-e.menuWidth)+"px)")}else{x<window.innerWidth-e.menuWidth/2?l=!0:x>=window.innerWidth-e.menuWidth/2&&(l=!1);var r=x-e.menuWidth/2;r<0&&(r=0),i.css("transform","translateX("+r+"px)")}var c=void 0;"left"===e.edge?(c=x/e.menuWidth,$overlay.velocity({opacity:c},{duration:10,queue:!1,easing:"easeOutQuad"})):(c=Math.abs((x-window.innerWidth)/e.menuWidth),$overlay.velocity({opacity:c},{duration:10,queue:!1,easing:"easeOutQuad"}))}).bind("panend",function(t){if("touch"==t.gesture.pointerType){var a=(0,s.default)('<div id="sidenav-overlay"></div>'),o=t.gesture.velocityX,d=t.gesture.center.x,r=d-e.menuWidth,c=d-e.menuWidth/2;r>0&&(r=0),c<0&&(c=0),u=!1,"left"===e.edge?l&&o<=.3||o<-.5?(0!==r&&i.velocity({translateX:[0,r]},{duration:300,queue:!1,easing:"easeOutQuad"}),a.velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),n.css({width:"50%",right:0,left:""}),l=!0):(!l||o>.3)&&((0,s.default)("body").css({overflow:"",width:""}),i.velocity({translateX:[-1*e.menuWidth-10,r]},{duration:200,queue:!1,easing:"easeOutQuad"}),a.velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){(0,s.default)(this).remove()}}),n.css({width:"10px",right:"",left:0})):l&&o>=-.3||o>.5?(0!==c&&i.velocity({translateX:[0,c]},{duration:300,queue:!1,easing:"easeOutQuad"}),a.velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),n.css({width:"50%",right:"",left:0}),l=!0):(!l||o<-.3)&&((0,s.default)("body").css({overflow:"",width:""}),i.velocity({translateX:[e.menuWidth+10,c]},{duration:200,queue:!1,easing:"easeOutQuad"}),a.velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){(0,s.default)(this).remove()}}),n.css({width:"10px",right:0,left:""}))}})),t.off("click.sidenav").on("click.sidenav",function(){if(l===!0)l=!1,u=!1,o();else{var t=(0,s.default)("body"),a=(0,s.default)('<div id="sidenav-overlay"></div>'),d=t.innerWidth();t.css("overflow","hidden"),t.width(d),t.append(n),"left"===e.edge?(n.css({width:"50%",right:0,left:""}),i.velocity({translateX:[0,-1*e.menuWidth]},{duration:300,queue:!1,easing:"easeOutQuad"})):(n.css({width:"50%",right:"",left:0}),i.velocity({translateX:[0,e.menuWidth]},{duration:300,queue:!1,easing:"easeOutQuad"})),a.css("opacity",0).click(function(){l=!1,u=!1,o(),a.velocity({opacity:0},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){(0,s.default)(this).remove()}})}),t.append(a),a.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){l=!0,u=!1}})}return!1})})},destroy:function(){var e=(0,s.default)("#sidenav-overlay"),t=(0,s.default)('.drag-target[data-sidenav="'+(0,s.default)(this).attr("data-activates")+'"]');e.trigger("click"),t.remove(),(0,s.default)(this).off("click"),e.remove()},show:function(){this.trigger("click")},hide:function(){(0,s.default)("#sidenav-overlay").trigger("click")}};s.default.fn.sideNav=function(e){return u[e]?u[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!==("undefined"==typeof e?"undefined":n(e))&&e?void s.default.error("Method "+e+" does not exist on jQuery.sideNav"):u.init.apply(this,arguments)}},function(e,t){e.exports=Hammer},function(e,t){e.exports=Waves},function(e,t,a){e.exports=a(1)}]);
//# sourceMappingURL=app.js.map