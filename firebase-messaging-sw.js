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
