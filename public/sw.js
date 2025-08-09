// Villa Luisetta Service Worker
const CACHE_NAME = 'villa-luisetta-v2-netlify';
const CACHE_URLS = [
  './',
  './index.html',
  './apartments',
  './gallery', 
  './food',
  './cocktails',
  './enoteca',
  './gallery/image0.jpeg',
  './gallery/image1.jpeg',
  './gallery/image2.jpeg',
  './rooms/Foto-stanza cilea/iniziale.jpeg',
  './rooms/Foto-stanza marinella/iniziale.jpeg',
  './rooms/Foto-stanza rovaglioso/iniziale.jpeg',
  './manifest.json'
];

// Install event - cache resources
self.addEventListener('install', event => {
  console.log('Villa Luisetta SW: Installing new version');
  // Skip waiting to activate immediately
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Villa Luisetta: Caching app shell');
        return cache.addAll(CACHE_URLS);
      })
  );
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
  console.log('Villa Luisetta SW: Activating new version');
  // Claim all clients immediately
  self.clients.claim();
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Villa Luisetta: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
      .catch(() => {
        // Fallback for offline
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      })
  );
});