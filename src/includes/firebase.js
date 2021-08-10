// import the app package of firebase module which is the core feature of firebase
import firebase from 'firebase/app';
import 'firebase/auth';

// My web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD4Is1O6GqIpGRWA-PDQQSjbKFNyqOeyCQ',
  authDomain: 'music-9e7e7.firebaseapp.com',
  projectId: 'music-9e7e7',
  storageBucket: 'music-9e7e7.appspot.com',
  appId: '1:346739509544:web:f63ad3a9bab9b887b0681d',
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
