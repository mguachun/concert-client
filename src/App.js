import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchConcerts } from './actions/ConcertActions'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import './App.css';
import Home from "./containers/Home";
import About from "./containers/About";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ConcertForm from "./components/forms/ConcertForm";
import ConcertList from "./containers/ConcertList";

class App extends Component {


  componentDidMount() {
    this.props.newFetchConcertsWithDispatchFn()
    } 


    render() {
      console.log(this.props)
      return (
        <Router>
          <div className="app">
            <NavBar />
            <Header /> 
            <Route path="/" component={Home} />
            <Route path="/create" component={ConcertForm} />
            <Route path="/about" component={About} />
            <div style={{ paddingLeft: "900px" }} className="concert-list">
            </div>
            <div>
            </div>
            <ConcertList />
          
          </div>
        </Router>
      );
    }
  }



const mdp = (globalDispatch) => {
  return {
    newFetchConcertsWithDispatchFn: () => globalDispatch(fetchConcerts())
  }
}

const msp = (globalState) => (globalState)

export default connect(msp,mdp)(App); 
// first arg allows you to access and second arg manipulate the store
