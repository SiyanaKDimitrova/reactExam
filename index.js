import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore-compat.js";
//import { getAuth } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth-compat.js";

var firebaseConfig = {
    apiKey: "AIzaSyBpTAQdYGOGpBXEjmN7Qs5wjL3ZuLnvMxE",
    authDomain: "react-web-b9916.firebaseapp.com",
    projectId: "react-web-b9916",
    storageBucket: "react-web-b9916.appspot.com",
    messagingSenderId: "757202530523",
    appId: "1:757202530523:web:2c043e02aa00aa2b7bdcfe"
};

var app = initializeApp(firebaseConfig);
//const auth = getAuth(app);
export default getFirestore();