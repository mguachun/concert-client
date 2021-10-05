import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.css';
import Home from "./containers/Home";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ConcertForm from "./containers/forms/ConcertForm";


const App = (props) => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Header />
        <Route path="/" component={Home} />
        <div style={{paddingLeft: "900px"}}className="concert-form">
        <ConcertForm />
        </div>
  
      </div>

    </Router>

  );
};
export default App;
