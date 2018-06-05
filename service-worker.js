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

var precacheConfig = [["/2017/04/20/addone/index.html","986433b21900415901dd94eb47ad1c7a"],["/2017/04/20/gwyhArticle1/index.html","31eac8faa5b4cd058b6da9a6c0231c9a"],["/2017/04/20/gwyhArticle2/index.html","8cddf59f334ecefffb97f2b761b25c5a"],["/2017/04/20/gwyhArticle3/index.html","0c6587371b27438162a56fca7c1da2f1"],["/2017/04/22/C-2016上机题/index.html","f64ad6738e1e6f7eb05252f6c088666b"],["/2017/04/22/css垂直居中/index.html","48ce97abc7ca5c8b5f0b071adb76a5b5"],["/2018/01/03/2017自我总结/index.html","0242eb09fa1a334ecdb2a29c95dc2b63"],["/2018/03/13/React-Native实现NbaApp/index.html","cb135efe032a97c295b5be5951f5d486"],["/2018/03/13/React在线编辑简历/index.html","2baafcedb5972e3bc262c609a84fc76e"],["/2018/03/13/微信小程序模仿网易云音乐/index.html","1fcba26fdac8d96c4c6f298fc8a38bc3"],["/2018/03/14/CSS实现文字打字动画（-1白话讲解）/index.html","52d8e2e8605a14ac09278158a16c96fc"],["/2018/03/14/一道简单面试题理解JS事件机制（-1白话讲解/index.html","e2b1543145eaf490870d45cc943b256e"],["/2018/03/14/浏览器从输入URL到页面加载过程（-1白话精简讲解）/index.html","3a49c1ed9afbf2c1f6d300f0e927fc99"],["/2018/03/15/简单CSS实现闪烁动画（-1白话讲解）/index.html","71c80f725fd985aee71bd322ca2334bb"],["/2018/03/16/React生命周期简明宝典/index.html","caf1ef8d176bb3d097c594879a8075e6"],["/2018/03/18/HTTP状态码简明宝典/index.html","0e5ddd3eae68ade2f5f3ff7f86698ac4"],["/2018/03/19/吐槽-学生把代码作业放到博客里有错么/index.html","48652c066a9ea3ce222a0e64e8ff5a9b"],["/2018/03/23/CSS人人都能写自定义Checkbox（-1白话讲解）/index.html","aad94726252473c36c97e9c2a28fe5f6"],["/2018/03/24/纯前端实现gif制作/index.html","65e4887be188403d821306ad67c21dd7"],["/2018/03/25/Parcel上手与React开发环境搭建/index.html","bd921ea898570895697a99ee442ad004"],["/2018/03/27/Canvas模仿草莓音乐节宣传视频/index.html","c695ebab000db79eb58a3a0af56a85ef"],["/2018/03/27/和SetImmediate小姐那销魂的一夜情/index.html","4f2dfb4e2df730d4e38c0fc3e1f08f96"],["/2018/03/28/Webpack配置讲解/index.html","0acb0035b4fabce8c97a4bb0f622cf8e"],["/2018/03/28/深入React知识点/index.html","41b3e48fd66431cfc42471988393fecb"],["/2018/04/03/一个前端开发者的自我折磨-UI/index.html","540571aca53a0baa486c2797d0743696"],["/2018/04/07/微信小程序实现折叠展开菜单/index.html","87478062a1a7550927cae0d531318b47"],["/2018/04/12/JavaScript设计模式/index.html","15a884291a830226abe2cfec76228ced"],["/2018/04/13/一次简单的搜狐电话面试/index.html","d63c6dccaa171c701679731ed6d45b79"],["/2018/04/15/Git-Camp-简明Git入门-笔记记录/index.html","c568e1fbaf754b4171815674b7b6e566"],["/2018/04/16/MVC-MVVM-MVP/index.html","970c095322c830f5b2beb32c165a3a95"],["/2018/04/18/React源码阅读-1白话/index.html","42d5306251c7cb40945f425777567eb8"],["/2018/04/22/自写一个react-like项目/index.html","2d6c0825e4a96528c166e556b8c6006f"],["/2018/04/25/关于在mac上使用vscode编写markdown出现控制字符问题/index.html","47937a0ed687bfdd6833ea04b438feaf"],["/2018/05/03/我在写微信小程序时的一些小技巧/index.html","84047d8d9ffc3bba8bc2fd31407a696f"],["/2018/05/05/计算机组成-程序的转换及机器级表示/index.html","e5f8923a5085b3498b14a2dd82df811a"],["/2018/05/06/ICS2017-Programming-Assignment-2-2-2-3/index.html","490dd27616f3d02b44b99213c3f1317b"],["/2018/05/06/从“零”开始-：Spring-MVC/index.html","b4e34a689ae29e135e4667f360911b22"],["/2018/05/06/前端开发者如何快速的把UI撸出来-讽刺版/index.html","c22218ef737ddaf0eca8acddaab71e29"],["/2018/05/07/你需要知道的JS高级技巧/index.html","7cb71aa0b75814003359dab75d7170c4"],["/2018/05/15/create-react-app的webpack配置阅读/index.html","d9b4e931da5c4183a6b87e103d81103c"],["/2018/05/31/大二杭州有赞前端电话面试/index.html","0e28c84b93ee271b42902a7bc2394fb3"],["/2018/06/04/一些感想/index.html","c4ba5982c5f5f55c0a7b392de98b89a9"],["/about/index.html","fced78d2bea6a0567dd2c67189f8dc19"],["/archives/2017/04/index.html","0a2ca429753fa500bfeede755d2386b2"],["/archives/2017/index.html","3edc6f383e48a28889cdd463ff53d3b6"],["/archives/2018/01/index.html","231c21ddba854721be8bbd09f506472e"],["/archives/2018/03/index.html","d7442472a44e5799bef422655dcf6876"],["/archives/2018/03/page/2/index.html","4df0a9a335f2c5cb8e9d156dbd88ef77"],["/archives/2018/04/index.html","90a9417d04ceed85a6a4207ed436528f"],["/archives/2018/05/index.html","63e8ec12ddbb68c3271c2f944f2d611f"],["/archives/2018/06/index.html","20a32f90b820736389a7ed4fa877f810"],["/archives/2018/index.html","41f584040a72829171c872ba8ef4a04a"],["/archives/2018/page/2/index.html","938031bd6ef2e151d34646227484d028"],["/archives/2018/page/3/index.html","23fab428ad3c2d3cda167d4bde3c4956"],["/archives/2018/page/4/index.html","dab9a151bbfea8cd07b79da74c3dcb58"],["/archives/index.html","f3a2cf9416a0c62bf6fb1acd291735b6"],["/archives/page/2/index.html","1148cda7406b0ba6a646012a881bec26"],["/archives/page/3/index.html","2822b7e46090a237f5d572525f26e5c0"],["/archives/page/4/index.html","a242d4e1db27a4f5381089e3cf269dcc"],["/archives/page/5/index.html","93e69f3e72facf3877abf14bd913109b"],["/categories/Bug/index.html","88590c455d999da35ad6329cd3285296"],["/categories/C/index.html","2b7cff893fc0b5afca4e954e842e01df"],["/categories/CSS/index.html","bec7d97eccc6fdcc47f7c90684e8be69"],["/categories/Canvas/index.html","6fea557eea9c83e6ba3b6b0a04f09365"],["/categories/GIT/index.html","846ca521c82977c0eaa484df45e2ac8e"],["/categories/HTTP/index.html","c2d43f828c27fbe68b277eec71371ffe"],["/categories/Javascript/index.html","1b060353acdb1a485f79fbbe8d8748a6"],["/categories/React/index.html","b2184473f096e8febfeb50ac18ca9e56"],["/categories/UI/index.html","63aaae6cf6105c18551d18471a592218"],["/categories/Webpack/index.html","53dc80073983a60f96319b54afb89fd8"],["/categories/index.html","71f5541fb1b32cfe3df3e0b278807a11"],["/categories/关于我/index.html","19766cefff19675af5720e94d92fc693"],["/categories/吐槽/index.html","85966f1aa95f6e49fc18afb8bfc8bf1d"],["/categories/微信小程序/UI/index.html","f7fc38b14e75ab965bce4421fe0910c6"],["/categories/微信小程序/index.html","e917e749b36e139ae3a47963901c1bac"],["/categories/我爱的人/index.html","85882a297e31b7d85b6f089f30e17fbb"],["/categories/浏览器/index.html","da51731d008c5ef62ce0fd4bc57bc903"],["/categories/计算机组成原理/index.html","3fa67c20551a2fe0cfa5d074100b000e"],["/categories/设计模式/index.html","4a8cb7f5abd99a0535a8ab6b0480903c"],["/categories/阅读/index.html","23d756817ea41d2930a94d95d95b0419"],["/categories/面试/index.html","c5210fffa58c8d8fa1064dab37e63743"],["/css/index.css","048c62123fccd97e515e98cb0a74fb3a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","8541b680bf28d93d4f5be79fd12e3e4e"],["/image/icon.png","08bbe941048aa814db7f4a803dfdf9fa"],["/image/icons/icon-128x128.png","cdc0f6116ff7959a040575e1997e2f1b"],["/image/icons/icon-144x144.png","cb7b23bf400ff70e572f933f0adceea1"],["/image/icons/icon-152x152.png","7dfcc63d3401db6c149c1d307011c4d7"],["/image/icons/icon-192x192.png","cbf563433e0d82e96aeeb02a30faeda7"],["/image/icons/icon-384x384.png","80e94dce0fa6e65c4cb348a83291233a"],["/image/icons/icon-512x512.png","8fa6d411e2cde7bebf3b3d14f81f5617"],["/image/icons/icon-72x72.png","1fbb6a95c00acd34451ad7a31d702586"],["/image/icons/icon-96x96.png","c6e771a46ef126eb2f7a926b8eb69299"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","977c2e66eb95d5843e4d3eae8eb39e70"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["/js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/links/index.html","3691d78be65d0fa647dcdedcd61ca85f"],["/page/2/index.html","9b1bea27835039d24df48d8855226f0c"],["/page/3/index.html","ef463cbd236b11bbd1ab80a841161beb"],["/page/4/index.html","f731c510fc2692de7118751f19c06641"],["/page/5/index.html","dc2d308526ce4cd26d657ff99759d6d2"],["/tags/Bug/index.html","26455c7b021deb87ad620b38c2b84b1a"],["/tags/C/index.html","d35de367a0b712da47725b9fb456feff"],["/tags/CSS/index.html","f4241ec43b0307382c24686e00ca3758"],["/tags/Canvas/index.html","743781c91c792744694c09e171905598"],["/tags/Git/index.html","5248339cc9521a74fa1645e48acf1b36"],["/tags/HTML/index.html","07dd72c3710638805cf484870f4e292a"],["/tags/HTTP/index.html","7ada9311b67c395b78dffd384dee45d2"],["/tags/JS/index.html","2ec0f2a855d78cc7ee1982d229e71a6f"],["/tags/JavaScript/index.html","99996d0d28c4bfb426c71171f1692066"],["/tags/Node-js/index.html","2d52b4514e8cd764aa972c50a5c3e4ad"],["/tags/Parcel/index.html","03c6116079051dae2f4b4e6dcb04e2ae"],["/tags/React-Native/index.html","1c92912e7fed74602caffcd1e3093a2a"],["/tags/React/index.html","b7fdc2e2bd39b7afed631e6094f02add"],["/tags/UI/index.html","a3744c7f2cf711e630712bd8f663ea42"],["/tags/Webpack/index.html","0a3f53f1ef88408a54692e7d5afbaf9b"],["/tags/index.html","028006f9095afc89eb39395e6dd83e38"],["/tags/上机/index.html","e54ac0c08c1a6283faede0fc67e8bbf3"],["/tags/前端/index.html","9d8e9e88105ce4fb82422ee13108e920"],["/tags/前端/page/2/index.html","b4957691822e7c5ffee42c5b19a6d7bb"],["/tags/前端/page/3/index.html","cb3d6521aa62f3cf589039e5ca2c27ba"],["/tags/她/index.html","8b53b01efce487b58311bc7193529a4a"],["/tags/学习/index.html","14d44dc401253bff73c505355d8c517c"],["/tags/微信小程序/index.html","8c0a4528da38b415bfdf38822f11217b"],["/tags/我/index.html","2b8bcdbff7b0477b567fa897bd079e03"],["/tags/浏览器/index.html","6c9a4ed8f59f23474c4527dbc759bb33"],["/tags/源码/index.html","f8db9a57e95102e68d6d300695c2b72e"],["/tags/计算机/index.html","31c13efd5e9e2d5c4298e6ab2bb8e1d6"],["/tags/设计模式/index.html","cd40ae65ee3fa4d5868d4ebc54a7669b"],["/tags/阅读/index.html","0eab73d1c84cdf784c0c3a0de052bed1"],["/tags/面试/index.html","3f3396d5438d8f14c2f002fef4e75975"],["/timeline/index.html","09851dcca4550de1daba854287c62a9e"]];
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







