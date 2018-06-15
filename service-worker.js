/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2017/04/20/addone/index.html","eeefd7bac0068017e5e1c78f23d5f98c"],["/2017/04/20/gwyhArticle1/index.html","4774fa5f063452352d18016b7a7ff6f7"],["/2017/04/20/gwyhArticle2/index.html","55a48708c0041c3aa745540e396a04ef"],["/2017/04/20/gwyhArticle3/index.html","7caa7c4d8bca5937c042e0c79a0a1a72"],["/2017/04/22/C-2016上机题/index.html","28e4a8f717c13c5857de27b04326058c"],["/2017/04/22/css垂直居中/index.html","06334a2cbf359bcd92ba3c9534f9de58"],["/2018/01/03/2017自我总结/index.html","ec1c7a231b7b308b0c201b744154f894"],["/2018/03/13/React-Native实现NbaApp/index.html","915c4b7a4931607326d136086b26c3f3"],["/2018/03/13/React在线编辑简历/index.html","3df064c2ce34a1eae027d205212ef040"],["/2018/03/13/微信小程序模仿网易云音乐/index.html","1d1315282e42223bbafc5f0dbdd7bb09"],["/2018/03/14/CSS实现文字打字动画（-1白话讲解）/index.html","ff1229cae1022b76281e5a3b7f0baf2e"],["/2018/03/14/一道简单面试题理解JS事件机制（-1白话讲解/index.html","2974dbcc9b356537606b5284bb1a9b95"],["/2018/03/14/浏览器从输入URL到页面加载过程（-1白话精简讲解）/index.html","270ebced68359b00b2a9adc18043057d"],["/2018/03/15/简单CSS实现闪烁动画（-1白话讲解）/index.html","1ee2ed5f67595b6e40812bf14a4915c8"],["/2018/03/16/React生命周期简明宝典/index.html","590894049800b30876812ae71cb01ec9"],["/2018/03/18/HTTP状态码简明宝典/index.html","f721fdd6f24bb2f54e0921ad4fb606a4"],["/2018/03/19/吐槽-学生把代码作业放到博客里有错么/index.html","0c1fa028dc71eab376fa99556f4d28e3"],["/2018/03/23/CSS人人都能写自定义Checkbox（-1白话讲解）/index.html","9223085b58246a84424674f38dd6c716"],["/2018/03/24/纯前端实现gif制作/index.html","dfd80c5d4d4334baba4b8566820542f0"],["/2018/03/25/Parcel上手与React开发环境搭建/index.html","c565260bb9dd4e78946bffa9af19aa87"],["/2018/03/27/Canvas模仿草莓音乐节宣传视频/index.html","84a423c9244976fb96a9452a92440aaa"],["/2018/03/27/和SetImmediate小姐那销魂的一夜情/index.html","ec0ff60db66baad765b667f4c49fe1c5"],["/2018/03/28/Webpack配置讲解/index.html","7c96cccee6df3b5c0b7a075b74460c81"],["/2018/03/28/深入React知识点/index.html","5acfd890cd81811c87aa1c7ada740267"],["/2018/04/03/一个前端开发者的自我折磨-UI/index.html","6b010d39154968dcb5b4fa1a3caa2792"],["/2018/04/07/微信小程序实现折叠展开菜单/index.html","1eda7366a792912c31210dc800c885bc"],["/2018/04/12/JavaScript设计模式/index.html","c0eda2ce007c311145f1ae545fd483cc"],["/2018/04/13/一次简单的搜狐电话面试/index.html","1f3ee421f4de70c0c57a9d6dc5ce88fd"],["/2018/04/15/Git-Camp-简明Git入门-笔记记录/index.html","200f876d7c298736ac379c8a5bee0a94"],["/2018/04/16/MVC-MVVM-MVP/index.html","7c02c6d4454d5a247dc78c11740fdd76"],["/2018/04/18/React源码阅读-1白话/index.html","2fd0f2e773e14e9b43ec4a2d627e069f"],["/2018/04/22/自写一个react-like项目/index.html","13cb553f4dec67b2da615e3e96d0f60b"],["/2018/04/25/关于在mac上使用vscode编写markdown出现控制字符问题/index.html","466b98830a5f6e1802042d2c98782c9f"],["/2018/05/03/我在写微信小程序时的一些小技巧/index.html","a018cbb05180ad9f383e7f2ea2bde5d7"],["/2018/05/05/计算机组成-程序的转换及机器级表示/index.html","026e63750c8684e919a96fca2e246ac0"],["/2018/05/06/ICS2017-Programming-Assignment-2-2-2-3/index.html","2823e8ebf54f1196b6a453d1bec7cf1e"],["/2018/05/06/从“零”开始-：Spring-MVC/index.html","9bedfa49a922e509b4fc127913a74c81"],["/2018/05/06/前端开发者如何快速的把UI撸出来-讽刺版/index.html","a97aa1fee87edc10fdea4dd6bf63038a"],["/2018/05/07/你需要知道的JS高级技巧/index.html","3eb07f4688f79dc410d3ef0d695ca53f"],["/2018/05/15/create-react-app的webpack配置阅读/index.html","5d2ddb21b4dbca4ae713ec33ebfe5a59"],["/2018/05/31/大二杭州有赞前端电话面试/index.html","e2a3f72e58b8de68f4465771a7115a6c"],["/2018/06/04/一些感想/index.html","0a3a7c50985557c8413596b66a44012d"],["/2018/06/07/Js技术题自写/index.html","a9d31f5d9b2763f0aec232fc25acc8cf"],["/2018/06/08/关于页面切换后setInterval出现延时问题/index.html","5125c6703b452d6d8f6d181cf435b3ef"],["/2018/06/15/软件杯H5端-视频尬舞机-开发记录/index.html","2947e81aa695486754be54334e3e9fa8"],["/about/index.html","78685acdda8e664ef64ac77df5cd6564"],["/archives/2017/04/index.html","5b5b4fe478a9d65af6040e1d5da708b4"],["/archives/2017/index.html","f2dbe9ef66559e79e25dc35a22a45ec7"],["/archives/2018/01/index.html","154f9149e1714df6da4ea5877c5f3d1f"],["/archives/2018/03/index.html","13a5e8ac1ed4c36745aa009ffb5b44a2"],["/archives/2018/03/page/2/index.html","79a21668ea6c8aa524f07ed045790dcd"],["/archives/2018/04/index.html","c619ad73396be1a5cb4f0f376ca89abe"],["/archives/2018/05/index.html","dd20a68f57eacda54f49a1de2a682c3b"],["/archives/2018/06/index.html","32c1d2d2df89d9cc846ceab9464a10ae"],["/archives/2018/index.html","e8866c71a4e3d6cf01c8b941dd5223d0"],["/archives/2018/page/2/index.html","11d4ba1ffbf57866b6145f1d895df07c"],["/archives/2018/page/3/index.html","342ed32bb4038e823e1ced50f5fe7588"],["/archives/2018/page/4/index.html","1627fe8b941af00e50e6d111fe66ee5a"],["/archives/index.html","d5593a3b2c885b52ec163e8c8ed60242"],["/archives/page/2/index.html","a06ce8c3bb3c49895e4ba93387e8f9bf"],["/archives/page/3/index.html","fc825346172194177adb0b7a0f642225"],["/archives/page/4/index.html","62d23697dc6ee23a83493da4155a29a5"],["/archives/page/5/index.html","e37ea276a8c4f81d860c097575838cb9"],["/categories/Bug/index.html","b54ed6d9001f10b168657960880cc7ff"],["/categories/C/index.html","26c1b16900b486dbd2ee8e6d4c1d988c"],["/categories/CSS/index.html","d732c6c99a91317397c08bf4fcb5bc1d"],["/categories/Canvas/index.html","bee6f23ab6d7dadbe627e2c2de833b98"],["/categories/GIT/index.html","c6af4ca656beb2c5a72887b325b554fa"],["/categories/HTTP/index.html","463d1b0622e3b993990120fd9fb2d940"],["/categories/Javascript/index.html","8382727578723941097139ff394c61f3"],["/categories/React/index.html","64ec30b4633f55c75f3b1232e124fb3e"],["/categories/UI/index.html","f24b405b5b94c6623afb8935799620f5"],["/categories/Webpack/index.html","169974d9a3d0f46c8faf6493dc6dfd66"],["/categories/index.html","9792dfac8c9f28b6fba096186dca2795"],["/categories/关于我/index.html","345c8a23368f29e095294949b2cc4a4e"],["/categories/吐槽/index.html","ef99dde38b8209756dfc0f27d7eb50b0"],["/categories/微信小程序/UI/index.html","00c846e50129733637180fd9646ad9b6"],["/categories/微信小程序/index.html","8263676ce0e8a1301d4242838391254f"],["/categories/我爱的人/index.html","31d371e0b51b9c97746e359f575e5920"],["/categories/浏览器/index.html","f615e1d1d25d72371c9d5e8a244be58c"],["/categories/计算机组成原理/index.html","3234f32233c392dfb2c63a7808a6a42e"],["/categories/设计模式/index.html","acba2ace93e9e8c3ab27aa153e24f63e"],["/categories/阅读/index.html","291302ae99cf777b885b5a42ded1c7e8"],["/categories/面试/index.html","95a44defd13d0f667f410331c5421393"],["/css/index.css","36ff887d49c3e17a77993f65eef2adc2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","8ce7156413e406a4bca9d502ffb43564"],["/image/icon.png","08bbe941048aa814db7f4a803dfdf9fa"],["/image/icons/icon-128x128.png","cdc0f6116ff7959a040575e1997e2f1b"],["/image/icons/icon-144x144.png","cb7b23bf400ff70e572f933f0adceea1"],["/image/icons/icon-152x152.png","7dfcc63d3401db6c149c1d307011c4d7"],["/image/icons/icon-192x192.png","cbf563433e0d82e96aeeb02a30faeda7"],["/image/icons/icon-384x384.png","80e94dce0fa6e65c4cb348a83291233a"],["/image/icons/icon-512x512.png","8fa6d411e2cde7bebf3b3d14f81f5617"],["/image/icons/icon-72x72.png","1fbb6a95c00acd34451ad7a31d702586"],["/image/icons/icon-96x96.png","c6e771a46ef126eb2f7a926b8eb69299"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","7fcbb82de1f411170a557f05fcaf62ce"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["/js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/links/index.html","8673d3b2724d11633a89ba22d6eeaff3"],["/page/2/index.html","647f503ca630732fda32564351b90dfd"],["/page/3/index.html","6ac2763a0d16d7103388d85ce83cc8f7"],["/page/4/index.html","c1fb1d9b67b2a8b0475bece642a0721f"],["/page/5/index.html","b40844f7a1c369a75f5dc1c3b8378703"],["/tags/Bug/index.html","73ee915a8c9b4c29ef5080aa53680190"],["/tags/C/index.html","e992a20cafe208ba692b83ba36b261c3"],["/tags/CSS/index.html","369bc822fcb8fd846045e871b58de7ce"],["/tags/Canvas/index.html","851c4e837333d3eed9d3dfb9e27df28b"],["/tags/Git/index.html","bee3989f8190b2fe0749452fc54c4c77"],["/tags/HTML/index.html","3bf5bd46ad1ac20448d6e77dd9290d40"],["/tags/HTTP/index.html","a34d78912eb64a7ee57115dfa4c75ad9"],["/tags/JS/index.html","e12972b7804240f588efc9a533c0deb1"],["/tags/Javascript/index.html","c1b0fa98fca19b9b4d253348681f21a3"],["/tags/Node-js/index.html","b253b5b281e7999fe743b482107a6a7e"],["/tags/Parcel/index.html","9183e5412cdfde976a475b052a3d6d00"],["/tags/React-Native/index.html","e92b85b9257e2f19410ffc1fca153a8e"],["/tags/React/index.html","603fd5496c6d8a25355b17344e9d281d"],["/tags/UI/index.html","77823919f53327268bb8d0ce5491d9d7"],["/tags/index.html","33c23331416ac9a79edc9b34047e6767"],["/tags/webpack/index.html","ffc4c5224c25375ecc4b80ca31287eea"],["/tags/上机/index.html","55887ebf400cd075fb8ec04787678ed4"],["/tags/前端/index.html","930d7105eeae983ddf89bb53ba948724"],["/tags/前端/page/2/index.html","fa4e8989af214985c33b7a2a80b0f8fe"],["/tags/前端/page/3/index.html","b34fa98761b0f8e6bb48278943d3add3"],["/tags/她/index.html","ba37de8d463038b438805af3541d6eb1"],["/tags/学习/index.html","ef984bcc0a4c6b795c356c068946ec51"],["/tags/微信小程序/index.html","f4c09299cfc489ce9d1f13d8bef9b91a"],["/tags/我/index.html","91b74ad06ba9cd78fd266df9dca5bcdc"],["/tags/浏览器/index.html","b92de667946cdb678100118b7e18eec4"],["/tags/源码/index.html","079719da39e1dae2304a8405bff1e79a"],["/tags/计算机/index.html","209b5f228faeb2acce08a931784befb5"],["/tags/设计模式/index.html","cf781421022fac2cf104759a82d3ed1e"],["/tags/阅读/index.html","72e4e5ea5dd56ca9243ee53be13deea9"],["/tags/面试/index.html","0bc950379e070f2eae859934b82351da"],["/timeline/index.html","347a2385aaf5086556b42931e14fe07b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







