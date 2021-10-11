import { Component } from 'react'
import Home from '../containers/Home'
import ConcertForm from '../components/ConcertForm'
import ConcertCard from '../components/ConcertCard'
import Search from '..components/Search'

class ConcertList extends Component {
    state = {
        artist: '',
        concert_title: '',
        venue: '',
        date: '',
        genre:'',
        comment:''
    };

    addConcert = (concertData) => {
        this.setState((prevState) => {
            return {
                concerts: [...prevState.concerts, concertData]
            }
        })
    }

    makeConcertCard() {
        let concertCards = this.state.concerts
        if(this.state.search){
            concertCards = this.state.concerts.filter((concert) => concert.title.toLowerCase().includes(this.state.search.toLowerCase()))
        }
        return concertCards.map(concert => <Concert key={concert.id} id={concert.id} artist={concert.artist} 
        concert_title={concert.concert_title} venue={concert.venue} date={concert.date} genre={concert.genre} comment={concert.comment}/>)
    }

    componentDidMount() {
        const url = "http://localhost:3000/"
        fetch(url)
        .then(resp => resp.json())
        .then(data=> {
            this.setState({
                concerts:data
            })
        })
    }

    handleSearchChange = (e) => {
        console.log(e.target.value)
        this.setState({search: e.target.value})
    }

    render() {
        return(
            <div id="concert-list">
                <div id="search">
                    <label><strong>Search:</strong></label><br></br>
                    <input type="text" onChange={this.handleSearchChange} />
                </div>
                <ConcertForm addConcert={this.addConcert}/>
                {this.makeConcertCard}
            </div>
        )
    }
}
export default ConcertList 

  
  
