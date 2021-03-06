// import the app package of firebase module which is the core feature of firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// My web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD4Is1O6GqIpGRWA-PDQQSjbKFNyqOeyCQ',
  authDomain: 'music-9e7e7.firebaseapp.com',
  projectId: 'music-9e7e7',
  storageBucket: 'music-9e7e7.appspot.com',
  appId: '1:346739509544:web:f63ad3a9bab9b887b0681d',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create references for authentication and database
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// keep a copy of the database on the user's browser
db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
