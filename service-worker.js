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

var precacheConfig = [["/2017/04/20/addone/index.html","2413b0665c18755ca5a82627d1b4f6a6"],["/2017/04/20/gwyhArticle1/index.html","6aedd95553ea97d23c99ac4ba520c6f8"],["/2017/04/20/gwyhArticle2/index.html","4bad67cc813783c4e27896c0e079a49e"],["/2017/04/20/gwyhArticle3/index.html","8cfe6e5a520a86cbed518ba67a0909fc"],["/2017/04/22/C-2016上机题/index.html","cf2d3022c3687ad4ee37c5ba5586b737"],["/2017/04/22/css垂直居中/index.html","4b5b03458ab9ea09e612ac6a7706d7d8"],["/2018/01/03/2017自我总结/index.html","b937490de1de09069a6688e6efaeb615"],["/2018/03/13/React-Native实现NbaApp/index.html","3ed65f6f267ab1fa13e7fa78e665fca3"],["/2018/03/13/React在线编辑简历/index.html","526f1ad111fb5cdd72b69132282022d9"],["/2018/03/13/微信小程序模仿网易云音乐/index.html","541b75dee483e32eeabf6378b3ea813f"],["/2018/03/14/CSS实现文字打字动画（-1白话讲解）/index.html","df2d67d14e11c75feba306f70c7e36f7"],["/2018/03/14/一道简单面试题理解JS事件机制（-1白话讲解/index.html","076f468c1d91fecce933924ef579b7e5"],["/2018/03/14/浏览器从输入URL到页面加载过程（-1白话精简讲解）/index.html","73c58fd9a2dbcd09df3c609188ad22ff"],["/2018/03/15/简单CSS实现闪烁动画（-1白话讲解）/index.html","928141e2c7f79fa4d3e73ae55237ec3f"],["/2018/03/16/React生命周期简明宝典/index.html","a2c1c441148c327badd9db9eb04bec2d"],["/2018/03/18/HTTP状态码简明宝典/index.html","53d158478334e836332f5728fde71865"],["/2018/03/19/吐槽-学生把代码作业放到博客里有错么/index.html","0eceb67ca4853c5f1785c2de6e7c61bc"],["/2018/03/23/CSS人人都能写自定义Checkbox（-1白话讲解）/index.html","b312a14423c93daafbd76909a16a1348"],["/2018/03/24/纯前端实现gif制作/index.html","8ea99c83334ed45b1a1a160131f0b443"],["/2018/03/25/Parcel上手与React开发环境搭建/index.html","398642aaa573b0829f76eceee8989654"],["/2018/03/27/Canvas模仿草莓音乐节宣传视频/index.html","b13d06db68e495fa840a5e6a77de86f0"],["/2018/03/27/和SetImmediate小姐那销魂的一夜情/index.html","71f5a957820f176d7ea87746775d5104"],["/2018/03/28/Webpack配置讲解/index.html","b43a188848aa22baf9bb05932fb2f3fd"],["/2018/03/28/深入React知识点/index.html","ca4a8a90ee1c61ac51aa444c116fa8b0"],["/2018/04/03/一个前端开发者的自我折磨-UI/index.html","a06c994fbe6944e141e9d2863bf1eb02"],["/2018/04/07/微信小程序实现折叠展开菜单/index.html","9fe6e086d7c364942bcc3ed3516edf29"],["/2018/04/12/JavaScript设计模式/index.html","f2f0253b8c089f91b69be47c3b0544e9"],["/2018/04/13/一次简单的搜狐电话面试/index.html","2f90713ef8b891d0c67eaad447db5044"],["/2018/04/15/Git-Camp-简明Git入门-笔记记录/index.html","32cfc70a2038f300ea1da3d12112b104"],["/2018/04/16/MVC-MVVM-MVP/index.html","c74ec22c2d7870f6baede76d72936002"],["/2018/04/18/React源码阅读-1白话/index.html","134120c11532222f6c2b02bdfe2c7d93"],["/2018/04/22/自写一个react-like项目/index.html","818d99017ae588bab46820f11c1b40c7"],["/2018/04/25/关于在mac上使用vscode编写markdown出现控制字符问题/index.html","03cdbdffdc9fcbb9488b089820d08bda"],["/2018/05/03/我在写微信小程序时的一些小技巧/index.html","55c8010c06d22c250cace7f40857d67d"],["/2018/05/05/计算机组成-程序的转换及机器级表示/index.html","068498afd0b7fc5d9e7e43b743f5915c"],["/2018/05/06/ICS2017-Programming-Assignment-2-2-2-3/index.html","e435215a602e632a1f4c9490c03d1413"],["/2018/05/06/从“零”开始-：Spring-MVC/index.html","1da9f1d2faf3a7262faa70f8f4b5b769"],["/about/index.html","c80bb9dd1708af31ce51203f1e056d40"],["/archives/2017/04/index.html","4602636c2ab5c7de170035fb86842469"],["/archives/2017/index.html","aa52a0736621ae15d7031016229bc3ec"],["/archives/2018/01/index.html","40ca035e539e86985c22caecaa88dfc9"],["/archives/2018/03/index.html","ee0f9fe4649ab5f8a050fc5ac9804522"],["/archives/2018/03/page/2/index.html","cd7d63645c6c4202a48db350ea8dd793"],["/archives/2018/04/index.html","8720442cd6ffd2e79189617aa3ffebbc"],["/archives/2018/05/index.html","d58f9959a3c089912d272753b8d3085f"],["/archives/2018/index.html","691047e543527abaf30378e8adcc2bbe"],["/archives/2018/page/2/index.html","1c479efeca4a3f70926e259d34c780bf"],["/archives/2018/page/3/index.html","8483b0eba9bd71f47a251fa304d38485"],["/archives/2018/page/4/index.html","2bd4cd43cdba9e496b5a291bdb0a765a"],["/archives/index.html","f21b4a2584f9db44e60b8b347d612e59"],["/archives/page/2/index.html","b4558cf8409d85a482a7b059ea3ca526"],["/archives/page/3/index.html","d1233f61a250b8ebcca2fc536d2bb441"],["/archives/page/4/index.html","0a7ca2ee5b4d6141518799921a5354b6"],["/categories/Bug/index.html","7867f16a256dc4cd9bb13022036db4e9"],["/categories/C/index.html","302e19a693d37d986866a05a752baf3b"],["/categories/CSS/index.html","ef65347861b3337482e9075f832e681c"],["/categories/Canvas/index.html","82d8b8606b87832819a7e44f9e6dbce7"],["/categories/GIT/index.html","0fe82873770259561f8011faf5d3d229"],["/categories/HTTP/index.html","484cb65533222a60eaaa8df387dd4d9d"],["/categories/Javascript/index.html","bd547ed97039234ce90886b78b1d4d0f"],["/categories/React/index.html","ca0c82380c8028b8fbbb8fe17e021857"],["/categories/UI/index.html","4a201e06e2a7d4424f04ea53de3a87d7"],["/categories/Webpack/index.html","39b346a024c3599b5932f89cdc3ddfcf"],["/categories/index.html","6905d8ff3b1696792e1e91ed7a48ce6b"],["/categories/关于我/index.html","b7aa3e8fa38637563a05225446db44a7"],["/categories/吐槽/index.html","c8ca881c101cc2b815ec5a9fa4a80d16"],["/categories/微信小程序/UI/index.html","c781ab3b2d9fa470c4edd86bf2d06aa5"],["/categories/微信小程序/index.html","b45e77a948f089b5f53609d2a579ad5c"],["/categories/我爱的人/index.html","a2fe93ce68c3ed5576827ec514dfae40"],["/categories/浏览器/index.html","c4ed996d4d3d6182cb36f6877256a7dd"],["/categories/计算机组成原理/index.html","1a55484ac0104ec6b04473da5617792a"],["/categories/设计模式/index.html","85dd0d37ca93eb53836f8d8a2cb69c60"],["/categories/面试/index.html","3a29453b10b7c93746827e0ae6752aff"],["/css/index.css","048c62123fccd97e515e98cb0a74fb3a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","7908967270b5e042237c57ffcbc830d4"],["/image/icon.png","08bbe941048aa814db7f4a803dfdf9fa"],["/image/icons/icon-128x128.png","cdc0f6116ff7959a040575e1997e2f1b"],["/image/icons/icon-144x144.png","cb7b23bf400ff70e572f933f0adceea1"],["/image/icons/icon-152x152.png","7dfcc63d3401db6c149c1d307011c4d7"],["/image/icons/icon-192x192.png","cbf563433e0d82e96aeeb02a30faeda7"],["/image/icons/icon-384x384.png","80e94dce0fa6e65c4cb348a83291233a"],["/image/icons/icon-512x512.png","8fa6d411e2cde7bebf3b3d14f81f5617"],["/image/icons/icon-72x72.png","1fbb6a95c00acd34451ad7a31d702586"],["/image/icons/icon-96x96.png","c6e771a46ef126eb2f7a926b8eb69299"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","dc0c31e71880a85c945ac3a5a3a78a2e"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["/js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/links/index.html","9607c636ba31add29fcd7b3666a1109e"],["/page/2/index.html","fe7efbfe76c3be725de7d18266482533"],["/page/3/index.html","bbce2beed46d4664a688783cdad9ee89"],["/page/4/index.html","9f869720b361015e0fcbeeea877f0742"],["/tags/Bug/index.html","e2a7c7f44781f6ecbca4f131c4d8c066"],["/tags/C/index.html","f6c498a0464efca4042b075f8fb489d8"],["/tags/CSS/index.html","3af9387f4f176d034f773b6e205c5974"],["/tags/Canvas/index.html","88b2c822c3a4dd89d254457b0c7d0c0c"],["/tags/Git/index.html","76d6eb6829045987920246d1838a7695"],["/tags/HTML/index.html","03ecc095cc66d44d8ab07f4069e575a8"],["/tags/HTTP/index.html","d54fc423aabe5d4e2e8d9af63c3f4ceb"],["/tags/JS/index.html","aad88bae3553ba24c390dbac7c5f79b6"],["/tags/JavaScript/index.html","27d12384e15bfba2940ad64d1e4cbd4b"],["/tags/Node-js/index.html","c273ab723d45cf9da16ec27ddfc111e6"],["/tags/Parcel/index.html","8ac749ccb016604326a56773862a96de"],["/tags/React-Native/index.html","334475ca1f799390393528b8ac7e21e2"],["/tags/React/index.html","a6c230f3b7b98a79798ed757dddb5711"],["/tags/UI/index.html","233ed5879842039660c24a93e90ec3ef"],["/tags/Webpack/index.html","3372c9ba373aba29a1bbf3cc3184338c"],["/tags/index.html","42f138bbef45d3b2229b1bdbcd50b0e8"],["/tags/上机/index.html","2d9332fb5489d572babff0607700869f"],["/tags/前端/index.html","0b311d6acd0897ec7e6e749033f5274c"],["/tags/前端/page/2/index.html","cd393d9318a838db0094db3f886a122f"],["/tags/前端/page/3/index.html","4d86385148213a641fe7e41b324a5108"],["/tags/她/index.html","133b0651d36e11fb1e160e283352e2fd"],["/tags/学习/index.html","8053f78566e8b738a0450017723007c6"],["/tags/微信小程序/index.html","d6a10b3ba53179b1af610c1d86a602c9"],["/tags/我/index.html","b6a39195969d7a9f2de8efb56c5b947c"],["/tags/浏览器/index.html","f22960fe71f8a5970575580c896b29f2"],["/tags/源码/index.html","3f08a1ec8824b249f2ebfd0d1500b203"],["/tags/计算机/index.html","43e0ea4dcdba7d264d7663113ce2120f"],["/tags/设计模式/index.html","ad4b4238245b2dde61bc44c0ee83a544"],["/tags/阅读/index.html","ddec72f0af8db56b873c7456ad13459e"],["/tags/面试/index.html","cba3f323aa99684989e8e799f0d9c19e"],["/timeline/index.html","5264e0099edff534ebdf07576bab709a"]];
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







