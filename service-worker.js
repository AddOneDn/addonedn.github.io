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

var precacheConfig = [["/2017/04/20/addone/index.html","28b536a89676ce34dbe7b9c04d6c39d2"],["/2017/04/20/gwyhArticle1/index.html","9b16a2bbb7c28988896575e566efab77"],["/2017/04/20/gwyhArticle2/index.html","f90d767032e2d77bd6065ccd1bc47ee7"],["/2017/04/20/gwyhArticle3/index.html","2eee050f2283f1bdace98ef6fa6a62ea"],["/2017/04/22/C-2016上机题/index.html","435c497560db378799671085c3e94f68"],["/2017/04/22/css垂直居中/index.html","7f15364bc56f114c750803bfc68caa7a"],["/2018/01/03/2017自我总结/index.html","de3c66ee29c6c8e72f0600bffad5e356"],["/2018/03/13/React-Native实现NbaApp/index.html","6869f7bf9f4e173edb6db46adbf3d583"],["/2018/03/13/React在线编辑简历/index.html","d9de7f7ef318b9f843517d7421aa190d"],["/2018/03/13/微信小程序模仿网易云音乐/index.html","0185ac5bf977350f6b787b2a0f842ae5"],["/2018/03/14/CSS实现文字打字动画（-1白话讲解）/index.html","f00b874c1f88709ba93eeccec51af2bb"],["/2018/03/14/一道简单面试题理解JS事件机制（-1白话讲解/index.html","6a3fee709f1ebf840484f7a56668fce2"],["/2018/03/14/浏览器从输入URL到页面加载过程（-1白话精简讲解）/index.html","33cd26fdc6ec2aeaf4f288ffb32ad0e9"],["/2018/03/15/简单CSS实现闪烁动画（-1白话讲解）/index.html","515345125b07015a07a38d428a293f96"],["/2018/03/16/React生命周期简明宝典/index.html","0fac9dbbd6ea2505f31259f40db162ab"],["/2018/03/18/HTTP状态码简明宝典/index.html","23801d4e8addb9ddc96dfe94393a0093"],["/2018/03/19/吐槽-学生把代码作业放到博客里有错么/index.html","644d918bc41946f54c0eed65cf0ad98b"],["/2018/03/23/CSS人人都能写自定义Checkbox（-1白话讲解）/index.html","b47e1317064d01f9f95f784de6cf5702"],["/2018/03/24/纯前端实现gif制作/index.html","4d0758435581528a7410ed9f0789ba61"],["/2018/03/25/Parcel上手与React开发环境搭建/index.html","c1404cc05f8b6b4aca443ab8bbd9c2c4"],["/2018/03/27/Canvas模仿草莓音乐节宣传视频/index.html","3a72232d0092233d64397f8a4c29dc0b"],["/2018/03/27/和SetImmediate小姐那销魂的一夜情/index.html","ce84aab01c05b53eb0965932f4f0da47"],["/2018/03/28/Webpack配置讲解/index.html","73be5e5e10ada53aa56e9de53e19e95f"],["/2018/03/28/深入React知识点/index.html","5c28a4794ab9e5452a18157bdb1d477f"],["/2018/04/03/一个前端开发者的自我折磨-UI/index.html","9ed82d2ff40b59e41002d1386455f3ac"],["/2018/04/07/微信小程序实现折叠展开菜单/index.html","1128fd058df8293e4c9193680e5a629e"],["/2018/04/12/JavaScript设计模式/index.html","8bfbfde442458796b9732a6a18661832"],["/2018/04/13/一次简单的搜狐电话面试/index.html","0497a87681de352c2a967bc26aa2d4cd"],["/2018/04/15/Git-Camp-简明Git入门-笔记记录/index.html","8ff625360f5b39bcc372782bb9efa3ba"],["/2018/04/16/MVC-MVVM-MVP/index.html","e1b052bb6e71cd980f40898536b0b1fa"],["/2018/04/18/React源码阅读-1白话/index.html","90c4c8569263ac3389a96c3dea6d3066"],["/2018/04/22/自写一个react-like项目/index.html","e668109947dc097b0c29722dfc9fa214"],["/2018/04/25/关于在mac上使用vscode编写markdown出现控制字符问题/index.html","77ae1c97b1618cc8bc24a073d4e24a0f"],["/2018/05/03/我在写微信小程序时的一些小技巧/index.html","6ca02c02d69d52daed432ee53298e4d3"],["/2018/05/05/计算机组成-程序的转换及机器级表示/index.html","41e0cae3656f1013bde9dc14f3bb473c"],["/2018/05/06/ICS2017-Programming-Assignment-2-2-2-3/index.html","6f93a9a6d79fb84fff06f9227d2cdac5"],["/2018/05/06/从“零”开始-：Spring-MVC/index.html","ff4ed7820355f6fdeb14f2d8f9f45755"],["/2018/05/06/前端开发者如何快速的把UI撸出来-讽刺版/index.html","5bb33cce3484b10575b5e662ec9e31bc"],["/2018/05/07/你需要知道的JS高级技巧/index.html","824db45f888a30d1843294954df18efa"],["/2018/05/15/create-react-app的webpack配置阅读/index.html","8166485f4c0e8b3f72f566e90d505d21"],["/about/index.html","5edb7bd164fd8adaeb07d26c8d88e95e"],["/archives/2017/04/index.html","55ef8083276053dad88542a609446472"],["/archives/2017/index.html","d521657ef7144da1dd99bf4d314dad33"],["/archives/2018/01/index.html","0151390784256a33250e6f8cf63da93d"],["/archives/2018/03/index.html","af85b5699c4b809673b8e649ad83ab60"],["/archives/2018/03/page/2/index.html","88354198b4eafd741bbb6673520b7634"],["/archives/2018/04/index.html","056e3e1bef751d4f4caaa49a002c4a91"],["/archives/2018/05/index.html","ac2c62eac74a7a5584bf1f77d2c6c3a4"],["/archives/2018/index.html","037386c60af0519309e04e8a3d35918c"],["/archives/2018/page/2/index.html","d1694ed61e969da6c5fb371f8d96f98d"],["/archives/2018/page/3/index.html","cfe25f62fe29e92d0c5785841ae5ce8b"],["/archives/2018/page/4/index.html","042c2ed24dc8ed6d5e1b1fb052aa084c"],["/archives/index.html","79afef4a9fd9d76aeb2cff17259f1c9a"],["/archives/page/2/index.html","8fe6ae8723faaa587a5e35fbe8c690fc"],["/archives/page/3/index.html","09b9158a6ea72c945613211543e01157"],["/archives/page/4/index.html","a7e7d034a4372e3bedd2111b7ced286a"],["/categories/Bug/index.html","e7ca301285408821fe0e619176db1901"],["/categories/C/index.html","4a9435ddf664b458bc92c1b7338e7ffd"],["/categories/CSS/index.html","9731bdbbb9a956e63fc0716fabdc3f01"],["/categories/Canvas/index.html","c85dbd608bc33e575bf80c4b7100b6f4"],["/categories/GIT/index.html","762d75c276a9f4aaaf189af710f22654"],["/categories/HTTP/index.html","361ce96c054ec8ce4129e850dabc3f04"],["/categories/Javascript/index.html","59fd9805847f20434e2b72542f236c4d"],["/categories/React/index.html","b452f4019e5f53ab2f3eac016cf2e856"],["/categories/UI/index.html","eb8662e63919765b79d2e7aa46d02851"],["/categories/Webpack/index.html","57fba49573ac430341dfac847eba017f"],["/categories/index.html","801a4d85bd53dd78b33cc654631d1772"],["/categories/关于我/index.html","ccc1f702ed877041c3f8fd62ab81b158"],["/categories/吐槽/index.html","a311a25fe2f78e01c56f9d965eb2d886"],["/categories/微信小程序/UI/index.html","127e82135fb98f251bdae4f50cd5cecc"],["/categories/微信小程序/index.html","ba8b6bddae79b99837c6211f2169a5d8"],["/categories/我爱的人/index.html","7f6b054a65f8137e70b30a7245295115"],["/categories/浏览器/index.html","10412af4770b9aad36f5e36732b901ee"],["/categories/计算机组成原理/index.html","5e4741bd16780f66c767cb3fcdef08b5"],["/categories/设计模式/index.html","a92b1794bdb31948d48dd527859036f4"],["/categories/阅读/index.html","d8e81fcc8e67fe0e2a6ff5f17650ca35"],["/categories/面试/index.html","23306910221624f383382a9d40a3e9a5"],["/css/index.css","048c62123fccd97e515e98cb0a74fb3a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","7f5c92ef17162847a1ac8e4da421dfe0"],["/image/icon.png","08bbe941048aa814db7f4a803dfdf9fa"],["/image/icons/icon-128x128.png","cdc0f6116ff7959a040575e1997e2f1b"],["/image/icons/icon-144x144.png","cb7b23bf400ff70e572f933f0adceea1"],["/image/icons/icon-152x152.png","7dfcc63d3401db6c149c1d307011c4d7"],["/image/icons/icon-192x192.png","cbf563433e0d82e96aeeb02a30faeda7"],["/image/icons/icon-384x384.png","80e94dce0fa6e65c4cb348a83291233a"],["/image/icons/icon-512x512.png","8fa6d411e2cde7bebf3b3d14f81f5617"],["/image/icons/icon-72x72.png","1fbb6a95c00acd34451ad7a31d702586"],["/image/icons/icon-96x96.png","c6e771a46ef126eb2f7a926b8eb69299"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","2159ece13bf02c5362bc099836062548"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["/js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/links/index.html","c9e172b48bf76b600970023a64b900f3"],["/page/2/index.html","82b51da5783ba16a4a6a66865325d1dd"],["/page/3/index.html","304f860ef3de8bc7bfa031084bffd581"],["/page/4/index.html","a14981e0e4211d039d23e80895878a1b"],["/tags/Bug/index.html","1a8f6b3387e498ff264e50dd3fbe0765"],["/tags/C/index.html","53026df4d63d7443c58af79efade72ab"],["/tags/CSS/index.html","4fc756a4bb152130a870ff39a3791aa9"],["/tags/Canvas/index.html","3425ab57cd4164484e359d7e8d2f1caa"],["/tags/Git/index.html","8b83518122df90a2b170ceb01f5d340b"],["/tags/HTML/index.html","9606567942c183718d3f8d5d9f6db673"],["/tags/HTTP/index.html","8213eb89052404d918e8c9b506c11c1b"],["/tags/JS/index.html","149c1a21e4e19b295045c30a38c5b732"],["/tags/JavaScript/index.html","b632710653549cb802b9738a01557da3"],["/tags/Node-js/index.html","f1283cf89a344e38c0e041054d56383a"],["/tags/Parcel/index.html","ac930c1c49c02682a63411564e3f680d"],["/tags/React-Native/index.html","faf98f44a4d7b7e8c2fd32fb9f616e3c"],["/tags/React/index.html","bc5994e99f4595f0cb2b13c75371874a"],["/tags/UI/index.html","610cf371d48d3c93a66fa252deddebe6"],["/tags/Webpack/index.html","74e294da0ace4138ab603b45be64a229"],["/tags/index.html","cbcbf16c0d64d6d96451d13f02a0b761"],["/tags/上机/index.html","8a50473370933cb8079d20a960f8823c"],["/tags/前端/index.html","6be8020eba753a43c6a4dd33bbe2229a"],["/tags/前端/page/2/index.html","8f0d652bcc54b0ab547e72207dbdf01f"],["/tags/前端/page/3/index.html","48720441f10b699e4c73c4ab974b5d05"],["/tags/她/index.html","c77206a09cc0bb14d7b7f3a42da3f6d1"],["/tags/学习/index.html","2cc66522395b834f85c03155040ff371"],["/tags/微信小程序/index.html","7a4febcdbbfba1a75b4a0d622c4772b4"],["/tags/我/index.html","0a4b61b70b93f9b456e600f4e4989cfa"],["/tags/浏览器/index.html","abd0b9c8415ff32600ac4c4887857248"],["/tags/源码/index.html","4e68d2f3580913bac8322b106d5b9ce5"],["/tags/计算机/index.html","84802915b28cd007513ee26f60b1be56"],["/tags/设计模式/index.html","583685faad50bef94011ef5965afa6e2"],["/tags/阅读/index.html","29529a5f2a41917be8d97b8106f31cf2"],["/tags/面试/index.html","48d1177e41fe219b0e3996f939b69bf7"],["/timeline/index.html","861ebc0914a24e5fcf195e568452e3af"]];
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







