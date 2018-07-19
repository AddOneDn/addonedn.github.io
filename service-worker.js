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

var precacheConfig = [["/2017/04/20/addone/index.html","b8a84f64de0c83c38c7aef6a4eb937d1"],["/2017/04/20/gwyhArticle1/index.html","8a0e444d7706190e2a59c2ff95b04202"],["/2017/04/20/gwyhArticle2/index.html","ec982be015f15ff9db6009a3093375fa"],["/2017/04/20/gwyhArticle3/index.html","9e9eda66222d75fc3891581d4eb62dba"],["/2017/04/22/C-2016上机题/index.html","5d75783b84ff27bd1ec76599a7100abd"],["/2017/04/22/css垂直居中/index.html","4b717ee0de325bca098958e5b6e0653f"],["/2018/01/03/2017自我总结/index.html","6ee464485422d68ee1be2ec14f08ddb2"],["/2018/03/13/React-Native实现NbaApp/index.html","2f0c52187888ff21dc4d91104466494b"],["/2018/03/13/React在线编辑简历/index.html","c7d114231d38c922aab1bb8cf04ae977"],["/2018/03/13/微信小程序模仿网易云音乐/index.html","63c863692914ded54b58dfeeece517e2"],["/2018/03/14/CSS实现文字打字动画（-1白话讲解）/index.html","4aa4e79db19bac61fd76ea77313a9549"],["/2018/03/14/一道简单面试题理解JS事件机制（-1白话讲解/index.html","d586f3523ffd4ccd22cdfcf5748331ef"],["/2018/03/14/浏览器从输入URL到页面加载过程（-1白话精简讲解）/index.html","f8c3a0d296552511b7177e56d3114b8b"],["/2018/03/15/简单CSS实现闪烁动画（-1白话讲解）/index.html","04e406648cfc2cb05246c07e84e597d7"],["/2018/03/16/React生命周期简明宝典/index.html","4be51dd6b36154bf717a4b3fdcce359a"],["/2018/03/18/HTTP状态码简明宝典/index.html","440df18b4c9ec74e8c1f8972aa15328c"],["/2018/03/19/吐槽-学生把代码作业放到博客里有错么/index.html","071ad82e81996b9ed6c4d5b69e392c30"],["/2018/03/23/CSS人人都能写自定义Checkbox（-1白话讲解）/index.html","861a418845517cb64d0ac46f58503aeb"],["/2018/03/24/纯前端实现gif制作/index.html","c3e9fa4fce74357215d9f81b3815c590"],["/2018/03/25/Parcel上手与React开发环境搭建/index.html","c61e85bc11dd12bb666841958c3c27fa"],["/2018/03/27/Canvas模仿草莓音乐节宣传视频/index.html","aa1a0bb51395da553f2d24f0d068fff0"],["/2018/03/27/和SetImmediate小姐那销魂的一夜情/index.html","306bf13a89bcb80c43134c56303cc20d"],["/2018/03/28/Webpack配置讲解/index.html","e4a9dc79db671ac3251aec0dbdbd2063"],["/2018/03/28/深入React知识点/index.html","2336da1105b13268c135f7c96e88e44a"],["/2018/04/03/一个前端开发者的自我折磨-UI/index.html","0ea9cfe28f8ed83c0169d53d4eb4211a"],["/2018/04/07/微信小程序实现折叠展开菜单/index.html","689b3b61da32d5ce821839727057e10c"],["/2018/04/12/JavaScript设计模式/index.html","54dc9064fd821d0b016e4dd4f6266f13"],["/2018/04/13/一次简单的搜狐电话面试/index.html","0b0588e21cc3028666c3db795bc95b64"],["/2018/04/15/Git-Camp-简明Git入门-笔记记录/index.html","356cd257aeb5fa53cd22ce493fae5841"],["/2018/04/16/MVC-MVVM-MVP/index.html","8e1bf82d7477ce0aef7165ec4dcd629a"],["/2018/04/18/React源码阅读-1白话/index.html","4b8fa2ad313855b674330b62c97257ed"],["/2018/04/22/自写一个react-like项目/index.html","a145342efceb6b564c83c95f290f25c7"],["/2018/04/25/关于在mac上使用vscode编写markdown出现控制字符问题/index.html","9787c48363c323b7c15f9bc37845c62e"],["/2018/05/03/我在写微信小程序时的一些小技巧/index.html","6cef1bdea051364f063b2dcbe68150fe"],["/2018/05/05/计算机组成-程序的转换及机器级表示/index.html","c470725eb3a3c855e8ddb2b8ef25d38f"],["/2018/05/06/ICS2017-Programming-Assignment-2-2-2-3/index.html","b98d70d32511532db892fadd35906ca5"],["/2018/05/06/从“零”开始-：Spring-MVC/index.html","7dd15154020959c4d201539173b78e7c"],["/2018/05/06/前端开发者如何快速的把UI撸出来-讽刺版/index.html","8d8a07db18225a947a127e7384e254f7"],["/2018/05/07/你需要知道的JS高级技巧/index.html","e7abb034a5f85e0a7ae79c4235035f6e"],["/2018/05/15/create-react-app的webpack配置阅读/index.html","4fd019f92146a1d3bc65cef88f5dc6b9"],["/2018/05/31/大二杭州有赞前端电话面试/index.html","c17698cfae5573569c6e2f483dffd173"],["/2018/06/04/一些感想/index.html","701c0a990e73b387e6bc41a9e71f9798"],["/2018/06/07/Js技术题自写/index.html","29f8fe73265447202d1a60a9bf4c6f0e"],["/2018/06/08/关于页面切换后setInterval出现延时问题/index.html","1923fbe36b89e5b5191cc91a2c6b5d78"],["/2018/06/15/软件杯H5端-视频尬舞机-开发记录/index.html","90b21289e8a04e7a0a303514dce6b851"],["/2018/06/24/Javascript引擎之属性访问优化/index.html","90119d037c82df9e58c596da72e65964"],["/2018/07/19/async-await通读/index.html","2e6431e9baf0f8b45d7d7d8b659acbcd"],["/about/index.html","4b3442d98ffe3f7c2d25fa6544db75d3"],["/archives/2017/04/index.html","9cdb244a0edf77aebf61363b6c93fefb"],["/archives/2017/index.html","6113f14d81dc52ffeaaf18caccc5bfed"],["/archives/2018/01/index.html","b5ccc9151f88df754c609f8fb0417fdc"],["/archives/2018/03/index.html","bcc2fcf4cf29ae2de4045b36008d3efb"],["/archives/2018/03/page/2/index.html","7f49179dc34841167045044724d51bc8"],["/archives/2018/04/index.html","9618b173b34f527ad30bbc6b8dae9580"],["/archives/2018/05/index.html","b0ea7dadec2841e0bcd2bb09b8cdd82e"],["/archives/2018/06/index.html","85839ea086335d8ccd2c67a1a77605ae"],["/archives/2018/07/index.html","9691ed3354f8b9c02f30f2aa1f085b4d"],["/archives/2018/index.html","477cf537821fd63a0810eee4c7ac921d"],["/archives/2018/page/2/index.html","b5a09b62cca150f7536b3c0a70af15af"],["/archives/2018/page/3/index.html","1e324ed313e7bae7de602f64d4ba3df7"],["/archives/2018/page/4/index.html","c5eda6889603772c5e9ad5d628954321"],["/archives/2018/page/5/index.html","f75773635dddf51bb09b2951f04d8ea3"],["/archives/index.html","904b44edb4920362fdfdf701f00d7228"],["/archives/page/2/index.html","ac438646c018d438763d3b0536cdf9a6"],["/archives/page/3/index.html","8f8a61655c70388a2e7ecfe9bbd3d7be"],["/archives/page/4/index.html","89a7b3a5fc663281dd4d2b7957136a89"],["/archives/page/5/index.html","0c3a1a4d848e07d775b4345aceca91c4"],["/categories/Bug/index.html","16b4525fb0de60562c8c4fbe1eb03b7b"],["/categories/C/index.html","32466c6ec3804b535613deb7e5a618ba"],["/categories/CSS/index.html","2fb5055c0c320d1f786e512d002a1d91"],["/categories/Canvas/index.html","ad42792dc05146ec3f6391fbfdf02494"],["/categories/GIT/index.html","2ee7d8ad51ff4bb9e124e8a8c8d73ac4"],["/categories/HTTP/index.html","9b91ce8797e175697eba59853a5bf5ef"],["/categories/Javascript/index.html","918152e3d71e24fe47126cd5ce06204c"],["/categories/React/index.html","1c004d7064dbea1cff43cfd0ac8dc56e"],["/categories/UI/index.html","82607e8692a5401b0b4d73fe966c7729"],["/categories/Webpack/index.html","2bdc31186a9438a541334141c4d5e18a"],["/categories/index.html","ce1514179c3042b5ff0aef2c9f40c045"],["/categories/关于我/index.html","2dc7606dfa25061580406f1ca90b8617"],["/categories/吐槽/index.html","19d91e2341112e87694836aec66e5475"],["/categories/微信小程序/UI/index.html","47e6315efdd987059c9e60a423d92b40"],["/categories/微信小程序/index.html","6cc09fde52d15688bb43e6ba5b695146"],["/categories/我爱的人/index.html","04c400a34cd8954f90014c6f8381d1a4"],["/categories/浏览器/index.html","d5a57d7eee5881d20ca1e4d4b87be681"],["/categories/计算机组成原理/index.html","185048508b13a3a033ca1e6a02521422"],["/categories/设计模式/index.html","da8142dabb4bf7d522d90a021cd429b5"],["/categories/阅读/index.html","1dcc5ebdb4daafd5fa634b2f982672df"],["/categories/面试/index.html","ecaeedcbed95768e287f2fe74289e164"],["/css/index.css","1814a1fff4f2ea28c5698a50d1f49f86"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","84cbc0473ab95f760b9b7f9d68bdb365"],["/image/icon.png","08bbe941048aa814db7f4a803dfdf9fa"],["/image/icons/icon-128x128.png","cdc0f6116ff7959a040575e1997e2f1b"],["/image/icons/icon-144x144.png","cb7b23bf400ff70e572f933f0adceea1"],["/image/icons/icon-152x152.png","7dfcc63d3401db6c149c1d307011c4d7"],["/image/icons/icon-192x192.png","cbf563433e0d82e96aeeb02a30faeda7"],["/image/icons/icon-384x384.png","80e94dce0fa6e65c4cb348a83291233a"],["/image/icons/icon-512x512.png","8fa6d411e2cde7bebf3b3d14f81f5617"],["/image/icons/icon-72x72.png","1fbb6a95c00acd34451ad7a31d702586"],["/image/icons/icon-96x96.png","c6e771a46ef126eb2f7a926b8eb69299"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","474dce4962a362cf7433716d8ac3e241"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["/js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/links/index.html","ec0dded14c94c36470818b03d77ba629"],["/page/2/index.html","a9e49288f6961d921ace1bcb60b7ded3"],["/page/3/index.html","62f8d3f19c2f320c02335fc192370a40"],["/page/4/index.html","0e4ea770bda05df7550db15c2b0b8517"],["/page/5/index.html","c8b1d43d117a0612bc77825f104f7ce4"],["/tags/Bug/index.html","f545cf4b80f679c9076a1cd959a964f3"],["/tags/C/index.html","2867a20205232a39511eb0055f554ed1"],["/tags/CSS/index.html","f3051d718ee84610a6846372446ef85d"],["/tags/Canvas/index.html","62d583eb58f83360646a83dbfd9d0e33"],["/tags/Git/index.html","adeb262cee512bcb5ac589c878399bdb"],["/tags/HTML/index.html","11709baa948c801bcf50c45372b859c1"],["/tags/HTTP/index.html","b5a0cc654c41ddd9be4b12f816aff161"],["/tags/JS/index.html","7a6e967baa8d0d435878dcb29f33fece"],["/tags/Javascript/index.html","5547664cb996ccf364b1163804a85d68"],["/tags/Node-js/index.html","e7718e64c440d3f7be7d979bde8aebe4"],["/tags/Parcel/index.html","0b9d32c03847fcb652ec8745df1f5c04"],["/tags/React-Native/index.html","4e2a3557e63e1c38f697f43902e26976"],["/tags/React/index.html","085499dd0b217ccd4befe971e106d7d4"],["/tags/UI/index.html","bab3f5e69db7ee86f933bb13a83888fa"],["/tags/Webpack/index.html","6e70bb16c7f6a16274d80928cdcedd09"],["/tags/index.html","4297bf05c6b45d33d541d9255cc342bb"],["/tags/上机/index.html","3200dfb40098c0082fdcb21035757e84"],["/tags/前端/index.html","45a37ba83dd75236d0bf8d83ff84d2ca"],["/tags/前端/page/2/index.html","d8ce8f8797a885acd7dbfbd91baed06c"],["/tags/前端/page/3/index.html","9302dc49ea39b07f1955072f2bdc4a51"],["/tags/她/index.html","17d5246e3c1953f25e6b44c5066b8eb6"],["/tags/学习/index.html","07689a3421c6f8a6da343cc87cbf882a"],["/tags/微信小程序/index.html","3b2380ccaeb1f3b93e04fdac36dd6625"],["/tags/我/index.html","9002e38ba6a99bc1db0daf9c118dff1c"],["/tags/浏览器/index.html","d8c33c55f73b88734ea8e961e553c127"],["/tags/源码/index.html","1c103bf849b48410f632663072b14a50"],["/tags/计算机/index.html","33422ba890f69281e7a4003a868e9bb4"],["/tags/设计模式/index.html","d845d4293edba1df6a526adca6b3868e"],["/tags/阅读/index.html","0874b3595f88282b1b8e75af7bb1f932"],["/tags/面试/index.html","48cabbc33cc2aca9b82a9a2963d81108"],["/timeline/index.html","ff0c9859b3310ca43bfcd41cbb5a106a"]];
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







