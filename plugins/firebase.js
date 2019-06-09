import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: "nuxtapp-fd0e0.firebaseapp.com",
    databaseURL: "https://nuxtapp-fd0e0.firebaseio.com",
    projectId: "nuxtapp-fd0e0",
    storageBucket: "nuxtapp-fd0e0.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
  })
}

export default firebase