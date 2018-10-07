import Firebase from "firebase";
let config = {
    apiKey: "AIzaSyAVUTLXcKAOZzZiOewsiMJMhefdUL5UO5w",
    authDomain: "hacknc2018-61a70.firebaseapp.com",
    databaseURL: "https://hacknc2018-61a70.firebaseio.com",
    projectId: "hacknc2018-61a70",
    storageBucket: "hacknc2018-61a70.appspot.com",
    messagingSenderId: "531629837159"
};
let app;
if (!Firebase.apps.length) {
    app = Firebase.initializeApp(config);
} else {
    app = Firebase.app();
}
// let app = Firebase.initializeApp(config);
export const db = app.database();