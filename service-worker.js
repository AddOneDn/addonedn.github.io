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

var precacheConfig = [["/2017/04/20/addone/index.html","45eaf3277dccaab29df30d305c9dbe2b"],["/2017/04/20/gwyhArticle1/index.html","62eb7786751254e91968631b7d60edd6"],["/2017/04/20/gwyhArticle2/index.html","4d7822857e0ff6753cb7da11568e0ebf"],["/2017/04/20/gwyhArticle3/index.html","a1ed1aec15bd6c29f7138271afaff871"],["/2017/04/22/C-2016上机题/index.html","bdd702c19c92d129ecc869a3aa20d8cf"],["/2017/04/22/css垂直居中/index.html","f436ac8a01b95fa74821298c5d69a333"],["/2018/01/03/2017自我总结/index.html","65db3cb8103f843006965f5a776e4424"],["/2018/03/13/React-Native实现NbaApp/index.html","f789d06c303c090a37760875cfe041d9"],["/2018/03/13/React在线编辑简历/index.html","d3a276729f3f4fe29d6ca8d05848a081"],["/2018/03/13/微信小程序模仿网易云音乐/index.html","10d76b128b6af227e750f66c517f3731"],["/2018/03/14/CSS实现文字打字动画（-1白话讲解）/index.html","88a773a3d686c8bb03ca077dc401d029"],["/2018/03/14/一道简单面试题理解JS事件机制（-1白话讲解/index.html","2d6ecde70678d25369234cc30c6053a5"],["/2018/03/14/浏览器从输入URL到页面加载过程（-1白话精简讲解）/index.html","d9556735b8f6c0fee257ee2b68a11015"],["/2018/03/15/简单CSS实现闪烁动画（-1白话讲解）/index.html","72187f4bde3a8e0892730acf7a27c336"],["/2018/03/16/React生命周期简明宝典/index.html","19502a59c4395d8b8368c464319f9b06"],["/2018/03/18/HTTP状态码简明宝典/index.html","f6f5356960bfc94d97d576a47d2af7de"],["/2018/03/19/吐槽-学生把代码作业放到博客里有错么/index.html","5b750248e548542dfc57a6fb6e629169"],["/2018/03/23/CSS人人都能写自定义Checkbox（-1白话讲解）/index.html","52129226bf973a7eb40eb7abc59e691b"],["/2018/03/24/纯前端实现gif制作/index.html","c13e7bac74f576af6f2b47cae20506e7"],["/2018/03/25/Parcel上手与React开发环境搭建/index.html","59fd686161e911618ef2d358fcf27ee3"],["/2018/03/27/Canvas模仿草莓音乐节宣传视频/index.html","1cf3d49256273f7d228ec0e471737034"],["/2018/03/27/和SetImmediate小姐那销魂的一夜情/index.html","5f05fe0696cc8ede5853295cb34ff839"],["/2018/03/28/Webpack配置讲解/index.html","7d57a66548d3b2b26a4fad7dcec7a1e1"],["/2018/03/28/深入React知识点/index.html","00e69dc37b17e2154d72496d3a693853"],["/2018/04/03/一个前端开发者的自我折磨-UI/index.html","3864f29c4c4abb5591a3e6ab3ea46c8a"],["/2018/04/07/微信小程序实现折叠展开菜单/index.html","55f6768e3080ab7764c26f60b2bfa760"],["/2018/04/12/JavaScript设计模式/index.html","a92948964b78c7151b9e9fbec10cc7e4"],["/2018/04/13/一次简单的搜狐电话面试/index.html","1ff4f0d17210f1b8a086734429402e55"],["/2018/04/15/Git-Camp-简明Git入门-笔记记录/index.html","3641c614d50f241b6841b2fca546e177"],["/2018/04/16/MVC-MVVM-MVP/index.html","dde97af0f4015f5a201df9684d06da3b"],["/2018/04/18/React源码阅读-1白话/index.html","b8133d3a8f433af2425b7487f76e8e39"],["/2018/04/22/自写一个react-like项目/index.html","04a598ba5845d893ab755bd3f1be4388"],["/2018/04/25/关于在mac上使用vscode编写markdown出现控制字符问题/index.html","ccc78837e18f28de36357aec718039f1"],["/2018/05/03/我在写微信小程序时的一些小技巧/index.html","37c0e6c33d60bb5a696684f09a9f1ce2"],["/2018/05/05/计算机组成-程序的转换及机器级表示/index.html","5973d3140764966d9bdeff1ef526c8ab"],["/2018/05/06/ICS2017-Programming-Assignment-2-2-2-3/index.html","96b285f1e51195396eda3f6755e7dae9"],["/2018/05/06/从“零”开始-：Spring-MVC/index.html","d82368108b3d2ec867f8a63ce5d9c71c"],["/2018/05/06/前端开发者如何快速的把UI撸出来-讽刺版/index.html","4bbebbed112ad2667b02839ba9c165b0"],["/2018/05/07/你需要知道的JS高级技巧/index.html","928bda7ea607cdb82a5322438256b468"],["/2018/05/15/create-react-app的webpack配置阅读/index.html","9f3c2adf1d131177c0be2953d2e253ba"],["/2018/05/31/大二杭州有赞前端电话面试/index.html","d02f8de549a106ecd8d58ed99d0d389d"],["/2018/06/04/一些感想/index.html","4be1684b65b37039f47159179cbaecd4"],["/2018/06/07/Js技术题自写/index.html","86cada3f9c790cb8637a8fa7c4cd4c85"],["/2018/06/08/关于页面切换后setInterval出现延时问题/index.html","f5d40025cdb350f7520f1e0f622b3e02"],["/about/index.html","e65f2470ce20c4cafaf7aff80f668b6d"],["/archives/2017/04/index.html","31997c09de96a34333670c3210553a8f"],["/archives/2017/index.html","7f449bdd8999600d7f9c2413bfae9c5d"],["/archives/2018/01/index.html","d695eeeb27ffbeb9a287e640a5c26c54"],["/archives/2018/03/index.html","1d0ea9db0bea7f1afaa25a232d05a8a2"],["/archives/2018/03/page/2/index.html","9a836ffa29cb7d856a53d39b018258bd"],["/archives/2018/04/index.html","0704553c9da6ba71350e6e597897567a"],["/archives/2018/05/index.html","2b75e0d28dbdf5d6d54b6dd9f1b01d1f"],["/archives/2018/06/index.html","fe44e3670a41ee575eb48ec1882d784c"],["/archives/2018/index.html","ca426668faf9c0b2e89c56466b7decda"],["/archives/2018/page/2/index.html","54ffe68e84d77dc19c7cb028b2055e25"],["/archives/2018/page/3/index.html","63e15afbe228a96344c4f9921395e16b"],["/archives/2018/page/4/index.html","a9e3afe1fa05d00cc59e4cf07f59cbf9"],["/archives/index.html","5837985af21415082db324dd52087f18"],["/archives/page/2/index.html","61b91aac144a742753b2e8251a9eb7f2"],["/archives/page/3/index.html","26cdc23849a7480445b18a3cd4cc660e"],["/archives/page/4/index.html","1982f3dd583afb53ebf965ab2b9dcea9"],["/archives/page/5/index.html","e2d6164de53a66e74a16974571255971"],["/categories/Bug/index.html","ce0b18ed193642855749d8816d2f0dc0"],["/categories/C/index.html","694211100c391c86292711fe1fa43958"],["/categories/CSS/index.html","0d54b6586bc066df60dd1a84cdf58809"],["/categories/Canvas/index.html","e5a8b848dd58a37c34e4c29da3ea1a2d"],["/categories/GIT/index.html","fa8e57b73ee2377089d7828fd1669f73"],["/categories/HTTP/index.html","550f51be75a493f2f7ec33b2185f0c90"],["/categories/Javascript/index.html","9f3abf846d805db3ff84f279cd0bd974"],["/categories/React/index.html","3486f31642cd975e21167b15702f5372"],["/categories/UI/index.html","1c994b3f542937f0bd7dd5c3d4a9aee1"],["/categories/Webpack/index.html","5c8b29cb82472e1723ffe3c0c6acad2a"],["/categories/index.html","35bc2729081335ab583ce9daf3a4e1e7"],["/categories/关于我/index.html","b20a89d579e0bf361d3d2723bc04dbce"],["/categories/吐槽/index.html","f82d47669fc4d3d764f52caa875e136d"],["/categories/微信小程序/UI/index.html","2932f347a33bca8611679a17423b1f00"],["/categories/微信小程序/index.html","63d37cf00b805cdb9caa33d4c45e984f"],["/categories/我爱的人/index.html","747f37f49e142db265b2244a11522915"],["/categories/浏览器/index.html","913699d23b854a664d36dc37901757e9"],["/categories/计算机组成原理/index.html","e5e52fcfd2f95a40378f8af5646005dd"],["/categories/设计模式/index.html","1e112652d71e6b347c42f66f1a845256"],["/categories/阅读/index.html","7991f20637356125619569d442252ad5"],["/categories/面试/index.html","7d62de11ce608a33ab4da52fd9963edf"],["/css/index.css","048c62123fccd97e515e98cb0a74fb3a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","522b8e62aef6d1ef18144d24254a2fdd"],["/image/icon.png","08bbe941048aa814db7f4a803dfdf9fa"],["/image/icons/icon-128x128.png","cdc0f6116ff7959a040575e1997e2f1b"],["/image/icons/icon-144x144.png","cb7b23bf400ff70e572f933f0adceea1"],["/image/icons/icon-152x152.png","7dfcc63d3401db6c149c1d307011c4d7"],["/image/icons/icon-192x192.png","cbf563433e0d82e96aeeb02a30faeda7"],["/image/icons/icon-384x384.png","80e94dce0fa6e65c4cb348a83291233a"],["/image/icons/icon-512x512.png","8fa6d411e2cde7bebf3b3d14f81f5617"],["/image/icons/icon-72x72.png","1fbb6a95c00acd34451ad7a31d702586"],["/image/icons/icon-96x96.png","c6e771a46ef126eb2f7a926b8eb69299"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","5ecfe37f4bfab28ad2d9dd1a3c70447b"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["/js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/links/index.html","33a24eb94e313dfef188a3cdd45fccfd"],["/page/2/index.html","a09ec8097ba5f99a7fd0eaf85d7fdbe5"],["/page/3/index.html","7f61149f65c1a208028576cf823f44b0"],["/page/4/index.html","7d237c238ff253caee51e7175f0ea789"],["/page/5/index.html","3c18eda9751dfea52764e108f3655bf1"],["/tags/Bug/index.html","dbffbe8b6baf0b68b2da93d83bc98eb5"],["/tags/C/index.html","7486554ff30c2f728a9f02bdc589e04d"],["/tags/CSS/index.html","ba4e071052e19dd1a0878a71130b7420"],["/tags/Canvas/index.html","fc4fb020a3711f29ca7f0e0f8a2aa465"],["/tags/Git/index.html","d8fdf2cdbf6953bacd2f67f0d62f4d17"],["/tags/HTML/index.html","a32a82fdd78b30f05314576071be4bcd"],["/tags/HTTP/index.html","c715883f4ab16bb68d7c43db178ebb82"],["/tags/JS/index.html","6565336913733af27bddda2921d767ca"],["/tags/Javascript/index.html","d288f53ba932b8f96b3035a4a2322227"],["/tags/Node-js/index.html","fde7ed1b97868b2128859eed4c1535ab"],["/tags/Parcel/index.html","ad82100b430b8dfdd0e1b04e36fa3d35"],["/tags/React-Native/index.html","f1a727283e723c230b9817381f54add2"],["/tags/React/index.html","0ad3729bf4681d778b41b0adafa00681"],["/tags/UI/index.html","031ee2e38abc15fa49cc2213f187bc31"],["/tags/index.html","b8017bf304b5d9171e085c0ec450c2f2"],["/tags/webpack/index.html","d0c60329a2560e1eb6afc30ac67afd9a"],["/tags/上机/index.html","7dfcf5cd6c8d19fd73087ce73cc56771"],["/tags/前端/index.html","468c9e4d09e9b8857f88ed9a4f756fe3"],["/tags/前端/page/2/index.html","a28109e39adaa2239b6c42219a395e48"],["/tags/前端/page/3/index.html","c442a068372bda069818d1b678e44cb3"],["/tags/她/index.html","b1f8c39358e31f453775492b3f0d0d12"],["/tags/学习/index.html","8212f43ee0575c2becc723e6fe172567"],["/tags/微信小程序/index.html","3a8cf0e55344bfcf0a68d26ae5fade8e"],["/tags/我/index.html","8ffcc2a826d5dec6eec91f0e60fec0e9"],["/tags/浏览器/index.html","60ed729db9d527a43ee5a9b514e15539"],["/tags/源码/index.html","fa02f01bc22bb562caff5aaa2972f92b"],["/tags/计算机/index.html","474c1df1e8f97d769e2fd0c14fc6dca7"],["/tags/设计模式/index.html","0daf9039cb2d3ad746d949bed0bb92b1"],["/tags/阅读/index.html","7107a3cfae9603d22e6d183da8eccce6"],["/tags/面试/index.html","ec4c7aa04d3be5eb158c3e4b057bbc4f"],["/timeline/index.html","2b600726e531e3fe598bc87b7d198299"]];
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







