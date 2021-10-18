import { Component } from 'react'
import concertsReducer from '../reducers/concertsReducer'
// import Home from '../containers/Home'
// import ConcertCard from '../components/ConcertCard'
// import Search from '..components/Search'
import ConcertData from '../components/ConcertData'
import FilterBar from "../components/FilterBar"

class ConcertList extends Component {
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
            }).then(data => {
                // debugger
                // dispatch({ type: 'ADD_CONCERTS', concerts: responseJSON })
                // console.log(responseJSON)})
                this.addConcert(data)
            }
        )
    }

  
    addConcert = (concertData) => {
        // console.log(concertData)
        this.setState( {
            // return {
                concerts: concertData
                // concerts: [this.set]
            // }
        })
        //we want an array of objects
        // console.log(this.state.concerts)
    }

    displayConcerts = () => {
        return(
        this.state.concerts.map(object => <div className="concert-data"><h1>{object.artist}</h1> 
        Concert Title: {object.concert_title}<br/>
        Venue: {object.venue} <br/>
        Date: {object.date} <br/>
        Genre: {object.genre}<br/>
        Comment: <em> {object.comment} </em>
        <div className="list-delete-btn"> Delete X</div>
        </div>)
        )

    }

    render() {
        // debugger
    //    console.log(this.state.concerts)
        return (
            <div>
                <h1>Concert Index:</h1>
                { this.state.concerts ? this.displayConcerts() : "loading"}
            </div>
        )
    }
}

export default ConcertList 

  
  
