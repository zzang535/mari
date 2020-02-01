import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyDlcbrVRQud2K8KwnO4yKNA_PDSY4LuSR8",
  authDomain: "korean-image-dic.firebaseapp.com",
  databaseURL: "https://korean-image-dic.firebaseio.com",
  projectId: "korean-image-dic",
  storageBucket: "korean-image-dic.appspot.com",
  messagingSenderId: "301177472026",
  appId: "1:301177472026:web:103fcebefca07073373da3"
};

firebase.initializeApp(config);

const firestore = firebase.firestore();
const storage = firebase.storage();

export {
  firestore,
  storage,
};