import Welcome from "../components/Welcome";
import NavBar from "../components/NavBar";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <div className="main-content">
        <Welcome />
      </div>
    </div>
  );
}

export default App;
