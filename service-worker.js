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

var precacheConfig = [["/2017/04/20/addone/index.html","1b2df2d727680540b5e857814a3a97fc"],["/2017/04/20/gwyhArticle1/index.html","9b9d1844289944ee381a604d6e260735"],["/2017/04/20/gwyhArticle2/index.html","ece44d9e14fdb5c8eee0a7cdd99a5c1d"],["/2017/04/20/gwyhArticle3/index.html","0683dae48f06f0b7d554d40d1e521e09"],["/2017/04/22/C-2016上机题/index.html","4d06bab7da384fe1b60d1bd5e8d0d7de"],["/2017/04/22/css垂直居中/index.html","c6c8369246f945d869b7a15dbd623346"],["/2018/01/03/2017自我总结/index.html","18a3dac95234144a38d67088486deeec"],["/2018/03/13/React-Native实现NbaApp/index.html","1ee1d6c5afc76f2c6899930b3754abf4"],["/2018/03/13/React在线编辑简历/index.html","dc7b2b72e3f04236a5155a8cc3af4123"],["/2018/03/13/微信小程序模仿网易云音乐/index.html","d9820510713be40a462db7e6bf598827"],["/2018/03/14/CSS实现文字打字动画（-1白话讲解）/index.html","e10d2aeb372d5a520b1cd38331598461"],["/2018/03/14/一道简单面试题理解JS事件机制（-1白话讲解/index.html","0596ba0e4a59657433eb337901c885ca"],["/2018/03/14/浏览器从输入URL到页面加载过程（-1白话精简讲解）/index.html","f0092119ffbb9ea41c5add3f891e401c"],["/2018/03/15/简单CSS实现闪烁动画（-1白话讲解）/index.html","651a4a192b975b66cded2a5d14984d90"],["/2018/03/16/React生命周期简明宝典/index.html","0daa68366a08089e8c4eae8a67ea0239"],["/2018/03/18/HTTP状态码简明宝典/index.html","470abb7247c4a3142f39664d09db058b"],["/2018/03/19/吐槽-学生把代码作业放到博客里有错么/index.html","8bd2538819bc0a72d7a60d696b52c60f"],["/2018/03/23/CSS人人都能写自定义Checkbox（-1白话讲解）/index.html","34890ab9236bf2446ba06f6099c353b5"],["/2018/03/24/纯前端实现gif制作/index.html","578dbd2b87330804e36c28ccbbde33cd"],["/2018/03/25/Parcel上手与React开发环境搭建/index.html","cbed82f5e9c6501db2c332de2b959a49"],["/2018/03/27/Canvas模仿草莓音乐节宣传视频/index.html","e5d3f5263213295d8ea00f501bec846a"],["/2018/03/27/和SetImmediate小姐那销魂的一夜情/index.html","2c959ecca871406e7d1a54414e5cf1b1"],["/2018/03/28/Webpack配置讲解/index.html","73afd139d0b833591fb1a15e590957c5"],["/2018/03/28/深入React知识点/index.html","2723d3694fe8cd010a98a8198f476a7d"],["/2018/04/03/一个前端开发者的自我折磨-UI/index.html","b858f714d73faeb8c658db545213372e"],["/2018/04/07/微信小程序实现折叠展开菜单/index.html","9421e12d61baf592d46370acfabbd53e"],["/2018/04/12/JavaScript设计模式/index.html","ad7b23fae56837cca7e7d98637fa33f6"],["/2018/04/13/一次简单的搜狐电话面试/index.html","5127cf6339d65cbb36316d31cfff9e79"],["/2018/04/15/Git-Camp-简明Git入门-笔记记录/index.html","dc8a527cce0c5e2315496f7be3aa4a50"],["/2018/04/16/MVC-MVVM-MVP/index.html","b402505af2b5f5cd8b6bca4035a35b13"],["/2018/04/18/React源码阅读-1白话/index.html","45afa189879051b9bddac60799302a77"],["/2018/04/22/自写一个react-like项目/index.html","ca5efce2f97fd1581e094ab845302e9d"],["/2018/04/25/关于在mac上使用vscode编写markdown出现控制字符问题/index.html","a331a66191583b96e62365aa908e65e2"],["/2018/05/03/我在写微信小程序时的一些小技巧/index.html","2cbb9e9d7f723580a4af74472db38316"],["/2018/05/05/计算机组成-程序的转换及机器级表示/index.html","b13185f3ff2f6cfe92cc6d88cec6668f"],["/2018/05/06/ICS2017-Programming-Assignment-2-2-2-3/index.html","4a59b9cc1888814aff6a104fcbc5913f"],["/2018/05/06/从“零”开始-：Spring-MVC/index.html","806331c73fc5e615fab19d60c9998989"],["/2018/05/06/前端开发者如何快速的把UI撸出来-讽刺版/index.html","5751d529efb5a9da0c50a60bb828539d"],["/2018/05/07/你需要知道的JS高级技巧/index.html","c965aacef51b1dcbeca56eeeea91ff26"],["/2018/05/15/create-react-app的webpack配置阅读/index.html","f82ff37386c43da37d9a6669d747b965"],["/2018/05/31/大二杭州有赞前端电话面试/index.html","612b1ab9339b390fe4e47e698b56e3fa"],["/2018/06/04/一些感想/index.html","f2bc88bf656f7676b3e04ce429371517"],["/2018/06/07/Js技术题自写/index.html","07aa7d2185d6ec7d70f74aab19f94da4"],["/2018/06/08/关于页面切换后setInterval出现延时问题/index.html","d5882cab34b506adfcc1b494a945ae23"],["/2018/06/15/软件杯H5端-视频尬舞机-开发记录/index.html","3ecebb1fc6cb0909e74ee4baf413b4b7"],["/2018/06/24/Javascript引擎之属性访问优化/index.html","1300013690400a6ded731401db0c00a6"],["/2018/07/19/Promise精读/index.html","fae42d755e3512220f6356f21773139e"],["/2018/07/19/async-await通读/index.html","2bb7e1955a2fb641589f5b41186f8612"],["/2018/07/24/在公司你应该会的git操作/index.html","5e87b1b32153e2a460648792338ac91c"],["/2018/07/25/项目坑点/index.html","f3c65d570529eeba6910064170f369b7"],["/2018/09/10/自写npm包汇总/index.html","19faaca0c3c26f758976735cbe59f7d4"],["/2018/09/14/express-koa-redux三者中间件对比/index.html","163cba32240303d5a31933935a446216"],["/about/index.html","d61ce0d3e7cab5aebd8fb34dbf06aa6d"],["/archives/2017/04/index.html","a9e8dfee3108243742cd86d47f442df0"],["/archives/2017/index.html","8d009fb19e742e4e58a89171339d2cf5"],["/archives/2018/01/index.html","c12600ab22c1513a26d0e4cee7b3acfd"],["/archives/2018/03/index.html","1faa5d222313113db5ee6e3902f881dd"],["/archives/2018/03/page/2/index.html","4e35a2854a50f7481ea773d387d83b9b"],["/archives/2018/04/index.html","d7b40f0dbac3bdaf78946912b8c58c2b"],["/archives/2018/05/index.html","9957f61e372dd2e0d5f7aeb5f25826e5"],["/archives/2018/06/index.html","6f97c1324acfffcbe8c3b904dcf317b1"],["/archives/2018/07/index.html","de1b55af5c81e6818840862ab0968390"],["/archives/2018/09/index.html","196f6c1222532b88b9cddb6299ffbf86"],["/archives/2018/index.html","82e98d13771faee1871cac107e68a6cd"],["/archives/2018/page/2/index.html","829850b6d0d572dd73d4b1a2f2ffcb36"],["/archives/2018/page/3/index.html","b2ac0680936cec69f4bb81415caa2a1d"],["/archives/2018/page/4/index.html","3456fddc40bbea67b8eb4b73b42ea90b"],["/archives/2018/page/5/index.html","637bf9a7cade9e09360f7bbb2fd33f2c"],["/archives/index.html","ec4c78108d2c6b48207f56353e6a6b64"],["/archives/page/2/index.html","8ce9a7813f096dc5c99edc741cd93ffd"],["/archives/page/3/index.html","249f921bbb0db70e370d2c2738fa1a83"],["/archives/page/4/index.html","eeb825238f8d8d4b633784e215780925"],["/archives/page/5/index.html","e1c686b6e9d559b8393421b7516863f0"],["/archives/page/6/index.html","b2443f4b5facd729086375cd552db4bf"],["/categories/Bug/index.html","dbd9ce7af005522c93ef80204152aab6"],["/categories/C/index.html","5043a8b8add58c6e720e02b7731b41c5"],["/categories/CSS/index.html","cc7576bbaf2b52a02336b3da9ed6cbca"],["/categories/Canvas/index.html","de25245236350314040128c4a6a310e9"],["/categories/GIT/index.html","25e09602e5980e912728faa049c1a2c4"],["/categories/HTTP/index.html","b889ee8e121afe8a1eefd32e0bf52925"],["/categories/Javascript/index.html","bc212cd506b04dea4fe4ad7f320d8317"],["/categories/React/index.html","6a6bf7c8e6c248a78ca77a43345da3fb"],["/categories/UI/index.html","5c3ee192fab2205fe6bd56409228fa7d"],["/categories/Webpack/index.html","02004de2b0aa45929ad872ba83ea765d"],["/categories/index.html","be744aa7b7f8824c3e4bab34fd932cb9"],["/categories/npm/index.html","f12ce551bb6b6886ec9a78999bdd55cb"],["/categories/关于我/index.html","5a7f2838f680198a99a2a46a08c52185"],["/categories/吐槽/index.html","4292bf2e284c46d314c90ae1b8cb767f"],["/categories/工作/index.html","23a12edd20f728ed02058bd0dcab67f5"],["/categories/微信小程序/UI/index.html","deb60b21bd00a71043eb28a34db55987"],["/categories/微信小程序/index.html","84b9c78467bc413768a5294fe021b3d0"],["/categories/我爱的人/index.html","c8d8f7bcd21d08b994ed27728b95d7d5"],["/categories/浏览器/index.html","3dc0c53547cb2c9fae6972332b31213f"],["/categories/计算机组成原理/index.html","efc894ad8f1bee57823cfba61e5cef56"],["/categories/设计模式/index.html","7c547c0f0db9f482ff185f9c161875f2"],["/categories/阅读/index.html","139ee2127acfdeba0db8cdee23677b1e"],["/categories/面试/index.html","96f59c3b9725d9be462dd4d485aeee46"],["/css/index.css","1814a1fff4f2ea28c5698a50d1f49f86"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","37a80fad6231aeb28ede1401a43ed822"],["/image/icon.png","08bbe941048aa814db7f4a803dfdf9fa"],["/image/icons/icon-128x128.png","cdc0f6116ff7959a040575e1997e2f1b"],["/image/icons/icon-144x144.png","cb7b23bf400ff70e572f933f0adceea1"],["/image/icons/icon-152x152.png","7dfcc63d3401db6c149c1d307011c4d7"],["/image/icons/icon-192x192.png","cbf563433e0d82e96aeeb02a30faeda7"],["/image/icons/icon-384x384.png","80e94dce0fa6e65c4cb348a83291233a"],["/image/icons/icon-512x512.png","8fa6d411e2cde7bebf3b3d14f81f5617"],["/image/icons/icon-72x72.png","1fbb6a95c00acd34451ad7a31d702586"],["/image/icons/icon-96x96.png","c6e771a46ef126eb2f7a926b8eb69299"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","4b46ec6e94fc8ff501500326d9700553"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["/js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/links/index.html","b23a9d80bb6d90e0f13f742a6767581d"],["/page/2/index.html","6bfa5eb51b9abb92862e688acd73d025"],["/page/3/index.html","fbdce5ff161775b223a6bcf27125052f"],["/page/4/index.html","f1501229c533e6b50b91e49ebca5427f"],["/page/5/index.html","d7a29cd016bc5df79b269a809f2b51b7"],["/page/6/index.html","477841d928516b73b4751d23cf70708d"],["/tags/Bug/index.html","acbce44b775479df92a8b6c76017b9ea"],["/tags/C/index.html","46231538d907463260a6a113fd9a4377"],["/tags/CSS/index.html","49f874e3304750fa5e598789b32ca5aa"],["/tags/Canvas/index.html","79c5316de7865e9dab29afb111eb279e"],["/tags/Git/index.html","4d8ef80f37b7ee3894a37bc51eb20f0f"],["/tags/HTML/index.html","57019b3625d3507a2832842428b86484"],["/tags/HTTP/index.html","f7179b2db7f73132183e0d04873ebf81"],["/tags/JS/index.html","9ecbb7fb0ab35e30a870e49c0d0d390c"],["/tags/Javascript/index.html","60e84df9eeeb0a93d4aaa4dbfd7fe058"],["/tags/Node-js/index.html","b8eabe1d1673c62191d2627e5925b0f4"],["/tags/Nodejs/index.html","62c9e82b7a9a452d08ebb8d7666357b9"],["/tags/Parcel/index.html","50e718ef846af39c19e88f947fae398f"],["/tags/React-Native/index.html","ce6ad3bad477e661a35859658fd84b41"],["/tags/React/index.html","6a12619b7986a399ad025fccb017e529"],["/tags/UI/index.html","65b651ad7929c72b9b16954246dbeae8"],["/tags/Webpack/index.html","85b89373c9116b5ae40d3bf925251832"],["/tags/index.html","8a2dd9e2df536ad7b305c1ec48fb32e9"],["/tags/npm/index.html","37e6c6decfad1f7a32356768026329dc"],["/tags/上机/index.html","6d75d42f400772e4f02d575f03ae5efa"],["/tags/前端/index.html","a0cf4d9ee71c3548c8eca6f3ed477d7a"],["/tags/前端/page/2/index.html","859383c510d2251643d7896cd0721345"],["/tags/前端/page/3/index.html","b419e91c47938483fc2c5577cc3ee8b4"],["/tags/她/index.html","ba7e96ef3d4679ed7bb3a6cb6f56dd98"],["/tags/学习/index.html","dc4f0559c0be846df00b34cb9500a5f0"],["/tags/工作/index.html","ec1cf7b930fd108a1a74bbc5a0254bfe"],["/tags/微信小程序/index.html","8178986c37f7fe6f0cbb5ab34f6cac6b"],["/tags/我/index.html","fe3599d37d7ded3ff964e4eabf1bf2c4"],["/tags/浏览器/index.html","ac2a1de50606688b185d8d4cee465bb0"],["/tags/源码/index.html","fa7bf6cd2877c6fd4e1a4cf4ae119c82"],["/tags/计算机/index.html","eff328eb47cc2c52281b6fa6dbcf1f2c"],["/tags/设计模式/index.html","21475c1b06ea52f58425bd4af0816abf"],["/tags/阅读/index.html","1637e05f5a27ec6bf2d7f1e086c9aff5"],["/tags/面试/index.html","c486bce70f2406b04182466f24085e21"],["/timeline/index.html","5efa28bf1e4cb6ac2eaf37d29b24d3e6"]];
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







