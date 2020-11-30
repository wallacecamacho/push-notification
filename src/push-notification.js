import firebase from 'firebase';

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
console.log('init 1');

export const initializeFirebase = () => {
  console.log('init 2');

  
  console.log('initializeFirebase 1');

    // use other service worker
   //navigator.serviceWorker
   //  .register('https://wallacecamacho.github.io/push-notification/sw.js')
   //  .then((registration) => {
   //    messaging.useServiceWorker(registration);
   //  });

}

export const askForPermissioToReceiveNotifications = async () => {
  try {


    console.log('askForPermissioToReceiveNotifications')
    await Notification.requestPermission();
    let token = null;
      token = await messaging.getToken();
      console.log('user token: ', token);

    return token;
  } catch (error) {
    console.error(error);
  }
}
