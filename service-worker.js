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

var precacheConfig = [["/2017/04/20/addone/index.html","28b3cbc62afe5386d821887edff0ca54"],["/2017/04/20/gwyhArticle1/index.html","09740b6007bdbead0ef8627ddf666702"],["/2017/04/20/gwyhArticle2/index.html","49cab4f06ac5056a40d92bb332f0e196"],["/2017/04/20/gwyhArticle3/index.html","91eb65c29579500636b25f3a96145d48"],["/2017/04/22/C-2016上机题/index.html","5aa3c33aff8ea327e4ba362f8bd09505"],["/2017/04/22/css垂直居中/index.html","7a0f1bea1abfcc0929ea3d5148da442b"],["/2018/01/03/2017自我总结/index.html","73a5e90c84ab1649f618fd0a9489f9b4"],["/2018/03/13/React-Native实现NbaApp/index.html","39f3698cd52fbea3432c70c0bab5e54c"],["/2018/03/13/React在线编辑简历/index.html","e9ff4f1b1408181c93e4323e99bf0221"],["/2018/03/13/微信小程序模仿网易云音乐/index.html","90d3066964cfa363543de35b26ae7c23"],["/2018/03/14/CSS实现文字打字动画（-1白话讲解）/index.html","a97d6759e80a640e7b79815e48d75638"],["/2018/03/14/一道简单面试题理解JS事件机制（-1白话讲解/index.html","fc0424c69f6ef4763ab3f2d48110dd3c"],["/2018/03/14/浏览器从输入URL到页面加载过程（-1白话精简讲解）/index.html","4e8d8c69d406b132542face41876a964"],["/2018/03/15/简单CSS实现闪烁动画（-1白话讲解）/index.html","0aa81be4227e22c434b4bae1a208d049"],["/2018/03/16/React生命周期简明宝典/index.html","e588f76840641993c7af937b1e126fc5"],["/2018/03/18/HTTP状态码简明宝典/index.html","5645cb38c1fe98b15fcece4bc315ebaf"],["/2018/03/19/吐槽-学生把代码作业放到博客里有错么/index.html","6a752ead1e196be9d97eb53fa48269b7"],["/2018/03/23/CSS人人都能写自定义Checkbox（-1白话讲解）/index.html","9ecf954d4f85a8731d549d06adbefe2b"],["/2018/03/24/纯前端实现gif制作/index.html","48a62b733a210ff28f340b7da82b86a1"],["/2018/03/25/Parcel上手与React开发环境搭建/index.html","3a71b2c147ef2ed971061aafed09f2a0"],["/2018/03/27/Canvas模仿草莓音乐节宣传视频/index.html","dc396ef250e6a8e36c220177c41dd128"],["/2018/03/27/和SetImmediate小姐那销魂的一夜情/index.html","60502ce564e6f23e8d3419f76cc27c39"],["/2018/03/28/Webpack配置讲解/index.html","be9ab0606a6951210627d5e14bfa2643"],["/2018/03/28/深入React知识点/index.html","e9078c5892db4cbae2427c4da2c2283d"],["/2018/04/03/一个前端开发者的自我折磨-UI/index.html","601f2f6d72c3def544015417c96cab53"],["/2018/04/07/微信小程序实现折叠展开菜单/index.html","8a4a5c6b301e3368c44fcc19c408166b"],["/2018/04/12/JavaScript设计模式/index.html","4540bc0758cb008d88dbca7bb8bc7f5e"],["/2018/04/13/一次简单的搜狐电话面试/index.html","75c79fe789cc42c554da1fd1428c289d"],["/2018/04/15/Git-Camp-简明Git入门-笔记记录/index.html","69baca08c5b25594c5f4dfe19ab3a3c0"],["/2018/04/16/MVC-MVVM-MVP/index.html","2d0e1fb37694c201ffd676f46850e18b"],["/2018/04/18/React源码阅读-1白话/index.html","464da283fb4358431e30114d4a9a46a7"],["/2018/04/22/自写一个react-like项目/index.html","5440bad47fb8c78a8571afcac57ba108"],["/2018/04/25/关于在mac上使用vscode编写markdown出现控制字符问题/index.html","ee213fd21374b92fe1193f5e4328e1df"],["/2018/05/03/我在写微信小程序时的一些小技巧/index.html","eb1ec93d5baf79f5d3fea0586ba9fef7"],["/2018/05/05/计算机组成-程序的转换及机器级表示/index.html","0118f94d84b707525f325431ae7eab6e"],["/2018/05/06/ICS2017-Programming-Assignment-2-2-2-3/index.html","0c50ecbce23e5dd8964e22793c50bad9"],["/2018/05/06/从“零”开始-：Spring-MVC/index.html","1291fcd44760637e2d5a6ad129e6b42a"],["/2018/05/06/前端开发者如何快速的把UI撸出来-讽刺版/index.html","3d8c3a656868c4eaedbb68c167ad827e"],["/2018/05/07/你需要知道的JS高级技巧/index.html","a47940b877d04403d04db5b39d78c954"],["/2018/05/15/create-react-app的webpack配置阅读/index.html","06ddfba4401c51c3a7bf0e522358573a"],["/2018/05/31/大二杭州有赞前端电话面试/index.html","c6f94120889add1f561bbcdb734033f6"],["/2018/06/04/一些感想/index.html","ec81e0e0c2fff4ecffa67b1b95444e26"],["/2018/06/07/Js技术题自写/index.html","7ba65b0c566b2a61cc9b10262907bdf2"],["/about/index.html","ad7c07e018a816939c7dddf232701de0"],["/archives/2017/04/index.html","5c5cd8eb044598fb896c3937b84676c7"],["/archives/2017/index.html","e3da9918edd73c0cef2db2979b4eb901"],["/archives/2018/01/index.html","66aa42641effc7f1ea2026d7d801c597"],["/archives/2018/03/index.html","2e28f036501d056883426bac69bc48ad"],["/archives/2018/03/page/2/index.html","30e5845f0db97f1751d1dd7a824a3fa6"],["/archives/2018/04/index.html","714f8e581f2e275a46f328469dbb5d81"],["/archives/2018/05/index.html","3519f3aa9207cadb290ecb23906ca862"],["/archives/2018/06/index.html","6745b3140cb9ccfcebc5c053089080af"],["/archives/2018/index.html","f47e53a07d4c38295b33947f3b250853"],["/archives/2018/page/2/index.html","19d7cff85c33c6222a621f851d464f17"],["/archives/2018/page/3/index.html","55e3d95b68e26235f4b1c92951c5dd04"],["/archives/2018/page/4/index.html","cd24bc073203e156828e6554598e71d5"],["/archives/index.html","e0f585223b5208d6fced7fc748f87068"],["/archives/page/2/index.html","4cae7cd2a3796b182a3f85c9f76fe082"],["/archives/page/3/index.html","928bad603d151336e828f4f16296ce7c"],["/archives/page/4/index.html","1cafd3f158e9aefe4683c21e7c896e95"],["/archives/page/5/index.html","ff4354eb74e545ad0847e0171a136c49"],["/categories/Bug/index.html","a0ac2d2de481893638884049223f09a4"],["/categories/C/index.html","fa28bb6f58993bbf0c32e0c2d06fbf38"],["/categories/CSS/index.html","fa34ad3b1a17aabf4d62b12286e98582"],["/categories/Canvas/index.html","73cd32d87d14cef1047ca5e87cf519ec"],["/categories/GIT/index.html","c9983b375b4215bba5f13b8caccf43be"],["/categories/HTTP/index.html","59c8ff7a9a09772a619c85346e99d264"],["/categories/Javascript/index.html","ba463c5736cc8a1976d3502e09e7982c"],["/categories/React/index.html","8d9337a079e097946ce8c593ac0c7c2e"],["/categories/UI/index.html","d947c95216ed2f21f443c520b2094263"],["/categories/Webpack/index.html","78986601484ba5eed4a5d34ac414a48c"],["/categories/index.html","cdc889d70c031803ec4d464130a47508"],["/categories/关于我/index.html","5c8bb05716ec073a4fca881e1bd07a4e"],["/categories/吐槽/index.html","969cc052b551bddaa1edd7dc01bd58d1"],["/categories/微信小程序/UI/index.html","dde005fc07dac7e4cac4f64bd1394aa6"],["/categories/微信小程序/index.html","4f472151398c302875e86f7e95ca8aac"],["/categories/我爱的人/index.html","b493babb6aee947f2776aedc4385d7c6"],["/categories/浏览器/index.html","597b4fee5bbcfb151c120eb1b67f150e"],["/categories/计算机组成原理/index.html","b726758ae63429a1dfa58fbe6cdf8b28"],["/categories/设计模式/index.html","c3891d68d997f3bc30d99e7eb7685e2a"],["/categories/阅读/index.html","cc4c940bacaf820cfb622a12ca8fd43e"],["/categories/面试/index.html","05cc8d48b4c52259a3e37d981fcc1bfd"],["/css/index.css","048c62123fccd97e515e98cb0a74fb3a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","95c53199146e10319d4142d439a48cd2"],["/image/icon.png","08bbe941048aa814db7f4a803dfdf9fa"],["/image/icons/icon-128x128.png","cdc0f6116ff7959a040575e1997e2f1b"],["/image/icons/icon-144x144.png","cb7b23bf400ff70e572f933f0adceea1"],["/image/icons/icon-152x152.png","7dfcc63d3401db6c149c1d307011c4d7"],["/image/icons/icon-192x192.png","cbf563433e0d82e96aeeb02a30faeda7"],["/image/icons/icon-384x384.png","80e94dce0fa6e65c4cb348a83291233a"],["/image/icons/icon-512x512.png","8fa6d411e2cde7bebf3b3d14f81f5617"],["/image/icons/icon-72x72.png","1fbb6a95c00acd34451ad7a31d702586"],["/image/icons/icon-96x96.png","c6e771a46ef126eb2f7a926b8eb69299"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","f7fad96564c81c1dea96bb67f3c8fa94"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["/js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/links/index.html","289510dfeba89ba7d49a0210bd94a5c7"],["/page/2/index.html","da202dc0936537289996f44ee7af0526"],["/page/3/index.html","50e174d0d3c4a5ba8fecdf10e2e25286"],["/page/4/index.html","5dd5661247b5ee683608bb892ec74b6f"],["/page/5/index.html","ec4827d9c55901f7119201726976793d"],["/tags/Bug/index.html","daa60df3a1d41121a0425bf9fe8c49e3"],["/tags/C/index.html","6f5cbacef00cf7090683ea276980659f"],["/tags/CSS/index.html","391f2850b4b21a633a004056e0612149"],["/tags/Canvas/index.html","8c66f5ab3912071a45a9e33750c8ae61"],["/tags/Git/index.html","eb548536c18f2c9a2f2a14b01b8c9877"],["/tags/HTML/index.html","5e472e033f7c5c54ae8fb9b9faf7b6d6"],["/tags/HTTP/index.html","fc58fe0deb89363623f9f710cd7fdb8e"],["/tags/JS/index.html","1745cb6f5ffffac3914d8ffeb02d489b"],["/tags/Javascript/index.html","be828f196052d74cff1875f412f6c797"],["/tags/Node-js/index.html","7341e1420ea9dd28cc44ee0b03f9c778"],["/tags/Parcel/index.html","b04234de15628106013aed5937c71bec"],["/tags/React-Native/index.html","701ca9c1ca6147cf20f3957bda7b4dba"],["/tags/React/index.html","e5952f8f03217c758ef96375f81023d1"],["/tags/UI/index.html","fff62cd73b9b258c9da7e5d2e57b6489"],["/tags/Webpack/index.html","7cea96362b0d39ef51af58cb868538f5"],["/tags/index.html","3311c612049056c159118e10e7764a5a"],["/tags/上机/index.html","d92689f081fa7d4f8103873208f45d06"],["/tags/前端/index.html","50e849ea01fb5ea68196867ba3736eba"],["/tags/前端/page/2/index.html","cfb6cac2ba80c55ef18c73bed8fae3cc"],["/tags/前端/page/3/index.html","99cdb6011167456e953b8ad47dc7e4ba"],["/tags/她/index.html","c7a402c83cdf13caadfd0d479185519a"],["/tags/学习/index.html","2bf42f301995848372ed79eede3f2e79"],["/tags/微信小程序/index.html","4c2006568bdc12f8b73a283ad3af9024"],["/tags/我/index.html","0f02bba5c6f8f3ade56f9b9b01a69c60"],["/tags/浏览器/index.html","52b6c32f89aa70b021a8125b17084f6e"],["/tags/源码/index.html","1449efb31da23c35e40686d240921f6f"],["/tags/计算机/index.html","10caddd72c661b843b5f794c50076671"],["/tags/设计模式/index.html","e1a3b6b346f0206380b74de3a8be4395"],["/tags/阅读/index.html","c769ae87ad1f5a5b8528db9acf227584"],["/tags/面试/index.html","96e0255d92e29ab491afde2e88b948d0"],["/timeline/index.html","3f256dd3ce35af0f0ed53f6c57e39aee"]];
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







