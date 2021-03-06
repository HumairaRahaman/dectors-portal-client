// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_API_KEY,
  authDomain:process.env.REACT_APP_AUTH_DOMAIN,
  projectId:process.env.REACT_APP_PROJECT_ID,
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId:process.env.REACT_APP_APP_ID,

//   apiKey: "AIzaSyB1Ucsvw7UxJayaVow5WhXzxvNEELL3eek",
//   authDomain: "doctors-portal-d3186.firebaseapp.com",
//   projectId: "doctors-portal-d3186",
//   storageBucket: "doctors-portal-d3186.appspot.com",
//   messagingSenderId: "1025298305132",
//   appId: "1:1025298305132:web:786ca37b64998473c70849"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;