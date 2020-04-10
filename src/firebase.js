import firebase from 'firebase'

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyDEr-FtAKJ0xnSbex5pP_zxU-yiJJ2EmNE",
    authDomain: "pokedex-d0825.firebaseapp.com",
    databaseURL: "https://pokedex-d0825.firebaseio.com",
    projectId: "pokedex-d0825",
    storageBucket: "pokedex-d0825.appspot.com",
    messagingSenderId: "661110265116",
    appId: "1:661110265116:web:82b82f66fba014c804d6d9"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

export default firebase