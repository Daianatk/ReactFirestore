import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCf5q_gtg7P4msFjuXWT4fSqLh0cATaAeU",
    authDomain: "burgerqueen-e45c6.firebaseapp.com",
    projectId: "burgerqueen-e45c6",
});
let db= firebase.firestore();
db.settings({timestampsInSnapshots:true});

export default db;