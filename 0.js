webpackJsonp([0],{54:function(e,n,o){"use strict";navigator.serviceWorker.register("/2017/sw.js").then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){switch(n.state){case"installed":navigator.serviceWorker.controller?console.log("New or updated content is available."):console.log("Content is now available offline!");break;case"redundant":console.error("The installing service worker became redundant.");break;default:console.log("Current state: ",n.state)}}}}).catch(function(e){console.error("Error during service worker registration:",e)})}});
//# sourceMappingURL=0.js.map