import firebase from 'firebase/app'
import 'firebase/auth'


var firebaseConfig = {
  apiKey: "AIzaSyAF_AdDUvulYRQlaVfrN1XSQBCgzPPoEAY",
  authDomain: "quiz-app-28f5c.firebaseapp.com",
  databaseURL: "https://quiz-app-28f5c.firebaseio.com",
  projectId: "quiz-app-28f5c",
  storageBucket: "",
  messagingSenderId: "400673006891",
  appId: "1:400673006891:web:ec6a6b5f0a40dc2c"
};


  // Initialize Firebase
 const firebaseApp= firebase.initializeApp(firebaseConfig);



 const provider = new firebase.auth.FacebookAuthProvider();
export{
  firebaseApp,provider
}