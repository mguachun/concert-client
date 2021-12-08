import { Component } from 'react';

class Concert extends Component {

    render() {
        return (
            <div className="concert-data"><h1>{this.props.object.artist} 🎤   </h1>
                Concert Title: {this.props.object.concert_title}<br />
                Venue: {this.props.object.venue} <br />
                Date: {this.props.object.date} <br />
                Genre: {this.props.object.genre}<br />
                Comment: <em> {this.props.object.comment} </em>
                <button className="list-delete-btn" onClick={() => this.props.deleteConcert(this.props.object)}> Delete X</button>
               
            
            </div>
        )
 
    }
}
export default Concert;