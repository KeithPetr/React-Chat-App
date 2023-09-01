import GoogleSignIn from "../images/dark_google_sign_in.png";
import { useState } from "react";
import { auth } from "../src/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

export default function NavBar() {
  const [user] = useAuthState(auth)
  console.log(signInWithRedirect)

  function googleSignIn() {
    setUser(true);
  }

  function signOut() {
    setUser(false);
  }

  return (
    <nav className="nav-bar">
      <h1>React Chat App</h1>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        <button className="btn google-btn">
          <img 
          src={GoogleSignIn} 
          onClick={googleSignIn}
          alt="sign in with Google"
          type="button"
          />
        </button>
      )}
    </nav>
  );
}
