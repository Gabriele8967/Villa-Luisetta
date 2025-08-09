// Villa Luisetta Service Worker
const CACHE_NAME = 'villa-luisetta-v4-24h';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 ore in millisecondi
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

// Fetch event - cache con scadenza 24 ore
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Se abbiamo una versione cached, controlliamo se è ancora valida
        if (cachedResponse) {
          const cachedTime = cachedResponse.headers.get('sw-cache-time');
          if (cachedTime) {
            const age = Date.now() - parseInt(cachedTime);
            // Se la cache ha meno di 24 ore, usala
            if (age < CACHE_DURATION) {
              return cachedResponse;
            }
          }
        }
        
        // Altrimenti, scarica da rete e aggiorna cache
        return fetch(event.request)
          .then(networkResponse => {
            // Clona la response per il caching
            const responseClone = networkResponse.clone();
            
            // Aggiungi timestamp alla response per tracking scadenza
            const headers = new Headers(responseClone.headers);
            headers.set('sw-cache-time', Date.now().toString());
            
            const modifiedResponse = new Response(responseClone.body, {
              status: responseClone.status,
              statusText: responseClone.statusText,
              headers: headers
            });
            
            // Aggiorna la cache
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, modifiedResponse);
            });
            
            return networkResponse;
          })
          .catch(() => {
            // Fallback offline - usa cache anche se scaduta
            if (cachedResponse) {
              return cachedResponse;
            }
            if (event.request.destination === 'document') {
              return caches.match('./index.html');
            }
          });
      })
  );
});