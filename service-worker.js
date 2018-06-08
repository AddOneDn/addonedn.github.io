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

var precacheConfig = [["/2017/04/20/addone/index.html","18949291b74907c4fe3487a0ba47cc37"],["/2017/04/20/gwyhArticle1/index.html","c31c29f1a959ee8c9ee84fbe52558f38"],["/2017/04/20/gwyhArticle2/index.html","7c433ac71f217c69dcb30b149ce30af2"],["/2017/04/20/gwyhArticle3/index.html","6f6968b0726bfdf5eba99384b617e04b"],["/2017/04/22/C-2016上机题/index.html","8dd031deb4ad31586b240ae762407983"],["/2017/04/22/css垂直居中/index.html","58817fd77115799c6885b271efea9b36"],["/2018/01/03/2017自我总结/index.html","c3c8b2109aa89d91bb11c4182f150ed0"],["/2018/03/13/React-Native实现NbaApp/index.html","559a10e0cc310b97d105afebffe71280"],["/2018/03/13/React在线编辑简历/index.html","1b7d44a361e7b7e4b7e6a5c901cf7410"],["/2018/03/13/微信小程序模仿网易云音乐/index.html","f590224778ab246ee6ea98231ad34355"],["/2018/03/14/CSS实现文字打字动画（-1白话讲解）/index.html","b97acc3e85c17f0e52b205c3d8c7fe1e"],["/2018/03/14/一道简单面试题理解JS事件机制（-1白话讲解/index.html","592dcf7f1d5709a839326e8f00e10c95"],["/2018/03/14/浏览器从输入URL到页面加载过程（-1白话精简讲解）/index.html","af8938454778db661843722741cdc70f"],["/2018/03/15/简单CSS实现闪烁动画（-1白话讲解）/index.html","90d32d7628a74d4df8f910e284c59ce0"],["/2018/03/16/React生命周期简明宝典/index.html","c2be82bc795194eb258e746df9897d2b"],["/2018/03/18/HTTP状态码简明宝典/index.html","91c1fdf803425f70bdfb9ab79876d318"],["/2018/03/19/吐槽-学生把代码作业放到博客里有错么/index.html","7030dab2439ac50b8e9f0cfafd0836e2"],["/2018/03/23/CSS人人都能写自定义Checkbox（-1白话讲解）/index.html","8b43bab8892acac7e5cea74703149ffa"],["/2018/03/24/纯前端实现gif制作/index.html","dffd6212496a973668f3da7b3b9fbc6e"],["/2018/03/25/Parcel上手与React开发环境搭建/index.html","664f9dbf1b5a71bc0a010ddc4a8d1af8"],["/2018/03/27/Canvas模仿草莓音乐节宣传视频/index.html","3152593e14c4ab25c43eec005a22062a"],["/2018/03/27/和SetImmediate小姐那销魂的一夜情/index.html","d7609624a30913a682dcc4d6137da8ec"],["/2018/03/28/Webpack配置讲解/index.html","d6457c3c50026196d8d8661611626ac6"],["/2018/03/28/深入React知识点/index.html","da508f8d0947c48a9924ea237d111aa0"],["/2018/04/03/一个前端开发者的自我折磨-UI/index.html","678157403f6fe4f4d6efb797ca3aaa16"],["/2018/04/07/微信小程序实现折叠展开菜单/index.html","d739a2af349361bcf95f515f60e71425"],["/2018/04/12/JavaScript设计模式/index.html","c55f1ff86064cfd8fa81efe5ac176d37"],["/2018/04/13/一次简单的搜狐电话面试/index.html","e1b206623612e6845ea88039377954bb"],["/2018/04/15/Git-Camp-简明Git入门-笔记记录/index.html","b879a11c3456fbc95d1b8a24c8f4cc09"],["/2018/04/16/MVC-MVVM-MVP/index.html","82183c4c1a552452f9041aaacacee228"],["/2018/04/18/React源码阅读-1白话/index.html","32fe66871603f40710d9a1842a452df3"],["/2018/04/22/自写一个react-like项目/index.html","d0c96a5ec7a7ba29bd8034e46afe0100"],["/2018/04/25/关于在mac上使用vscode编写markdown出现控制字符问题/index.html","7663c2a61012ba69483770f100caa4ae"],["/2018/05/03/我在写微信小程序时的一些小技巧/index.html","0def680fed3758809fff31d1bf2a9059"],["/2018/05/05/计算机组成-程序的转换及机器级表示/index.html","e9312613243525e164d04b40465f571e"],["/2018/05/06/ICS2017-Programming-Assignment-2-2-2-3/index.html","cec72bf65a812b5b35d5680633c5ecc2"],["/2018/05/06/从“零”开始-：Spring-MVC/index.html","60689e3f856ca10f25e0a1e771fbca07"],["/2018/05/06/前端开发者如何快速的把UI撸出来-讽刺版/index.html","1f1168aba393b8411754839528a18718"],["/2018/05/07/你需要知道的JS高级技巧/index.html","fab1e119a1a3c76f80825aea278b8e75"],["/2018/05/15/create-react-app的webpack配置阅读/index.html","1d171fcbf6af39315aa406ea27cbd634"],["/2018/05/31/大二杭州有赞前端电话面试/index.html","9f85650c8be1559ed2e3aeea05e0a5ab"],["/2018/06/04/一些感想/index.html","117ff1b6bd7f5bc7a27962fd7f80715b"],["/2018/06/07/Js技术题自写/index.html","fc007ff609e6f00441da5a984a93ca36"],["/2018/06/08/关于页面切换后setInterval出现延时问题/index.html","441a9d9b004c6bddf2a971f09f7e51cd"],["/about/index.html","49cca62d195cab26da9862325e542c0c"],["/archives/2017/04/index.html","6867e3217166f572b7598f3e9f58a5f3"],["/archives/2017/index.html","c05639af0ffbd3e88536204a99a638b9"],["/archives/2018/01/index.html","c04a956991dfb1459b37fc3ef2c24d22"],["/archives/2018/03/index.html","bae0801b7629651675d515db21df3a63"],["/archives/2018/03/page/2/index.html","90450ffdc37f6bb5322ec0f80638fc22"],["/archives/2018/04/index.html","17d7f7c3dff3d84e05bb857f2f9ec167"],["/archives/2018/05/index.html","e249c82adcac7b398a789cc8577cc881"],["/archives/2018/06/index.html","4d36c1afc8c2d0b86c954422615e8d48"],["/archives/2018/index.html","edc309c4d4c80a99c3ae4c9823d0c130"],["/archives/2018/page/2/index.html","15fc7951cd75c5224abba78cf415d4b1"],["/archives/2018/page/3/index.html","eb5f684c15319c5b24315b6d0b4912f0"],["/archives/2018/page/4/index.html","2fbd9be4bbb361f6b5f1531264e63d17"],["/archives/index.html","b203d564c3be0f37ded17adf36cf1408"],["/archives/page/2/index.html","3702eb385661e5ab45dcd95bdba4de91"],["/archives/page/3/index.html","48a6e7d15c9659a27191ae6460e8ea2a"],["/archives/page/4/index.html","5212595c03124bd83f3189a3d627cb13"],["/archives/page/5/index.html","5425cb485831b8e945de9b399dcd4637"],["/categories/Bug/index.html","ae2aac65694e5c4a358e3d8ac018c79d"],["/categories/C/index.html","801a280b93a5552aada3a7c29d5b939d"],["/categories/CSS/index.html","b77646103dca46a03e5824916b7ebc3a"],["/categories/Canvas/index.html","699343909df36edd7e5aecdc8ad2d4c1"],["/categories/GIT/index.html","c6779966b49618f484cf6a1aea545694"],["/categories/HTTP/index.html","9ce5e5c975c3877dbda4144dc370fa0c"],["/categories/Javascript/index.html","f812e9889cd206c7643ac3e72c71fa8c"],["/categories/React/index.html","faf5e5a55eca2a623288f13fd00c8d97"],["/categories/UI/index.html","dbacd944f1ac0a3a8a0444df7c2f89ac"],["/categories/Webpack/index.html","87ec549bd08188b98d1ab2f712fe2fe2"],["/categories/index.html","9b7734070e80d9992ffa914a0065fbe6"],["/categories/关于我/index.html","7bdcec3f387fa60661219f82279f4a93"],["/categories/吐槽/index.html","f376e8f1d859dc3933ce0fc637a59d98"],["/categories/微信小程序/UI/index.html","9830242a70f44002201c45ff2457ea3b"],["/categories/微信小程序/index.html","1c57bbbb4033c3d8065b29102a9ad502"],["/categories/我爱的人/index.html","e7afb002db2ed7ee1b28f3a171fbd90b"],["/categories/浏览器/index.html","be9e6746b50f9c327820d0c2a0856bba"],["/categories/计算机组成原理/index.html","3145a101308a3acdea23e3787afef31b"],["/categories/设计模式/index.html","ed7cdef33f062a8ac231963e9867053d"],["/categories/阅读/index.html","84e04080d92b96c08c61b25a9012e3b0"],["/categories/面试/index.html","306c8606b1d5b46d61fe48b5aa8f4985"],["/css/index.css","36ff887d49c3e17a77993f65eef2adc2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","59b6bee42a07cf178eeaf598ac74d66f"],["/image/icon.png","08bbe941048aa814db7f4a803dfdf9fa"],["/image/icons/icon-128x128.png","cdc0f6116ff7959a040575e1997e2f1b"],["/image/icons/icon-144x144.png","cb7b23bf400ff70e572f933f0adceea1"],["/image/icons/icon-152x152.png","7dfcc63d3401db6c149c1d307011c4d7"],["/image/icons/icon-192x192.png","cbf563433e0d82e96aeeb02a30faeda7"],["/image/icons/icon-384x384.png","80e94dce0fa6e65c4cb348a83291233a"],["/image/icons/icon-512x512.png","8fa6d411e2cde7bebf3b3d14f81f5617"],["/image/icons/icon-72x72.png","1fbb6a95c00acd34451ad7a31d702586"],["/image/icons/icon-96x96.png","c6e771a46ef126eb2f7a926b8eb69299"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","39668a137a8111879b2cc5cca8e1c307"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["/js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/links/index.html","77de51ba96d4492b93f4285c7efcc740"],["/page/2/index.html","8a1e7a411de419651fc95b551b6db56c"],["/page/3/index.html","505d9f26df502b6ad227a039906f5cf4"],["/page/4/index.html","feddd51bcabea8661c9952301b2e45c0"],["/page/5/index.html","6277e8d945132b18a96dc7502162edb3"],["/tags/Bug/index.html","f7f808aa3aae022436b3b93c6c0cc2ff"],["/tags/C/index.html","ec44bad233a00ca59e148f02e43a4d42"],["/tags/CSS/index.html","3514c56f07766b85457d2429efd3a598"],["/tags/Canvas/index.html","01e33c8d8c5aa16034e80a380ba48e34"],["/tags/Git/index.html","948b48b5284393754127504bd9e2f1f3"],["/tags/HTML/index.html","aef3437b5db94b3b3fba8d69fa9c5d8c"],["/tags/HTTP/index.html","168f346772564714261f69277ade58e9"],["/tags/JS/index.html","c7b8ff5ba31dd0de74a0d420c570e45a"],["/tags/Javascript/index.html","dfa2af2efec590fddd93fc091ad05c23"],["/tags/Node-js/index.html","55f38ae2475ea4b787fda10f65b154f8"],["/tags/Parcel/index.html","25041a71037b1dead5c447eada81a1a7"],["/tags/React-Native/index.html","5068da6e74c1b46ae963051bb7cdd574"],["/tags/React/index.html","583eededdf2a9f09c90a8dffa9eee8ba"],["/tags/UI/index.html","9f3c2a047243f06b40f051dc9ac2af0c"],["/tags/Webpack/index.html","0c9bd57879b0dfe8715e1417a8efd550"],["/tags/index.html","671513596de32c80f65f25ef71d8a7f0"],["/tags/上机/index.html","a6112b3c2606baf0c797bba464b82cf4"],["/tags/前端/index.html","9f5e3650be7afb42ae4a5af9010e9198"],["/tags/前端/page/2/index.html","6f6953d3e75e5c89f72113536bc07b46"],["/tags/前端/page/3/index.html","5e6c57ba9d673c061d8768424575eeec"],["/tags/她/index.html","4ba2968757815e445d6882476d61140f"],["/tags/学习/index.html","834bb6653c6baddb4bb0a218975445a2"],["/tags/微信小程序/index.html","4a93fb754b9e3ee6646095b8825b53dc"],["/tags/我/index.html","b22155658647e88776600260f31ffe44"],["/tags/浏览器/index.html","f688f66e63be21e983db6b7c4029432e"],["/tags/源码/index.html","9263f353f58753e7f455c5f2369b62e0"],["/tags/计算机/index.html","659bae7915013b9851eaed1c1239b994"],["/tags/设计模式/index.html","2f9e5aa1657493df925f77c670733177"],["/tags/阅读/index.html","3d225b459b65ebbe0294562c7840e145"],["/tags/面试/index.html","e0a5bb722462753e91905e9d2e154712"],["/timeline/index.html","b37f060e0939d72d29052f7dc6ab5df7"]];
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







