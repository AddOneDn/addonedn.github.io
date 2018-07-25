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

var precacheConfig = [["/2017/04/20/addone/index.html","da1fccf90fbb185cf6a2ca0232988416"],["/2017/04/20/gwyhArticle1/index.html","0249406368f8d0fe9f0b76b6d6fde286"],["/2017/04/20/gwyhArticle2/index.html","efdea698d47d4842be45a7c1f7c2e8c1"],["/2017/04/20/gwyhArticle3/index.html","5e75a807bfbcdf756722e05830e21ccf"],["/2017/04/22/C-2016上机题/index.html","997f7c06eb7d97bf0f2c917372d9e654"],["/2017/04/22/css垂直居中/index.html","1cc0ff88b28e87267cc7d347dfc6c763"],["/2018/01/03/2017自我总结/index.html","50bbcbb41e3d67244bb9fbe8319f802a"],["/2018/03/13/React-Native实现NbaApp/index.html","ac69f8e4aa16d20c7d7b7dda2753a952"],["/2018/03/13/React在线编辑简历/index.html","957faa3191c0779f51407a36a96ad3b1"],["/2018/03/13/微信小程序模仿网易云音乐/index.html","5304d3db6f136304a9259c11ff58f312"],["/2018/03/14/CSS实现文字打字动画（-1白话讲解）/index.html","7744ba76d3cf33786f190b3f572bf122"],["/2018/03/14/一道简单面试题理解JS事件机制（-1白话讲解/index.html","7eb4517591e04299e4f83ca4158de254"],["/2018/03/14/浏览器从输入URL到页面加载过程（-1白话精简讲解）/index.html","004ca9742a32fa3f72ed4fb4450b761f"],["/2018/03/15/简单CSS实现闪烁动画（-1白话讲解）/index.html","2b01dfd446fc4d440ed7687151ced4f2"],["/2018/03/16/React生命周期简明宝典/index.html","6c98c0d5a7508c7bf2167b65de04102a"],["/2018/03/18/HTTP状态码简明宝典/index.html","5eb17d0c05b7eb8c8d9cf41ee0cd5f5c"],["/2018/03/19/吐槽-学生把代码作业放到博客里有错么/index.html","971f4086b9f7ca22df30b9b285c1448c"],["/2018/03/23/CSS人人都能写自定义Checkbox（-1白话讲解）/index.html","6511ead04bad3acfc2822f800a74cefc"],["/2018/03/24/纯前端实现gif制作/index.html","82da669d5c075c5410ab2c4ed0229056"],["/2018/03/25/Parcel上手与React开发环境搭建/index.html","ee6d908ad90254a77a320fb46762f25c"],["/2018/03/27/Canvas模仿草莓音乐节宣传视频/index.html","26b1c3ed840d6019173f35afc5d974c5"],["/2018/03/27/和SetImmediate小姐那销魂的一夜情/index.html","80ed7b7ab663cbe15f31ccebb061158b"],["/2018/03/28/Webpack配置讲解/index.html","76f7b2da32e2f0bbe513a59c3d237df7"],["/2018/03/28/深入React知识点/index.html","a6b0ae5c59841e4f7e27b26387eaa7f1"],["/2018/04/03/一个前端开发者的自我折磨-UI/index.html","b25a973c51a15b20cf49487030a23123"],["/2018/04/07/微信小程序实现折叠展开菜单/index.html","b1e5a80331addd3ab09d4ec1bce3e1d4"],["/2018/04/12/JavaScript设计模式/index.html","e4a026630d49a58459a421d803bd29c2"],["/2018/04/13/一次简单的搜狐电话面试/index.html","ed94e56e1e8a4df7cf69cd1330fb586a"],["/2018/04/15/Git-Camp-简明Git入门-笔记记录/index.html","c6aaf2a9279690fdfd3480bcb0c74837"],["/2018/04/16/MVC-MVVM-MVP/index.html","54ba7dfd4047458561f22e398eefb8dc"],["/2018/04/18/React源码阅读-1白话/index.html","c5c3b433489030b392aab38ecbdf09ad"],["/2018/04/22/自写一个react-like项目/index.html","3aa1bf341a989f534c5b5a577c65c26b"],["/2018/04/25/关于在mac上使用vscode编写markdown出现控制字符问题/index.html","4e2db79bbc02529b1c06bfc1abac2ca6"],["/2018/05/03/我在写微信小程序时的一些小技巧/index.html","b53d649bee17067df23f85d63eb51c0a"],["/2018/05/05/计算机组成-程序的转换及机器级表示/index.html","11a1505d1fae0c64d26166a47c64dd54"],["/2018/05/06/ICS2017-Programming-Assignment-2-2-2-3/index.html","4852807b5a199f8c8a7e7902d4493d47"],["/2018/05/06/从“零”开始-：Spring-MVC/index.html","4fbdd194e19fc71ab4168a7d65954aee"],["/2018/05/06/前端开发者如何快速的把UI撸出来-讽刺版/index.html","debd42fa42a6ed57619db8a295e951f2"],["/2018/05/07/你需要知道的JS高级技巧/index.html","e816d498f9243a9bf3331445e7e84bc2"],["/2018/05/15/create-react-app的webpack配置阅读/index.html","4e3900eb86796918cd9c5d13a564de00"],["/2018/05/31/大二杭州有赞前端电话面试/index.html","a53bcf98fe7b33e59d8771d892a26255"],["/2018/06/04/一些感想/index.html","8657e0326a315931fc91f339e97ad96d"],["/2018/06/07/Js技术题自写/index.html","a8f80e878f834ca003d4ee49e80efa4c"],["/2018/06/08/关于页面切换后setInterval出现延时问题/index.html","eac1c39997543449eccbf5a45469a171"],["/2018/06/15/软件杯H5端-视频尬舞机-开发记录/index.html","59eb5e86415eeef97c8e40ce4c7f1b04"],["/2018/06/24/Javascript引擎之属性访问优化/index.html","7d18b8830a4caedf673b9b3448432559"],["/2018/07/19/Promise精读/index.html","cc446766aacbc98a9ce33c896aeb69e6"],["/2018/07/19/async-await通读/index.html","c0fc7a6ce658df270d9d703bfbbbde67"],["/2018/07/24/在公司你应该会的git操作/index.html","64fd4ad445b9fc80f24522e2f5201c76"],["/about/index.html","76154053d58497d2be92ead18a18c090"],["/archives/2017/04/index.html","835587b53b03b3c4ba3c631cb8421c17"],["/archives/2017/index.html","c0f0461de1cc5668da8259b5e82cd13d"],["/archives/2018/01/index.html","18c800dbb06e5ee2aa834702757298c4"],["/archives/2018/03/index.html","92dfdf7237392445568b55b686664d17"],["/archives/2018/03/page/2/index.html","182aa126e52327d2d4d33714289e60a7"],["/archives/2018/04/index.html","5633dc99c08735d6b2ffd7bb5e079b2d"],["/archives/2018/05/index.html","fba204e9180bc77ebdc4bd8186ead63e"],["/archives/2018/06/index.html","760b39720b7f38fd95fbf967272ad89f"],["/archives/2018/07/index.html","2b5f21eec4ac62b8f666a9eb96212797"],["/archives/2018/index.html","6a11978e484a06522b637a7a9cc7dc7d"],["/archives/2018/page/2/index.html","c6b05365ca1f1f6d110b5737b6a01898"],["/archives/2018/page/3/index.html","2c13446061e30a34b22fdc01a3772b41"],["/archives/2018/page/4/index.html","62c8248a2d0f577abc5062f3b5ec44a9"],["/archives/2018/page/5/index.html","93fb23bd436b40728b6dc1282ec00406"],["/archives/index.html","055832bb214388469a0f6625b20ef651"],["/archives/page/2/index.html","1a2df160bc0792c73603481df0db5377"],["/archives/page/3/index.html","1f46374ae9c55a95382e8b86e4689bc9"],["/archives/page/4/index.html","5a4eb382773fe573880eb433bb7a14e8"],["/archives/page/5/index.html","130224db2eb3a5fcb742bbbb9ba7c355"],["/categories/Bug/index.html","f12486befc3503961be24d27af4776ef"],["/categories/C/index.html","585ec84be268da80fa0e15d54cc63271"],["/categories/CSS/index.html","dc7115e10bfa59f87618986b314634fc"],["/categories/Canvas/index.html","010a627f96746003c0d65f3fa222ed49"],["/categories/GIT/index.html","2333fa4ccf83360e07f4cee541935e6e"],["/categories/HTTP/index.html","aefa4608bc0feda8649e42adb0ffa632"],["/categories/Javascript/index.html","f8801f84e57ab1fa7cbcb12251498c79"],["/categories/React/index.html","ab21571ce464ce629df53410c08fc7e3"],["/categories/UI/index.html","9bb667639ff173a6826497d89157ea0c"],["/categories/Webpack/index.html","d89e343f4756ef29bea86a0212a310da"],["/categories/index.html","9c61586280cec49b652aea52e3856021"],["/categories/关于我/index.html","ec74893b5e4254d14d55ca728e6e2e65"],["/categories/吐槽/index.html","01d2e9ac4b54f989e5b821f4f453e336"],["/categories/微信小程序/UI/index.html","56ab77395d285b96dfdebfbd8cdeb023"],["/categories/微信小程序/index.html","1bd8d6cc53004963c28fd80d3cdb3674"],["/categories/我爱的人/index.html","ffce03df3bd7da63a4947a7a986b0e47"],["/categories/浏览器/index.html","08eb8b7fe02e71465dc34636eb6fbc91"],["/categories/计算机组成原理/index.html","6291a408d0d2c6767ca769a00b347c69"],["/categories/设计模式/index.html","7a2392ed6baac71e0974ed2f538503c2"],["/categories/阅读/index.html","8fc84b5d1387b4f21bf5b965bed1c84e"],["/categories/面试/index.html","cb4d398a80272b98743d47a833f37871"],["/css/index.css","1814a1fff4f2ea28c5698a50d1f49f86"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","1e8d73809defd60e6defa3c965445254"],["/image/icon.png","08bbe941048aa814db7f4a803dfdf9fa"],["/image/icons/icon-128x128.png","cdc0f6116ff7959a040575e1997e2f1b"],["/image/icons/icon-144x144.png","cb7b23bf400ff70e572f933f0adceea1"],["/image/icons/icon-152x152.png","7dfcc63d3401db6c149c1d307011c4d7"],["/image/icons/icon-192x192.png","cbf563433e0d82e96aeeb02a30faeda7"],["/image/icons/icon-384x384.png","80e94dce0fa6e65c4cb348a83291233a"],["/image/icons/icon-512x512.png","8fa6d411e2cde7bebf3b3d14f81f5617"],["/image/icons/icon-72x72.png","1fbb6a95c00acd34451ad7a31d702586"],["/image/icons/icon-96x96.png","c6e771a46ef126eb2f7a926b8eb69299"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","f777219b672800a0b154101d6be81dd2"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["/js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/links/index.html","b64c9f3bdda0bfbb76ebcf5d5afe0ba9"],["/page/2/index.html","d8ab9a8f09525e943e7032843655b430"],["/page/3/index.html","71d281c22d3defb1ebb7641393e41a6a"],["/page/4/index.html","b363772bb1aed8e361a102f457985757"],["/page/5/index.html","ebf4a4362e6d0fcd9a4cb6c52f147e41"],["/tags/Bug/index.html","0424c22def740c62ae0efbbb5a628380"],["/tags/C/index.html","e1f16ee3e3d08decfc254fa7f25d6916"],["/tags/CSS/index.html","a2d4240813ca128e7fb9cbb05622b565"],["/tags/Canvas/index.html","647e3f65f1fb4d108f226782e3700092"],["/tags/Git/index.html","e8ea3e91ae0e60b5dbbb15eeac3085c7"],["/tags/HTML/index.html","599982b9e7e1a9d2f45b67adcc23fead"],["/tags/HTTP/index.html","630d9219724de95b7c2735847f697414"],["/tags/JS/index.html","f79a305550a975dead3b357452a7d580"],["/tags/Javascript/index.html","d6e2bad71f717509929b6d7c4d7bad72"],["/tags/Node-js/index.html","bd511c92210812cf3bf040b11dbb913d"],["/tags/Parcel/index.html","060190b369a10e8d62c40f141d35a503"],["/tags/React-Native/index.html","8f4c09d95f949aacbcd0f985b1439703"],["/tags/React/index.html","079281ecb782e58113dcca6d111f374a"],["/tags/UI/index.html","f4e6d2cac6d37b7781b465d0d0c5b365"],["/tags/Webpack/index.html","083a6130212233f091d67a645b0e0ed0"],["/tags/index.html","a64078b0dfc79352bcb9da82fe035bed"],["/tags/上机/index.html","f0ba7fc7968529afee013a921198daad"],["/tags/前端/index.html","5a674ef8b4e9cb8e590ca2497ae5e9c9"],["/tags/前端/page/2/index.html","6d2077ec99682b959c44eab23e222a0c"],["/tags/前端/page/3/index.html","679b7ef5c4dbcd4ce70fa9e6080d55bb"],["/tags/她/index.html","532adcb962434483615642efa23c6460"],["/tags/学习/index.html","720f1a78102a8127c5e30f3dea703406"],["/tags/微信小程序/index.html","d3e777162440a027a987d6ae70ddeae2"],["/tags/我/index.html","46fd964ee9ecde5b6d418221c5c6459d"],["/tags/浏览器/index.html","569348d6bcc0617479d9290fdbe2e3f1"],["/tags/源码/index.html","960767e1960db616620eb5db388761ee"],["/tags/计算机/index.html","8112c21056970624526a7ecadb191285"],["/tags/设计模式/index.html","e322b684d3be1639a66cf6474271c6d6"],["/tags/阅读/index.html","19d3289b7db283c7f2ad70b11b34d5a4"],["/tags/面试/index.html","31940c80f92ae7fc25b3eccb8ae4d56e"],["/timeline/index.html","8a7c031599acf2da173f355b316d52f8"]];
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







