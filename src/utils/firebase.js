import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACpnqHjsGGZfNG3pB_YtcSFXyl1e_uUvU",
  authDomain: "lala-airlines-3a50f.firebaseapp.com",
  databaseURL: "https://lala-airlines-3a50f-default-rtdb.firebaseio.com/",
  projectId: "lala-airlines-3a50f",
  storageBucket: "lala-airlines-3a50f.appspot.com",
  messagingSenderId: "85729062755",
  appId: "1:85729062755:web:56034e0fdf3a00b4166d56"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
