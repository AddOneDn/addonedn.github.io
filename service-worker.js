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

var precacheConfig = [["/2017/04/20/addone/index.html","518363fc37e4c3e75ccb5b5d0129873b"],["/2017/04/20/gwyhArticle1/index.html","3918164d4a7af7ede9a4c85ffdb89b34"],["/2017/04/20/gwyhArticle2/index.html","120ff09f5590b97d626c2fdac5f6d143"],["/2017/04/20/gwyhArticle3/index.html","16ec43e846df00348d3e3706228d8c53"],["/2017/04/22/C-2016上机题/index.html","59bc8ee879aadb70ef78fa27e28acc63"],["/2017/04/22/css垂直居中/index.html","349802058db2a979eff602b418388fe9"],["/2018/01/03/2017自我总结/index.html","eff1daf4cc75d134aca754cadab415c2"],["/2018/03/13/React-Native实现NbaApp/index.html","c3906a78309cb0d98d1c5ffbabf982bb"],["/2018/03/13/React在线编辑简历/index.html","fdbed9e19b7fb3b9c193ea9e717ee188"],["/2018/03/13/微信小程序模仿网易云音乐/index.html","4bbb3044b67375a0669da6a1db738e78"],["/2018/03/14/CSS实现文字打字动画（-1白话讲解）/index.html","409418b5051fbaef5bc0c542c1f8ee62"],["/2018/03/14/一道简单面试题理解JS事件机制（-1白话讲解/index.html","db4f6079df60813a27e65264c955bb52"],["/2018/03/14/浏览器从输入URL到页面加载过程（-1白话精简讲解）/index.html","9e41c8b9909c983fc5a4e7d8dc7c9910"],["/2018/03/15/简单CSS实现闪烁动画（-1白话讲解）/index.html","7867c25648c5492ec98b09b5a7085aa8"],["/2018/03/16/React生命周期简明宝典/index.html","e1ec541a9c05056c7aeabb08ee77058b"],["/2018/03/18/HTTP状态码简明宝典/index.html","b0489eadf7a038675d484f90e2ffbd19"],["/2018/03/19/吐槽-学生把代码作业放到博客里有错么/index.html","5264fa77e0908600eb847be613509fb1"],["/2018/03/23/CSS人人都能写自定义Checkbox（-1白话讲解）/index.html","09e57a8ed074a08ae8d67fdec063d53b"],["/2018/03/24/纯前端实现gif制作/index.html","87169f18124e2d9c5dbec2a7fce6d042"],["/2018/03/25/Parcel上手与React开发环境搭建/index.html","25f9d90986369b53ab738c935033e90c"],["/2018/03/27/Canvas模仿草莓音乐节宣传视频/index.html","dfbbd689423e7015a67ce3bd5b452efb"],["/2018/03/27/和SetImmediate小姐那销魂的一夜情/index.html","7d9a9fc8b05ffd9768c395508cc49c75"],["/2018/03/28/Webpack配置讲解/index.html","411b4cc93450988004c80951cc44bac3"],["/2018/03/28/深入React知识点/index.html","f078ef86019784c8b0f0a659c1d3acee"],["/2018/04/03/一个前端开发者的自我折磨-UI/index.html","7a432b2d55eb714ca7b250062de822e7"],["/2018/04/07/微信小程序实现折叠展开菜单/index.html","37b55661548031d1c5bb9e933a001090"],["/2018/04/12/JavaScript设计模式/index.html","7cc660d8549cbc08eb3cd71da0c2f0d7"],["/2018/04/13/一次简单的搜狐电话面试/index.html","d20d8cbeca33c04c8f47e50b623b98f4"],["/2018/04/15/Git-Camp-简明Git入门-笔记记录/index.html","a6ed8f23f0a2b0cbb3ef46b05558e6f7"],["/2018/04/16/MVC-MVVM-MVP/index.html","b0d40f136f24c586c6aedb3719f9f19c"],["/2018/04/18/React源码阅读-1白话/index.html","cee22c4681a560aa2ff7542a8331bd25"],["/2018/04/22/自写一个react-like项目/index.html","49faee6516bf537babed21be931809c6"],["/2018/04/25/关于在mac上使用vscode编写markdown出现控制字符问题/index.html","54c196785d8bfa8bec3923274acd92c9"],["/2018/05/03/我在写微信小程序时的一些小技巧/index.html","ad3dd3dc28f5ee0f95d6d85ed5a95a5d"],["/2018/05/05/计算机组成-程序的转换及机器级表示/index.html","f36883097fed682630af245e28e4750c"],["/about/index.html","8e34835d549c9cc313cc0c5e56238fc7"],["/archives/2017/04/index.html","5c6a63b9e031ed3cbd9b198d948ab375"],["/archives/2017/index.html","6d66e8545fd082c25b06db9c6f742a66"],["/archives/2018/01/index.html","73b92c4fca8d3e486695a3c9b199a728"],["/archives/2018/03/index.html","14963db97f35d68f047bc6e8090a937c"],["/archives/2018/03/page/2/index.html","bf543c07be2536485fe94a65a06adcf2"],["/archives/2018/04/index.html","65effb5f6248abc4f50cb3a0d61548e0"],["/archives/2018/05/index.html","320c6690fca0ee4c72291e2cec0b4ac6"],["/archives/2018/index.html","4a969a7380a37c5646136010276af3f8"],["/archives/2018/page/2/index.html","5308c23322cc467246a0a49a7744f3dc"],["/archives/2018/page/3/index.html","028f2821d8fbc884a34e00cb2686cd20"],["/archives/index.html","a6ddcc326180dee4de1a3f376acd0f0e"],["/archives/page/2/index.html","29fb5ca0179560f9f54a30f26d8bcbaa"],["/archives/page/3/index.html","03f89ea5eed2242451bb031f21aacd3b"],["/archives/page/4/index.html","a2427946501ac1401acbdaadde0ed3d1"],["/categories/Bug/index.html","6455d92b7f74b9f643d84e90084f8f7c"],["/categories/C/index.html","f13b0d12a69e00e582b7cb37bb47fcdb"],["/categories/CSS/index.html","b98df56508abafb4000f05afe8652360"],["/categories/Canvas/index.html","ea2584fda6420bb484d791ff707a93b6"],["/categories/GIT/index.html","1d0bffeac344d85625fe82a31e652ff2"],["/categories/HTTP/index.html","9a7de052ddaf55468852a9e9a8d9f8d1"],["/categories/Javascript/index.html","532693455a34c4a28d1aca3fc2d88223"],["/categories/React/index.html","0fb849d4309bb9bab57a48ff4aa996e9"],["/categories/UI/index.html","4a3ad619477f35751abd2111c08547cb"],["/categories/Webpack/index.html","18e0ce878eb744aacbbb036bd8062b73"],["/categories/index.html","20eefda1cbac5ee1a6c878440526137b"],["/categories/关于我/index.html","93fd2f7dca8645d04dc07918bdb1f972"],["/categories/吐槽/index.html","91bf7a877a68ab880f1e75fe224ad821"],["/categories/微信小程序/UI/index.html","d6b9aa94c09ee873767af78233690695"],["/categories/微信小程序/index.html","4f25eb8253540f63660ec9b2668f2cd2"],["/categories/我爱的人/index.html","d968e19a3f612fe15946d99434e2b2e5"],["/categories/浏览器/index.html","86d3ffaceb879117d7be7ddb5d8be191"],["/categories/计算机组成原理/index.html","6ccf9544ed59cf1cc90314d2249db52e"],["/categories/设计模式/index.html","3d3097269f13a4adaccc1833483217e5"],["/categories/面试/index.html","973166e80fc6e1e2af7a3e486a97528d"],["/css/index.css","36ff887d49c3e17a77993f65eef2adc2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","ad539b67a0d60a7ec07af3bd1efb4893"],["/image/icon.png","08bbe941048aa814db7f4a803dfdf9fa"],["/image/icons/icon-128x128.png","cdc0f6116ff7959a040575e1997e2f1b"],["/image/icons/icon-144x144.png","cb7b23bf400ff70e572f933f0adceea1"],["/image/icons/icon-152x152.png","7dfcc63d3401db6c149c1d307011c4d7"],["/image/icons/icon-192x192.png","cbf563433e0d82e96aeeb02a30faeda7"],["/image/icons/icon-384x384.png","80e94dce0fa6e65c4cb348a83291233a"],["/image/icons/icon-512x512.png","8fa6d411e2cde7bebf3b3d14f81f5617"],["/image/icons/icon-72x72.png","1fbb6a95c00acd34451ad7a31d702586"],["/image/icons/icon-96x96.png","c6e771a46ef126eb2f7a926b8eb69299"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","17080a875d459083e007bef5c0a6b4c9"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["/js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/links/index.html","7c07692bdbd6239567835a06dfbac386"],["/page/2/index.html","106c13c24167f0a676557ae961c3df0e"],["/page/3/index.html","ad6fd2e59af85ebe4afd49cf8de141cc"],["/page/4/index.html","8a525a17d06716f1c41acf3d2111790d"],["/tags/Bug/index.html","b97bd72e6a195cfd1510879d8f11900a"],["/tags/C/index.html","a39eb149986016f17e32a03975cd3d43"],["/tags/CSS/index.html","b7fbfbc6cfefc701aeee1746b3f719f1"],["/tags/Canvas/index.html","11d087f4cc8a701082ec8b50419660d4"],["/tags/Git/index.html","066439de264250a11a51828c88911a15"],["/tags/HTML/index.html","930ebda4e29145c21f0bc660848908b4"],["/tags/HTTP/index.html","8bdfcfddaafe21dd604e61305a5d1fc8"],["/tags/JS/index.html","7706531683029baccfd1443106db3da1"],["/tags/JavaScript/index.html","6926c0a1f58990ff37714512e76c6e4b"],["/tags/Node-js/index.html","7619b75cfeeacb8c0123d26776316341"],["/tags/Parcel/index.html","bb0c5cec86eed1a2b4f80ae2f2ef9005"],["/tags/React-Native/index.html","8a56fe4b7a901051d634c2297862e8ab"],["/tags/React/index.html","20a34f19e522911c33e0c62006f371f9"],["/tags/UI/index.html","4fb37b763923f709e6575658e07d2f9f"],["/tags/Webpack/index.html","be2902f146b01287894bfb0e68230552"],["/tags/index.html","cf32d0c40ff7e793ce70724755f79c50"],["/tags/上机/index.html","5faf5e2dd8ce26217597108e7afcf9c3"],["/tags/习题/index.html","8f155d33d6216d343e89d2794c85b5e1"],["/tags/前端/index.html","89449bb1ba6ef00f46bd54cf69c8c11a"],["/tags/前端/page/2/index.html","f29d9e7c2e56268d1ac83c2c207c7bbd"],["/tags/前端/page/3/index.html","997ca34c56e78959dedf799616af760b"],["/tags/她/index.html","295a6fd43136743dfe22c177de415fc8"],["/tags/微信小程序/index.html","587c8f0a549b42ec701523e5e3ced952"],["/tags/我/index.html","448d9e5a1365e697660132a6d51781b5"],["/tags/浏览器/index.html","21b1c1a0a45829ec2c330e250710b8a0"],["/tags/源码/index.html","db9c4db2dde78d168c1bc18b803e694d"],["/tags/计算机/index.html","65c320d2de301afd9008d2a124a71129"],["/tags/设计模式/index.html","6bc64fac00fc37eeba7f9fdbc9032154"],["/tags/阅读/index.html","5507d6b0649182a4c5d0c7e69b9b4513"],["/tags/面试/index.html","6c746402b61de8cc29fdb974c18e4c3c"],["/timeline/index.html","cc4728ce9ff5d5cce7be96b0ba813e7f"]];
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







