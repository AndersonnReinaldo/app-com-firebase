import firebase from'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyClP-ztp3o2n7-ktYYdl6R2uikLVnHcLYg",
  authDomain: "meuapp-d7200.firebaseapp.com",
  databaseURL: "https://meuapp-d7200-default-rtdb.firebaseio.com",
  projectId: "meuapp-d7200",
  storageBucket: "meuapp-d7200.appspot.com",
  messagingSenderId: "943921611181",
  appId: "1:943921611181:web:8d2c04fecc97feca2fa124",
  measurementId: "G-Q89C2Y7M0G"
};

// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);

}

export default firebase;