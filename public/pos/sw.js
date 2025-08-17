self.addEventListener("install", e => {
    e.waitUntil(caches.open("pos-v1").then(c => c.addAll(["/pos", "/pos/index.html"])));
});
self.addEventListener("fetch", e => {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
