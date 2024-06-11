import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { useState } from "react";

const actionCodeSettings = {
  url: "https://localhost:3000",
  handleCodeInApp: true,
};

export const Signin = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");

  async function onSignin() {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
        alert("Email sent");
      })
      .catch((error) => {
        alert("sent not sent");
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          onSignin();
        }}
      >
        Signup
      </button>
    </div>
  );
};
