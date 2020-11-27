importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyC-IbMlaRCpe9ywQ2Ts2YmLGCDOQtyZZa8",
  authDomain: "headless-12f0d.firebaseapp.com",
  databaseURL: "https://headless-12f0d.firebaseio.com",
  projectId: "headless-12f0d",
  storageBucket: "headless-12f0d.appspot.com",
  messagingSenderId: "186890154052",
  appId: "1:186890154052:web:395c9e8f14a4643f"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();


// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START on_background_message]
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    data: '',
    body: payload.notification.body,
    tag: payload.notification.tag,
    icon: '/icon.png',
    image: payload.notification.image,
    vibrate: [200, 100, 200],
    badge: "https://spyna.it/icons/favicon.ico",
    click_action: "https://via.placeholder.com/128/ff0000"
  };

  self.registration.showNotification(payload.notification.title,
    notificationOptions);
});