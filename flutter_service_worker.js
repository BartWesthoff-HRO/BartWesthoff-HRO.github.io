'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c8b8bcff9f9986c51d7508fe69b5e3ce",
".git/config": "319ad3ff5f6e60d83c94ab7198f048ff",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "8ef02864d20ae366e34785713d52165b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f36276aa5542564d0c9dcfeeb195eb05",
".git/logs/refs/heads/master": "f36276aa5542564d0c9dcfeeb195eb05",
".git/logs/refs/remotes/origin/master": "53747d59bd1865276aa8e1370a543260",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/11/92c69b01dd6243a2f8be49c3a74b8edd50fd79": "b2d06079d80d288b29fd6b5041a66829",
".git/objects/1d/bf5f096595318b74287555bed7ddd54f0bb9a7": "a955949a738efa601e67537d47b566b2",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/28b9dd143ebcc8792c4390013ed618dc139976": "67731faa8a1598beec3798aca64f62bc",
".git/objects/23/71c13be01f732daefb5dcc7ca3cebd55dec81d": "fa5027d66f2783af7e925365eba7814b",
".git/objects/23/92b699b49968fbcbbd519d377ad56b7253e4ee": "d2b62af02974222a5229dc4fb6a7a790",
".git/objects/2b/da1d2cd0c1932af9bd53c669a9f4f131fab575": "d385ad483fc9ac37ccf43f4e973cb3f2",
".git/objects/2c/6f295753f1351391a6b05fc350760220f31774": "42f39fdbde628e63c9627361f73b5cec",
".git/objects/31/3a33d08924cad6c97e80fc73a2d11fb06aecb4": "42059df75eabfba1c58509acebf31a5e",
".git/objects/33/15c7ac51858e37c004938a6d2c302aa4fc71d3": "316c21cec3d3426625fe0f3fa89856b4",
".git/objects/38/e5dbac81a8cd89f44f68e37dbabfd401ddfe1b": "8a50c42925faefbe3832b5afd5526b5e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/49/022e399eb3f72662790f222a2ca42560be992c": "98f00a812a875f5621612e7a08be1433",
".git/objects/52/7ba9507c9778d2b632837825ce346a190632aa": "dba8cecd3a287c080ee3e1d528e551a0",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/69/0b8f20a931cb3881aaba8cf7543bf1c3eb194d": "8538f743f2895ff29f2cefc7cb2e800b",
".git/objects/6a/59ba97dd7bc8f8a415a740a98084d3ef6c41c1": "704256ecca98337bcce83974cd9abf3a",
".git/objects/6f/bc244a63f10a1bf6cd53d4127cdcb688e037e2": "5a96ea7c4bc2e190f7bef853b4ef19d3",
".git/objects/70/ea2705d70fcc6f9118c80759ae1f465aca0900": "c40011fee039dcae24dfa1a09009b804",
".git/objects/72/9689351996bf86153b5744db235c18a46f1929": "f7edfd50bf92891381dc7c52d875977b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/f530e52e938dde48367e0a8866b99da8693dce": "a87ff58927dcff19b2ecbda5fcc01fa3",
".git/objects/81/16c16b5eacd189b62f0b0707eabd16ad8566cf": "57996cb91cf3cb13c73398052132845c",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/4e327aaaf5aba20ba2aaa1d03e096c8f78759a": "a7ccb7e9cf16a7d0ba86cd169f2e1f12",
".git/objects/9d/3e38e34b291108211b9c336fea454a8b016d15": "a764b34a60c853474aa7dd4291faaded",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/61b44d2b3f4a35b16ec26723bff0e4b3139f69": "2a423598d83b947d5594fd6b123b38f9",
".git/objects/ae/ef98f6d0161b99a38458c61015434a74c0a806": "1ad1c765b3ba077732def5740629bef1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bd/1f2c43f107a8adcd54b44f45e1830a293c2d7c": "d9a3eb04fe674278a2b5cd48e791d2b6",
".git/objects/bd/4d8bf5afd573835c33d62df1646514409d1763": "e045c92703cb747eaa3cb16fa8ddec53",
".git/objects/c0/5929ddb7d5495920576e1ee9560b99a97822dd": "0dda8e5563aa2527766ec927e459527f",
".git/objects/c5/fbc7d8274c9f118abb07ac62db119dbe1959d7": "ce12d6175e4037e3ef11c9da92763c87",
".git/objects/d1/6deec836fc7a44ada4acb498daa1a6d8bb1f56": "eec3200183463bcd620cdf8e66ea5c52",
".git/objects/d4/883cb77ca03f2b3af66de6a565a90266301279": "2005aa58922442a02d91e287edc4c4e1",
".git/objects/db/1d9fa5a3058ebd89d1c24295da1ddb5fe2014b": "9e9257d7c7b6fa1c5adb8468ce1c2c33",
".git/objects/e1/724c89a9e09b192826fc35db357d55e155d448": "e293c714b4b9e0c2c62e50ad95e8e032",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/c66aaa190f7f00fec201ee7d8262fffe08155f": "81e9700873c97f441ccda40f5c3c6f10",
".git/objects/e7/bcf145e3d83f0c889cc17bd7c568f0fa7172b5": "19807489e749053a66bc6483b0d351be",
".git/objects/f2/12e62f41a17e25153a532a99bad60684dfed9a": "167500e4ef703851a3e92382ad5bc5e8",
".git/objects/f2/1f5221a1bcf53b4f2feda38ad1efbe44889d2a": "63581dfb699e1cb6ec89790cdb9a9321",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/refs/heads/master": "1581c052fc0923b8e7057be8255cbc3c",
".git/refs/remotes/origin/master": "1581c052fc0923b8e7057be8255cbc3c",
"assets/AssetManifest.json": "ea1a2793ee462de7b836fa1c154cfa76",
"assets/assets/bozenik.png": "535e6328dd1e2d110469b6bdcef2712f",
"assets/assets/profielfoto.png": "42d58210aa307416d33f99d48f899ef8",
"assets/FontManifest.json": "dc1df1acbfc892f525ece41ca35db556",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/waltograph.ttf": "8376e936fde943e3c0d5ca2ef30b497d",
"assets/NOTICES": "a8d1d130b9909728d724354dc06becc1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1ac5c09b566433dc2ab1f6f6c615c288",
"/": "1ac5c09b566433dc2ab1f6f6c615c288",
"main.dart.js": "b57e2acb12ee051e88b8382f4ab83969",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
