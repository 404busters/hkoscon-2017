"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/about/coc.html","4876c8eb6677fb507aa2e065cd4328f9"],["/about/index.html","c548b756ac8e8864ef737ede5fa66367"],["/about/patron-programme.html","56e8be3c1f48976226fdcdaaf0ae2daf"],["/about/staff.html","66d0037b294858308b49c07a6fe7c32a"],["/app.css","0dd4794bdde6cc7ce10579f1cdf6049b"],["/app.css.map","5637b1c77557c933f14151e3061b0476"],["/cfp/index.html","38f5987344ee8962fc0ec167ad684a82"],["/images/bg1.jpg","b9ec5cf2925a43b8fadd55cbd4652d2b"],["/images/bg2.jpg","1609085b51459608fd8944708779c3e1"],["/images/favicon.ico","c7477521f22b8aed47333a05a5ca284c"],["/images/favicon.png","4634634056d4299d4f1a856d4e52e500"],["/images/logo.png","168a776b82932273d18e00bed299021d"],["/images/page-cfp-results-theme.jpg","13cb3377ba86beed0311a3dd0e998ca8"],["/images/theme-business-day.jpg","13cb3377ba86beed0311a3dd0e998ca8"],["/images/theme-community-day.jpg","3fb5d6a221acc9b5d40188dc02636e6a"],["/index.html","562530f37a6cbac17b2c90d40c8f8626"],["/sponsor/index.html","71291d7b35e170f9e4e90fea385eca7a"],["/topics/1000-days-of-mozilla-community-space-in-taipei/index.html","808a91b1ba6a9cf78dde2972af455c95"],["/topics/PIME/index.html","036924a2ed822905a7b431352e59fdea"],["/topics/a-security-state-of-mind-continuous-security-for-devops-with-kubernetes/index.html","e76b2048aa1a6878e2ba15078075fe86"],["/topics/a-war-of-file-format-why-we-select-odf-in-taiwan/index.html","e586e04ec1ca15221ea4f9ef5a18bd48"],["/topics/aws-cloud-lab/index.html","09a1888be885e58b5c678bd28b5f20c8"],["/topics/blender-interface-and-3d-cgi-concepts/index.html","96e172c16648174de4c44963851da274"],["/topics/building-a-career-in-open-source/index.html","ff0254d0c50f973c722b9b5b9ae0b40f"],["/topics/building-artificial-intelligence-units-in-rust/index.html","78dc6c313a052271691f8aefb8b91fc9"],["/topics/building-web-app-with-open-source-serverless-technology/index.html","3109bd55144e234c99456416aeb8bdbd"],["/topics/data-in-elasticsearch-out/index.html","9edc367cd44e523d2619d015afc322e3"],["/topics/ezgo-for-hk/index.html","bb1be5319d18877a3db1d3762956ffd1"],["/topics/free-hong-kong-font/index.html","eced677222ba360b94fff0fef2e89fad"],["/topics/getting-into-the-virtual-world-with-web-vr/index.html","b34f1564398f4a37a234a95ea2bb550e"],["/topics/harnessing-social-media-with-r/index.html","7aaffb13f9700fabe6eefe9780d5a5fd"],["/topics/javascript-fuzzling-in-mozilla-2017/index.html","e6942e9cae758a78cd7d6adf6daf95a2"],["/topics/lets-rust-system-programming-is-awesome-again/index.html","172a625458e8b3ac507b921437a839b0"],["/topics/libreoffice-impress/index.html","3cbbed05d387d289b0d295a9ac8142c1"],["/topics/live-dns-new-gTLD/index.html","520567144ca7fc137495d5975ee5a618"],["/topics/msgchi/index.html","a0a42cb407a1923ee257bbdb76319c75"],["/topics/mysql-group-replication/index.html","ee58e5349adc9bdf9af3782db87b715f"],["/topics/one-year-of-rust-microkernel-development/index.html","0851ee0c97eb0b5d5200de7addf017d4"],["/topics/open-cv-in-raspberry-pi-with-camera/index.html","279473458baa8dd1da1ab429d1b56c96"],["/topics/pentest-fun-with-metasploit-framework-ii/index.html","aa96ee103f2499b19fa989c6b7e72919"],["/topics/preparing-for-the-app-ocalypse-the-web-in-the-age-of-physical-computing/index.html","ce0ee4b4d8e3f92c0d9c34099e1576b4"],["/topics/reproducible-builds-fulfilling-the-original-promise-of-free-software/index.html","cc783682b1d1f72cdc4846bcfb8bd5b5"],["/topics/this-year-in-rstats/index.html","d19d993ddc3d258ad1a65f491388661f"],["/topics/tips-in-setting-up-openstack-from-scratch/index.html","bbcee8fb169fc2ba1b9a948d362455be"],["/topics/use-sqlite-for-simple-data-analysis/index.html","6e794dcdbc03e5c34c39a7852eee4f0c"],["/topics/whats-new-in-mysql-8.0/index.html","0583a86433294bf986dcf61c8914d141"],["/topics/why-bash/index.html","723b03cf17b8e3b068b644c0cd7967df"],["/topics/zmq-multiplex-between-golang-coroutine-and-python-thread/index.html","398290ceb08abbfe81de6b5b082d9a33"]],cacheName="sw-precache-v3-HKOSCon-2017-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var o=new URL(e);return r&&o.pathname.match(r)||(o.search+=(o.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),o.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),o=createCacheKey(r,hashParamName,n,!1);return[r.toString(),o]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function e(t,n,r){function o(i,c){if(!n[i]){if(!t[i]){var s="function"==typeof require&&require;if(!c&&s)return s(i,!0);if(a)return a(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[i]={exports:{}};t[i][0].call(f.exports,function(e){var n=t[i][1][e];return o(n||e)},f,f.exports,e,t,n,r)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){function r(e,t){((t=t||{}).debug||m.debug)&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function a(e,t){var n=(t=t||{}).successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&i(e,n,r)})}),r.clone()})}function i(e,t,n){var r=c.bind(null,e,t,n);d=d?d.then(r):r()}function c(e,t,n){var o=e.url,a=n.maxAgeSeconds,i=n.maxEntries,c=n.name,s=Date.now();return r("Updating LRU order for "+o+". Max entries is "+i+", max age is "+a),g.getDb(c).then(function(e){return g.setTimestampForUrl(e,o,s)}).then(function(e){return g.expireEntries(e,i,a,s)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function s(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||l(e),m.preCacheItems=m.preCacheItems.concat(e)}function l(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function p(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r&&new Date(r).getTime()+1e3*t<n)return!1}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:a,openCache:o,renameCache:s,cache:u,uncache:f,precache:h,validatePrecacheInput:l,isResponseFresh:p}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){r.result.createObjectStore(h,{keyPath:l}).createIndex(p,p,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function a(e,t,n){return new Promise(function(r,o){var a=e.transaction(h,"readwrite");a.objectStore(h).put({url:t,timestamp:n}),a.oncomplete=function(){r(e)},a.onabort=function(){o(a.error)}})}function i(e,t,n){return t?new Promise(function(r,o){var a=1e3*t,i=[],c=e.transaction(h,"readwrite"),s=c.objectStore(h);s.index(p).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-a>t.value[p]){var r=t.value[l];i.push(r),s.delete(r),t.continue()}},c.oncomplete=function(){r(i)},c.onabort=o}):Promise.resolve([])}function c(e,t){return t?new Promise(function(n,r){var o=[],a=e.transaction(h,"readwrite"),i=a.objectStore(h),c=i.index(p),s=c.count();c.count().onsuccess=function(){var e=s.result;e>t&&(c.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var a=r.value[l];o.push(a),i.delete(a),e-o.length>t&&r.continue()}})},a.oncomplete=function(){n(o)},a.onabort=r}):Promise.resolve([])}function s(e,t,n,r){return i(e,n,r).then(function(n){return c(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",l="url",p="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:a,expireEntries:s}},{}],3:[function(e,t,n){function r(e){var t=s.match(e.request);t?e.respondWith(t(e.request)):s.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(s.default(e.request))}function o(e){c.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(c.renameCache(t,u.cache.name))}function a(e){return e.reduce(function(e,t){return e.concat(t)},[])}function i(e){var t=u.cache.name+"$$$inactive$$$";c.debug("install event fired"),c.debug("creating cache ["+t+"]"),e.waitUntil(c.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(a).then(c.validatePrecacheInput).then(function(t){return c.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var c=e("./helpers"),s=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:i}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var r=new URL("./",self.location).pathname,o=e("path-to-regexp"),a=function(e,t,n,a){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=r+t),this.keys=[],this.regexp=o(t,this.keys)),this.method=e,this.options=a,this.handler=n};a.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=a},{"path-to-regexp":15}],6:[function(e,t,n){function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),a=e("./helpers"),i=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;)new RegExp(r.value[0]).test(t)&&o.push(r.value[1]),r=n.next();return o},c=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){c.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),c.prototype.add=function(e,t,n,i){i=i||{};var c;t instanceof RegExp?c=RegExp:(c=i.origin||self.location.origin,c=c instanceof RegExp?c.source:r(c)),e=e.toLowerCase();var s=new o(e,t,n,i);this.routes.has(c)||this.routes.set(c,new Map);var u=this.routes.get(c);u.has(e)||u.set(e,new Map);var f=u.get(e),h=s.regexp||s.fullUrlRegExp;f.has(h.source)&&a.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,s)},c.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,i(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},c.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],a=o&&o.get(e.toLowerCase());if(a){var c=i(a,n);if(c.length>0)return c[0].makeHandler(n)}}return null},c.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new c},{"./helpers":1,"./route":5}],7:[function(e,t,n){function r(e,t,n){return n=n||{},a.debug("Strategy: cache first ["+e.url+"]",n),a.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,i=Date.now();return a.isResponseFresh(t,r.maxAgeSeconds,i)?t:a.fetchAndCache(e,n)})})}var o=e("../options"),a=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){function r(e,t,n){return n=n||{},a.debug("Strategy: cache only ["+e.url+"]",n),a.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(a.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),a=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,i){var c=!1,s=[],u=function(e){s.push(e.toString()),c?i(new Error('Both cache and network failed: "'+s.join('", "')+'"')):c=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),a(e,t,n).then(f,u)})}var o=e("../helpers"),a=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){function r(e,t,n){var r=(n=n||{}).successResponses||o.successResponses,i=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return a.debug("Strategy: network first ["+e.url+"]",n),a.openCache(n).then(function(t){var c,s,u=[];if(i){var f=new Promise(function(r){c=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,i=Date.now(),c=t.maxAgeSeconds;a.isResponseFresh(e,c,i)&&r(e)})},1e3*i)});u.push(f)}var h=a.fetchAndCache(e,n).then(function(e){if(c&&clearTimeout(c),r.test(e.status))return e;throw a.debug("Response was an HTTP error: "+e.statusText,n),s=e,new Error("Bad response")}).catch(function(r){return a.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(s)return s;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),a=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),o=e("./router"),a=e("./helpers"),i=e("./strategies"),c=e("./listeners");a.debug("Service Worker Toolbox is loading"),self.addEventListener("install",c.installListener),self.addEventListener("activate",c.activateListener),self.addEventListener("fetch",c.fetchListener),t.exports={networkOnly:i.networkOnly,networkFirst:i.networkFirst,cacheOnly:i.cacheOnly,cacheFirst:i.cacheFirst,fastest:i.fastest,router:o,options:r,cache:a.cache,uncache:a.uncache,precache:a.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,a=0,i="",c=t&&t.delimiter||"/";null!=(n=v.exec(e));){var f=n[0],h=n[1],l=n.index;if(i+=e.slice(a,l),a=l+f.length,h)i+=h[1];else{var p=e[a],d=n[2],m=n[3],g=n[4],b=n[5],x=n[6],w=n[7];i&&(r.push(i),i="");var y=null!=d&&null!=p&&p!==d,E="+"===x||"*"===x,R="?"===x||"*"===x,C=n[2]||c,k=g||b;r.push({name:m||o++,prefix:d||"",delimiter:C,optional:R,repeat:E,partial:y,asterisk:!!w,pattern:k?u(k):w?".*":"[^"+s(C)+"]+?"})}}return a<e.length&&(i+=e.substr(a)),i&&r.push(i),r}function o(e,t){return c(r(e,t))}function a(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function i(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",c=n||{},s=(r||{}).pretty?a:encodeURIComponent,u=0;u<e.length;u++){var f=e[u];if("string"!=typeof f){var h,l=c[f.name];if(null==l){if(f.optional){f.partial&&(o+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(b(l)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var p=0;p<l.length;p++){if(h=s(l[p]),!t[u].test(h))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(h)+"`");o+=(0===p?f.prefix:f.delimiter)+h}}else{if(h=f.asterisk?i(l):s(l),!t[u].test(h))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+h+'"');o+=f.prefix+h}}else o+=f}return o}}function s(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function l(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function p(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);return f(new RegExp("(?:"+r.join("|")+")",h(n)),t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){b(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,a="",i=0;i<e.length;i++){var c=e[i];if("string"==typeof c)a+=s(c);else{var u=s(c.prefix),l="(?:"+c.pattern+")";t.push(c),c.repeat&&(l+="(?:"+u+l+")*"),a+=l=c.optional?c.partial?u+"("+l+")?":"(?:"+u+"("+l+"))?":u+"("+l+")"}}var p=s(n.delimiter||"/"),d=a.slice(-p.length)===p;return r||(a=(d?a.slice(0,-p.length):a)+"(?:"+p+"(?=$))?"),a+=o?"$":r&&d?"":"(?="+p+"|$)",f(new RegExp("^"+a,h(n)),t)}function g(e,t,n){return b(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?l(e,t):b(e)?p(e,t,n):d(e,t,n)}var b=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=c,t.exports.tokensToRegExp=m;var v=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get(/2017/,toolbox.fastest,{});