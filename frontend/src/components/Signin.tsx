import { getAuth, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { app } from "../utils/firebase";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const actionCodeSettings = {
  url: "https://localhost:5173",
  handleCodeInApp: true,
};

export const Signin = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");

  async function onSignin() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential) {
          return;
        }
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  return (
    <div>
      <button
        onClick={(e) => {
          onSignin();
        }}
      >
        Login with Google
      </button>
    </div>
  );
};
