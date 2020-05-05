/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "91be4540ac195ce75863c543952db9a4"
  },
  {
    "url": "a/agile-software-development.html",
    "revision": "21c6460bd4428d8c9706bcc204be67c3"
  },
  {
    "url": "a/git-tutorial-best-practices.html",
    "revision": "ac34e9f3043e125dfca4381d43f8b2c9"
  },
  {
    "url": "a/how-to-comment-code.html",
    "revision": "cf49cfab0053fd2ff5528b635e433db7"
  },
  {
    "url": "a/introduction-entity-component-system-ecs.html",
    "revision": "40ff6ace9e4a86246b4329d6ad94195b"
  },
  {
    "url": "a/learn-programming-which-language.html",
    "revision": "2e417e363ba4969701ee798459010489"
  },
  {
    "url": "a/linter-code-formatter.html",
    "revision": "2c2583e99926bd21f62165eceaab36d7"
  },
  {
    "url": "a/market-yourself-developer.html",
    "revision": "ad8b354e3b922aaa6b7df40cd1bb9b54"
  },
  {
    "url": "a/sustainable-software-development.html",
    "revision": "89cc0b0c3a5c6ada027a7ccb8460a0f1"
  },
  {
    "url": "a/tips-efficient-googling.html",
    "revision": "630be97ee56c056e8b2962207c4e0d74"
  },
  {
    "url": "a/when-when-not-frameworks.html",
    "revision": "cb11285558a6c18b27368362b25b5a70"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "164942d06d3abc92344ff09619017d49"
  },
  {
    "url": "android-chrome-384x384.png",
    "revision": "8b858dcbf6abe774b626726cf09d81fa"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "10b350e119d483e36fe50712050403c4"
  },
  {
    "url": "assets/css/0.styles.3a01bdd2.css",
    "revision": "c1cbb7cb2b7d59379e31d2eb692702ba"
  },
  {
    "url": "assets/js/10.ff5200a1.js",
    "revision": "082819148dcd77b4fe61a7d8c9fdff17"
  },
  {
    "url": "assets/js/11.75fc9725.js",
    "revision": "e8a7a7197c4e24bebd267e5157868cac"
  },
  {
    "url": "assets/js/12.a4f42e7c.js",
    "revision": "ee95b3e43fafbb57aed75a092b827b57"
  },
  {
    "url": "assets/js/13.74fcfc81.js",
    "revision": "2482ca116b7c5e99b28a3c06a07943d8"
  },
  {
    "url": "assets/js/14.05da2743.js",
    "revision": "f0456bc9aa91578d833c73ecf57ac6bf"
  },
  {
    "url": "assets/js/15.74597c6b.js",
    "revision": "28cbc1953926cc970d21cdd8e6a63db0"
  },
  {
    "url": "assets/js/16.ce6199c0.js",
    "revision": "1fb6d55276e09dec1f5bde7dff2a2966"
  },
  {
    "url": "assets/js/17.ceedf41b.js",
    "revision": "239be14490327931bfea8edc2d285a5d"
  },
  {
    "url": "assets/js/18.13327e56.js",
    "revision": "9cae796e21d64086d90054f898517255"
  },
  {
    "url": "assets/js/19.1ae67b9a.js",
    "revision": "6a0b6675e59d5975826f4556935969db"
  },
  {
    "url": "assets/js/2.7fa2b825.js",
    "revision": "6893b1808e1e2e08c56f4494a0e2be28"
  },
  {
    "url": "assets/js/3.085db82e.js",
    "revision": "f192b95f7d399ae74c60e3724cf515f9"
  },
  {
    "url": "assets/js/4.ad40bc35.js",
    "revision": "1575452e655a7e8bc83b79d8f3b2f96e"
  },
  {
    "url": "assets/js/5.c9960f70.js",
    "revision": "c99899b0492e2e45bdca17d48c8d3019"
  },
  {
    "url": "assets/js/6.a73b2c61.js",
    "revision": "73928fd8c99457e6a89c2c55163d1420"
  },
  {
    "url": "assets/js/7.12c2415d.js",
    "revision": "66a573639c0b9cba7921ee40286ca44f"
  },
  {
    "url": "assets/js/8.bfbe0491.js",
    "revision": "238cc58e1da7318763c8c8536fa60d3a"
  },
  {
    "url": "assets/js/9.edc26999.js",
    "revision": "04fb6ceb416b81932e002d5882d36aee"
  },
  {
    "url": "assets/js/app.65c862f9.js",
    "revision": "930dda0fa6113be4583566fc8c6dc2e3"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "d7ed5aa149d0f957f604e0b5946f28d5"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "7c6cb298ab9c6f3efea0abe6afdc1d78"
  },
  {
    "url": "imprint/index.html",
    "revision": "c02b1126fe779eddc3e48fb034707695"
  },
  {
    "url": "index.html",
    "revision": "4f14a9517e44355b448441a85e28dd37"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "92c9519cc1903d25e1a97d374daf9734"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "3b1cbc0da1041c33442038f326dbdde0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
