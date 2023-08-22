import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import About from './components/About';
import Career from './components/Career';
import Contact from './components/Contact';
import "./App.css"

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" to="/">SSR</a>
          <div className="navbar-nav ml-auto">
            <a className="nav-link" href="#home">Home</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#career">Career</a>
            <a className="nav-link" href="#contact">Contact</a>
          </div>
        </div>
      </nav>
      <BrowserRouter>
          <Home />
          <About />
          <Career />
          <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App;