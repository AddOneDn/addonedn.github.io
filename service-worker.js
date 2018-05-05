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

var precacheConfig = [["/2017/04/20/addone/index.html","9083f5afd87a07cfa2235ded632c53b5"],["/2017/04/20/gwyhArticle1/index.html","cf28b1b3285edece3e36edda92c20685"],["/2017/04/20/gwyhArticle2/index.html","547aae085f674146ed3f6159dcd6a8f4"],["/2017/04/20/gwyhArticle3/index.html","fc5e14dce5a2762ad2845bc7578750be"],["/2017/04/22/C-2016上机题/index.html","140b6ae58d239d631dc56aec199d016c"],["/2017/04/22/css垂直居中/index.html","13c5416d672a97e1ae6008bec0b14889"],["/2018/01/03/2017自我总结/index.html","369c2c87b0df4d8c66b8ea8e941499fc"],["/2018/03/13/React-Native实现NbaApp/index.html","22f86f352aa5bdd0b944c6e4c9a8d172"],["/2018/03/13/React在线编辑简历/index.html","4cbb236ac3fbe5a8818c0fcdb3c4d37e"],["/2018/03/13/微信小程序模仿网易云音乐/index.html","9524a8c1654907395abbb0303ddfa451"],["/2018/03/14/CSS实现文字打字动画（-1白话讲解）/index.html","12c0cd406dce5f0d580f36cf3b868c64"],["/2018/03/14/一道简单面试题理解JS事件机制（-1白话讲解/index.html","06bb14806e5e4135a21da0e8ab5ae3db"],["/2018/03/14/浏览器从输入URL到页面加载过程（-1白话精简讲解）/index.html","edefa5b66bf0bd01d59e8a3f20a052fd"],["/2018/03/15/简单CSS实现闪烁动画（-1白话讲解）/index.html","adba074e8fbf327254e734584da8e3de"],["/2018/03/16/React生命周期简明宝典/index.html","928cc68bed0d993702e166d5180eb0dc"],["/2018/03/18/HTTP状态码简明宝典/index.html","df527beb85ba8425b00dd4d896f90f1c"],["/2018/03/19/吐槽-学生把代码作业放到博客里有错么/index.html","216663749c18ba8e7cd6e541d17f7b31"],["/2018/03/23/CSS人人都能写自定义Checkbox（-1白话讲解）/index.html","d6c05a32071fa87617daf2fda97e80cd"],["/2018/03/24/纯前端实现gif制作/index.html","5b6a49d14b0dcca5dd56d34c9a648a5f"],["/2018/03/25/Parcel上手与React开发环境搭建/index.html","9f2554d1a3a5112325431aa23ee300f2"],["/2018/03/27/Canvas模仿草莓音乐节宣传视频/index.html","c365556b508578c829ac10efa1e50ea0"],["/2018/03/27/和SetImmediate小姐那销魂的一夜情/index.html","764406d7c90125bc5e6a18f80ccdbd60"],["/2018/03/28/Webpack配置讲解/index.html","19c9f5e1bf1abd083d36ec407806f11f"],["/2018/03/28/深入React知识点/index.html","da927959386f7b466e0936ba33b8489a"],["/2018/04/03/一个前端开发者的自我折磨-UI/index.html","32fddf6f7df9c2ad25eb8766b76b92e9"],["/2018/04/07/微信小程序实现折叠展开菜单/index.html","ff7d1b8cb2e21e06c98fcd58686f81c5"],["/2018/04/12/JavaScript设计模式/index.html","2370ebf0c75e34a5c20532cdc8a0ea5b"],["/2018/04/13/一次简单的搜狐电话面试/index.html","ee499628ff28a289ac7a96a73f70de7c"],["/2018/04/15/Git-Camp-简明Git入门-笔记记录/index.html","a44fd39f26c88091244b7f70e5a02bda"],["/2018/04/16/MVC-MVVM-MVP/index.html","95cb625868f05076188b7278dc691cba"],["/2018/04/18/React源码阅读-1白话/index.html","06f3ddda52e978fe3d2c0dd8e1ee3251"],["/2018/04/22/自写一个react-like项目/index.html","941abc8a763ae25f36ec94caf78fadde"],["/2018/04/25/关于在mac上使用vscode编写markdown出现控制字符问题/index.html","c0d218d91ca7771d5026823ec7463cd0"],["/2018/05/03/我在写微信小程序时的一些小技巧/index.html","2cb70f5d9cf80c37baf80d82dc2f41d3"],["/2018/05/05/计算机组成-程序的转换及机器级表示/index.html","e3af599eb3ea17c5c8019958b0ca5f43"],["/about/index.html","ba8d418c262808396dfc82893a6dfa9f"],["/archives/2017/04/index.html","ebd16eaffe114616b130129c78bfa5ce"],["/archives/2017/index.html","85f777b572b95969a257f48e4d5ad949"],["/archives/2018/01/index.html","fd39bef4b242d24021d6d01101f16815"],["/archives/2018/03/index.html","f7688f5b8d6cf2d0ada409ccfc5a68b5"],["/archives/2018/03/page/2/index.html","8c833f8f7247cd6dc38e8ed1c6472e38"],["/archives/2018/04/index.html","862a5b673be5f93596b3c52a64e07e3b"],["/archives/2018/05/index.html","d763153ec1a48858d8618f0818ae7e06"],["/archives/2018/index.html","9bfed09b81a3128769b65b162334fca8"],["/archives/2018/page/2/index.html","0156ee87fba337906506d61f185cbaea"],["/archives/2018/page/3/index.html","7810a03333bbec209421827d9a5f3111"],["/archives/index.html","05af396d7b162dc571e35f1e0545df6f"],["/archives/page/2/index.html","de721ea6757287056ea86dfe6da69a09"],["/archives/page/3/index.html","c8d0a689c54860984069aee0670f6746"],["/archives/page/4/index.html","403156e2d1cf639810fe4675449c45ff"],["/categories/Bug/index.html","5669dc6c0f0bd12b53ac85c847b2d40a"],["/categories/C/index.html","9800fa084a0a7163575bcc1c1ff3f4bd"],["/categories/CSS/index.html","0425b7425e028f317b298c2783f53be8"],["/categories/Canvas/index.html","32579a4b466b43289764bf3874fd5cec"],["/categories/GIT/index.html","345a2fb3fe6a54d7d2016df59c73c710"],["/categories/HTTP/index.html","7c468120873020056f13628a0aa6e3a0"],["/categories/Javascript/index.html","99b4c8f2367e12bda3d7839a45b2d200"],["/categories/React/index.html","ebc340da0ccbc6aeba225fc7264851d1"],["/categories/UI/index.html","1894ca671c16ee1ef51e8716776da9a3"],["/categories/Webpack/index.html","492e636cd57145d4b3029dcaf957ce27"],["/categories/index.html","12ef370d94fd08060dd1986e33b7bd07"],["/categories/关于我/index.html","9aa9f7eb53f70f0a9268446302cf0b56"],["/categories/吐槽/index.html","6efde7181d387438709653ada2b06d97"],["/categories/微信小程序/UI/index.html","b8a1cf63706e92c3bd0bb131e99e1405"],["/categories/微信小程序/index.html","0cf3d5e846379ed87a3db607b6ad2dd3"],["/categories/我爱的人/index.html","b9a65b6907004b78becf164130a5ad8c"],["/categories/浏览器/index.html","c9ab70ad191eee177e9b9752eddea70d"],["/categories/计算机组成原理/index.html","d2c5adedd03b1670bd305a0538e6c36a"],["/categories/设计模式/index.html","47b9eff9e06795725d85e46d86cd7cb4"],["/categories/面试/index.html","786207cb230f197bfac78850c3e21db1"],["/css/index.css","36ff887d49c3e17a77993f65eef2adc2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","2823cf69f3be33fc574ba4d75a89c00c"],["/image/icon.png","08bbe941048aa814db7f4a803dfdf9fa"],["/image/icons/icon-128x128.png","cdc0f6116ff7959a040575e1997e2f1b"],["/image/icons/icon-144x144.png","cb7b23bf400ff70e572f933f0adceea1"],["/image/icons/icon-152x152.png","7dfcc63d3401db6c149c1d307011c4d7"],["/image/icons/icon-192x192.png","cbf563433e0d82e96aeeb02a30faeda7"],["/image/icons/icon-384x384.png","80e94dce0fa6e65c4cb348a83291233a"],["/image/icons/icon-512x512.png","8fa6d411e2cde7bebf3b3d14f81f5617"],["/image/icons/icon-72x72.png","1fbb6a95c00acd34451ad7a31d702586"],["/image/icons/icon-96x96.png","c6e771a46ef126eb2f7a926b8eb69299"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","b18d26c079dc5c54a530518f4403e3e0"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["/js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/links/index.html","7400fc55ad2d9c90fa990479b1b23228"],["/page/2/index.html","8f98e39cc3c54b80a540fa840bcc277a"],["/page/3/index.html","0d83198b9c293bf0a49ad1d3ac8ececc"],["/page/4/index.html","e5fd104d44044a1d42041638316f2792"],["/tags/Bug/index.html","08a5a3c6c9783aca27b8cd9c231e428b"],["/tags/C/index.html","6b6feb25a7464fb663ae590a05fa4609"],["/tags/CSS/index.html","576461d0c3a963faae220fed5489bc3d"],["/tags/Canvas/index.html","a0c8b042adf2a01200207d50a04bad85"],["/tags/Git/index.html","b28a543a7124a5d52b1e429ed5d77899"],["/tags/HTML/index.html","fc852412d12d98abff4a11305c8822d2"],["/tags/HTTP/index.html","b0b336073093fcad9e6f0549734f570b"],["/tags/JS/index.html","b58975f6f6f2c36f12f2ef9a48ac1ec8"],["/tags/JavaScript/index.html","23dcc474f4944c9d8a99577f06ca1b23"],["/tags/Node-js/index.html","0aace71dd25789aee0d067bdb690ad46"],["/tags/Parcel/index.html","c1c477104092f86576f305b5ee8bcdf0"],["/tags/React-Native/index.html","63e8b43fb555c79036b88d821a3e1dc7"],["/tags/React/index.html","babd0ae55ef0a6fbe955681f8635bf02"],["/tags/UI/index.html","be810834b7a6670a6e71724f5a5be3a1"],["/tags/Webpack/index.html","0828d1e4ccd5a3994751d9f9726e0bbf"],["/tags/index.html","6e8f131430ffc6ad6bbe9b63b5b9871c"],["/tags/上机/index.html","8982b32c5472f6f7a14ec13b3e193829"],["/tags/习题/index.html","8ec0cfcf616a45ca22c6f78dc8d2536a"],["/tags/前端/index.html","66e5503ff7dbd2b68cd9317034154d2b"],["/tags/前端/page/2/index.html","46c35e3cc9b51f6d8617d1741b1c47ca"],["/tags/前端/page/3/index.html","fd0207f5e9f1a10ba634d3c0cf33b7d4"],["/tags/她/index.html","bae97abed5051c93b86a179ba3a133ae"],["/tags/微信小程序/index.html","b577d5f42c233d6af2fbab2f40911c52"],["/tags/我/index.html","cf608c1293e900070b349d24a57620d9"],["/tags/浏览器/index.html","e297db8f1e48002fc39d4139fd661cd0"],["/tags/源码/index.html","1aaf93c484c2b275efa10213317f00e1"],["/tags/计算机/index.html","73de9caca609c221ae6d20a4e360f7ba"],["/tags/设计模式/index.html","11a24e85ef2d7eddcf3647ddcf7eeb5c"],["/tags/阅读/index.html","32769f01caa3d05e48175059b9b69c20"],["/tags/面试/index.html","d96558f77ca323832b622f9b914f76ba"],["/timeline/index.html","54680138a45f4adad9567a7f495ea37b"]];
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







