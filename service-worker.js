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

var precacheConfig = [["/2017/04/20/addone/index.html","d046e12cc404746765ea3ee9feaa45c1"],["/2017/04/20/gwyhArticle1/index.html","9f5f0d129b2f5ddbe18ff4f6efb4cd68"],["/2017/04/20/gwyhArticle2/index.html","39f70ac17026674adf49e7e214289171"],["/2017/04/20/gwyhArticle3/index.html","77c62b63cc9ab7013da91aeab33de358"],["/2017/04/22/C-2016上机题/index.html","9c2670dbb4df7e35d1a015fbb8def234"],["/2017/04/22/css垂直居中/index.html","6e58c7b3cbd224ac9ad10a4d0f96b908"],["/2018/01/03/2017自我总结/index.html","d6eb1b5a98c3bb55d5bbbd98fd1a16a4"],["/2018/03/13/React-Native实现NbaApp/index.html","ff0558eb4691e7ea849f0f3e642094b1"],["/2018/03/13/React在线编辑简历/index.html","ca80b86bb5026d6ae78c1fa1e72e9d62"],["/2018/03/13/微信小程序模仿网易云音乐/index.html","1648edd6c54d00c002c535db1022034b"],["/2018/03/14/CSS实现文字打字动画（-1白话讲解）/index.html","d9e1d0de7d2fbda409b2f68ffd471658"],["/2018/03/14/一道简单面试题理解JS事件机制（-1白话讲解/index.html","bb8b1d55433d7533737807d1af9b0744"],["/2018/03/14/浏览器从输入URL到页面加载过程（-1白话精简讲解）/index.html","d3216ea533ed1afcbb2bccea9a71b550"],["/2018/03/15/简单CSS实现闪烁动画（-1白话讲解）/index.html","7a737c3053c2bc8e9914a79394958a41"],["/2018/03/16/React生命周期简明宝典/index.html","a80f423b2ef5249b7576b06862757c1b"],["/2018/03/18/HTTP状态码简明宝典/index.html","0805a9b005522d5665761265850449f5"],["/2018/03/19/吐槽-学生把代码作业放到博客里有错么/index.html","95916dd2eaada75468f50642b7b49be4"],["/2018/03/23/CSS人人都能写自定义Checkbox（-1白话讲解）/index.html","bd6b46c7d7aed89d935f2f56a845bfca"],["/2018/03/24/纯前端实现gif制作/index.html","51640ac00609b92bd87b73fbeeed64dd"],["/2018/03/25/Parcel上手与React开发环境搭建/index.html","e4f2f654b6a37f494c9540040360480c"],["/2018/03/27/Canvas模仿草莓音乐节宣传视频/index.html","d55c15930cafb2c12dd9db3daadbd28e"],["/2018/03/27/和SetImmediate小姐那销魂的一夜情/index.html","9dd74bbccfb6e75d941022b830b0f7d9"],["/2018/03/28/Webpack配置讲解/index.html","a606976828bdd0f49dadb546dc19fa67"],["/2018/03/28/深入React知识点/index.html","fa69c37382384fafd04608b3413508c0"],["/2018/04/03/一个前端开发者的自我折磨-UI/index.html","db832dfab289569cdecdd1d4208a1123"],["/2018/04/07/微信小程序实现折叠展开菜单/index.html","14662f09b7d52d1c0601a21c9071c1ff"],["/2018/04/12/JavaScript设计模式/index.html","8f28e2ec844f8cfeb71f5ab90d2b2a2b"],["/2018/04/13/一次简单的搜狐电话面试/index.html","b08dc2996b35ca69774d1e5bbc2f0669"],["/2018/04/15/Git-Camp-简明Git入门-笔记记录/index.html","ab86dd1f236a9255d41d4d729c46b4ad"],["/2018/04/16/MVC-MVVM-MVP/index.html","80b2497700b59626f382a455da79c294"],["/2018/04/18/React源码阅读-1白话/index.html","a6946aa00218e65304a879fcf6587fea"],["/2018/04/22/自写一个react-like项目/index.html","9a5685e00047f739e0e5adbf9f22a813"],["/2018/04/25/关于在mac上使用vscode编写markdown出现控制字符问题/index.html","ff13d0b0fa7f35f3dc2571a167c5ffc8"],["/2018/05/03/我在写微信小程序时的一些小技巧/index.html","e202dfee1ba2c1430918cbaee229e329"],["/2018/05/05/计算机组成-程序的转换及机器级表示/index.html","ff0313c742d172633957da0ef5c13dba"],["/2018/05/06/ICS2017-Programming-Assignment-2-2-2-3/index.html","360b711e7bdf0e3e45fec08798aa1259"],["/2018/05/06/从“零”开始-：Spring-MVC/index.html","0cc18a809244839a9bf6cb33effa939d"],["/2018/05/06/前端开发者如何快速的把UI撸出来-讽刺版/index.html","f7469f5b72e8edd60a9dec013f5eb5f1"],["/2018/05/07/你需要知道的JS高级技巧/index.html","5adbfccb1bbf0321b75abe0fb54dd48b"],["/2018/05/15/create-react-app的webpack配置阅读/index.html","bf5050108ad02a8bdd04296d63bd573a"],["/2018/05/31/大二杭州有赞前端电话面试/index.html","dd9d08fd3b5585536931e2fc48990971"],["/2018/06/04/一些感想/index.html","c1211ec187ed4013a7709b84c8890126"],["/2018/06/07/Js技术题自写/index.html","fbc8343779360fb911e43d7b6dda4244"],["/2018/06/08/关于页面切换后setInterval出现延时问题/index.html","da25f5421df2daf9267e30542ae33316"],["/2018/06/15/软件杯H5端-视频尬舞机-开发记录/index.html","5b7e131da8657d7f13c4dbb80d0ea03e"],["/2018/06/24/Javascript引擎之属性访问优化/index.html","449e832be8abcfb121e36a8cf7b18827"],["/about/index.html","a2a163cb1b1cd1b4441daa53b06985d4"],["/archives/2017/04/index.html","9149ee5e418d82f569980022da3601c4"],["/archives/2017/index.html","62c09fab4972d1d85bb06da6a7f4325b"],["/archives/2018/01/index.html","8af859a3e536474473dc205e909e56c4"],["/archives/2018/03/index.html","231a880f672c305b414c3a386142ad61"],["/archives/2018/03/page/2/index.html","ae652f94a64478275d9fa64785aa10bd"],["/archives/2018/04/index.html","24ae8a834d811e05c1a156e69cdc3095"],["/archives/2018/05/index.html","c9d4ef4f82015aa9a9cefa30406b2bd0"],["/archives/2018/06/index.html","756be5ca89e1f6ebae88acca3cb0adf7"],["/archives/2018/index.html","110cfe5dbb93544bc11b1aaa5168581f"],["/archives/2018/page/2/index.html","7a9bf8878e2bb7a47979cbde830ace46"],["/archives/2018/page/3/index.html","9f42f8b1422856bf45fce1fe3b9a117f"],["/archives/2018/page/4/index.html","1daf849724ac405914b74ef5c09eb856"],["/archives/index.html","82f6266d459308ecda4895e3fe6cd016"],["/archives/page/2/index.html","d9204fb6a38a71a53031b2378bb37b27"],["/archives/page/3/index.html","31a8f1eef10157f3aa50bc8fc7e3b4a1"],["/archives/page/4/index.html","9072450204a5919545463829ea3e2663"],["/archives/page/5/index.html","cc89e1c0ff24c56cfb34e8a6be6b2549"],["/categories/Bug/index.html","edc81bb2d9c7d0d8fcbd09b1c11f3daf"],["/categories/C/index.html","a425e0614b3b988ea937e043662247ee"],["/categories/CSS/index.html","0cf6fa83b6644b2194fbe195a9eb595e"],["/categories/Canvas/index.html","cf674c37e70f695d5ef878c89db9d0a1"],["/categories/GIT/index.html","a7859fd766365a614099e310e39bf010"],["/categories/HTTP/index.html","c7fb1d30967013e8ae447389addfa1c5"],["/categories/Javascript/index.html","43ffbb9db8dc9ee1d5af4418b137f131"],["/categories/React/index.html","dd6d07b25fb2381dec420d141ffeee8d"],["/categories/UI/index.html","be846126cd397b7a13c52afd06313953"],["/categories/Webpack/index.html","2664463d7dd9b962c710364e0360c1d9"],["/categories/index.html","c66880a788b0f1e31d4a8d38da28398a"],["/categories/关于我/index.html","95e1b7c06e099527c31e921669591cda"],["/categories/吐槽/index.html","c6660c80fe0ad83d450b8f2c1623f40e"],["/categories/微信小程序/UI/index.html","f8e107f7b165ba8a8ba6cab7a90d4692"],["/categories/微信小程序/index.html","b24f11ff2c73848c01217c6e6bf030ac"],["/categories/我爱的人/index.html","2d893922f3bad4a0eaf8aa2e1d5fdc6d"],["/categories/浏览器/index.html","56dda785d89a184e5a61e7e2df0d3019"],["/categories/计算机组成原理/index.html","8174f6273d4a504e2c30b6692760a23d"],["/categories/设计模式/index.html","b639e64dcc1fd9c12dac977ec103efd7"],["/categories/阅读/index.html","994d36bfc9fbae50d55338c0730558fb"],["/categories/面试/index.html","37282e7b860b27e0b971617fff37cc04"],["/css/index.css","1814a1fff4f2ea28c5698a50d1f49f86"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","cc89108fa1e664ce89eb8f5c1cf4e0b8"],["/image/icon.png","08bbe941048aa814db7f4a803dfdf9fa"],["/image/icons/icon-128x128.png","cdc0f6116ff7959a040575e1997e2f1b"],["/image/icons/icon-144x144.png","cb7b23bf400ff70e572f933f0adceea1"],["/image/icons/icon-152x152.png","7dfcc63d3401db6c149c1d307011c4d7"],["/image/icons/icon-192x192.png","cbf563433e0d82e96aeeb02a30faeda7"],["/image/icons/icon-384x384.png","80e94dce0fa6e65c4cb348a83291233a"],["/image/icons/icon-512x512.png","8fa6d411e2cde7bebf3b3d14f81f5617"],["/image/icons/icon-72x72.png","1fbb6a95c00acd34451ad7a31d702586"],["/image/icons/icon-96x96.png","c6e771a46ef126eb2f7a926b8eb69299"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","94783c983d86926c6bc75ae2b5382844"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["/js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/links/index.html","50cb559bdee4393f35be90eca5e95c81"],["/page/2/index.html","ee4f7ee4d25540af22d9bb150e147333"],["/page/3/index.html","71d275eda37d3e8687f70ce5384b6813"],["/page/4/index.html","77c5da5ae2850d1b59e443b39fc4bd98"],["/page/5/index.html","9744dbd3fb1eef43340938ae09a8856d"],["/tags/Bug/index.html","54386dec75e47394a5b31ae87b94300c"],["/tags/C/index.html","f673dc20127ee2808f50780dd9375e73"],["/tags/CSS/index.html","d165012e6032c89749a055a9a6df76e8"],["/tags/Canvas/index.html","7c3b392fa400f5f1f64960b26acaf233"],["/tags/Git/index.html","fcf9d577431e841995dcc0eb532e4629"],["/tags/HTML/index.html","96c71735cc65e6a9d71a3b0d616f6ec6"],["/tags/HTTP/index.html","1ae914f8064f673815823c5dc7f005f5"],["/tags/JS/index.html","73cd13cf5cd442e5089e074ec9dac6e0"],["/tags/Javascript/index.html","ff72809423e89c4b6f836416f783a33c"],["/tags/Node-js/index.html","128d0c66f229546943c3895f173cd360"],["/tags/Parcel/index.html","68a030a5163a5420e84cbc53e058e47b"],["/tags/React-Native/index.html","7de3d56b94ae87352a2a88ac4b62c653"],["/tags/React/index.html","35734349691c41a5bc6fa613b7949a9c"],["/tags/UI/index.html","4e7d54dcb41319df892c41a5f65c8cd8"],["/tags/Webpack/index.html","ef3cec427d713d330d87e525da4d8610"],["/tags/index.html","5f98de7d649d8d65c578c829d5246b8d"],["/tags/上机/index.html","68bfdafd1f0cff46014a0e3554db1767"],["/tags/前端/index.html","543b4ac413a4cf8e62f80702df3f9c10"],["/tags/前端/page/2/index.html","085c17d415d725cd7337039bfa26ae8a"],["/tags/前端/page/3/index.html","76419f921172222ca4cdc0820e98c1db"],["/tags/她/index.html","25c1a3ef4fb3f7a0ca78849dbf5f0616"],["/tags/学习/index.html","70080945ec8fbf1ec69ec5f62cbf5a73"],["/tags/微信小程序/index.html","e86886e5ba204e36efa80c7ea060a2f0"],["/tags/我/index.html","c77a26592c11cb05b7ae95e512ff7523"],["/tags/浏览器/index.html","cf152ea28029e4bd5e744511521f0671"],["/tags/源码/index.html","07acb53bce50a4cd2eca2256028f7004"],["/tags/计算机/index.html","483b45ffad2bf7e8b0bb965c9ae2eb0a"],["/tags/设计模式/index.html","8ca90eb03210d27ed0514991c41eff72"],["/tags/阅读/index.html","20edfee619a5e4eff86e9de098050a91"],["/tags/面试/index.html","7a9b2bac92339857efba21ef67f9f091"],["/timeline/index.html","0090e89661ee42af81634f6961b7cd71"]];
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







