import GoogleSignIn from "../images/dark_google_sign_in.png";
import { auth } from "../src/firebase";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Welcome() {
  function googleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  return (
    <>
      <h1>Welcome to React Chat App</h1>
      <h3>Please sign in</h3>
      <button className="btn google-btn">
        <img
          src={GoogleSignIn}
          onClick={googleSignIn}
          alt="Sign in with Google"
        />
      </button>
    </>
  );
}
