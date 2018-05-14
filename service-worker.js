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

var precacheConfig = [["/2017/04/20/addone/index.html","1d3740ae885eca7c416cfca69af3e9bf"],["/2017/04/20/gwyhArticle1/index.html","075a2ed8f283697e97bb1d35dc7fccba"],["/2017/04/20/gwyhArticle2/index.html","8174350280290ba6fbced67dcfe07768"],["/2017/04/20/gwyhArticle3/index.html","ecb6f3125692486f90047cf2f7fb1851"],["/2017/04/22/C-2016上机题/index.html","f6b1fe7600a5a36e6c735a346ff3932d"],["/2017/04/22/css垂直居中/index.html","2e39e7b984aa7003981f3dfeb08d2a5b"],["/2018/01/03/2017自我总结/index.html","f34b7f66672d5f327c0f73ce869927cb"],["/2018/03/13/React-Native实现NbaApp/index.html","6255fb8f526795891d1b097c47aac46f"],["/2018/03/13/React在线编辑简历/index.html","f5687a84c4a370805c5f3e429c55f322"],["/2018/03/13/微信小程序模仿网易云音乐/index.html","0bbca191c58de4e0f0aea99c7b75bb43"],["/2018/03/14/CSS实现文字打字动画（-1白话讲解）/index.html","29d81f464baeffdf34874e30a7d477a1"],["/2018/03/14/一道简单面试题理解JS事件机制（-1白话讲解/index.html","c9ce2018369ae2019b636344ed63067b"],["/2018/03/14/浏览器从输入URL到页面加载过程（-1白话精简讲解）/index.html","106bf5223af1dd4d806b0aeceb2bf563"],["/2018/03/15/简单CSS实现闪烁动画（-1白话讲解）/index.html","ec2bfd395d33ed493575243daa1642b2"],["/2018/03/16/React生命周期简明宝典/index.html","9ea3e7997d4583b80b6c1b61a6f57e87"],["/2018/03/18/HTTP状态码简明宝典/index.html","199de3aa92807adf033e7b340bf7d5d0"],["/2018/03/19/吐槽-学生把代码作业放到博客里有错么/index.html","ffcc475d5d0588d1c43f5ace5ac4ecea"],["/2018/03/23/CSS人人都能写自定义Checkbox（-1白话讲解）/index.html","c3ab8120526a454aefcf25faaaeecb7d"],["/2018/03/24/纯前端实现gif制作/index.html","1eec8ed37d33b8313d1fc5ec5e872de8"],["/2018/03/25/Parcel上手与React开发环境搭建/index.html","cb01f7bbc341726d20f4d02f6f687bd8"],["/2018/03/27/Canvas模仿草莓音乐节宣传视频/index.html","865109a1e19fece28cb98551b8be8366"],["/2018/03/27/和SetImmediate小姐那销魂的一夜情/index.html","fe30f9c777a0667df79e923b0e56f7c6"],["/2018/03/28/Webpack配置讲解/index.html","93ff445eeab3e68c334e57a0b95a975b"],["/2018/03/28/深入React知识点/index.html","c2b979e7eaa58cfda13f3090e5d16f47"],["/2018/04/03/一个前端开发者的自我折磨-UI/index.html","e6c932d103cce5ab8b33e0e32589d683"],["/2018/04/07/微信小程序实现折叠展开菜单/index.html","d1c9ae4113a0bd2f1d6adb157550fe61"],["/2018/04/12/JavaScript设计模式/index.html","478533f3ac26849db911508ca45456f1"],["/2018/04/13/一次简单的搜狐电话面试/index.html","195a2604e666b44790e954e17d82a1e0"],["/2018/04/15/Git-Camp-简明Git入门-笔记记录/index.html","74383fb18924715da6755a6b8764a4b3"],["/2018/04/16/MVC-MVVM-MVP/index.html","10b8a8ab0ad63e986cae1e228cd9e4ed"],["/2018/04/18/React源码阅读-1白话/index.html","24ad4a2b193e2788ee75aaa17f112ea8"],["/2018/04/22/自写一个react-like项目/index.html","8f20380dc68b4671cf5e5d07b6b763ad"],["/2018/04/25/关于在mac上使用vscode编写markdown出现控制字符问题/index.html","df57fa9f35dca7da744b8ece598b3a27"],["/2018/05/03/我在写微信小程序时的一些小技巧/index.html","6d4794d673e4537a357c880a2002707c"],["/2018/05/05/计算机组成-程序的转换及机器级表示/index.html","89940d38b8d0276d3a47176608bcdb9e"],["/2018/05/06/ICS2017-Programming-Assignment-2-2-2-3/index.html","77a4b65450a7f9aa5ab1f8acc6e2a9a3"],["/2018/05/06/从“零”开始-：Spring-MVC/index.html","2171b07f323518b5c624b1d1cf9ee0d4"],["/2018/05/06/前端开发者如何快速的把UI撸出来-讽刺版/index.html","9ac5464c69f6a442b669be66a3e22684"],["/2018/05/07/你需要知道的JS高级技巧/index.html","d9ede95097584c62a646a0be83959b49"],["/about/index.html","3168d048e7cd6a23f7ebc6262adcf4ef"],["/archives/2017/04/index.html","b07d0e3e6239d1fabd2131e1a1ef1c4f"],["/archives/2017/index.html","8e033418cc3fd1780bdb7951b3e04022"],["/archives/2018/01/index.html","71b6538446f7bdeb4e6018cee0d471fe"],["/archives/2018/03/index.html","d8132efba005b0bc5a13fe42d4cd7ef2"],["/archives/2018/03/page/2/index.html","f0d8c7cf52a030341f792286d0717ae1"],["/archives/2018/04/index.html","1f8da6210bff0ca4e470a81bc27878fb"],["/archives/2018/05/index.html","2d8c7ea8e35043f9ffbc720f77f63d08"],["/archives/2018/index.html","c990a4d525e5735d1f8f3fbb2748e282"],["/archives/2018/page/2/index.html","1612c5b503b2df7c1a7615bd97fc88e9"],["/archives/2018/page/3/index.html","2d1323005a6a86185b9038b7ce2fa355"],["/archives/2018/page/4/index.html","e692eca78b6a067da2a44cfac0758f33"],["/archives/index.html","307bb252b19240c777a24a9d9d6ffc61"],["/archives/page/2/index.html","f48b2e8cfa4f972b98abfd48d8034d4a"],["/archives/page/3/index.html","9e115050ed3f6024792a0936b9620f1a"],["/archives/page/4/index.html","79c1e0ce92c749affdf50fefd5cdb286"],["/categories/Bug/index.html","3f5ecc1d7cdfebf64ea6eefc734752bd"],["/categories/C/index.html","a74358cb020900b2dcb7a4829a475354"],["/categories/CSS/index.html","ca57ca3c268c673ae9612b4e0fed6e24"],["/categories/Canvas/index.html","1f663e313608d68b0084202c39d118cc"],["/categories/GIT/index.html","bc27bb40a2a92a04e6bf13cf9df50b47"],["/categories/HTTP/index.html","aecebdc54015ca97facbfea81db04aa1"],["/categories/Javascript/index.html","a8d41dbd950f600e53f019b9db7e51a3"],["/categories/React/index.html","055d2faa267d13dc32c7e9ced3546d16"],["/categories/UI/index.html","a4e82d3be2d4b42d934efc09326aa7d1"],["/categories/Webpack/index.html","9652bd19186eab8df333ebeffb1e6029"],["/categories/index.html","b095c0ae749ba5bfb31ef1056169d938"],["/categories/关于我/index.html","0e7b1a4e055fa06e709e7ec9a4dea63b"],["/categories/吐槽/index.html","8ddb3fce062653a407a450cdff4bc61b"],["/categories/微信小程序/UI/index.html","805251d00cb3cde249e30337fc3d2466"],["/categories/微信小程序/index.html","b7aa6333c05d8a082719e60a86f3ba06"],["/categories/我爱的人/index.html","03570546d214f39444d4bec8fc26d236"],["/categories/浏览器/index.html","6c54869f60208f4fe43066efbab7f222"],["/categories/计算机组成原理/index.html","28609cc63c4a05dce35d4c8494b9698e"],["/categories/设计模式/index.html","ffc2a4573602f29406125f7cf252ee79"],["/categories/阅读/index.html","7bff5d159efb824e29110979d5a72734"],["/categories/面试/index.html","c614f38047893e22318e5ef074964cb6"],["/css/index.css","048c62123fccd97e515e98cb0a74fb3a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","80f457c4a5c4ef05f9293cb82b080e84"],["/image/icon.png","08bbe941048aa814db7f4a803dfdf9fa"],["/image/icons/icon-128x128.png","cdc0f6116ff7959a040575e1997e2f1b"],["/image/icons/icon-144x144.png","cb7b23bf400ff70e572f933f0adceea1"],["/image/icons/icon-152x152.png","7dfcc63d3401db6c149c1d307011c4d7"],["/image/icons/icon-192x192.png","cbf563433e0d82e96aeeb02a30faeda7"],["/image/icons/icon-384x384.png","80e94dce0fa6e65c4cb348a83291233a"],["/image/icons/icon-512x512.png","8fa6d411e2cde7bebf3b3d14f81f5617"],["/image/icons/icon-72x72.png","1fbb6a95c00acd34451ad7a31d702586"],["/image/icons/icon-96x96.png","c6e771a46ef126eb2f7a926b8eb69299"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","2f0a15d4429bcba82c29508b860c7a9e"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["/js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/links/index.html","2629ae733c1f08529e47ef717ad6cca0"],["/page/2/index.html","192b3d0cb6b1c8a83c219a940388e5a7"],["/page/3/index.html","318582f0547af290f44d99223b8aa9dc"],["/page/4/index.html","c9081175eb1c85d8d0b8af240b09a75a"],["/tags/Bug/index.html","ad392ea4262054128d80d2be891800f9"],["/tags/C/index.html","ec3f028b970e17a98aec1444c1824c48"],["/tags/CSS/index.html","d203fa104f522e9926f077e10a11f869"],["/tags/Canvas/index.html","6578f53153cd1bd7c420533f2d4898d6"],["/tags/Git/index.html","52be93aaf81311baa80bf92d191110c8"],["/tags/HTML/index.html","08744d2813dad2e2e025d9d040f0ccd8"],["/tags/HTTP/index.html","fcdcc9082e64b80b32dc95757a557d92"],["/tags/JS/index.html","9f8bdf7e3ac0182c43ee2ab3554e1b09"],["/tags/JavaScript/index.html","89b456e3a54879b9b301c9369c41ca1d"],["/tags/Node-js/index.html","e43951874def588d36c86dfd1b2ece78"],["/tags/Parcel/index.html","f279346154448bd1d949c08034df6853"],["/tags/React-Native/index.html","49c7af275616b51e3447d33b5c5beb84"],["/tags/React/index.html","82b3c2f5db8dbbbf874b035f3fed016b"],["/tags/UI/index.html","a79faafee8a3ef89dc9d12f65d76fd69"],["/tags/Webpack/index.html","a180d9a69053208b4942afd400f7f967"],["/tags/index.html","06bb632a3d3cd535d2c6bafe0df6b95d"],["/tags/上机/index.html","94dbdaaa8a0b1e2dd28208240ae7ce9d"],["/tags/前端/index.html","aa1398b1230867d03248cbe2c2e5682c"],["/tags/前端/page/2/index.html","791cf3dab8b2e759fab1fd1f74d2f6c8"],["/tags/前端/page/3/index.html","ccee33d20710cf18907934f270b06cff"],["/tags/她/index.html","933e48985318fd0f1fe7c86dd7106193"],["/tags/学习/index.html","fde5852b199c660fc7a72fd0f6dd6e27"],["/tags/微信小程序/index.html","f227372e85208dfed2980781538a3eb7"],["/tags/我/index.html","286967bd0230a7929171eea353f95b07"],["/tags/浏览器/index.html","95e07f29c3de8a874f64424bd245f843"],["/tags/源码/index.html","81282924671dec472589be1ececec29f"],["/tags/计算机/index.html","993e995efa94dee797e6d60e354254c2"],["/tags/设计模式/index.html","8299fa3fc93792db2cb2ceede2b62db8"],["/tags/阅读/index.html","c234184270fc2f439953a6060ff47886"],["/tags/面试/index.html","5057720dd5c8627f1e21e51fa00b7fc7"],["/timeline/index.html","a94b99db8ee521ff76e3aa0a09c105b4"]];
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







