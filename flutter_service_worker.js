'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3ee383960a58cc2a94ecafbed5367b78",
"version.json": "be4829040f212369d7245eaf54f08e2a",
"index.html": "87dab054ac38c1ded77cd80c2e58ef6d",
"/": "87dab054ac38c1ded77cd80c2e58ef6d",
"main.dart.js": "0e855caf2c0dcb2b12242c74340f246e",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0ca8abae6b4b58b7b7aded8556c0fe1a",
".git/config": "9a000ced601b4033d72976ddd33985ee",
".git/objects/0d/3a3586da51a12664d854191881809fd6d1f5f5": "2b25c1d3cf4e9b8641d49eb5b6390ee9",
".git/objects/9b/20fd3e7f514d9e7b695b05a27c511ca827a660": "9f759cb14386beceb0ae1875b6ca7aa9",
".git/objects/0b/7becfd96c04449089252a3202118f218c114ba": "50783557536a1cafbf512a61209b68e5",
".git/objects/34/c57aa9345a49770a9af39f9267e2cf69843c82": "bdcc6ceac8f0e7c0282dc6af10cde494",
".git/objects/33/d61f892e259b5534f57d21fee3c17dd723d6ec": "c0481ba0e467d6d2bab4a604aaeb7b95",
".git/objects/a4/ec24bfb3363e5a884ea812f7c20d52d380bf0e": "778b71303900ad3ecd6dbefc866a8de0",
".git/objects/da/a36c8c9f9ef4319e2638b3772fda323445cee6": "81d1140a1ed83b5f9860da4ff4ba8b68",
".git/objects/da/fea1d83849e5a0bc629e028a60e19755f8e35d": "b0fe16b579eafca8acfa5fad31d6c5e5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/d56219e11f2c07267531d6bbddf6318e318dec": "c31ee8c154afd4e9a091f484aa39b2b5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/f8e283c48d2cb9981eddd145ce3339cfe5da33": "9e6fd7812678485e8d6d9b29a34bac8c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/e3/c987a050a47a6979a4e2bbeafc5faa019b73d6": "b5ff3dd2f31518307485c71bf73b25e7",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/1f/71be14f51684ec4a2577197decc4f42eb9ecd4": "2bdc22a095e62378b8beaf3fa4c0ff53",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/80/b3fbd83050d0ae165a9af01a4be184510bd202": "194d87264929298f6dfb3822c71183cf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/53292bba0b30ce1b55a708a40a146464b23c9c": "7af6fb545ed5980f2e673be423bcf580",
".git/objects/81/b1e837f20ada25d6396f8e5fd9122ec5432bc2": "3a8ba0334b87b00b8f809897da68a619",
".git/objects/2a/11c96e91fd03c52b2b8e4cc88f72f77aa79b7d": "d6111d83745050b03dff6bfc73299eea",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/ebd2a7bd39da203b787643ff47c268bf511898": "734eb0b8d3d3cb91d1bc63b46fe3d55e",
".git/objects/00/dcd354ea4cde846321d8e8e84cd68bacfd0f2f": "0eca5aecc32e36535e3db7a9d443e531",
".git/objects/6e/043084bb62f70dbefbb3b733462ecb7f6fe954": "11eee1b74f68acb2705e5e706fc9bb1a",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/31/eb9bba14043780beb06dfe7f7054ccd87147e9": "e5c7c743548efd7d2e49df9cbcd4fe7c",
".git/objects/31/80016d4613ee3564de279e6fce27e9bb21a923": "2ed402ff44edbdb04b3113649fe6d672",
".git/objects/62/f63c924c6ce51dcab35f8890c5784c4efcb860": "56beee67e90c7c56da5f180757c9004d",
".git/objects/96/3b3e0aa92efcc59809f56ecc0f8c58174eced2": "2cb229a149c66864b875249fffac3fb5",
".git/objects/6d/c6d79f52b9204c4e9587413e75b5b092604ad2": "6b216f40624e0c6eb36c1388cda7d130",
".git/objects/39/c7f12589b517b949912f247e9db2c445a9ef54": "f9d99b64aa758cee3874324a2d571321",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/35872aaacc07c1e57c0bf860641420709fe8c7": "098c2eac875a551bb9c54b73716680d8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/b24c640acfd9dcdb8c1c070c895a479ac344fd": "cc92eb8c549518ea2e252735bc38f0c4",
".git/objects/c4/9965644574db325592ac8415e6fae540ede91f": "acafd1e098187d600d07f3c79813a401",
".git/objects/ce/e09aafca0361305e3b7d08963a9917ca03b5e0": "41d49abb38f2c6d6d4c27df7b916ca9f",
".git/objects/e0/4b164aff432e3b7b62be7320488636a2996a4b": "5c31d4fd8fba29a85291486ba6956bb3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/fc1b551821d618b04f56d71f21961b9d411c56": "13ed185840d993c1a0bee40b698df2cc",
".git/objects/1b/0b959bbe9aaa39251eb5e3e51f46e60e562a44": "6c940e0b4f4e8d400153b00fe43fbcde",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/8e/0c3e4b9992c6ba5352118c73a15f39cfa2b4e3": "8f6123b11e6eb1fcdb8d23ed945c2824",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e32d0207b2aec0c940ecc23ab491e894",
".git/logs/refs/heads/main": "e3eab16b3558b9a976360bfc4a34e12e",
".git/logs/refs/remotes/origin/main": "07152ce8d0e6ac4f2eae0585c0d44732",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b1cf6f475672c14e33ae96eed0500668",
".git/refs/remotes/origin/main": "b1cf6f475672c14e33ae96eed0500668",
".git/index": "d0fe4d3bbbdc02ef2258dd8cc2977e3c",
".git/COMMIT_EDITMSG": "2e2873d17df5f11b54a619b9862e4791",
"assets/AssetManifest.json": "dae8e0ca3e6dc5b8d809fb5fefdd5daf",
"assets/NOTICES": "0263688f9d2d230d620be1397fca1b3c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "0871ebcbadad0ec9d09d8d8a4d134620",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "cc425d2e4b48bc19408ae95e03d39864",
"assets/fonts/MaterialIcons-Regular.otf": "b6357f720cae69419c0bd4cf030d27ce",
"assets/assets/images/mon.png": "afa417b8977cdcbc19067d7a78f9f1d2",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "01f22f771e3a26a0d4b52b9ff78f82fc",
"canvaskit/canvaskit.js.symbols": "b027543b0c3f04ccbaa35ef4ec4b7df2",
"canvaskit/skwasm.wasm": "12cfa3089889ae9083809153e5193838",
"canvaskit/chromium/canvaskit.js.symbols": "d8b07e2dc7fe884aec96aebff78e2875",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "216cb8b9d8c5d367cb581089fe21cf07",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1060ba96b9ea7173ab9af029e52b1018",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
