import { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import NavBar from "../components/NavBar";
import ChatBox from "../components/ChatBox";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Add an observer to listen to changes in the auth state
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in.
        setUser(authUser);
      } else {
        // No user is signed in.
        setUser(null);
      }
    });

    // Don't forget to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="app-container">
      <NavBar />
      {!user ? <Welcome /> : <ChatBox />}
    </div>
  );
}

export default App;
