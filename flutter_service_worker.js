'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/NOTICES": "2125e648bfa7d871097880bf4d18f77a",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"version.json": "28444066c179eb1281370ea7b9681104",
"manifest.json": "82d2867f5284d488a6f5d90d525ad787",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"main.dart.js": "156567085b92eaa91dbeddff9d51ef56",
".git/config": "414e7fb26dc9ca5e5a4c7efdb8c52aaa",
".git/logs/refs/heads/main": "3b779cc8e95dd42b75a8920ff14601b7",
".git/logs/refs/remotes/origin/main": "6feed2074826fdc0b6071eb734a638ce",
".git/logs/HEAD": "cb738def2a9ea76e2ec8cc53245d7f7d",
".git/index": "df2a723e940e37b53f393c85880a88b5",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/refs/heads/main": "f9f72f0c745a8a2d827addc9dece8034",
".git/refs/remotes/origin/main": "f9f72f0c745a8a2d827addc9dece8034",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/50/e31b8c47b708bf4667d318ffdc73da14bc35b7": "0ef145fc2d172d4f4b91372397ffc5b6",
".git/objects/8f/608f434b41237338fb0ada7dbb5e55130db1c7": "1397f1f18ed2b883bf11ded4fac3e14d",
".git/objects/52/b816c30c617b5f8efd129e45d662baf405c60b": "fba30fec5bac40992aa92f6fc7dc74cf",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/a9/17ad4c2051b5dd7b63c75d7b692a84bfd81ceb": "b8c269c41de1b351ae083124b3d17b9c",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/1c/a3cacd06935472d3567fb02caf80f041b68b7d": "c8ec61192b1770dda57992ccb0d445c4",
".git/objects/be/f51fdd3401cc47b63fd8475e2de46a954b0898": "2d05834446255901600d7529d6ba58aa",
".git/objects/99/a3037efba336f5cb58a56d9930d20dc77ff899": "4567618ebe46e91b1414569b5fe2938d",
".git/objects/e9/905e4ef6596cd3b7566beb219082f0eb537ad7": "f68829b487d8588de67a97b92412d47f",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/72/39112c6c7d721cfafd94d7f22ed70907f199e5": "4ec882c7653e608e5dd686eb571dc855",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/42/a9fb1e8633cf0190aa21623b1b77e9d0ea032c": "ce8f87d50536314cea011191ea9e0b24",
".git/objects/c1/19e274e86720ffadd81fb81763c61a7eaaf569": "6d091e84b65508743b68dbb771b97309",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/82/83ab77bb9cbc055a583dcd81e29ca021af9d5f": "698e0c2a5420ff39389397055f6e6630",
".git/objects/b5/4556c5a260e422e7daeb21606b52ef32b8f070": "ed7ced656ecd250d6337661512a5f149",
".git/objects/d5/7b666786f296dde189239a0484e9247a08c959": "ad75c0ea2b98fb14490b122663c651cd",
".git/objects/9e/3ad16f7ddf3be833ba1f661f765eb275e32e6c": "afb64e3401913a5e65d56f30f2c44f5e",
".git/objects/7f/05f94157eeb54060c35d44bf021ea13747f332": "40cd4a449e5eb72bde734aa5991c44f7",
".git/objects/9a/b9de5b1e387ebe14e8a00f2dd4a2f363b99834": "6fea72d0a73acee806bc2e0a5e1ecc80",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/0a/d0f4a5b877bc56e38eb7f2a7928d0a9a439375": "50caf93931cd6c33a3b120ca4dc36021",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/26/5d9e4e55048f9f339fe084540608855827851f": "c71432204ae3b2a7dbae1673f821c9bc",
".git/objects/0c/34a4b9678c4529661d61d46acba7d7efb5c4eb": "381235f4d4d773117a3bab2e20082f32",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/3d/4f51c5769f97c5333f46cbdfa021a641c39da3": "9e96434dcc1debbdc967b607dc7d9891",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/df/bcac1c7eacc4f369b5bcb1a4fe4ca7b342d6bb": "7366f6309f596a3be14112ad043b7b6a",
".git/objects/2d/65987248f5245a8f9429488453349113a8eca9": "c2b6c9f78c7c8b230d670de369234192",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/78/fccfbdec8e634f3bfae70116ecbb3a90cc8069": "aba595fc04d79cb65b0779680ca025f0",
".git/objects/b9/3eb83fb17895daa4514b01f0203e8fd9abc2aa": "3a84d64ccec3692e4de82e6d85e6bd2c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/8d/b35837738cc1e70b04f5ff211849701a620afa": "1b9e002baccd437e144503e186442d7c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/20/b11686609bcfaa2febc6a53205cc7b50224a60": "8247a8164047b0a437a85e0d2a545c97",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/57/3a15b281464c63ee7ae66b6ad1c59bb8a6b3d4": "ee3347d40b7d860da8f682676230c140",
".git/objects/3f/dfb420c4e194e7c71f919b60ddaae3d3a73449": "078e21d20d26f81920015c606f3bee57",
".git/COMMIT_EDITMSG": "83d043db4fdfe6882fb7f01a09d92b11",
".git/ORIG_HEAD": "f9f72f0c745a8a2d827addc9dece8034",
".git/FETCH_HEAD": "ea2e4f3c32bfb0fafd065cffb53a0d85",
"index.html": "8312a6c099bcee4fd520e2671e78d417",
"/": "8312a6c099bcee4fd520e2671e78d417",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
