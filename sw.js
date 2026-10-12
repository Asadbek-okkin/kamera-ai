// Kamera AI: "bosh ekranga qo'shish" uchun. Kesh yo'q - har doim eng yangi versiya (yangilanish o'zi keladi).
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => self.clients.claim());
self.addEventListener("fetch", () => {});
