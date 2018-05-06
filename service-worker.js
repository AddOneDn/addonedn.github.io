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

var precacheConfig = [["/2017/04/20/addone/index.html","0ce00a068d32b98c8d7e69cb6665825d"],["/2017/04/20/gwyhArticle1/index.html","c8da2d5a73c8384c4335f4296d1ee9bc"],["/2017/04/20/gwyhArticle2/index.html","792522ba71d1a44f786dd228e42f3b9e"],["/2017/04/20/gwyhArticle3/index.html","2d78b8c3f2f779f1e015b8bc470d394e"],["/2017/04/22/C-2016上机题/index.html","3b63bec4432e209829d24a67f232b368"],["/2017/04/22/css垂直居中/index.html","9c9cb1b3a4aa98a826e5f7a2605350ea"],["/2018/01/03/2017自我总结/index.html","6f4ce1e8b40c14037419b41fcaae8a5a"],["/2018/03/13/React-Native实现NbaApp/index.html","11f08ac775cd69892835397079f576c6"],["/2018/03/13/React在线编辑简历/index.html","e438d0d051af6f5eab3097772f80d947"],["/2018/03/13/微信小程序模仿网易云音乐/index.html","37c84ea62ff87d2509f2fb3ddcb91b2a"],["/2018/03/14/CSS实现文字打字动画（-1白话讲解）/index.html","78859ee02b1474221a3b5a8fb856d590"],["/2018/03/14/一道简单面试题理解JS事件机制（-1白话讲解/index.html","e2a9e5285cff3985fa38ab366d3dd802"],["/2018/03/14/浏览器从输入URL到页面加载过程（-1白话精简讲解）/index.html","2e6876eaf69a9b4da9851a24cbd181ef"],["/2018/03/15/简单CSS实现闪烁动画（-1白话讲解）/index.html","018fffc4117b9345d726c6e584980279"],["/2018/03/16/React生命周期简明宝典/index.html","562c1b42fc79399efd76efb0e0091d9c"],["/2018/03/18/HTTP状态码简明宝典/index.html","bc75aab149e052a6a39a79aece8dea40"],["/2018/03/19/吐槽-学生把代码作业放到博客里有错么/index.html","7b4861c79b4945a15c344b3ea41e7fcb"],["/2018/03/23/CSS人人都能写自定义Checkbox（-1白话讲解）/index.html","a10a84423bb2ecf3c5a7eaf7d48202b0"],["/2018/03/24/纯前端实现gif制作/index.html","926a2190c73621020dd8569ea5a26367"],["/2018/03/25/Parcel上手与React开发环境搭建/index.html","a65bf9f3088870182fb5413b7bd931bd"],["/2018/03/27/Canvas模仿草莓音乐节宣传视频/index.html","5935d6e696c8e850aa2c74f5e1e9a703"],["/2018/03/27/和SetImmediate小姐那销魂的一夜情/index.html","92abf84db6c8b46180d8b97b4b18506f"],["/2018/03/28/Webpack配置讲解/index.html","a493efeb5de58814028739aee6918d4a"],["/2018/03/28/深入React知识点/index.html","8cb7edb8622d6f7990d0456b155ee60a"],["/2018/04/03/一个前端开发者的自我折磨-UI/index.html","f0435a3cdf37d95a650b0ef1edf1314a"],["/2018/04/07/微信小程序实现折叠展开菜单/index.html","8cf33909fee1d3b221e3b65a3f5ea58c"],["/2018/04/12/JavaScript设计模式/index.html","d06e61a64fa5bb814199044768cb8901"],["/2018/04/13/一次简单的搜狐电话面试/index.html","917263ee8aaa67e73168daff170c41db"],["/2018/04/15/Git-Camp-简明Git入门-笔记记录/index.html","c0552933b23622c2a0b35daf5584c473"],["/2018/04/16/MVC-MVVM-MVP/index.html","3a43697387ce281255bf6e3fbdb9abe8"],["/2018/04/18/React源码阅读-1白话/index.html","6c9fcb6a9788d665faa52e8f4e073c44"],["/2018/04/22/自写一个react-like项目/index.html","20e6962f808d0d75981acc2ee137d892"],["/2018/04/25/关于在mac上使用vscode编写markdown出现控制字符问题/index.html","6cbe6d4d333db24106ca6c9c5c64650c"],["/2018/05/03/我在写微信小程序时的一些小技巧/index.html","a925a28b9b07e0ec477ecfe8a3d45126"],["/2018/05/05/计算机组成-程序的转换及机器级表示/index.html","99575914685ae44b3f9ddb4889558b66"],["/2018/05/06/ICS2017-Programming-Assignment-2-2-2-3/index.html","9151e7530927ef4a0d5187cdc7a7f1fb"],["/2018/05/06/从“零”开始-：Spring-MVC/index.html","2f06d1ce54e7e542c212e3909ea1bf4e"],["/2018/05/06/前端开发者如何快速的把UI撸出来-讽刺版/index.html","fddc5901ffeee487a3f46315a1dce1d9"],["/about/index.html","9446afb9815efb0bead5a5b4be2feb3e"],["/archives/2017/04/index.html","6efb8f2c1e7d06fa4ee6d536af2a5578"],["/archives/2017/index.html","17eb31254ac7f50f52639a6a35a9e862"],["/archives/2018/01/index.html","0023b3b3c07980e3c27cb69a3445256c"],["/archives/2018/03/index.html","5075e5fab3676c6c5c3eac5df9c3b034"],["/archives/2018/03/page/2/index.html","e15cfb92541662e73e06168e4a0795aa"],["/archives/2018/04/index.html","f55359faf8335061c7f4059c9b5aacb4"],["/archives/2018/05/index.html","2aee553f6603a6c2215da1330ddbfdfe"],["/archives/2018/index.html","f7b36f5ad54664f9b72f29002c8dfcff"],["/archives/2018/page/2/index.html","9758fe9956facda64458f1f33dbe4853"],["/archives/2018/page/3/index.html","97838d6d8c62a56ae18aa480ddb6f9f7"],["/archives/2018/page/4/index.html","3ddae75d5f413ce24d25d6622b0417f1"],["/archives/index.html","2937898bed62e6b2e7b8103c5bde3bd5"],["/archives/page/2/index.html","01c506e0665ec2251cc55fd22bd0af26"],["/archives/page/3/index.html","9dfb01d60bc91af8d03e7b3332b6b433"],["/archives/page/4/index.html","571ed4fa3ed9d69cb42d23bc65ff7695"],["/categories/Bug/index.html","aaf9c31b64ea0c3ec523f0a1a5a3a4a0"],["/categories/C/index.html","e516ac5f5dbd261e06fad9e2dd3de33b"],["/categories/CSS/index.html","b930d819ef16f46f2737901ec3fb3560"],["/categories/Canvas/index.html","042d69bffb3a96b417ee7a81bfb6960f"],["/categories/GIT/index.html","d3b248e2b2bc7d6b0a9643957691dfac"],["/categories/HTTP/index.html","f49dd10ea5edcfecfbb58d6681b2de83"],["/categories/Javascript/index.html","b7ead7c488c217b841d30d89e346a4fa"],["/categories/React/index.html","2a4bc44401d4938ae3250ef85622f865"],["/categories/UI/index.html","c4a20a9374ccdcb8c60723d027fc2328"],["/categories/Webpack/index.html","45158c4fc05202946256fd71dca1cf79"],["/categories/index.html","0ea2152a25d49c28ebf3427db1effeb8"],["/categories/关于我/index.html","33fa28958a1ab5b6cd7dc592d320d518"],["/categories/吐槽/index.html","bcb93c0dc890baab971b15ea688ba8af"],["/categories/微信小程序/UI/index.html","a56d978c8a3ecd062e01875749fa8e87"],["/categories/微信小程序/index.html","00fca29f38b61495d6e721a2b3eedc3f"],["/categories/我爱的人/index.html","da6f61f5d9b50fb7e920929ff1507476"],["/categories/浏览器/index.html","2abd85ee7b24ff2686b257f9cbfc15fb"],["/categories/计算机组成原理/index.html","8b650ea900f11fa351f35918a8e958ce"],["/categories/设计模式/index.html","23f12fe136546d45b3313140d967c960"],["/categories/阅读/index.html","0927c558f06416558fe1aba32d6daf94"],["/categories/面试/index.html","04578afa090456dfaf1c09f8e00da00a"],["/css/index.css","048c62123fccd97e515e98cb0a74fb3a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","1498fcb46a958d3f134b67f1609b6a11"],["/image/icon.png","08bbe941048aa814db7f4a803dfdf9fa"],["/image/icons/icon-128x128.png","cdc0f6116ff7959a040575e1997e2f1b"],["/image/icons/icon-144x144.png","cb7b23bf400ff70e572f933f0adceea1"],["/image/icons/icon-152x152.png","7dfcc63d3401db6c149c1d307011c4d7"],["/image/icons/icon-192x192.png","cbf563433e0d82e96aeeb02a30faeda7"],["/image/icons/icon-384x384.png","80e94dce0fa6e65c4cb348a83291233a"],["/image/icons/icon-512x512.png","8fa6d411e2cde7bebf3b3d14f81f5617"],["/image/icons/icon-72x72.png","1fbb6a95c00acd34451ad7a31d702586"],["/image/icons/icon-96x96.png","c6e771a46ef126eb2f7a926b8eb69299"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","b8601c111fb7bf4374866660126ce645"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["/js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/links/index.html","39d5cbe974ac6ff3c79beda1de575656"],["/page/2/index.html","da1d0d4b11b9c449ddb8b7a69f71256a"],["/page/3/index.html","cda73778d59be7bdc8fed6c214eae486"],["/page/4/index.html","c674768ca17f468a07c5955fd834f35a"],["/tags/Bug/index.html","8637fc24ffc621634043272364120461"],["/tags/C/index.html","28bc0242b88b074387cb117e1c1d4701"],["/tags/CSS/index.html","c75a57047a5c41e06fe5a12c61c5e34e"],["/tags/Canvas/index.html","63bce97b47511b424041fc2a16a4e10f"],["/tags/Git/index.html","869ca0ef11d893fb33ff3d129b634e7e"],["/tags/HTML/index.html","5bf5f27534a19d57055487da5c09ab81"],["/tags/HTTP/index.html","ad449fda94c468d1ea64924712d50077"],["/tags/JS/index.html","b862ec445c636a97ab3dfa48343768ce"],["/tags/JavaScript/index.html","853403ba8699f0ea34fd6d8a58dfd715"],["/tags/Node-js/index.html","d9045048ab1412e427f03a3f72ff5cb3"],["/tags/Parcel/index.html","83d2f098aa49093d6319d914c15997a7"],["/tags/React-Native/index.html","f137a639aa3b26f002dee8f4868be24e"],["/tags/React/index.html","8cfb00b5cc3aca1cadd7b73761bddadd"],["/tags/UI/index.html","86c9ba8189850df3c8b91bbcb5c1d4fd"],["/tags/Webpack/index.html","81b6112a924d98fce7564db263f8711a"],["/tags/index.html","be8b9943061d544c735543f4d2957624"],["/tags/上机/index.html","574b2260622becdd97c20d19809ff411"],["/tags/前端/index.html","e01555608a48058a77fe224342eb3fd0"],["/tags/前端/page/2/index.html","f180961a8ec0fc9a0596e67d78a5af4d"],["/tags/前端/page/3/index.html","503cd7d4801812bc5a9dcc13db5ce84f"],["/tags/她/index.html","9b2f149333c4c93ab90e1cd930822c37"],["/tags/学习/index.html","153faea4fd26527e93b25f4b08ccb997"],["/tags/微信小程序/index.html","e197046e44d67657d15e2f940f37ec11"],["/tags/我/index.html","e691960beabca1d0df6874daede28115"],["/tags/浏览器/index.html","0a1795b16671cc7318101f96f8869328"],["/tags/源码/index.html","ba64be5428321008102188cbb4c507f2"],["/tags/计算机/index.html","84245c3e4c9b8b10b43d3c7c93f8aa0e"],["/tags/设计模式/index.html","0388d9fd18b529481352dc51ab4b53a1"],["/tags/阅读/index.html","cb5a51aec76866a653da526f8c8d1d0e"],["/tags/面试/index.html","4e69b33c2690420e47e26971b88dffe5"],["/timeline/index.html","fe74c0d2371d9c811dd911543ca4ec3b"]];
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







