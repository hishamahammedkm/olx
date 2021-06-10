import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCDnh9vIsSaYmPDECSoAi6XXOnbT5TLWqM",
    authDomain: "olx-clone-6d5ae.firebaseapp.com",
    projectId: "olx-clone-6d5ae",
    storageBucket: "olx-clone-6d5ae.appspot.com",
    messagingSenderId: "192022316440",
    appId: "1:192022316440:web:414866cb0f6d15884e17ed",
    measurementId: "G-QD9K976ZNV"
};
export default firebase.initializeApp(firebaseConfig)