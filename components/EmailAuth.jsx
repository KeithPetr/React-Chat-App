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
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignIn, setisSignIn] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    try {
      if (password === confirmPassword) {
        const credential = EmailAuthProvider.credential(email, password);
        await createUserWithEmailAndPassword(auth, email, password);
        await auth.currentUser.linkWithCredential(credential);
      } else {
        setError("Passwords do not match!");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred during sign-up.")
    }
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password);
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
        placeholder={isSignIn ? "Enter your password" : "Create a password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {(!isSignIn && (
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      ))}
      {error && <p className="error-message">{error}</p>}
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
