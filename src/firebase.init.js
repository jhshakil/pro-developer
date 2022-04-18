// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSf7r6TOsz-7xFVhI4HOYl_rzgwPPo0_w",
    authDomain: "pro-developer-firebase.firebaseapp.com",
    projectId: "pro-developer-firebase",
    storageBucket: "pro-developer-firebase.appspot.com",
    messagingSenderId: "149606806550",
    appId: "1:149606806550:web:47c0c159d34f56390eb137"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;