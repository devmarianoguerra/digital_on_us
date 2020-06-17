import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import NavBar from "./components/navbar";
import SearchTool from "./components/search";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/search" component={SearchTool} />
      </Router>
    </>
  );
}

export default App;
