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

var precacheConfig = [["/2017/04/20/addone/index.html","ea3b4c2050defcf3e7c9ea73b5efb74f"],["/2017/04/20/gwyhArticle1/index.html","bd70699822685de81116ef34fc34078b"],["/2017/04/20/gwyhArticle2/index.html","255574b4a313e70d4137d1c0d63e78a7"],["/2017/04/20/gwyhArticle3/index.html","2fda86929861aa99fe4dbf726ddbc7c8"],["/2017/04/22/C-2016上机题/index.html","cbc94ad4c81043fd7df720bf26aa3486"],["/2017/04/22/css垂直居中/index.html","1125cc38786c2ce6a035fe4ae2862cef"],["/2018/01/03/2017自我总结/index.html","69a837812b53e20a5c9a5ad60c4d229f"],["/2018/03/13/React-Native实现NbaApp/index.html","aab33eced4c610406b43a7efce847edc"],["/2018/03/13/React在线编辑简历/index.html","16c398acae60453a8ede81e52fa9f7ce"],["/2018/03/13/微信小程序模仿网易云音乐/index.html","bb9c28875c44833e8e48909eacc9e669"],["/2018/03/14/CSS实现文字打字动画（-1白话讲解）/index.html","790cb77706de127a04254ad9b217b4e0"],["/2018/03/14/一道简单面试题理解JS事件机制（-1白话讲解/index.html","f6a4b5ac048601ad49ad0a8d61e675cd"],["/2018/03/14/浏览器从输入URL到页面加载过程（-1白话精简讲解）/index.html","bd3445b7793dd511e2ec362fe5912724"],["/2018/03/15/简单CSS实现闪烁动画（-1白话讲解）/index.html","c203eb2879273e0608ae537d8341964f"],["/2018/03/16/React生命周期简明宝典/index.html","36062c221ea190a0ef09334fec4bd840"],["/2018/03/18/HTTP状态码简明宝典/index.html","7a9e7d15735d3a45bf3dd04111bdc2e4"],["/2018/03/19/吐槽-学生把代码作业放到博客里有错么/index.html","3ac08aa971b6c191fe9a6dc70be1ac17"],["/2018/03/23/CSS人人都能写自定义Checkbox（-1白话讲解）/index.html","eca5e9f949b6b7bf1e99d2563e8f0ef8"],["/2018/03/24/纯前端实现gif制作/index.html","5d6f626c03f21ee54260ece0e220740c"],["/2018/03/25/Parcel上手与React开发环境搭建/index.html","c4e3a2c955887fbeeb8034ed8b6d5677"],["/2018/03/27/Canvas模仿草莓音乐节宣传视频/index.html","a77c829c13c56ae788862967cac89ea5"],["/2018/03/27/和SetImmediate小姐那销魂的一夜情/index.html","60aec208610d77cdd3807d439ee75a9d"],["/2018/03/28/Webpack配置讲解/index.html","eb7fbec4002efc48c91e8265cb7ed3b8"],["/2018/03/28/深入React知识点/index.html","4224574e12703b222f506ebc3d7647e3"],["/2018/04/03/一个前端开发者的自我折磨-UI/index.html","5d96bf50f6808c1fe2fc0379696503ee"],["/2018/04/07/微信小程序实现折叠展开菜单/index.html","bae4c6a4918578503335c42e3684cd03"],["/2018/04/12/JavaScript设计模式/index.html","061dd86e99ba983730abff15df7d57c2"],["/2018/04/13/一次简单的搜狐电话面试/index.html","321b23e7980933ba89911017ab4475ac"],["/2018/04/15/Git-Camp-简明Git入门-笔记记录/index.html","f7d316f1c750fde6a0d4e6ded6aef796"],["/2018/04/16/MVC-MVVM-MVP/index.html","eb2356c18de0013017ae71b9b95fb1e3"],["/2018/04/18/React源码阅读-1白话/index.html","04f63c6bb1de561bd4cff983e6ddac60"],["/2018/04/22/自写一个react-like项目/index.html","6b20262ace4a65cb56fe11e13e90fd1d"],["/2018/04/25/关于在mac上使用vscode编写markdown出现控制字符问题/index.html","46756798f90b80d6bf0267e7f1499ff6"],["/2018/05/03/我在写微信小程序时的一些小技巧/index.html","297c1eae7dddb0afff016ab8c5a2fe1a"],["/2018/05/05/计算机组成-程序的转换及机器级表示/index.html","6ae57707e34abb033f74bfd10196c208"],["/2018/05/06/ICS2017-Programming-Assignment-2-2-2-3/index.html","47affe1c8f31e2ab025d4ad3850a81cf"],["/2018/05/06/从“零”开始-：Spring-MVC/index.html","6a00fa6fc50bdc123f053ea513ba6f10"],["/2018/05/06/前端开发者如何快速的把UI撸出来-讽刺版/index.html","a22ead16e70b5888e5c8f181cca6cd3c"],["/2018/05/07/你需要知道的JS高级技巧/index.html","1f4fb8510bd27934e7c443081e3cf200"],["/2018/05/15/create-react-app的webpack配置阅读/index.html","b3940e26b1c4788287adc3cd73bbeb6e"],["/2018/05/31/大二杭州有赞前端电话面试/index.html","280195ff20b9220bfeb3a219c68db7a8"],["/2018/06/04/一些感想/index.html","096946c13d98f631224e47bf88e7650f"],["/2018/06/07/Js技术题自写/index.html","2fe7f7c17ff20d0e3728120fcb12e64c"],["/2018/06/08/关于页面切换后setInterval出现延时问题/index.html","4cfb87cf1591bb6b92cd7d7277056491"],["/2018/06/15/软件杯H5端-视频尬舞机-开发记录/index.html","eb8a906475a06d411020f22b45bb225f"],["/2018/06/24/Javascript引擎之属性访问优化/index.html","01741dca204c7b48079b7abb726dfc2e"],["/2018/07/19/Promise精读/index.html","680d43f3a418c02b616c67811ea934a2"],["/2018/07/19/async-await通读/index.html","a7fea6903ef216aa8ced92091dec8270"],["/2018/07/24/在公司你应该会的git操作/index.html","541d17368254424e62fd1ad3d580517d"],["/2018/07/25/项目坑点/index.html","5d02cc6d1613193c9fe81197452efd63"],["/about/index.html","93cbd5e4cbc89022d99f2c0dea1585a9"],["/archives/2017/04/index.html","718aea166092ce8bcf1e6575a77fd18f"],["/archives/2017/index.html","9844fd467431d3d96d184111940e6011"],["/archives/2018/01/index.html","e00ba1ba428e9d65372b7df29b6e2c00"],["/archives/2018/03/index.html","ca318746be0f712e70f3dd60219d3d9f"],["/archives/2018/03/page/2/index.html","344945863e6a58d6acd2117fecad854a"],["/archives/2018/04/index.html","b1286f5929d0867027dc72805271b5d9"],["/archives/2018/05/index.html","8bdd49c03713cedee2387b081e62cabd"],["/archives/2018/06/index.html","4ec331f7ee7b88041cce7f4886e537f6"],["/archives/2018/07/index.html","e8e10fa56c520247b8d9c6cf54e60d0e"],["/archives/2018/index.html","60920329f56e18e425ce093c26739309"],["/archives/2018/page/2/index.html","016efe4dd61b4113867571cd6de40c12"],["/archives/2018/page/3/index.html","c9083ac11b2b9cd5c61f236c0aab9980"],["/archives/2018/page/4/index.html","007d319070530428939219faa78e30d7"],["/archives/2018/page/5/index.html","77f92b87de230fb56974a5c5eb5f481f"],["/archives/index.html","be16c8f10248004121f80699006f1ada"],["/archives/page/2/index.html","b5b74587792c00a3df0a592803897eb2"],["/archives/page/3/index.html","35c156eadf8eb5e917ca3af8f9b74503"],["/archives/page/4/index.html","3fc9215bd7a84302c1902783bc2087f2"],["/archives/page/5/index.html","cac37f7a77df08e94bb2494f2c071f2b"],["/categories/Bug/index.html","0bdc7471332aa95879c816fdab01f29f"],["/categories/C/index.html","ea7984d57db6c8c0ce1a776f5d526177"],["/categories/CSS/index.html","20dc8f738c8fffb89276605322d07b95"],["/categories/Canvas/index.html","ed864aa8e7e5a991931a6b6720b81281"],["/categories/GIT/index.html","af89838d51f07a61a8538a2f2437737a"],["/categories/HTTP/index.html","ccf184b00cdb60edd7b52762f953fe5b"],["/categories/Javascript/index.html","acfaf23b169d73fdac97fde44c1cce0a"],["/categories/React/index.html","a2ff16b0b8785c0d05c46af5f42ba226"],["/categories/UI/index.html","802c0a41d59c8e802a35688f4e1c5588"],["/categories/Webpack/index.html","ce36df4915b55dc1016740eb9f1d23d2"],["/categories/index.html","351b3c0c790d9cc6f159f802603c6cf2"],["/categories/关于我/index.html","7900bc7e4be4d94fbb61f4159bf1c15f"],["/categories/吐槽/index.html","11f1515e1c54fa6362ef68fd5c40e2b2"],["/categories/工作/index.html","13b77d8a0b6eac7bd39272e845f7001e"],["/categories/微信小程序/UI/index.html","844da38d32d8624096cecffde04cca02"],["/categories/微信小程序/index.html","015d3dc80e657ffb7a5340ed287fe5b0"],["/categories/我爱的人/index.html","a62c27ad3bac8940db54b3a025127539"],["/categories/浏览器/index.html","fdf23b8c48212dea5a9a57370abb457b"],["/categories/计算机组成原理/index.html","04754b4dcbce0f1ab3fa9bf0a74c2304"],["/categories/设计模式/index.html","61e00c7bde57b0e0e81b62ba08187da3"],["/categories/阅读/index.html","161e09b7a8431f35d1b225b1d1467c59"],["/categories/面试/index.html","ed5c8500a284ae050891d0976a91ac18"],["/css/index.css","1814a1fff4f2ea28c5698a50d1f49f86"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","24295dfe25ad1af4ca60953bf1af8621"],["/image/icon.png","08bbe941048aa814db7f4a803dfdf9fa"],["/image/icons/icon-128x128.png","cdc0f6116ff7959a040575e1997e2f1b"],["/image/icons/icon-144x144.png","cb7b23bf400ff70e572f933f0adceea1"],["/image/icons/icon-152x152.png","7dfcc63d3401db6c149c1d307011c4d7"],["/image/icons/icon-192x192.png","cbf563433e0d82e96aeeb02a30faeda7"],["/image/icons/icon-384x384.png","80e94dce0fa6e65c4cb348a83291233a"],["/image/icons/icon-512x512.png","8fa6d411e2cde7bebf3b3d14f81f5617"],["/image/icons/icon-72x72.png","1fbb6a95c00acd34451ad7a31d702586"],["/image/icons/icon-96x96.png","c6e771a46ef126eb2f7a926b8eb69299"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","69b9e8f9472bce58bfce8cadeedc452e"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["/js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/links/index.html","eaf75b61256ee13aaf99c0f884fc3f9b"],["/page/2/index.html","c529d28a3507e07caa303b78f330269f"],["/page/3/index.html","7562785f50bf9e4c5fc88acd65786f21"],["/page/4/index.html","177db6548c7b034a8da41e6ad7d8488e"],["/page/5/index.html","0c0e651ba70e67bb1ab4a7d17d8a24af"],["/tags/Bug/index.html","56904f42b4c6f01cff57606161d3c6b8"],["/tags/C/index.html","988557ba68c72f5d9f6d396e26dbda0e"],["/tags/CSS/index.html","8dbdcaea3ae4b3e9cc9a6c3c652dd3c3"],["/tags/Canvas/index.html","02fc05e3de53a0777f4e429d0f225622"],["/tags/Git/index.html","cc3ffd836a214150839fdc49cda43f83"],["/tags/HTML/index.html","183b0dc6654316d38d041f8d1eb99a64"],["/tags/HTTP/index.html","e47d3eecd2895632416e7fe4c3b9c64c"],["/tags/JS/index.html","cfc59f16d77728cfcccd66dd2b88c797"],["/tags/Javascript/index.html","5e67755966b61c902af9f5799053bae2"],["/tags/Node-js/index.html","498e952de3cadbcab5b1a0843178473b"],["/tags/Parcel/index.html","6687106b408e9cbfe6b834b4fde0418f"],["/tags/React-Native/index.html","1ce68574ff671d9f4b1c46d77846602d"],["/tags/React/index.html","58b858ecbaf62ed3c8aeb8e75d858be0"],["/tags/UI/index.html","182e22d5262bcde8ccea0b541c3b2eeb"],["/tags/index.html","aad87140756a6059e9a81c3488538902"],["/tags/webpack/index.html","5c1349cfb999e6897ddcd3cd9883d8e2"],["/tags/上机/index.html","491f112873670ab6f19fbba214212f82"],["/tags/前端/index.html","d31b0cf152a248e0442ed13e9e915f0f"],["/tags/前端/page/2/index.html","0ed8e747874dcde2a19c2a329597e126"],["/tags/前端/page/3/index.html","784d3d2bfa349e2c521034dc7243f6fc"],["/tags/她/index.html","13bd1d398f4c9e431156ebd97dbb5967"],["/tags/学习/index.html","9ccf89101d5a039ddac6afecaaefd0c9"],["/tags/工作/index.html","ac9897b3c4db6d634ed646e3eee09c44"],["/tags/微信小程序/index.html","36d085a80634763b4e0aa0068161acff"],["/tags/我/index.html","79745c4a0c40bb71066aece0e2451829"],["/tags/浏览器/index.html","a6bd1f925bdf62477236373cb382b9c6"],["/tags/源码/index.html","443763d707fd6f36db4c44d2ea7a09ef"],["/tags/计算机/index.html","7f1a92b7536a81326a619434ac5028a0"],["/tags/设计模式/index.html","57d5eef9caaef7849003dc5bd2a922e0"],["/tags/阅读/index.html","4d2b0f701023c4e1f632645df814e7dc"],["/tags/面试/index.html","cd04d484a254d9a6732d7daad9c4925d"],["/timeline/index.html","e0a5060f57565b9e64c4e5e9e2269594"]];
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







