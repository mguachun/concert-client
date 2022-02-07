import { Component } from 'react'
import Concert from "./Concert"
import {connect} from "react-redux"
import {deleteConcert} from "../actions/ConcertActions"
// import Counter from "./Counter"
class ConcertList extends Component {

   state = {
    genre: 'All'
    }

    filteredConcerts = () => {
        
        return (
        this.props.concerts.filter(concert => concert.genre.includes(this.state.genre))

        )
    }

    handleChange = (e) => {
        this.setState({genre: e.target.value })
    }


    displayConcerts = () => {
        const concerts = this.state.genre === "All" ? this.props.concerts : this.filteredConcerts()
        return (
            concerts.map(instance => <Concert deleteConcert={this.props.deleteConcert} object={instance}/> )
        )
    }

    render() {
        return (
            <div>
              {/* <Counter /> */}
                <label for="search-concerts"> Filter by Genre: </label>
                <select name="genres" id="genre" onChange={this.handleChange} value={this.state.genre}>
                    <option value="All">All</option>
                    <option value="Rock">Rock</option>
                    <option value="Rap">Rap</option>
                    <option value="Heavy Metal">Heavy Metal</option>
                    <option value="Alternative Country">Alternative Country</option>
                    <option value="Indie">Indie</option>
                    <option value="Experimental Pop">Experimental Pop</option>
                    <option value="Hip Hop">Hip Hop</option>
                    <option value="Country">Country</option>
                    <option value="Punk">Punk</option>
                    <option value="Pop">Pop</option>
                    <option value="Garage Rock">Garage Rock</option>
                </select>
                
        
                <h1 className="c-index">Concert Index:</h1>
                {!this.props.loading ? this.displayConcerts() : "loading"}

               
            </div>
        )
    }
}


export default connect(state => {
    return {
        concerts: state.concerts,
        loading: state.loading
    }
}, { deleteConcert }
)(ConcertList);



