import { auth } from "../src/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function NavBar() {
  const [user] = useAuthState(auth);

  function signOut() {
    auth.signOut();
  }

  return (
    <nav className="nav-bar">
      <h1>React Chat App</h1>
      {user && 
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      }
    </nav>
  );
}
