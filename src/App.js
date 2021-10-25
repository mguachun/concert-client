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
import ConcertCard from "./components/ConcertCard";
import ConcertList from "./containers/ConcertList";
import FilterBar from './components/FilterBar';


class App extends Component {

  // constructor(props) {
  //   super()
  //   this.state = {} 
  // }
  // state = {
  //   concerts: []
  // }

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

        //   this.setState(() => {
        //     return {
        //       concerts: responseJSON
        //     }
        //   }, () => console.log(this.setState) )
        // });

      // });
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
            <FilterBar />
            <div style={{ paddingLeft: "900px" }} className="concert-list">
            </div>
            <div>
              <ConcertCard />
            </div>
            <ConcertList />
          </div>
        </Router>
      );
    }
  }
// const mapStateToProps = (state) => {
//   return {
  // concerts: state.concerts
  // loading: state.loading
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     addConcert: (newConcert) => {
//       dispatch(addConcert(newConcert))
//     }
//   };
// };

// const mdp = (globalDispatch) => {
//   return {
//     getConcertsWithDispatchFn: () => globalDispatch(fetchConcerts())
//   }
// }

const mdp = (globalDispatch) => {
  return {
    newFetchConcertsWithDispatchFn: () => globalDispatch(newFetchConcerts())
  }
}

const msp = (globalState) => (globalState)

export default connect(msp,mdp)(App); 
// first arg allows you to access and second arg manipulate the store
// export default App;