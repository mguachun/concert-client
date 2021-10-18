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
          

        </div>
        )
    }
}

export default ConcertData;