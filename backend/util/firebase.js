const firebase = require('firebase')
const {API_KEY, MSI, APP_ID, MEASUREMENT_ID} = process.env

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "gallery-app-cd5d6.firebaseapp.com",
    projectId: "gallery-app-cd5d6",
    storageBucket: "gallery-app-cd5d6.appspot.com",
    messagingSenderId: MSI,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();