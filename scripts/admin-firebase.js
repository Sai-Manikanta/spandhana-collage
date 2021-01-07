// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBaAiHX3QEuPo2647nFA-syul_AL4mjwGQ",
    authDomain: "admins-d2c33.firebaseapp.com",
    databaseURL: "https://admins-d2c33.firebaseio.com",
    projectId: "admins-d2c33",
    storageBucket: "admins-d2c33.appspot.com",
    messagingSenderId: "896279240159",
    appId: "1:896279240159:web:7a739fbd77b6c9f678386a",
    measurementId: "G-XEZKT2SVQV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const database = firebase.firestore();
  const auth = firebase.auth();

  