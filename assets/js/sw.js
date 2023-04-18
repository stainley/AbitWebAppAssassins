
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('my-abit-cache').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '**/*'
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                return response;
            } else {
                return fetch(event.request);
            }
        })
    );
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.filter(function (cacheName) {
                    return cacheName.startsWith('my-abit-') && cacheName !== 'my-abit-cache';
                }).map(function (cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});