// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi-5qMcCYlkdtW9HzTRZMXgFnIxmsbtT4",
  authDomain: "image-uploader-3a50c.firebaseapp.com",
  projectId: "image-uploader-3a50c",
  storageBucket: "image-uploader-3a50c.appspot.com",
  messagingSenderId: "634627534214",
  appId: "1:634627534214:web:2806fe9b81f566fdb51007"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)