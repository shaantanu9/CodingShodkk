import { Routes } from "react-router";
import "./App.css";
import Navbar from "./pages/Navbar";

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
