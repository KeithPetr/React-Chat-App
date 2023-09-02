import GoogleSignIn from "../images/dark_google_sign_in.png";
import { auth } from "../src/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function NavBar() {
  const [user] = useAuthState(auth);

  function googleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  function signOut() {
    auth.signOut();
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
          />
        </button>
      )}
    </nav>
  );
}
