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

var precacheConfig = [["/2017/04/20/addone/index.html","c2f21f0fd7ee72676be8f6342465143f"],["/2017/04/20/gwyhArticle1/index.html","b00638c97d10e29639375486ddbe6995"],["/2017/04/20/gwyhArticle2/index.html","fe0d2b7090e4698cf8cb105cc9c53d61"],["/2017/04/20/gwyhArticle3/index.html","df7a2bff8c66429dd2d8ce69587dd255"],["/2017/04/22/C-2016上机题/index.html","83158acbcb6e37fb8be25e01702516e7"],["/2017/04/22/css垂直居中/index.html","98edcac16cab524e5577dfe2483c3357"],["/2018/01/03/2017自我总结/index.html","fd348639b315170e19ba171f0d19e221"],["/2018/03/13/React-Native实现NbaApp/index.html","ac8278c481ff93210c22866597bc2f7c"],["/2018/03/13/React在线编辑简历/index.html","6762d27147e4b237d03ca6ff4d25e45f"],["/2018/03/13/微信小程序模仿网易云音乐/index.html","e4d602f35d35a175e7c9bfda90ee41d3"],["/2018/03/14/CSS实现文字打字动画（-1白话讲解）/index.html","b2aafbb7f9fbd83576c25ca8954e1228"],["/2018/03/14/一道简单面试题理解JS事件机制（-1白话讲解/index.html","25c8b83a40181ccc47728ee5b5051c1b"],["/2018/03/14/浏览器从输入URL到页面加载过程（-1白话精简讲解）/index.html","eb4816e4d1ab482116ed86304e0293d4"],["/2018/03/15/简单CSS实现闪烁动画（-1白话讲解）/index.html","02b3821c7debcfd513131f3fe8558415"],["/2018/03/16/React生命周期简明宝典/index.html","4ccc068a707bc08d7753fc3a2d580373"],["/2018/03/18/HTTP状态码简明宝典/index.html","daa884bffab73fcd7b51491db9a7d8d0"],["/2018/03/19/吐槽-学生把代码作业放到博客里有错么/index.html","b9053d4ec9f7547cac157c12dff1f1ba"],["/2018/03/23/CSS人人都能写自定义Checkbox（-1白话讲解）/index.html","7ac4f92e044cdb1db0867c3bbb2f2e29"],["/2018/03/24/纯前端实现gif制作/index.html","26ebee1c6f1bf59496a9b10a4f56d019"],["/2018/03/25/Parcel上手与React开发环境搭建/index.html","e8439a253b6021fbb5176716f4ee12c5"],["/2018/03/27/Canvas模仿草莓音乐节宣传视频/index.html","80d8617230c66eeb48acca20d23ddfdc"],["/2018/03/27/和SetImmediate小姐那销魂的一夜情/index.html","6a854e38ae52a32e9910d8352e7d6341"],["/2018/03/28/Webpack配置讲解/index.html","53e90d84322135699d1d09330c54a6a8"],["/2018/03/28/深入React知识点/index.html","e6177198bc80939e4cd9b1229438f520"],["/2018/04/03/一个前端开发者的自我折磨-UI/index.html","08a227ec2a9f1de8d96f4a785c5ec645"],["/2018/04/07/微信小程序实现折叠展开菜单/index.html","5087943636cf8904a32b2503867a4b76"],["/2018/04/12/JavaScript设计模式/index.html","9c95b792c0a97f206757df70b503168e"],["/2018/04/13/一次简单的搜狐电话面试/index.html","756ef01e56b756e792371002a0ab4dfe"],["/2018/04/15/Git-Camp-简明Git入门-笔记记录/index.html","7ebdb1c871f87004da4349462b495bd8"],["/2018/04/16/MVC-MVVM-MVP/index.html","57b26f070fc562ca2a237afd878e011f"],["/2018/04/18/React源码阅读-1白话/index.html","f0785f30489ab0c260cd1d34de6505ea"],["/2018/04/22/自写一个react-like项目/index.html","55c361a6129f4b142b996ecf6ac9efe1"],["/2018/04/25/关于在mac上使用vscode编写markdown出现控制字符问题/index.html","506b98872abddfdc0eb27a26a9dc38f8"],["/2018/05/03/我在写微信小程序时的一些小技巧/index.html","5ef2cc406f976ab8365ec19cd2661219"],["/2018/05/05/计算机组成-程序的转换及机器级表示/index.html","972a6a0f3eec130ce51d0595fbed82ad"],["/2018/05/06/ICS2017-Programming-Assignment-2-2-2-3/index.html","d3cf8e14ed05031adbda7aab67b0b494"],["/2018/05/06/从“零”开始-：Spring-MVC/index.html","371f6ef1dc62d7e35bd768b689053c43"],["/2018/05/06/前端开发者如何快速的把UI撸出来-讽刺版/index.html","177191552b685d0b766da3dbd8863ccf"],["/2018/05/07/你需要知道的JS高级技巧/index.html","8280ba1e2dedafcbdb7ad9c91687a7ec"],["/2018/05/15/create-react-app的webpack配置阅读/index.html","d7c8e05586e46f5639d6d449628ddfa1"],["/2018/05/31/大二杭州有赞前端电话面试/index.html","6dba1f97d621d68fe7c5a07f50e52e42"],["/2018/06/04/一些感想/index.html","c2cc3b9a42968826781ff21f72fe1510"],["/2018/06/07/Js技术题自写/index.html","0a96c0a303f310f47d8416a7efece617"],["/2018/06/08/关于页面切换后setInterval出现延时问题/index.html","d5e13420941e7ea15d7aae50d0755864"],["/about/index.html","d1445b049955ac91ea3b251dcd368570"],["/archives/2017/04/index.html","e6cd1d978a0d00a2f16cda080b5a8095"],["/archives/2017/index.html","550c9153dad8a44932853b60707d6c81"],["/archives/2018/01/index.html","56dbea2f3a0c60e78db66e93b21c161d"],["/archives/2018/03/index.html","c2109211587d647bd88b0139ccaa1d52"],["/archives/2018/03/page/2/index.html","349cf57bff4da188ffd3ef4293fce641"],["/archives/2018/04/index.html","0d00d90cbb8be180984060eef5602e33"],["/archives/2018/05/index.html","cbfbf0361cc881fcd5888e3d1ce889e6"],["/archives/2018/06/index.html","b9745bb65c6a6a51790f110aad03eb94"],["/archives/2018/index.html","49e9776de3c3d5bd9f21465e2bedf612"],["/archives/2018/page/2/index.html","89a48c7a0a94295d1899a9a9f2a7d274"],["/archives/2018/page/3/index.html","15a95f96dbedec737f018b12d4bba706"],["/archives/2018/page/4/index.html","4c540da781d963fbf075c4eb902782c2"],["/archives/index.html","dee55295c147a39fdf2925764bc1adce"],["/archives/page/2/index.html","1f39806c7abd38ed5ab7a0532a20492b"],["/archives/page/3/index.html","872cc81730df1d4591b62442527aec33"],["/archives/page/4/index.html","11baf82f72f11cbc68a4a3563815eeb5"],["/archives/page/5/index.html","addd14a89d9026030f9d56e204c67904"],["/categories/Bug/index.html","f0388d7f0e56865fcbf9f26ee574083e"],["/categories/C/index.html","b0474470813ff736fa42d9294eff2a13"],["/categories/CSS/index.html","e1c9fe475428cf148bc4f6de4cbbd5f3"],["/categories/Canvas/index.html","b5903925f378ab8ad14f426f0114e1da"],["/categories/GIT/index.html","029687c88346c77fb15c2dd732a4f567"],["/categories/HTTP/index.html","70aa8eb2cc66c2bdb73e71bd3c8a1928"],["/categories/Javascript/index.html","97b2096187936882c4affe1b4c1aa7e6"],["/categories/React/index.html","91f8a87ec796f173ff856e14b3137f7f"],["/categories/UI/index.html","b6e1709b3619a27bca83e7497271808b"],["/categories/Webpack/index.html","756152dec48ace8597b7090fe14fb49c"],["/categories/index.html","903d10abe3366db8e9a0f19322a1ae88"],["/categories/关于我/index.html","4919c09e3e26e5e2d44560f2861a851b"],["/categories/吐槽/index.html","2702420f0da12a1fa6fbf00ab93b7406"],["/categories/微信小程序/UI/index.html","a4695eede0ee7ceee0793deff2b301f4"],["/categories/微信小程序/index.html","82010605f61bac2ed52ced5526e0554e"],["/categories/我爱的人/index.html","8ac9ba736e554036d60769760d2d8d8a"],["/categories/浏览器/index.html","0de6d38e2fa475b1b476fd240ec935d9"],["/categories/计算机组成原理/index.html","57959a67e27bd8cf273658df4d1dd53d"],["/categories/设计模式/index.html","61ef178ddbd1af0fb382503789c40fe7"],["/categories/阅读/index.html","4cc38e0080d17129386a054b2173a7a5"],["/categories/面试/index.html","cddfe2ac2c88fb84de78f44a245b97f7"],["/css/index.css","36ff887d49c3e17a77993f65eef2adc2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","7a9679cb94feeee147550a543097549e"],["/image/icon.png","08bbe941048aa814db7f4a803dfdf9fa"],["/image/icons/icon-128x128.png","cdc0f6116ff7959a040575e1997e2f1b"],["/image/icons/icon-144x144.png","cb7b23bf400ff70e572f933f0adceea1"],["/image/icons/icon-152x152.png","7dfcc63d3401db6c149c1d307011c4d7"],["/image/icons/icon-192x192.png","cbf563433e0d82e96aeeb02a30faeda7"],["/image/icons/icon-384x384.png","80e94dce0fa6e65c4cb348a83291233a"],["/image/icons/icon-512x512.png","8fa6d411e2cde7bebf3b3d14f81f5617"],["/image/icons/icon-72x72.png","1fbb6a95c00acd34451ad7a31d702586"],["/image/icons/icon-96x96.png","c6e771a46ef126eb2f7a926b8eb69299"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","ff1886e867e0df4e6bcb3179ce046144"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["/js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/links/index.html","d997c1cbd27825a3205f600d78e3cfbe"],["/page/2/index.html","732d4dffeb71acad2c89bd233b2a56c0"],["/page/3/index.html","9fbec0bb7e9417f869a65fd90dfe5220"],["/page/4/index.html","f4f4df8629e777dc8c7f026a042f0744"],["/page/5/index.html","fbc03de02df896a3221bf8d4ca0a36ba"],["/tags/Bug/index.html","44bb402c9596fabe8d5faffd6223d4b7"],["/tags/C/index.html","b5b5acd0d43ede78bd82002a1574b524"],["/tags/CSS/index.html","6e40f218d590b84208f1f3bd55850432"],["/tags/Canvas/index.html","bba183cd17a62b29f46097c1d6a2a74b"],["/tags/Git/index.html","f97a4a2de6a83070da7710cf030b98c1"],["/tags/HTML/index.html","ae5f16c38d11ab9a3a2955f8db51fb6b"],["/tags/HTTP/index.html","7c815096ec6dacb859844f0b8c044188"],["/tags/JS/index.html","5daa88a7ce2ca57418da1f25cd5a3ab8"],["/tags/Javascript/index.html","26f816fa810d092b2e26a169240c2b21"],["/tags/Node-js/index.html","822b5a03723933fff835a4fec2bb20e3"],["/tags/Parcel/index.html","617b943a87c0d837d9e98b048b94be86"],["/tags/React-Native/index.html","00a17dff41854fcdcfd935efc027dc0f"],["/tags/React/index.html","f696e03cecd27f85ddc2614526906ef6"],["/tags/UI/index.html","8d2ccd000841a302760acba4ea32cd63"],["/tags/Webpack/index.html","c9c7395241eb779764b0a1117a9eb64d"],["/tags/index.html","ba9cb6d9e07ed74e9cd3a55a7a8292fd"],["/tags/上机/index.html","016bbe34cf60d1b61125c29cd9984af2"],["/tags/前端/index.html","357f6d56ab27622e2be7c6ded924439b"],["/tags/前端/page/2/index.html","2020cb4241b19e8375923d64d16bdea2"],["/tags/前端/page/3/index.html","66d2d015d4026910a82aa56d5d8145ae"],["/tags/她/index.html","830a9b3e3302bbc10f699981486f537d"],["/tags/学习/index.html","b3e9e73681b0cd86a01573878120a89f"],["/tags/微信小程序/index.html","3682d372cd688efc74678f7a608d9919"],["/tags/我/index.html","06287b0185f6aee012716e14c086e79e"],["/tags/浏览器/index.html","5dcfb35e49b9199064b460f1fc83af9d"],["/tags/源码/index.html","8fee04ff1f8bc0a58c733d5dc419c012"],["/tags/计算机/index.html","8f26f187ba8d560d9f0219666d4b1c83"],["/tags/设计模式/index.html","374d996445f01960e89242f18cfe1917"],["/tags/阅读/index.html","777fc68c3169d7b2d23e765e7a8d3380"],["/tags/面试/index.html","0ca3541eb7ba71f2b9f14bb587acd94e"],["/timeline/index.html","afe6bdafabdf1363af93198a3f8e202d"]];
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







