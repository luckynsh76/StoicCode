importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js");
firebase.initializeApp({
    apiKey: "AIzaSyAejliHCLcEgYNoGD9-4bZwSq4j-G-TKj4",
    authDomain: "stoiccodedaily.firebaseapp.com",
    projectId: "stoiccodedaily",
    storageBucket: "stoiccodedaily.firebasestorage.app",
    messagingSenderId: "702266664055",
    appId: "1:702266664055:web:bfa209ff9cea5ac4071272"
});

self.addEventListener("install", (Event) => {
    console.log("[firebase-messaging-sw.js] Service Worker Installed");
    self.skipWaiting();
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log("[firebase-messaging-sw.js] Received background message ", payload);
    
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/logo192.png"
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});