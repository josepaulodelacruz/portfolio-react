"use strict";var precacheConfig=[["/portfolio-react/index.html","41c30e809833a34c33c2c88ad5a948f2"],["/portfolio-react/static/css/main.191cd64f.css","d7c173bb3367cffd97368f505bae61ea"],["/portfolio-react/static/js/main.33dea6d6.js","be35c72cc79b993e2adaad6fb7631cf2"],["/portfolio-react/static/media/avatar.ea7b4a57.png","ea7b4a57df7e3694f1f94aa6f769eef7"],["/portfolio-react/static/media/back.e1f93f94.jpeg","e1f93f9489bf764afcb7a8fa2cf88bdb"],["/portfolio-react/static/media/background.9b5e292b.jpg","9b5e292b9d73dfda61357ec9c4a35e83"],["/portfolio-react/static/media/banner.41300629.jpg","413006297b377b67a83983b8fb987af2"],["/portfolio-react/static/media/front1.fc2e9a04.jpg","fc2e9a04c04fe1d05afb03670105a160"],["/portfolio-react/static/media/low.f2585ed8.jpg","f2585ed8d987afe53ebf4e9d02b7e57c"],["/portfolio-react/static/media/me.73490aa9.jpg","73490aa993e5728647a808a86abc1bee"],["/portfolio-react/static/media/picture1.dcefa935.JPG","dcefa9356138b1cea9b5ede1d0125807"],["/portfolio-react/static/media/wacky.3892489a.jpg","3892489a2c110d00362b886e6c60bdaa"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/portfolio-react/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});