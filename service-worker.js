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

var precacheConfig = [["/2017/04/20/addone/index.html","b8cf0ac7a0ee056182817b92e18db176"],["/2017/04/20/gwyhArticle1/index.html","b4e9f0bbfbfffa6761692a350b206621"],["/2017/04/20/gwyhArticle2/index.html","2735ccdcdc9a46acb61f6b81ef07f580"],["/2017/04/20/gwyhArticle3/index.html","90994ab20e17bd8f66852032caf36380"],["/2017/04/22/C-2016上机题/index.html","f5029e1c5034eb9463fee34bf634ddb5"],["/2017/04/22/css垂直居中/index.html","de925add4833c7309c5839737dfe7ff4"],["/2018/01/03/2017自我总结/index.html","765c326f4e9e571f2c48010e605c3b3e"],["/2018/03/13/React-Native实现NbaApp/index.html","afe61096702d2f5772c65754ae9d5204"],["/2018/03/13/React在线编辑简历/index.html","b747ae6d24d950dd429aa0ec527fffd7"],["/2018/03/13/微信小程序模仿网易云音乐/index.html","73f5aa1bf7f7828068c3c806fae77f46"],["/2018/03/14/CSS实现文字打字动画（-1白话讲解）/index.html","8e472021bb3dde1ff02940cc4e93318d"],["/2018/03/14/一道简单面试题理解JS事件机制（-1白话讲解/index.html","32c35c1c1d1e12444f5401258d83b95e"],["/2018/03/14/浏览器从输入URL到页面加载过程（-1白话精简讲解）/index.html","655cad5e999cc139b2a943d4a5327b93"],["/2018/03/15/简单CSS实现闪烁动画（-1白话讲解）/index.html","fda4615d1654db17f18aa032c6fd6d83"],["/2018/03/16/React生命周期简明宝典/index.html","204b36396fb9cea330f55f751a2bf70a"],["/2018/03/18/HTTP状态码简明宝典/index.html","7081a153598690985289bb564dbca326"],["/2018/03/19/吐槽-学生把代码作业放到博客里有错么/index.html","a58b2729bdb4c514c44823f0f1964e4b"],["/2018/03/23/CSS人人都能写自定义Checkbox（-1白话讲解）/index.html","c39298c1acf6530d081e7060feb6a2d5"],["/2018/03/24/纯前端实现gif制作/index.html","0dffaf5b3f179ac2341d281ec160cc4c"],["/2018/03/25/Parcel上手与React开发环境搭建/index.html","1b5df3d8200316d04393f30322ea797e"],["/2018/03/27/Canvas模仿草莓音乐节宣传视频/index.html","7dd8cab968fe6392237e6b34cb0255ac"],["/2018/03/27/和SetImmediate小姐那销魂的一夜情/index.html","ead8cb92376510d4fa9e80b2b0a9d73e"],["/2018/03/28/Webpack配置讲解/index.html","c10d2b3a1b15da80175f5f21f032bbf2"],["/2018/03/28/深入React知识点/index.html","715aefb98e4abd224f9ab7da4b26be5d"],["/2018/04/03/一个前端开发者的自我折磨-UI/index.html","6fdeb0bfc65729ce2b124050d97ff21f"],["/2018/04/07/微信小程序实现折叠展开菜单/index.html","66b42ad32c2fbc494725cf8b9a9f9471"],["/2018/04/12/JavaScript设计模式/index.html","1be6bd7fad3da67462916d2dcae32a75"],["/2018/04/13/一次简单的搜狐电话面试/index.html","62196c27988af78893c1e957cfc6636b"],["/2018/04/15/Git-Camp-简明Git入门-笔记记录/index.html","3d45701b61b8a68b2eb73ccacfd0582a"],["/2018/04/16/MVC-MVVM-MVP/index.html","8edc3f96432952e13b382f3148cb3753"],["/2018/04/18/React源码阅读-1白话/index.html","3b6cb8ec9adb7da193b4bccb28baf3f7"],["/2018/04/22/自写一个react-like项目/index.html","53c29cb4408679d58cebd26c5fd76481"],["/2018/04/25/关于在mac上使用vscode编写markdown出现控制字符问题/index.html","255be3b2400f99b5c15e9c03af80f836"],["/2018/05/03/我在写微信小程序时的一些小技巧/index.html","fca7eee99bd55a459a01b80538514cd6"],["/2018/05/05/计算机组成-程序的转换及机器级表示/index.html","43f3bcad71c327abc84fe994ab77de32"],["/2018/05/06/ICS2017-Programming-Assignment-2-2-2-3/index.html","78f272f7d002ed50efe257e16493dcd8"],["/2018/05/06/从“零”开始-：Spring-MVC/index.html","33d4f5775838c09062153a595c7b3368"],["/2018/05/06/前端开发者如何快速的把UI撸出来-讽刺版/index.html","ceb041d5c0dfbb67e9820f4439d07a52"],["/2018/05/07/你需要知道的JS高级技巧/index.html","baff123dd2cd5421389a56dac4f30f5c"],["/2018/05/15/create-react-app的webpack配置阅读/index.html","599e1be572a512e4c1156342b83f3aac"],["/2018/05/31/大二杭州有赞前端电话面试/index.html","ff7515bafe7397e3968c49582df87910"],["/about/index.html","a0d0d541ba54d23ba40f2a0332657c2a"],["/archives/2017/04/index.html","a2072f98aaac86e57ca7431539247b86"],["/archives/2017/index.html","5ed88e5352b7a9933a3f4a451975eea3"],["/archives/2018/01/index.html","5bd25353b76c098a8b4b9fc4aa7b3b20"],["/archives/2018/03/index.html","a64927fa9544b39c1709550b00f73f30"],["/archives/2018/03/page/2/index.html","84cbd6f47d50209736571a8d89d74a30"],["/archives/2018/04/index.html","c40d4dc0b6948ce099abe876f357f90c"],["/archives/2018/05/index.html","5bcb6a487cf0377e1ec6c46d84c3e499"],["/archives/2018/index.html","624185a98382c8fbb2bff812daf3f6ad"],["/archives/2018/page/2/index.html","75dc761ee562cba4e83eac7088aa8b4c"],["/archives/2018/page/3/index.html","40db13abce9c741712109d45627ff958"],["/archives/2018/page/4/index.html","4c86e5503bd4b3652b820f7aa89a6ac8"],["/archives/index.html","2d10fed70ac2bcad2173c428c5126432"],["/archives/page/2/index.html","d945ef4bf165afb17e7ba7d771441f89"],["/archives/page/3/index.html","729cb8eb5764577f0dc97baa1ab60607"],["/archives/page/4/index.html","a52b386eca6614d4cfba5c54fceda5b8"],["/archives/page/5/index.html","d9a4103a653fcd89eb35fd244584bb04"],["/categories/Bug/index.html","8082c780af8b614c8d09d842dafcb04f"],["/categories/C/index.html","6cc4c56fb9dfd23105d68fda2107916f"],["/categories/CSS/index.html","a1c39ced3dcb2710e0f125a34c8760fa"],["/categories/Canvas/index.html","d6dbbba229191bb4345cee9f546f8b87"],["/categories/GIT/index.html","b281e882c875087c208cb113985b1d08"],["/categories/HTTP/index.html","22970c22f37a1b1f82f31b0480b58140"],["/categories/Javascript/index.html","fcdea8a3cecb424f2f0ce0b1f51e0448"],["/categories/React/index.html","5ae8e462b27d3bf348f39e194a2974da"],["/categories/UI/index.html","8083a9f6f1300d81056e300c3b2c9884"],["/categories/Webpack/index.html","e418a7f4b236cccf2f082553a071d392"],["/categories/index.html","d0591da13514edb0e912e8a3da0aee9b"],["/categories/关于我/index.html","0d99360c2aa6e05432340ba0f2e89e7a"],["/categories/吐槽/index.html","9946d55afeb6a091b82b91732fe585cc"],["/categories/微信小程序/UI/index.html","94830ad9b81a644793ee5f96b8f8771f"],["/categories/微信小程序/index.html","6daeecaf555518e88f77a6f170922420"],["/categories/我爱的人/index.html","890ec3bd7caf3e68e9ff857483b2ad39"],["/categories/浏览器/index.html","615d37ad1af72c8428b175b39e7a6db9"],["/categories/计算机组成原理/index.html","47a7fefc77d77426d5c943fb38b51287"],["/categories/设计模式/index.html","1bd5fc9bbeeb2e7fda9989b5a0b2c226"],["/categories/阅读/index.html","eda59a1e58fcb508faeabe4d069e65b0"],["/categories/面试/index.html","7867f22c8c01333263cc9af12206b6e5"],["/css/index.css","048c62123fccd97e515e98cb0a74fb3a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","02de3e0d9f06f7d6af32d0e2e7b9dc3c"],["/image/icon.png","08bbe941048aa814db7f4a803dfdf9fa"],["/image/icons/icon-128x128.png","cdc0f6116ff7959a040575e1997e2f1b"],["/image/icons/icon-144x144.png","cb7b23bf400ff70e572f933f0adceea1"],["/image/icons/icon-152x152.png","7dfcc63d3401db6c149c1d307011c4d7"],["/image/icons/icon-192x192.png","cbf563433e0d82e96aeeb02a30faeda7"],["/image/icons/icon-384x384.png","80e94dce0fa6e65c4cb348a83291233a"],["/image/icons/icon-512x512.png","8fa6d411e2cde7bebf3b3d14f81f5617"],["/image/icons/icon-72x72.png","1fbb6a95c00acd34451ad7a31d702586"],["/image/icons/icon-96x96.png","c6e771a46ef126eb2f7a926b8eb69299"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","f238a5c5632c28fc4b555f44473f0847"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["/js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/links/index.html","e018716f9da91574d61debdb85545111"],["/page/2/index.html","c812c9dafd9d207b86b2c0c02415e91e"],["/page/3/index.html","0e5d5417c489931eb532f7e3ed486626"],["/page/4/index.html","5a4f8d026eeb0b65d3083775da8eacf4"],["/page/5/index.html","96e2b3627238b28ae1983c61dd17675b"],["/tags/Bug/index.html","789cbda260cc31f11e403aec2f035870"],["/tags/C/index.html","5acc8d53b5ad771badd0447b278312db"],["/tags/CSS/index.html","f635a125d72f50f485387ba59f8f206a"],["/tags/Canvas/index.html","7c55d90bcc203870449d1e5f288ad95f"],["/tags/Git/index.html","1fb4b68c982f7d676db94b6719e73470"],["/tags/HTML/index.html","05d7ac17bf53ec5f927addb2d87df294"],["/tags/HTTP/index.html","2c98ef09d0768fb6deaac33f6067674c"],["/tags/JS/index.html","3c7b26473d523588977861f800be7286"],["/tags/Javascript/index.html","87377d899ccb3981ca447114c25c5f1a"],["/tags/Node-js/index.html","a400909b038057104dedb46e11b182f0"],["/tags/Parcel/index.html","d221a8aa8fbb2194fcdb585dd62856e5"],["/tags/React-Native/index.html","b0ac2c9ffd97facb49d83d329aa57f93"],["/tags/React/index.html","72de4b8e1cd9f95feed5199c91e4e089"],["/tags/UI/index.html","cda20fdab8ab6bdf32a8552ad7d60b9a"],["/tags/Webpack/index.html","1619adeed45d79f98ba92d54a151f1b2"],["/tags/index.html","5525e0064ac3ba81950a1834b50d92cc"],["/tags/上机/index.html","1f3f88e923f47175118250702def6cec"],["/tags/前端/index.html","e6d39ae257c8a3412329f9d610d6db24"],["/tags/前端/page/2/index.html","40ec4490005cf7711486e82ba5dc8b36"],["/tags/前端/page/3/index.html","29a3bf4a98dd9786135b553aa034edea"],["/tags/她/index.html","09817db99e58a8e7acdb1e1bbc6ea476"],["/tags/学习/index.html","d68b51760b1ce2e0681f003feabec796"],["/tags/微信小程序/index.html","2fa110ced8884387766e7693f2043b55"],["/tags/我/index.html","759a5ef01923dd6d88457d3a65ace7ce"],["/tags/浏览器/index.html","0c90aee6e51f351ad3f62f9180a21377"],["/tags/源码/index.html","19a7c3c74c10e7718a290bb8def85a1a"],["/tags/计算机/index.html","df9b17a2d1eadedc40bfc43bf8386399"],["/tags/设计模式/index.html","d70f6c401d741383b2e55f42032147a1"],["/tags/阅读/index.html","137d5c96d920b06a941e7d0c5dea24cb"],["/tags/面试/index.html","ad08b550ddb6fa86524f150650bdb21b"],["/timeline/index.html","b5dc3881e84c3844abb73d5ed750f271"]];
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







