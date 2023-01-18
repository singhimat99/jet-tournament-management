// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCt35l54Gs9gZKIWijVwFljuTSfiFoCHeg",
    authDomain: "jet-management.firebaseapp.com",
    projectId: "jet-management",
    storageBucket: "jet-management.appspot.com",
    messagingSenderId: "761108051697",
    appId: "1:761108051697:web:60339e11a2e7c5bf1d5b50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
