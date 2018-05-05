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

var precacheConfig = [["/2017/04/20/addone/index.html","4f4c8348e6b3b0daa12a72db16f87800"],["/2017/04/20/gwyhArticle1/index.html","1f76f128805353c9d167d4307ed2fbd9"],["/2017/04/20/gwyhArticle2/index.html","5b62919cc2bfa5fb490b343c4ec47348"],["/2017/04/20/gwyhArticle3/index.html","f4009214d4542e7a4743ddbea667effa"],["/2017/04/22/C-2016上机题/index.html","e3700e1cdc0e6df832c28bd45f9a73b2"],["/2017/04/22/css垂直居中/index.html","9cf12d4830992eae1c31667f4d9b87f1"],["/2018/01/03/2017自我总结/index.html","5bb15557117aec1682914005649cc3b9"],["/2018/03/13/React-Native实现NbaApp/index.html","d9d3548c8001598f792216a0c98fece8"],["/2018/03/13/React在线编辑简历/index.html","60280bea44cba7618cdaec71f6b08957"],["/2018/03/13/微信小程序模仿网易云音乐/index.html","ed89150b0b7e13a989bcc026842cdf70"],["/2018/03/14/CSS实现文字打字动画（-1白话讲解）/index.html","e3bdb3c8b71e7c527f1d372a1a06a747"],["/2018/03/14/一道简单面试题理解JS事件机制（-1白话讲解/index.html","f576c1bfe8cda517877194fbfcf00974"],["/2018/03/14/浏览器从输入URL到页面加载过程（-1白话精简讲解）/index.html","0a3a4d0c56eefd58f2e4d81b03df2ae5"],["/2018/03/15/简单CSS实现闪烁动画（-1白话讲解）/index.html","089c28b2f41a08bb04efb65d4dde31e1"],["/2018/03/16/React生命周期简明宝典/index.html","925e0330a615ed822f64333b9b569873"],["/2018/03/18/HTTP状态码简明宝典/index.html","e019f046351af43734eab150a32dc7b3"],["/2018/03/19/吐槽-学生把代码作业放到博客里有错么/index.html","221f5e5573e98f811ad592f0e75495ec"],["/2018/03/23/CSS人人都能写自定义Checkbox（-1白话讲解）/index.html","2ef60283bf92133ff7b76be34f0358b5"],["/2018/03/24/纯前端实现gif制作/index.html","1b3774bbfbdf8f012da79d73be97a88f"],["/2018/03/25/Parcel上手与React开发环境搭建/index.html","c043839c9f236e391f1385b8bb593201"],["/2018/03/27/Canvas模仿草莓音乐节宣传视频/index.html","465bf1fd27bbd3ee9a2ce0f5e42024d7"],["/2018/03/27/和SetImmediate小姐那销魂的一夜情/index.html","3e42b2ac56c1ea96688d6a28d495f60e"],["/2018/03/28/Webpack配置讲解/index.html","6c1a9cbc0310ad16e865e838241f8b7b"],["/2018/03/28/深入React知识点/index.html","87e58b6a6a36c115e3707339324a19ec"],["/2018/04/03/一个前端开发者的自我折磨-UI/index.html","c67700c54386ff414631db6c49615698"],["/2018/04/07/微信小程序实现折叠展开菜单/index.html","7416be9846b707194e9b6b4c2b6c709e"],["/2018/04/12/JavaScript设计模式/index.html","ced3e56811044a3cc308d63c157f605a"],["/2018/04/13/一次简单的搜狐电话面试/index.html","bd8e8009a1c4153a1cb3d98b7f313271"],["/2018/04/15/Git-Camp-简明Git入门-笔记记录/index.html","8ace346c9d88648e679ef292c98173ab"],["/2018/04/16/MVC-MVVM-MVP/index.html","26e4b1170000a560d16f8cca6bda8fa0"],["/2018/04/18/React源码阅读-1白话/index.html","8ddae3ceccfaf38d4710b25e515bc500"],["/2018/04/22/自写一个react-like项目/index.html","a523894990d0c98f0835469ef903b79c"],["/2018/04/25/关于在mac上使用vscode编写markdown出现控制字符问题/index.html","0318ebf834fb9a174af3b7bf53aa102b"],["/2018/05/03/我在写微信小程序时的一些小技巧/index.html","6b94ceb370b915af7c1b401197dd2f46"],["/2018/05/05/计算机组成-程序的转换及机器级表示/index.html","a694905f54f6f8b0e74c384a319142fe"],["/about/index.html","066cdf0b1220d8c81a5ce6e1b893b05f"],["/archives/2017/04/index.html","7951186cf5294a37eb2315297c6d6438"],["/archives/2017/index.html","f1ac2ab264c0a31a15e4e9531fca844d"],["/archives/2018/01/index.html","714f7319e5085962cff862c417fccf21"],["/archives/2018/03/index.html","3e54a53996bef47ee2615324fe752ded"],["/archives/2018/03/page/2/index.html","c9ebd756626a54b353237c59666ae94e"],["/archives/2018/04/index.html","52e1f23d27b0bc3668ed42d557dd97b1"],["/archives/2018/05/index.html","c6d427fd6fba46375c76e632e6ee113c"],["/archives/2018/index.html","0083e9869297da6e061a23ad2c909887"],["/archives/2018/page/2/index.html","0559ac27e1d7c02e297987144a367a7c"],["/archives/2018/page/3/index.html","3ba574cddd7247390de8bd9f0ff8a0a5"],["/archives/index.html","f4b0ed930c2d1342a60fa1668f8d06eb"],["/archives/page/2/index.html","8d87c88c8d6e2a6e9d0b6a805daaa8f7"],["/archives/page/3/index.html","fc71fad2f2eb50c373547aaf9fca4e1f"],["/archives/page/4/index.html","e531cdd9f827aa208154e0729608f871"],["/categories/Bug/index.html","5e0f9ccaecf44ed1d56fc7a77cf3868c"],["/categories/C/index.html","fced6ee441c2b98025ea9de3404c7f3f"],["/categories/CSS/index.html","db883919eda04dc4b7ab4d8ccf02e1e3"],["/categories/Canvas/index.html","1a677dde88b519f72b943876341beb52"],["/categories/GIT/index.html","43da20ae0d5e77be0fb2795fccac7e77"],["/categories/HTTP/index.html","413b574a037696f3ee5249ebaf1c8e4a"],["/categories/Javascript/index.html","0c5a7e97adfa013743f276774f8a63ff"],["/categories/React/index.html","1e122643efb00626e8953777df172a96"],["/categories/UI/index.html","95be3eab68eb1c6194da207e0ae4315f"],["/categories/Webpack/index.html","35d869425653ca80e851ecdc6d733641"],["/categories/index.html","ed82fcb8fef66139c6e214e013f3ca66"],["/categories/关于我/index.html","e7f08bee90832bb4e554e4678fccf939"],["/categories/吐槽/index.html","dd9db29616b4ee4070aa1ada3d74cd55"],["/categories/微信小程序/UI/index.html","40cb4d745dd02b45b1daf49b7d2b9b97"],["/categories/微信小程序/index.html","210dc15537f3baf0425dc76512ee8661"],["/categories/我爱的人/index.html","2e97e2928aeeb8243ea638293225c265"],["/categories/浏览器/index.html","c650ac6e462c7573b3e28084e46c2e64"],["/categories/计算机组成原理/index.html","f979ab5f7063c70cbb57a603846f98bd"],["/categories/设计模式/index.html","51facb0cfac5fd3262f42a543433783f"],["/categories/面试/index.html","8008215ecd454b8fd12aee90a6e825fc"],["/css/index.css","36ff887d49c3e17a77993f65eef2adc2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","c3f525511b609b762eb9a81143832f35"],["/image/icon.png","08bbe941048aa814db7f4a803dfdf9fa"],["/image/icons/icon-128x128.png","cdc0f6116ff7959a040575e1997e2f1b"],["/image/icons/icon-144x144.png","cb7b23bf400ff70e572f933f0adceea1"],["/image/icons/icon-152x152.png","7dfcc63d3401db6c149c1d307011c4d7"],["/image/icons/icon-192x192.png","cbf563433e0d82e96aeeb02a30faeda7"],["/image/icons/icon-384x384.png","80e94dce0fa6e65c4cb348a83291233a"],["/image/icons/icon-512x512.png","8fa6d411e2cde7bebf3b3d14f81f5617"],["/image/icons/icon-72x72.png","1fbb6a95c00acd34451ad7a31d702586"],["/image/icons/icon-96x96.png","c6e771a46ef126eb2f7a926b8eb69299"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","cbcebdd4d218e9f98437b2378930da65"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["/js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/links/index.html","82f70a5f96a12707f025b0a639859ba5"],["/page/2/index.html","cdbdbdb30e8a6dc46f5251ef255a4f8a"],["/page/3/index.html","354918df921381d564fad3fb2ad7f3b5"],["/page/4/index.html","0637bb1790713ea2a10e26fda014e54f"],["/tags/Bug/index.html","72765f66617bc4d5e276c08ea25791ef"],["/tags/C/index.html","bce693b14f5e0dd6f165db2bb9e75683"],["/tags/CSS/index.html","919f2941915b44ce510e0774b099836d"],["/tags/Canvas/index.html","b2731446a492d16e4337bb733637eea9"],["/tags/Git/index.html","c45e9436333ce567385991272a20864c"],["/tags/HTML/index.html","5dc593d05147b755bde4a00eaebdd31b"],["/tags/HTTP/index.html","10380e279bb1c1d8d1134d1c1537ef3f"],["/tags/JS/index.html","63fcd1a0c27f65f49fb0096f3840b809"],["/tags/JavaScript/index.html","e4c8de6d975fb5cfad5eb9494ab7e68f"],["/tags/Node-js/index.html","93df5b0059ee48c85369122dd5ce1100"],["/tags/Parcel/index.html","545897d2e9f0a442a970201e66a4e68e"],["/tags/React-Native/index.html","0ab742b4a7c3f0c1c645da782184ea79"],["/tags/React/index.html","d352130999fc3df27bec81c397766c21"],["/tags/UI/index.html","6d547fe57d5e165bf8ce80b287c26d23"],["/tags/Webpack/index.html","36af7d85baf50019d598ac1be0edc971"],["/tags/index.html","942040238386989a469db1f09959e6a1"],["/tags/上机/index.html","417e723ea0070a450ae6b0e00e333f9f"],["/tags/习题/index.html","3dd10a0c8e3b77e8475acbadea7b8d1f"],["/tags/前端/index.html","a8b1df0bf4564f3988868e9a3dd178dd"],["/tags/前端/page/2/index.html","6cefb9f7f663e56eece86d52be1d8921"],["/tags/前端/page/3/index.html","ec17e89e6f209736b53a2722ab53f34a"],["/tags/她/index.html","262f821281c122ff95737d2b80945b7b"],["/tags/微信小程序/index.html","595863702d536323100546e3d8f1ef30"],["/tags/我/index.html","6e54f723d84ac95bd25a0cc943448ea6"],["/tags/浏览器/index.html","fdf0d16f3d4dfa56a19bf708034510f1"],["/tags/源码/index.html","7ef2acb73c1406fe704492a3a46783a3"],["/tags/计算机/index.html","9e3c1daefc8d117edced8414c8ef375f"],["/tags/设计模式/index.html","9cfc1c2024890b03bdb0720e7d3c6547"],["/tags/阅读/index.html","4c5184041baf8d65abd191f162036a90"],["/tags/面试/index.html","647aff4bed168609ffcd9c251da125ec"],["/timeline/index.html","d32bc0d1706e631d447b2053ee377b92"]];
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







