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

var precacheConfig = [["/2017/04/20/addone/index.html","625a089d0d84017177a04f6ddd4074f7"],["/2017/04/20/gwyhArticle1/index.html","d4af11044633b5d4351dc665a36199b0"],["/2017/04/20/gwyhArticle2/index.html","ad1c1b4a6cb98b545959b978e236e9b8"],["/2017/04/20/gwyhArticle3/index.html","b7f9c993523903f9bc93c6240a42d12d"],["/2017/04/22/C-2016上机题/index.html","21dd88e87019a7da5dd74e318ca9d0e9"],["/2017/04/22/css垂直居中/index.html","25fa8866d18873fb31fe30a96177d1e8"],["/2018/01/03/2017自我总结/index.html","aa222bbc5b89ea9589f27f9357ce1465"],["/2018/03/13/React-Native实现NbaApp/index.html","51a20e26ff1ab17786cf5c69061ec00e"],["/2018/03/13/React在线编辑简历/index.html","2a8f0ff011919e1ff16caccffd10238f"],["/2018/03/13/微信小程序模仿网易云音乐/index.html","a0ea817766407bc250cca0a40a2ba69f"],["/2018/03/14/CSS实现文字打字动画（-1白话讲解）/index.html","5ba6fa3a60e6018f199b0a31891e7f9a"],["/2018/03/14/一道简单面试题理解JS事件机制（-1白话讲解/index.html","1c844c6073501d022a3d90bb0ceafd2c"],["/2018/03/14/浏览器从输入URL到页面加载过程（-1白话精简讲解）/index.html","28ad2f369ed1ab63e3ac28468af66f5a"],["/2018/03/15/简单CSS实现闪烁动画（-1白话讲解）/index.html","e02d208d5137ae789575db43b30b4e9a"],["/2018/03/16/React生命周期简明宝典/index.html","f2445e758c3d61a80b13d352761ad6ce"],["/2018/03/18/HTTP状态码简明宝典/index.html","1889ac207993a587bc839c3b55ca331a"],["/2018/03/19/吐槽-学生把代码作业放到博客里有错么/index.html","51c04dae49bca837efed95e9de2de3bd"],["/2018/03/23/CSS人人都能写自定义Checkbox（-1白话讲解）/index.html","9426c314fa856ec980e82da58ddf739d"],["/2018/03/24/纯前端实现gif制作/index.html","d7e221aae03ff8b90e4b4dc9bf1e9db1"],["/2018/03/25/Parcel上手与React开发环境搭建/index.html","f22ad67ebeccfe02bf7d9d5f56a68d41"],["/2018/03/27/Canvas模仿草莓音乐节宣传视频/index.html","4c4082d0afc81ca4c41ae783a141d8c4"],["/2018/03/27/和SetImmediate小姐那销魂的一夜情/index.html","a430606b1d46b744600ec84bdb92fd41"],["/2018/03/28/Webpack配置讲解/index.html","cd67d33fcd91fc717c2792678712eb97"],["/2018/03/28/深入React知识点/index.html","66fbcaa333d2c83ec4ae344cea84ea12"],["/2018/04/03/一个前端开发者的自我折磨-UI/index.html","50e88750102d80e00fb6e217b1a7d2e9"],["/2018/04/07/微信小程序实现折叠展开菜单/index.html","bae68624f7ff5a1cf28f40708fc6bef2"],["/2018/04/12/JavaScript设计模式/index.html","5a167ce4c22d0280347495bced302436"],["/2018/04/13/一次简单的搜狐电话面试/index.html","3621d6e8996eb7c7b9c23f528e39c421"],["/2018/04/15/Git-Camp-简明Git入门-笔记记录/index.html","2136f4104457f83b799dabd75a28783a"],["/2018/04/16/MVC-MVVM-MVP/index.html","5dff0bbf8abf175004e78b6d5276ac39"],["/2018/04/18/React源码阅读-1白话/index.html","51ef7e34e07919f0aaeac10d93f8cc4e"],["/2018/04/22/自写一个react-like项目/index.html","9464850149ea793baa75953a634c7026"],["/2018/04/25/关于在mac上使用vscode编写markdown出现控制字符问题/index.html","60f0f640336ef650624e7a57146d2a4a"],["/2018/05/03/我在写微信小程序时的一些小技巧/index.html","95f0aa9c9ef748510cb9cf6b766eeaea"],["/2018/05/05/计算机组成-程序的转换及机器级表示/index.html","3047d5ce472839c520bb4e9ee5cca9a3"],["/2018/05/06/ICS2017-Programming-Assignment-2-2-2-3/index.html","cce08a2f22698ef2f2e6ca273e976500"],["/2018/05/06/从“零”开始-：Spring-MVC/index.html","9a68daf4efff920c96431f0eb9f6034c"],["/2018/05/06/前端开发者如何快速的把UI撸出来-讽刺版/index.html","32def83ff88ce369d8bd3c5cff71cf49"],["/2018/05/07/你需要知道的JS高级技巧/index.html","8189c7ebd2434a45d8b8f8159089b5dc"],["/2018/05/15/create-react-app的webpack配置阅读/index.html","edcf9f7fde481f6c1e5957e87a83d04c"],["/2018/05/31/大二杭州有赞前端电话面试/index.html","e5d7f54bebe9cb01155e2c33fe771b1d"],["/2018/06/04/一些感想/index.html","eb11691fb3d8916b2860c82bf688919e"],["/2018/06/07/Js技术题自写/index.html","c8c1d00393a2acabc2b458012a536465"],["/2018/06/08/关于页面切换后setInterval出现延时问题/index.html","f1e20ff9df109b30493781fb994dac1a"],["/2018/06/15/软件杯H5端-视频尬舞机-开发记录/index.html","8c5abafb0fdde5af7a2b202808dad9bc"],["/2018/06/24/Javascript引擎之属性访问优化/index.html","e966e56a9d2f502445229f4772cd28c7"],["/2018/07/19/Promise精读/index.html","4b531b58eac2f59c5bb4eefbfa288ab8"],["/2018/07/19/async-await通读/index.html","aeaf366bf71bedf3978c285bc674e236"],["/about/index.html","f56fc0112ae1ca1f224387b1d36b1f9c"],["/archives/2017/04/index.html","2787db13b11fae5ee486a0c35a647167"],["/archives/2017/index.html","3ef5cf216bc0ec4ed86b4f0b42d9548f"],["/archives/2018/01/index.html","8cf1584735e0c6347f925ba13dd66e35"],["/archives/2018/03/index.html","304e06d41e50a70b47347c89a874e632"],["/archives/2018/03/page/2/index.html","a1bd6fba910eb185aca156acc476f578"],["/archives/2018/04/index.html","d0256d42c9033b2209587e5523c98b02"],["/archives/2018/05/index.html","dbea7feb36db316cd75aa7a302e5c0be"],["/archives/2018/06/index.html","a34fe55ce3f4060208ddbf676f2a8800"],["/archives/2018/07/index.html","a2f5edb5a76657d32a531332a7891413"],["/archives/2018/index.html","d62ebb04b28dee0a495407f4d36d86a3"],["/archives/2018/page/2/index.html","1d567efe849e3e9591d06a1b2cb8ccb1"],["/archives/2018/page/3/index.html","39e41fe57667bca2219eaf1ad89f8d06"],["/archives/2018/page/4/index.html","8fd1658924f1b453617cc0497b2f3c0f"],["/archives/2018/page/5/index.html","9eb3220d0e350044ee836e0428c57045"],["/archives/index.html","2faa55cad06247d61024b55250dfa2fc"],["/archives/page/2/index.html","abbbaa5c222b0d75203c8cdbb54e20e0"],["/archives/page/3/index.html","0e7d4d21bb3f3bd8ce312100c2f297c8"],["/archives/page/4/index.html","af6f68774c8fbb8299a35311fbf622fb"],["/archives/page/5/index.html","ff2f1448decccb1d5a0ecf24c7738c6d"],["/categories/Bug/index.html","be080010fa71c0cc4280d8e047689f1a"],["/categories/C/index.html","c1b7d5c6ab85235a85e72be92c681194"],["/categories/CSS/index.html","ce160700036611874ed50a518b3de235"],["/categories/Canvas/index.html","48d144c5e23cb517933254502c0eeb2c"],["/categories/GIT/index.html","dc2ad43ea0ce84a18f24ecad12067152"],["/categories/HTTP/index.html","2a4879f9c09ec3f6c561cb85fe5390ae"],["/categories/Javascript/index.html","0a96a2cab7315985714292dbfdafb002"],["/categories/React/index.html","dff0685fdf63c42660b2dcc285e3b198"],["/categories/UI/index.html","979d84f71ae9cfd1d66b77b8b299994c"],["/categories/Webpack/index.html","430ae4018cb0cc028c0d4e6705d1997a"],["/categories/index.html","7ba2799af0c02609377f8edba468ba67"],["/categories/关于我/index.html","575f2c3e9b53773e086255ccab7f2e7a"],["/categories/吐槽/index.html","594714d89feb20b1be517714f18c4de9"],["/categories/微信小程序/UI/index.html","a744e4cf5a012bccdee55db756cb3244"],["/categories/微信小程序/index.html","a26adef79e6cf7fab02e46cbfc4e5452"],["/categories/我爱的人/index.html","cdb9e27699555189ffd76b85f89f9542"],["/categories/浏览器/index.html","9e3ab27cc26507a7d76f1ce7eedcd36f"],["/categories/计算机组成原理/index.html","928fc2f36a94b1e47b2ac9258ee01f51"],["/categories/设计模式/index.html","ff4d5ce119f5fd618cf0ccd2092d67d6"],["/categories/阅读/index.html","ca7f43af7464bc7d2920e7299c4c531b"],["/categories/面试/index.html","c3ba1f4d46a276e6b61f112e3a92f509"],["/css/index.css","1814a1fff4f2ea28c5698a50d1f49f86"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","4d47c41767be3f5278d260df5c08bcad"],["/image/icon.png","08bbe941048aa814db7f4a803dfdf9fa"],["/image/icons/icon-128x128.png","cdc0f6116ff7959a040575e1997e2f1b"],["/image/icons/icon-144x144.png","cb7b23bf400ff70e572f933f0adceea1"],["/image/icons/icon-152x152.png","7dfcc63d3401db6c149c1d307011c4d7"],["/image/icons/icon-192x192.png","cbf563433e0d82e96aeeb02a30faeda7"],["/image/icons/icon-384x384.png","80e94dce0fa6e65c4cb348a83291233a"],["/image/icons/icon-512x512.png","8fa6d411e2cde7bebf3b3d14f81f5617"],["/image/icons/icon-72x72.png","1fbb6a95c00acd34451ad7a31d702586"],["/image/icons/icon-96x96.png","c6e771a46ef126eb2f7a926b8eb69299"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","2c8eea9b1160d4aed0601e44dcfa7af6"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["/js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/links/index.html","b14778114049d74898d2636e87383704"],["/page/2/index.html","f89f702b4462bf030a4edb10ea210274"],["/page/3/index.html","383d551bfc0935252c7bf09d1f27458b"],["/page/4/index.html","77beecd0926bb61d3005feba1869b393"],["/page/5/index.html","6101aa1799e5cc205126dc4b0c3fe19a"],["/tags/Bug/index.html","22e7ee56b140d77f148302f21ec906f6"],["/tags/C/index.html","5cfc9948cd2b6b56b6de87ea50055c4c"],["/tags/CSS/index.html","9317a4776bced8a13b9416719d5be8bf"],["/tags/Canvas/index.html","640623f8726172f64f5391d31a43b7ff"],["/tags/Git/index.html","50328797731ba20c8587fdbde0406a8f"],["/tags/HTML/index.html","e906c3a8d0cc2780f3a63828b998ebc4"],["/tags/HTTP/index.html","cb0ce52a18303de223e5315f594d5703"],["/tags/JS/index.html","8446932d13250aeb32b1b56bbbed9b42"],["/tags/Javascript/index.html","193d7f56359495f0bdc36b6761a4f2c4"],["/tags/Node-js/index.html","b35670f48cd32cdee4d4e3a2ffb489ed"],["/tags/Parcel/index.html","2981a007f2ba85793dfb46dfe8f2c3f1"],["/tags/React-Native/index.html","e200712d9c91eac7373ebd4d73ac270a"],["/tags/React/index.html","3063f650a816acaadee263d4e15fcc97"],["/tags/UI/index.html","ea7ec2c28568bdeecb73a3010201f351"],["/tags/Webpack/index.html","bd14b6781d64af578bf3ce6c713d31e7"],["/tags/index.html","fd60acdef0ced4bdb95e223511a2d1f1"],["/tags/上机/index.html","45d7a61ec1bf3315cb99e0b5de49fae8"],["/tags/前端/index.html","012538fa9a5c587bbaafda2cb394947a"],["/tags/前端/page/2/index.html","c8486f303e7a4ae5d73777ca41501f1c"],["/tags/前端/page/3/index.html","6a94cffcdd233df057d121dbc4330049"],["/tags/她/index.html","5232acf85487a09e62cde061957fd33d"],["/tags/学习/index.html","8fdba338bfee499044a07b73dc97740a"],["/tags/微信小程序/index.html","21283afa52cf509cd417b1ad2b7c0687"],["/tags/我/index.html","2b99aba24a20ea5cd6cc93c7ca72e843"],["/tags/浏览器/index.html","0cd10e29cc93b1d779296aa300703838"],["/tags/源码/index.html","707bd4c399c1d7f4f09798d1cf4820b2"],["/tags/计算机/index.html","9972829583aa6cdaf5d3b00073cb1e2c"],["/tags/设计模式/index.html","9d1527fd483fba6100e3c083b27cd3f2"],["/tags/阅读/index.html","ee3d88318a45186cab5dc81f59b130ab"],["/tags/面试/index.html","214eb99a76a9a89e9e5ca8b823532716"],["/timeline/index.html","72a76e2229fd08d76ceb7ba41af34400"]];
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







