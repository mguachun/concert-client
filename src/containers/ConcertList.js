import { Component } from 'react'
import concertsReducer from '../reducers/concertsReducer'
// import Home from '../containers/Home'
// import ConcertCard from '../components/ConcertCard'
// import Search from '..components/Search'
import ConcertData from '../components/ConcertData'
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
        this.state.concerts.map(object => <div><h1>{object.artist}</h1> {object.concert_title}, {object.venue}, {object.date}, {object.genre},{object.comment}</div>)
        )

    }



    // makeConcertCard() {
    //     let concertCards = this.state.concerts
    //     if(this.state.search){
    //         concertCards = this.state.concerts.filter((concert) => concert.title.toLowerCase().includes(this.state.search.toLowerCase()))
    //     }
    //     return concertCards.map(concert => <Concert key={concert.id} id={concert.id} artist={concert.artist} 
    //     concert_title={concert.concert_title} venue={concert.venue} date={concert.date} genre={concert.genre} comment={concert.comment}/>)
    // }



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

  
  
