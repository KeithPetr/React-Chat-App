import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  EmailAuthProvider,
} from "firebase/auth";
import { auth } from "../src/firebase";
import { useState } from "react";

export default function EmailAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn, setisSignIn] = useState(false);


  const handleSignUp = async () => {
    try {
      const credential = EmailAuthProvider.credential(email, password);
      await createUserWithEmailAndPassword(auth, email, password);
      await auth.currentUser.linkWithCredential(credential);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleMode = () => {
    setisSignIn((prev) => !prev);
  };

  return (
    <>
      <input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Create a password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {!isSignIn ? (
        <>
          <button className="email-btn" onClick={handleSignUp}>
            Sign Up
          </button>
          <button className="email-btn" onClick={toggleMode}>
            Switch to Sign In
          </button>
        </>
      ) : (
        <>
          <button className="email-btn" onClick={handleSignIn}>
            Sign In
          </button>
          <button className="email-btn" onClick={toggleMode}>
            Switch to Sign Up
          </button>
        </>
      )}
    </>
  );
}
