// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const app = initializeApp(firebaseConfig);

// ----------------------------------------------
import { useState } from "react";
import { Landing } from "./components/Landing";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Landing />
    </>
  );
}

export default App;
