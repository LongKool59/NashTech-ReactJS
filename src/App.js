import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar.js";
function App() {
  const [bootcamp, setBootcamp] = useState("Rookies");
  return (
    <React.Fragment>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

      <Home bootcamp={bootcamp} />
    </React.Fragment>
  );
}

export default App;
