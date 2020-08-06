import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyD9P1bbo3Co6YmHNDioXDOlYwvfhpyfJuM",
  authDomain: "firegram-86f52.firebaseapp.com",
  databaseURL: "https://firegram-86f52.firebaseio.com",
  projectId: "firegram-86f52",
  storageBucket: "firegram-86f52.appspot.com",
  messagingSenderId: "700276789661",
  appId: "1:700276789661:web:191c120d8c3be7a887df74"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };