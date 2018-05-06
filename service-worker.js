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

var precacheConfig = [["/2017/04/20/addone/index.html","0496bf34585f29a5c79ca21e4f64615a"],["/2017/04/20/gwyhArticle1/index.html","f5002156ec96f51407559392febb8e2d"],["/2017/04/20/gwyhArticle2/index.html","20547f9128c37cf8c64d92be3e8fc693"],["/2017/04/20/gwyhArticle3/index.html","0102f16c484b21cfc010a76fa95f449d"],["/2017/04/22/C-2016上机题/index.html","c9b4f909de31e19aa3aadd1d0a5d71a7"],["/2017/04/22/css垂直居中/index.html","96fc4c0496acfdc966879bc126721c0a"],["/2018/01/03/2017自我总结/index.html","512e5ef4cee6e7df7ec79d92d6c3957b"],["/2018/03/13/React-Native实现NbaApp/index.html","b0ad6a6855fa87c4c77a47910422a79a"],["/2018/03/13/React在线编辑简历/index.html","bc9b222bb6f2a4c838eaaab09770a93d"],["/2018/03/13/微信小程序模仿网易云音乐/index.html","4c93c72abf99c87c22fcdcce7be63672"],["/2018/03/14/CSS实现文字打字动画（-1白话讲解）/index.html","9980ad6f44e2401798f9e48212dde945"],["/2018/03/14/一道简单面试题理解JS事件机制（-1白话讲解/index.html","4ec727a21052188adb52767def1677dd"],["/2018/03/14/浏览器从输入URL到页面加载过程（-1白话精简讲解）/index.html","e69c0ace75e81ed72b4740fbebed65f2"],["/2018/03/15/简单CSS实现闪烁动画（-1白话讲解）/index.html","acd9e5689beb0f61a6e2a1418d9eac48"],["/2018/03/16/React生命周期简明宝典/index.html","9e798c9123aa49df8b02a69e0d163918"],["/2018/03/18/HTTP状态码简明宝典/index.html","4c6712d9cb48b16690e9f5403bbb314c"],["/2018/03/19/吐槽-学生把代码作业放到博客里有错么/index.html","17a03ee6376b04208a114a90d197b9aa"],["/2018/03/23/CSS人人都能写自定义Checkbox（-1白话讲解）/index.html","10a127e9d62a4235620054caeffa5944"],["/2018/03/24/纯前端实现gif制作/index.html","ae193898270bb5203c47c95cc46dd2a1"],["/2018/03/25/Parcel上手与React开发环境搭建/index.html","875506aa633f59accb791c631d1894bd"],["/2018/03/27/Canvas模仿草莓音乐节宣传视频/index.html","17fd4c622118b368b401a55a41e6944d"],["/2018/03/27/和SetImmediate小姐那销魂的一夜情/index.html","a78ea8cf29de527fac6c1f1ad879965a"],["/2018/03/28/Webpack配置讲解/index.html","61b3412313f9063df325f2c41b7f01da"],["/2018/03/28/深入React知识点/index.html","6e1463316fd606d4c16dd7f538234a13"],["/2018/04/03/一个前端开发者的自我折磨-UI/index.html","d21711222b1c8c3ffa5cb5c2ac8a34f4"],["/2018/04/07/微信小程序实现折叠展开菜单/index.html","231a8ecef8935f862423aeffbb3741c4"],["/2018/04/12/JavaScript设计模式/index.html","c8682c74618e92c5d42e1c0c00716752"],["/2018/04/13/一次简单的搜狐电话面试/index.html","c97a4e845de5e55e8c9b79e928957bbd"],["/2018/04/15/Git-Camp-简明Git入门-笔记记录/index.html","be3d36498010251e9effe9055f798949"],["/2018/04/16/MVC-MVVM-MVP/index.html","2ff16fb1761680fd3854ad0756816a7d"],["/2018/04/18/React源码阅读-1白话/index.html","65b7aa0f6b7f97bc86222570d3dabb18"],["/2018/04/22/自写一个react-like项目/index.html","3675a595cb6ec06654e625d8b3da62a2"],["/2018/04/25/关于在mac上使用vscode编写markdown出现控制字符问题/index.html","f726e7eee3f698dc2af56573fd14f445"],["/2018/05/03/我在写微信小程序时的一些小技巧/index.html","a5adebbab6cc51c615ae749eac75a01c"],["/2018/05/05/计算机组成-程序的转换及机器级表示/index.html","b6c19f831d0348f16297771803d78d63"],["/2018/05/06/ICS2017-Programming-Assignment-2-2-2-3/index.html","f6f01e3ced7b1483493fb6301d8b4de3"],["/2018/05/06/从“零”开始-：Spring-MVC/index.html","e57f5d9aa8865942dd2d152ee7249ff9"],["/about/index.html","c478255844a31466ae42f8cd3cc01c3c"],["/archives/2017/04/index.html","a23634c55d5e7672b1354ff4dd0b3403"],["/archives/2017/index.html","8795942bc7e1cda6732e3720013a2070"],["/archives/2018/01/index.html","5dd35d4ca0e20a5b8fd0a6fef9c136f4"],["/archives/2018/03/index.html","7216441ef05e01d619177420bedb3117"],["/archives/2018/03/page/2/index.html","f715de09c16502a88dc0937f754cf5ab"],["/archives/2018/04/index.html","a0143595d93a8afd296f120152d0278b"],["/archives/2018/05/index.html","2ffc2a14d0c9a4346bd808c4d2f6edcd"],["/archives/2018/index.html","7a7c59f087fdb019c663f44a6489f873"],["/archives/2018/page/2/index.html","d89820a627d28109a3b66497507f65b6"],["/archives/2018/page/3/index.html","73da3dda846e39d3d1bf93308befee9c"],["/archives/2018/page/4/index.html","aef470bd212ae33034480e89e92399bf"],["/archives/index.html","d2f3284a2a3407eaed10b6b54fdd9f21"],["/archives/page/2/index.html","3cf756a6fbaaa3425fec99344b3e600b"],["/archives/page/3/index.html","54fe24791f374c613b93acdfcaef9121"],["/archives/page/4/index.html","6d3810d78042d441f412706000dee008"],["/categories/Bug/index.html","e750b7ca99bccc25442ac56fb139cc06"],["/categories/C/index.html","172956643b02c60af087aee6fac8ffa7"],["/categories/CSS/index.html","81d21fbd34e5dc970afb4aecfd38212d"],["/categories/Canvas/index.html","72e80178d9a422d224f1f372849ed27c"],["/categories/GIT/index.html","4c78c1dc1aef37bcda987d1ba1b559e6"],["/categories/HTTP/index.html","76f6e215740634fe8e332e03aee5458d"],["/categories/Javascript/index.html","e09fd0eaa0af968fff88dbba9dd6eda2"],["/categories/React/index.html","b9c4ace9d212f4e9c20ddac9d4a3b024"],["/categories/UI/index.html","41046fa95bedf6bc21569fbc11da6a13"],["/categories/Webpack/index.html","65479ca5b18529ad53450957fc4be209"],["/categories/index.html","402d982faec230d11a4e0f4a2a80bd5b"],["/categories/关于我/index.html","51f3b50da0a4e44f057634636b34847f"],["/categories/吐槽/index.html","6223e3b1ace66f19cdeb054ca12e8802"],["/categories/微信小程序/UI/index.html","e9bde7bcc88dc0be71870617dc01c04b"],["/categories/微信小程序/index.html","b6bed886b2d0638d097d9f3bc61a2196"],["/categories/我爱的人/index.html","6d2062ed5df02a679b1c6352cf24974b"],["/categories/浏览器/index.html","ba8b80a01a04d1c080bc5a908e6803b3"],["/categories/计算机组成原理/index.html","d45d9a99f1014de1177b116970fd7d15"],["/categories/设计模式/index.html","4e195240bdce20b2aae4d01f29aff103"],["/categories/面试/index.html","ccef492529099c7a47ee07c1234ed5ff"],["/css/index.css","048c62123fccd97e515e98cb0a74fb3a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","ebf358ade5605ff6ec02f16490a899f7"],["/image/icon.png","08bbe941048aa814db7f4a803dfdf9fa"],["/image/icons/icon-128x128.png","cdc0f6116ff7959a040575e1997e2f1b"],["/image/icons/icon-144x144.png","cb7b23bf400ff70e572f933f0adceea1"],["/image/icons/icon-152x152.png","7dfcc63d3401db6c149c1d307011c4d7"],["/image/icons/icon-192x192.png","cbf563433e0d82e96aeeb02a30faeda7"],["/image/icons/icon-384x384.png","80e94dce0fa6e65c4cb348a83291233a"],["/image/icons/icon-512x512.png","8fa6d411e2cde7bebf3b3d14f81f5617"],["/image/icons/icon-72x72.png","1fbb6a95c00acd34451ad7a31d702586"],["/image/icons/icon-96x96.png","c6e771a46ef126eb2f7a926b8eb69299"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","064bd0d02bb85e04f6590601deff1ab1"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["/js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/links/index.html","3c03015b264170613a39a55f77c03c92"],["/page/2/index.html","0c0ff7d4cfc5b1e08ada5344ce77c3d5"],["/page/3/index.html","cfa8ba6f43d182633d949e93de402130"],["/page/4/index.html","4ce7512edac876fe2377d6b5a3776f66"],["/tags/Bug/index.html","2ac6e95ffbeec7e5d2e5c32c142bd8e1"],["/tags/C/index.html","bf7cad50071ca6c2dda11328da012d2c"],["/tags/CSS/index.html","a4b59bf2515ba55ecb39490cd53943ea"],["/tags/Canvas/index.html","3981f525d8a05d4f7e6a7e4b8b746a7c"],["/tags/Git/index.html","0d2840358ea91552f2c5ac22e528ac8d"],["/tags/HTML/index.html","95e0b992ba8af998ebaee5804475c79e"],["/tags/HTTP/index.html","007733d00950e189271a24bf604c05b9"],["/tags/JS/index.html","18da254c3022aee0ce9154b30f33c792"],["/tags/JavaScript/index.html","04491e9984f727025716287c578598a6"],["/tags/Node-js/index.html","7daba55c7b253d5f336118a9308f5839"],["/tags/Parcel/index.html","e9a30fbf529e8213358f4816d7e1890d"],["/tags/React-Native/index.html","912a9dbeec255d49d314e522b5e07bf8"],["/tags/React/index.html","ed6aef469385c6e3bbad89c4ad1bf0cb"],["/tags/UI/index.html","f039cd61f9e5f7f3ded58cbe3f88a9b1"],["/tags/Webpack/index.html","344ef5c913eca38026e6ae69ef403abd"],["/tags/index.html","d1ac67abd0d013c20feb152c644b78e3"],["/tags/上机/index.html","6a89499e2b7c038c7019cc4503d09f12"],["/tags/前端/index.html","1ff68ce0f8624a0540bca4f7f17b5c58"],["/tags/前端/page/2/index.html","3f6d484e90ee5fd59bd557a1aeb11f28"],["/tags/前端/page/3/index.html","1b1bcac3dfb57e510b3a394950b599a1"],["/tags/她/index.html","b4d3c3a5c6635a3eb49914a4472f7e4d"],["/tags/学习/index.html","0d04a265b0934bc5036bd1385e86bf46"],["/tags/微信小程序/index.html","8977fc8441076dfecd49d34227f39b1b"],["/tags/我/index.html","0d9473ce4ac2c6534a2c9751fcad0295"],["/tags/浏览器/index.html","31694d35953acf4f4aa07ae90786f1b8"],["/tags/源码/index.html","250c5c9fcf16c5d680c9269460a563f3"],["/tags/计算机/index.html","a7b7f8fdb7de1688e20af41dcca1f6f2"],["/tags/设计模式/index.html","4904163be0ffe181fad2502aa740a9f7"],["/tags/阅读/index.html","817d44dd65145e490c7929ca219d3ca0"],["/tags/面试/index.html","d5ef6a3b47a82923f5fbf5b72b9ab068"],["/timeline/index.html","3d32d46aadd0f7c23427ff8efbd3cf9d"]];
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







