import { Component } from 'react'

class ConcertData extends Component {

    state = {
        concerts: []
    }

   render() {
        const { artist, concert_title, venue, date, genre, comment} = this.props
     //  console.log(this.props)
    return (
        <div className="concert-card"  >
            <h2>{this.props.artist}</h2>
            <h3>{this.props.concert_title}</h3>
            <p>{this.props.venue}</p>
            <p>{this.props.date}</p>
            <p>{this.props.genre}</p>
            <p>{this.props.comment}</p>

        </div>
        )
    }
}

export default ConcertData;