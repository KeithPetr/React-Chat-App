import Welcome from "../components/Welcome";
import NavBar from "../components/NavBar";
import ChatBox from "../components/ChatBox";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="app-container">
      <NavBar />
      <div className="main-content">
        {!user ? <Welcome /> : <ChatBox />}
      </div>
    </div>
  );
}

export default App;
