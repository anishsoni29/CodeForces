// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Signin } from "./components/Signin";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDYoyDIZTMeu1VSETFSjGwh41N2Wril2XQ",
  authDomain: "leetcode-clone-5a183.firebaseapp.com",
  projectId: "leetcode-clone-5a183",
  storageBucket: "leetcode-clone-5a183.appspot.com",
  messagingSenderId: "913678835850",
  appId: "1:913678835850:web:5ff69c40e82e7bc9064d73",
  measurementId: "G-WXKVQXN3KE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

function App() {
  useEffect(() => {
    onAuthStateChanged(auth, function (user) {
      if (user) {
        console.log("User is signed in.");
      } else {
        console.log("No user is signed in.");
      }
    });
  }, []);

  return (
    <>
      <Signin />
    </>
  );
}

export default App;
