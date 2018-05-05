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

var precacheConfig = [["/2017/04/20/addone/index.html","0b8ed6bd7359d9de31be5a458ab0f992"],["/2017/04/20/gwyhArticle1/index.html","0563de438f8b83bf0d6632fb0357983d"],["/2017/04/20/gwyhArticle2/index.html","1dc7620058f8ed4ab6c3edfe06eec1a3"],["/2017/04/20/gwyhArticle3/index.html","adfd185a85a93b5bbb18b259bb76ca44"],["/2017/04/22/C-2016上机题/index.html","f2535bc401b9fc21fc6f7b3d0bea95ee"],["/2017/04/22/css垂直居中/index.html","2c58ae4d98c5dcf8fa72b619d90aa31f"],["/2018/01/03/2017自我总结/index.html","33d3e0fa50bc4b79c441180d40ce564a"],["/2018/03/13/React-Native实现NbaApp/index.html","e8f96a0fdcd0ec9ec39c234f83564294"],["/2018/03/13/React在线编辑简历/index.html","ab63675a7f89b0f7823bc7fda926f967"],["/2018/03/13/微信小程序模仿网易云音乐/index.html","b5efd955965eb244f1a0cff6c8419aa7"],["/2018/03/14/CSS实现文字打字动画（-1白话讲解）/index.html","99579d068c9c270b46903b97a3efd715"],["/2018/03/14/一道简单面试题理解JS事件机制（-1白话讲解/index.html","74c1772c19429a0e342254a2d79a14c6"],["/2018/03/14/浏览器从输入URL到页面加载过程（-1白话精简讲解）/index.html","abc736687aca4004164b08cad33306d4"],["/2018/03/15/简单CSS实现闪烁动画（-1白话讲解）/index.html","5a559af15978aaeecc141a2b69b2614d"],["/2018/03/16/React生命周期简明宝典/index.html","8653193129d478cc4038f2ee8e0d679a"],["/2018/03/18/HTTP状态码简明宝典/index.html","7bc81fca777707c1fff20b449ca01a73"],["/2018/03/19/吐槽-学生把代码作业放到博客里有错么/index.html","a720fe54466b4f8a483587e05b5afcfd"],["/2018/03/23/CSS人人都能写自定义Checkbox（-1白话讲解）/index.html","5722cb820f459eec2a772411dbbdc082"],["/2018/03/24/纯前端实现gif制作/index.html","7064930436b9b1ca9eb208b94d011aaf"],["/2018/03/25/Parcel上手与React开发环境搭建/index.html","3db65c568d75f2493a9a4e021a37b4be"],["/2018/03/27/Canvas模仿草莓音乐节宣传视频/index.html","bf1f5a9b207bded5366fa6099f8ce44e"],["/2018/03/27/和SetImmediate小姐那销魂的一夜情/index.html","7441aa3a1c5956b27659a561cc4f54c3"],["/2018/03/28/Webpack配置讲解/index.html","0995821e219771403210a924ff03e13c"],["/2018/03/28/深入React知识点/index.html","51f529872979a80708f1e98b7940eede"],["/2018/04/03/一个前端开发者的自我折磨-UI/index.html","30a8865a0c226825178723668120fece"],["/2018/04/07/微信小程序实现折叠展开菜单/index.html","9250498afd21ecf402181b1a7dadef52"],["/2018/04/12/JavaScript设计模式/index.html","a6d2e29ce49dfe488fddb7bde539013c"],["/2018/04/13/一次简单的搜狐电话面试/index.html","4d0d98de887ae9fac48a80c4e18f597c"],["/2018/04/15/Git-Camp-简明Git入门-笔记记录/index.html","f17a6b2d7803ddc5a0a2372f0b1ce87a"],["/2018/04/16/MVC-MVVM-MVP/index.html","8802fa035f0223b06881ccee7ce6ac5e"],["/2018/04/18/React源码阅读-1白话/index.html","f2ce9c5b6b0f5aee1c10091e0ccfc930"],["/2018/04/22/自写一个react-like项目/index.html","ac529993f0af82a66d8361483e82eeb7"],["/2018/04/25/关于在mac上使用vscode编写markdown出现控制字符问题/index.html","0ec625b1b32b8e334e8cba3f6bce55e5"],["/2018/05/03/我在写微信小程序时的一些小技巧/index.html","882f281129ec6e676a9d4bfece1bf8c4"],["/2018/05/05/计算机组成-程序的转换及机器级表示/index.html","9db0be1e1a7cfdd603c89196ebe95a26"],["/2018/05/06/ICS2017-Programming-Assignment-2-2-2-3/index.html","c620bbbb997a56975749fecc1342b5da"],["/about/index.html","ae17a20e6cf1e6e92740f62f3c9ad8f0"],["/archives/2017/04/index.html","cefcf9fb0ae00c1e7a45892bfb6969bc"],["/archives/2017/index.html","83d0a1ea98be31ad9252dde8a325f6f3"],["/archives/2018/01/index.html","5ac0d8f3ebe1b3460d01f174ac79f1e6"],["/archives/2018/03/index.html","de105c943a29ab225d0a98f1874f6cbb"],["/archives/2018/03/page/2/index.html","021873c9ed8b278d34b90a9515dfe600"],["/archives/2018/04/index.html","7258a2fafbda1033f64167b0e351ca48"],["/archives/2018/05/index.html","08f04bd1bf2454645fb20ffc2f1f0307"],["/archives/2018/index.html","fdd61fc8276a7fc8cfdcc914c31aea55"],["/archives/2018/page/2/index.html","c5baabd5258378f2ef13d2fe3b171f55"],["/archives/2018/page/3/index.html","adf4b8d18753d342c95074a795b67a5c"],["/archives/index.html","27b4f69d4551be00065540fa2c09c3f5"],["/archives/page/2/index.html","a746d1c2f308a1deb7c76f9c60e8a473"],["/archives/page/3/index.html","0d5d5f8b1e62bdf61d0a60f21c6b4b0c"],["/archives/page/4/index.html","d4c21fbdabebcbe175eccf1c3ba8be41"],["/categories/Bug/index.html","56eefb1672b4367820435c2218bc7713"],["/categories/C/index.html","cbec03d000b5aece8a1ec78781cb70c1"],["/categories/CSS/index.html","6fd7bd9cd5566cb3d0eae033b217a9da"],["/categories/Canvas/index.html","1c5fb532944860c0708bd3deed0e1eda"],["/categories/GIT/index.html","7321176d8bf146eaee0b296e9f4e0290"],["/categories/HTTP/index.html","67763685029d3591906986b4cd567063"],["/categories/Javascript/index.html","cd84e23cd4da3b94f60cc014d2df703f"],["/categories/React/index.html","89bb31c0ab95faf640f43f352f1ed630"],["/categories/UI/index.html","f70de951e96413f74dab16f92bb00f59"],["/categories/Webpack/index.html","2a7778b0ad52de9ef21a84d90e197cc5"],["/categories/index.html","d3625f333cc62873074c6446616ccd0c"],["/categories/关于我/index.html","6dc8a6082afacc86457446da596819cf"],["/categories/吐槽/index.html","9c59ccb1869d0c744fd6d31f422e892e"],["/categories/微信小程序/UI/index.html","ea68ea0fe080e509e9b5572a99e79531"],["/categories/微信小程序/index.html","c69391ce6f83ca6cd0a7b3b0551c443b"],["/categories/我爱的人/index.html","a761096b17c6204ca3f7086a8842b47d"],["/categories/浏览器/index.html","a078d436313c9e361e0fa3e4c9886576"],["/categories/计算机组成原理/index.html","94c5a9c02cad87657273f7cda07ee6b0"],["/categories/设计模式/index.html","85d09323c0eefde0090bc8979f476de3"],["/categories/面试/index.html","6b786ee2a82cad2d1e284ea164e66c7c"],["/css/index.css","36ff887d49c3e17a77993f65eef2adc2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","51a6e86ac08cd0dd272028c2cc343246"],["/image/icon.png","08bbe941048aa814db7f4a803dfdf9fa"],["/image/icons/icon-128x128.png","cdc0f6116ff7959a040575e1997e2f1b"],["/image/icons/icon-144x144.png","cb7b23bf400ff70e572f933f0adceea1"],["/image/icons/icon-152x152.png","7dfcc63d3401db6c149c1d307011c4d7"],["/image/icons/icon-192x192.png","cbf563433e0d82e96aeeb02a30faeda7"],["/image/icons/icon-384x384.png","80e94dce0fa6e65c4cb348a83291233a"],["/image/icons/icon-512x512.png","8fa6d411e2cde7bebf3b3d14f81f5617"],["/image/icons/icon-72x72.png","1fbb6a95c00acd34451ad7a31d702586"],["/image/icons/icon-96x96.png","c6e771a46ef126eb2f7a926b8eb69299"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","541447a02de932ba90669ceeae0e0368"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["/js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/links/index.html","2aac89f61ac1f25ca18eb74678c9b5b2"],["/page/2/index.html","0ac75158acda86a369c70fbac83134d5"],["/page/3/index.html","c04cce7b858af63415a1daf040f9254c"],["/page/4/index.html","072052ac35a40338d71be50cd2ea70e6"],["/tags/Bug/index.html","5f2aa310dbf9fdb874a177a7c9d857eb"],["/tags/C/index.html","b08f50e936fc0413fc1f82fc0de509c5"],["/tags/CSS/index.html","d4ea2adc52acabce18b112f7fb70090b"],["/tags/Canvas/index.html","6792cb44c06776696efe925e523d4c6d"],["/tags/Git/index.html","f826416ef3ca912ac70ebd16d7ff9ffd"],["/tags/HTML/index.html","596e874619c746c0155fefe257a30744"],["/tags/HTTP/index.html","591cf853ec2e333a7dc518372bb40d31"],["/tags/JS/index.html","9781e5b0b533218d9be0e0f0ea513990"],["/tags/JavaScript/index.html","1d11577059121422b0e54d4017a9ea76"],["/tags/Node-js/index.html","eef9ea6084e7712c61c10a7a1db54c26"],["/tags/Parcel/index.html","33bcff2c95df7c03f6c3520f4d0585ef"],["/tags/React-Native/index.html","babd5558bd3e9c92f357dd282157e421"],["/tags/React/index.html","2162f660e6e1439306c1d9b62c58f00c"],["/tags/UI/index.html","89c128d2a71fe7cb6e2153782d07f7a4"],["/tags/Webpack/index.html","2fe5ffcc8c4d1f2df10fe8379f751958"],["/tags/index.html","d1e1344a81ccb08710bcc4ebeb413bb5"],["/tags/上机/index.html","eea4d60b9dfcf3e31a8bda3e31b8b62f"],["/tags/习题/index.html","8ec0cfcf616a45ca22c6f78dc8d2536a"],["/tags/前端/index.html","316d1f1f6635ca1e285bee1380264e7b"],["/tags/前端/page/2/index.html","099072d65c261ed1b363c6fe3bfea412"],["/tags/前端/page/3/index.html","5b3890f618f7e4c8c9836ea5daad18df"],["/tags/她/index.html","7328eb4dae9c6dc9dc23096c8b8e7575"],["/tags/学习/index.html","bde2ebb38bd90a83a91668a2eeefc0fb"],["/tags/微信小程序/index.html","770fd77a56a27c0d32aa66888a36f750"],["/tags/我/index.html","a754d969bfb8d6fbfef8d439a3b46867"],["/tags/浏览器/index.html","9b654355f045668df58cfb57be3cf5a5"],["/tags/源码/index.html","658196d9ddfba5657f4f8085fffc94d2"],["/tags/计算机/index.html","b78f475754cf758918246550015a1c10"],["/tags/设计模式/index.html","21ebecdedce3a90fb92fe9793ddd9a7b"],["/tags/阅读/index.html","bdbf15cb68dcdac1391f77f3338bd889"],["/tags/面试/index.html","e6ac8240009130275ed67cff54d9d72a"],["/timeline/index.html","72fb375fbb2da3216d89cb216ce9bcb3"]];
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







