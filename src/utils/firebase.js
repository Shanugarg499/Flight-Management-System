import firebase from 'firebase/app';
import 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyACpnqHjsGGZfNG3pB_YtcSFXyl1e_uUvU",
//   authDomain: "lala-airlines-3a50f.firebaseapp.com",
//   databaseURL: "https://lala-airlines-3a50f-default-rtdb.firebaseio.com/",
//   projectId: "lala-airlines-3a50f",
//   storageBucket: "lala-airlines-3a50f.appspot.com",
//   messagingSenderId: "85729062755",
//   appId: "1:85729062755:web:56034e0fdf3a00b4166d56"
// };
var firebaseApp = firebase.initializeApp({
  // Your firebase credentials
  apiKey: "AIzaSyACpnqHjsGGZfNG3pB_YtcSFXyl1e_uUvU",
  authDomain: "lala-airlines-3a50f.firebaseapp.com",
  databaseURL: "https://lala-airlines-3a50f-default-rtdb.firebaseio.com/",
  projectId: "lala-airlines-3a50f",
  storageBucket: "lala-airlines-3a50f.appspot.com",
  messagingSenderId: "85729062755",
  appId: "1:85729062755:web:56034e0fdf3a00b4166d56"




});

var db = firebaseApp.firestore();

export { db };



