import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import NavBar from "./components/navbar";
import SearchTool from "./components/search";
import Categories from "./components/categories";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/search" component={SearchTool} />
        <Route path="/categories" component={Categories} />
      </Router>
    </>
  );
}

export default App;
