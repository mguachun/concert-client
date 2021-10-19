import { Component } from 'react'
import concertsReducer from '../reducers/concertsReducer'

// import Search from '..components/Search'
// import ConcertForm from '..components/ConcertForm'

class ConcertList extends Component {
    constructor(props) {
        super()
        this.state = {} 
    }

    state = {
        concerts: []
    }

    // addConcert = (concertData) => {
    //     this.setState((prevState) => {
    //         return {
    //             concerts: [...prevState.concerts, concertData]
    //         }
    //     })
    // }

    
    
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


    deleteConcert() {
        // Simple DELETE request with fetch
        fetch("https://localhost:3000/concerts", { method: 'DELETE' })
            .then(() => this.setState({ status: 'Delete successful' }));
    }
    

    addConcert = (concertData) => {
        // console.log(concertData)
        this.setState( {
                concerts: concertData
        })
    }

    displayConcerts = () => {
        return(
        this.state.concerts.map(object => <div className="concert-data"><h1>{object.artist} 🎤   </h1> 
        Concert Title: {object.concert_title}<br/>
        Venue: {object.venue} <br/>
        Date: {object.date} <br/>
        Genre: {object.genre}<br/>
        Comment: <em> {object.comment} </em>
        <div className="list-delete-btn" onClick=""> Delete X</div>
        </div>)
        )

    }

    

    render() {
        return (
            <div>
                <h1 className="c-index">Concert Index:</h1>
                { this.state.concerts ? this.displayConcerts() : "loading"}
            </div>
        )
    }
}

export default ConcertList;

  
  
