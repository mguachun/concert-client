import React, { Component } from "react";
import { connect } from "react-redux";
import { newFetchConcerts } from './actions/ConcertActions'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import './App.css';
import Home from "./containers/Home";
import About from "./containers/About";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ConcertForm from "./components/forms/ConcertForm";
import ConcertList from "./containers/ConcertList";
// import Concert from "./containers/Concert"


// import Search from "./containers/Search";



class App extends Component {


  componentDidMount() {
    this.props.newFetchConcertsWithDispatchFn()
    // fetch("http://localhost:3000/concerts")
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then((responseJSON) => {
    //     // debugger
    //     // dispatch({ type: 'ADD_CONCERTS', concerts: responseJSON })
    //     console.log(responseJSON);

    //       this.setState(() => {
    //         return {
    //           concerts: responseJSON
    //         }
    //       }, () => console.log(this.setState) )
    //     });

    //   });
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
    newFetchConcertsWithDispatchFn: () => globalDispatch(newFetchConcerts())
  }
}

const msp = (globalState) => (globalState)

export default connect(msp,mdp)(App); 
// first arg allows you to access and second arg manipulate the store
