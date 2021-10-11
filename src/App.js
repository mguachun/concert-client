import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.css';
import Home from "./containers/Home";
import About from "./containers/About";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ConcertForm from "./components/forms/ConcertForm";
import ConcertCard from "./components/ConcertCard";
import Search from "./components/Search";


const App = (props) => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Header />
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <div>
        <Search />
      </div> 
        <div style={{paddingLeft: "900px"}}className="concert-form">
        <ConcertForm />
        </div>
        <div>
        <ConcertCard />
        </div>
        

  {/* //add map to props from Async lab*/}
      </div>

    </Router>

  );
};
export default App;
