import { Component } from 'react'
import Concert from "./Concert"

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
        this.addConcert(data)
        })
        
    }


    deleteConcert(object) {
        fetch(`http://localhost:3000/concerts/${object.id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }

        })
            .then(res => res.json())
            .then(res => console.log(res))
        window.location.replace(`http://localhost:3001/`)


    }



    addConcert = (concertData) => {
        this.setState({
            concerts: concertData
        })
    }

    displayConcerts = () => {
        return (
            this.state.concerts.map(instance => <Concert deleteConcert={this.deleteConcert} object={instance}/> )
        )
    }

    render() {
        return (
            <div>
                <h1 className="c-index">Concert Index:</h1>
                {this.state.concerts ? this.displayConcerts() : "loading"}
            </div>
        )
    }
}

export default ConcertList;



