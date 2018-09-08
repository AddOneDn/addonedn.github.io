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

var precacheConfig = [["/2017/04/20/addone/index.html","15b0ca3b58a438c383fc223242fef3e2"],["/2017/04/20/gwyhArticle1/index.html","a5a65c418ee155b38605d21d3541068c"],["/2017/04/20/gwyhArticle2/index.html","13cd1137eb2cdaca5420bd6f9126602f"],["/2017/04/20/gwyhArticle3/index.html","222742be55229ab80957b300d0c1169f"],["/2017/04/22/C-2016上机题/index.html","cbc94ad4c81043fd7df720bf26aa3486"],["/2017/04/22/css垂直居中/index.html","83f2091ee853e203a9736f72e3200989"],["/2018/01/03/2017自我总结/index.html","69a837812b53e20a5c9a5ad60c4d229f"],["/2018/03/13/React-Native实现NbaApp/index.html","aab33eced4c610406b43a7efce847edc"],["/2018/03/13/React在线编辑简历/index.html","16c398acae60453a8ede81e52fa9f7ce"],["/2018/03/13/微信小程序模仿网易云音乐/index.html","bb9c28875c44833e8e48909eacc9e669"],["/2018/03/14/CSS实现文字打字动画（-1白话讲解）/index.html","790cb77706de127a04254ad9b217b4e0"],["/2018/03/14/一道简单面试题理解JS事件机制（-1白话讲解/index.html","f6a4b5ac048601ad49ad0a8d61e675cd"],["/2018/03/14/浏览器从输入URL到页面加载过程（-1白话精简讲解）/index.html","bd3445b7793dd511e2ec362fe5912724"],["/2018/03/15/简单CSS实现闪烁动画（-1白话讲解）/index.html","c203eb2879273e0608ae537d8341964f"],["/2018/03/16/React生命周期简明宝典/index.html","36062c221ea190a0ef09334fec4bd840"],["/2018/03/18/HTTP状态码简明宝典/index.html","7a9e7d15735d3a45bf3dd04111bdc2e4"],["/2018/03/19/吐槽-学生把代码作业放到博客里有错么/index.html","3ac08aa971b6c191fe9a6dc70be1ac17"],["/2018/03/23/CSS人人都能写自定义Checkbox（-1白话讲解）/index.html","eca5e9f949b6b7bf1e99d2563e8f0ef8"],["/2018/03/24/纯前端实现gif制作/index.html","5d6f626c03f21ee54260ece0e220740c"],["/2018/03/25/Parcel上手与React开发环境搭建/index.html","c4e3a2c955887fbeeb8034ed8b6d5677"],["/2018/03/27/Canvas模仿草莓音乐节宣传视频/index.html","a77c829c13c56ae788862967cac89ea5"],["/2018/03/27/和SetImmediate小姐那销魂的一夜情/index.html","60aec208610d77cdd3807d439ee75a9d"],["/2018/03/28/Webpack配置讲解/index.html","eb7fbec4002efc48c91e8265cb7ed3b8"],["/2018/03/28/深入React知识点/index.html","4224574e12703b222f506ebc3d7647e3"],["/2018/04/03/一个前端开发者的自我折磨-UI/index.html","5d96bf50f6808c1fe2fc0379696503ee"],["/2018/04/07/微信小程序实现折叠展开菜单/index.html","bae4c6a4918578503335c42e3684cd03"],["/2018/04/12/JavaScript设计模式/index.html","061dd86e99ba983730abff15df7d57c2"],["/2018/04/13/一次简单的搜狐电话面试/index.html","321b23e7980933ba89911017ab4475ac"],["/2018/04/15/Git-Camp-简明Git入门-笔记记录/index.html","f7d316f1c750fde6a0d4e6ded6aef796"],["/2018/04/16/MVC-MVVM-MVP/index.html","eb2356c18de0013017ae71b9b95fb1e3"],["/2018/04/18/React源码阅读-1白话/index.html","04f63c6bb1de561bd4cff983e6ddac60"],["/2018/04/22/自写一个react-like项目/index.html","6b20262ace4a65cb56fe11e13e90fd1d"],["/2018/04/25/关于在mac上使用vscode编写markdown出现控制字符问题/index.html","46756798f90b80d6bf0267e7f1499ff6"],["/2018/05/03/我在写微信小程序时的一些小技巧/index.html","297c1eae7dddb0afff016ab8c5a2fe1a"],["/2018/05/05/计算机组成-程序的转换及机器级表示/index.html","6ae57707e34abb033f74bfd10196c208"],["/2018/05/06/ICS2017-Programming-Assignment-2-2-2-3/index.html","47affe1c8f31e2ab025d4ad3850a81cf"],["/2018/05/06/从“零”开始-：Spring-MVC/index.html","6a00fa6fc50bdc123f053ea513ba6f10"],["/2018/05/06/前端开发者如何快速的把UI撸出来-讽刺版/index.html","a22ead16e70b5888e5c8f181cca6cd3c"],["/2018/05/07/你需要知道的JS高级技巧/index.html","1f4fb8510bd27934e7c443081e3cf200"],["/2018/05/15/create-react-app的webpack配置阅读/index.html","b3940e26b1c4788287adc3cd73bbeb6e"],["/2018/05/31/大二杭州有赞前端电话面试/index.html","280195ff20b9220bfeb3a219c68db7a8"],["/2018/06/04/一些感想/index.html","096946c13d98f631224e47bf88e7650f"],["/2018/06/07/Js技术题自写/index.html","2fe7f7c17ff20d0e3728120fcb12e64c"],["/2018/06/08/关于页面切换后setInterval出现延时问题/index.html","4cfb87cf1591bb6b92cd7d7277056491"],["/2018/06/15/软件杯H5端-视频尬舞机-开发记录/index.html","eb8a906475a06d411020f22b45bb225f"],["/2018/06/24/Javascript引擎之属性访问优化/index.html","01741dca204c7b48079b7abb726dfc2e"],["/2018/07/19/Promise精读/index.html","680d43f3a418c02b616c67811ea934a2"],["/2018/07/19/async-await通读/index.html","a7fea6903ef216aa8ced92091dec8270"],["/2018/07/24/在公司你应该会的git操作/index.html","541d17368254424e62fd1ad3d580517d"],["/2018/07/25/项目坑点/index.html","5d02cc6d1613193c9fe81197452efd63"],["/about/index.html","b79e1184a6c65902a362e54f3b9a291a"],["/archives/2017/04/index.html","f8bd90766aca7f41d1c3a883787637d9"],["/archives/2017/index.html","6c8c648fd56fad3f176fc811d349c2af"],["/archives/2018/01/index.html","720e229fb4f62a1dc2fe5c5be57cc4a7"],["/archives/2018/03/index.html","6b4855a559d3f926f36a7a3214ae112e"],["/archives/2018/03/page/2/index.html","83c9d377d57deeb19b3202376f7896e6"],["/archives/2018/04/index.html","4db9f838db90a87f097388d5efead757"],["/archives/2018/05/index.html","f84fdd66180d7969f5ab60df174cb6e0"],["/archives/2018/06/index.html","8a018d521fd3c45d07b82c66861cb260"],["/archives/2018/07/index.html","b5ae014d0d385eb7d948b94a4a75f45e"],["/archives/2018/index.html","0387ee3929949741915d63d5b9ff07fd"],["/archives/2018/page/2/index.html","c0ab5b19b16c462cc6bfac357ae90ff9"],["/archives/2018/page/3/index.html","59683d294ed921d576afbc24b0f928cc"],["/archives/2018/page/4/index.html","24b199b9d8967f84eb4a289dbeed42bb"],["/archives/2018/page/5/index.html","ed4499c144f33ef0fa9a2ac9539b5039"],["/archives/index.html","2b2fb34a4669c23622b624a5e9daa535"],["/archives/page/2/index.html","6d150214ff5913af2fef3722af83ccbf"],["/archives/page/3/index.html","4a5cdefe996e178bdd22792da367a8ce"],["/archives/page/4/index.html","fe521315afdf3774bfbc48597a7e3e8c"],["/archives/page/5/index.html","939690b9930feb295bc0f158fad22caf"],["/categories/Bug/index.html","54b99e4edb42e8d42862dda8c9056732"],["/categories/C/index.html","7908021ef71c4441fef0c44a1b6ec65d"],["/categories/CSS/index.html","97f20c320b3117f880fc2506f18dc7df"],["/categories/Canvas/index.html","e848ef243eab0475c4fd0b3573cc9852"],["/categories/GIT/index.html","1ee85027937927e939bdf711f14206fc"],["/categories/HTTP/index.html","8a8642c7e798afb61c362e1357fddc34"],["/categories/Javascript/index.html","ddfbbf0615b9619860c620cd467d5a7d"],["/categories/React/index.html","25d90cc10a7736ef0647d7ace92813aa"],["/categories/UI/index.html","984d25614e6ca705e6df325fbcafedfc"],["/categories/Webpack/index.html","565a2fa9eef6110ef8e82cb245d500b2"],["/categories/index.html","5e05901d47d91bb443dc900dfb4988b3"],["/categories/关于我/index.html","f097daf243b2f42d1d1f0dd60e49b54a"],["/categories/吐槽/index.html","202c31d23463ea0573aa62be864903a0"],["/categories/工作/index.html","0fa35a5d2a8e70e86abe4df3fde23e1c"],["/categories/微信小程序/UI/index.html","11154a5af9eb03783c5ab56a820493a0"],["/categories/微信小程序/index.html","3b2b9e5e1bb928240a236dafa2e32530"],["/categories/我爱的人/index.html","9084ee52a2a43edf1b96a1d8f7ce4b9e"],["/categories/浏览器/index.html","784f2e820444c20845a5b3bffbc8780e"],["/categories/计算机组成原理/index.html","5079500fd04f36686e7e57827fa19c1b"],["/categories/设计模式/index.html","dfbead0804d0f2b8b7c725814a06d932"],["/categories/阅读/index.html","e02de6d32a1311279feff3862b12828e"],["/categories/面试/index.html","84733a00835755fe7d3b2e31a2815f9a"],["/css/index.css","1814a1fff4f2ea28c5698a50d1f49f86"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","42a63972f252cb875104af14adb6f91f"],["/image/icon.png","08bbe941048aa814db7f4a803dfdf9fa"],["/image/icons/icon-128x128.png","cdc0f6116ff7959a040575e1997e2f1b"],["/image/icons/icon-144x144.png","cb7b23bf400ff70e572f933f0adceea1"],["/image/icons/icon-152x152.png","7dfcc63d3401db6c149c1d307011c4d7"],["/image/icons/icon-192x192.png","cbf563433e0d82e96aeeb02a30faeda7"],["/image/icons/icon-384x384.png","80e94dce0fa6e65c4cb348a83291233a"],["/image/icons/icon-512x512.png","8fa6d411e2cde7bebf3b3d14f81f5617"],["/image/icons/icon-72x72.png","1fbb6a95c00acd34451ad7a31d702586"],["/image/icons/icon-96x96.png","c6e771a46ef126eb2f7a926b8eb69299"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","103cd92d6444f3ed789b5e2f1b467a3e"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["/js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/links/index.html","4a4836462279aeb37ac9a4e8c5656a3c"],["/page/2/index.html","145f6bec8d280c7f59bba9ef13a8ad2d"],["/page/3/index.html","768e70e21a9a87f8e9a75291f4237d96"],["/page/4/index.html","a6b956c46e5f15c3d3aac2c3585610bc"],["/page/5/index.html","5af0b6dfdfe4684ce2fb3e40a0e9b707"],["/tags/Bug/index.html","2ca4523c478f172ebc8ffb4958387a72"],["/tags/C/index.html","a9b16987bedafdbf4e44bf0f61cdc194"],["/tags/CSS/index.html","adfd3e5d0319bc56acff80f6f057e2ce"],["/tags/Canvas/index.html","b7fbbf126aa03283441f6cf3bebe7028"],["/tags/Git/index.html","9bf2681e296dcb85348f02ec333b777f"],["/tags/HTML/index.html","270d85f36c8c1d91eaac68e7520f5c47"],["/tags/HTTP/index.html","394e7c92c33ce3586cf1f5e01b772ae4"],["/tags/JS/index.html","a40f30066e0dea5867624a1fd8b44f52"],["/tags/Javascript/index.html","4cddc2fc32f4f8125c07357921fb7fa9"],["/tags/Node-js/index.html","241da9d723a3c4d61edd7c29ea2998ae"],["/tags/Parcel/index.html","d877601d4c192c1d5a660091cfcabbd3"],["/tags/React-Native/index.html","861dd784e45225f062c40412f66f345b"],["/tags/React/index.html","7609edd51ac9fc6ac3428a16bfc6514a"],["/tags/UI/index.html","896e1822d4413561cb4769b69ff96289"],["/tags/index.html","40c9b5bd4e2d9a6526ebc7dc65783220"],["/tags/webpack/index.html","11fd8de893deb2dd81e2d39087892c7c"],["/tags/上机/index.html","ff14af44328eb8856a97548a185487ec"],["/tags/前端/index.html","3cb212a9c28fbfb7d60385c17c0c09a4"],["/tags/前端/page/2/index.html","24959fdc90232e52e33f6d7bddc0135d"],["/tags/前端/page/3/index.html","58885b79221e67ca4bd52676b512a55e"],["/tags/她/index.html","16363b4e0ebfe55033c6f0df459416c9"],["/tags/学习/index.html","658233cc63ea86c0f9a8c23586a26310"],["/tags/工作/index.html","832ba4e45cd20ca43a482af6af518289"],["/tags/微信小程序/index.html","5017cdd8361611efc5655b0c94f8f11f"],["/tags/我/index.html","4a1019dba93d7ddc459d2f83964eadc9"],["/tags/浏览器/index.html","d80d8dcc5ee27769136f12be8e68dba1"],["/tags/源码/index.html","41dd8a6a08b93fcde34ff52a3e551ccb"],["/tags/计算机/index.html","4cb171cdb8298441731136c0583b978f"],["/tags/设计模式/index.html","1e3ac27a5dcb1468285a74b34ab6c862"],["/tags/阅读/index.html","795d2698be4cdf16d6013052c91760d9"],["/tags/面试/index.html","8d6a5283dc37552c77b95a16013d5443"],["/timeline/index.html","ea4837a5e516e8624de95a92e2c9326e"]];
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







