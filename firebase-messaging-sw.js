importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');


var firebaseConfig = {
  apiKey: "AIzaSyC-IbMlaRCpe9ywQ2Ts2YmLGCDOQtyZZa8",
  authDomain: "headless-12f0d.firebaseapp.com",
  databaseURL: "https://headless-12f0d.firebaseio.com",
  projectId: "headless-12f0d",
  storageBucket: "headless-12f0d.appspot.com",
  messagingSenderId: "186890154052",
  appId: "1:186890154052:web:395c9e8f14a4643f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});

messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  // ...
});