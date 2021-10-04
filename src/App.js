import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.css';
import Home from "./containers/Home";

import Header from "./components/Header";
import NavBar from "./components/NavBar";


const App = (props) => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Header />
        <Route path="/" component={Home} />
      
      </div>

    </Router>

  );
};
export default App;
