import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyCI_vVMB1co1NXHOu1uPcpk6xXKzgPp57M",
    authDomain: "stream-chat-737d6.firebaseapp.com",
    databaseURL: "https://stream-chat-737d6.firebaseio.com",
    projectId: "stream-chat-737d6",
    storageBucket: "stream-chat-737d6.appspot.com",
    messagingSenderId: "702282731072",
    appId: "1:702282731072:web:31b369fbcfd0d37e6099a5",
    measurementId: "G-97XL2PL2LC"
};
firebase.initializeApp(config);
const database = firebase.database();

export default database;