import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA2NNCZSxU8t6ILmVH5f44ZNzb-nKv-_Uk",
    authDomain: "app-wines-7e1ad.firebaseapp.com",
    projectId: "app-wines-7e1ad",
    storageBucket: "app-wines-7e1ad.appspot.com",
    messagingSenderId: "362671691899",
    appId: "1:362671691899:web:e2b8cf4223fc4c67546ade"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const getDataBase = () => firebase.firestore();