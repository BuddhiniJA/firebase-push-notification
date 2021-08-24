importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');



firebase.initializeApp({
    apiKey: "AIzaSyDHOU1x37Ooaa1-V4UybYoSgSVN84m-uIE",
    authDomain: "fir-cloud-message-6a1c9.firebaseapp.com",
    projectId: "fir-cloud-message-6a1c9",
    storageBucket: "fir-cloud-message-6a1c9.appspot.com",
    messagingSenderId: "526123248650",
    appId: "1:526123248650:web:7510ca5f70ce7cb4f903f3"
})

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});