import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import './App.css';
import Home from "./containers/Home";
import About from "./containers/About";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ConcertForm from "./components/forms/ConcertForm";
import ConcertCard from "./components/ConcertCard";
import { fetchConcerts } from "./actions/fetchConcerts";

class App extends Component {

  constructor(props) {
    super()
    this.state = {} 
  }
  state = {
    concerts: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/concerts")
    .then(response => {
      return response.json()
    }).then(responseJSON => {
      debugger
      // dispatch({ type: 'ADD_CONCERTS', concerts: responseJSON })
    })
  }

  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Header />
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <div style={{paddingLeft: "900px"}}className="concert-list">
          <ConcertForm />
          </div>
          <div>
          <ConcertCard />
          </div>
          <div></div>
        </div>
      </Router>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
  // concerts: state.concerts
  // loading: state.loading

//     artist: state.concertsReducer.artists,
//     concert_title: state.concertsReducer.concert_title,
//     venue: state.concertsReducer.venue,
//     date: state.concertsReducer.date,
//     genre: state.concertsReducer.genre,
//     comment: state.concertsReducer.comment,
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     addConcert: (newConcert) => {
//       dispatch(addConcert(newConcert))
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
