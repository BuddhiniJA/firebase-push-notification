import firebase from 'firebase'
import 'firebase/messaging';
const config={
    apiKey: "AIzaSyDHOU1x37Ooaa1-V4UybYoSgSVN84m-uIE",
    authDomain: "fir-cloud-message-6a1c9.firebaseapp.com",
    projectId: "fir-cloud-message-6a1c9",
    storageBucket: "fir-cloud-message-6a1c9.appspot.com",
    messagingSenderId: "526123248650",
    appId: "1:526123248650:web:7510ca5f70ce7cb4f903f3"
}

firebase.initializeApp(config);
const messaging = firebase.messaging();

export const getToken = (setTokenFound) => {
  return messaging.getToken({vapidKey: 'BIMXv9jcxjogZzN-3M2BIc124o8cy-INhbaaAZVU8FWIcMU2IAXoLL-3ypaoruExFbH0cJE5WG2NcgQt7htGuq4'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
});

export default firebase;