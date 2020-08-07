import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBqlwf7qM5o-TMzM9wMmQHvuqnwyEB5kTM",
  authDomain: "firegram-1f799.firebaseapp.com",
  databaseURL: "https://firegram-1f799.firebaseio.com",
  projectId: "firegram-1f799",
  storageBucket: "firegram-1f799.appspot.com",
  messagingSenderId: "177096549559",
  appId: "1:177096549559:web:0e175c3ac81c31e214d932"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp }