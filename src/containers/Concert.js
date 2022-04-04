import { Component } from 'react';

class Concert extends Component {

    render() {
        return (
            <div className="cards" >

                    <div className="cards_item">
                        <div className="card">
                            <div className="card_content">
                                <h1 className="card-title">{this.props.object.artist} 🎵   </h1>
                                Concert Title: {this.props.object.concert_title}<br />
                                Venue: {this.props.object.venue} <br />
                                Date: {this.props.object.date} <br />
                                Genre: {this.props.object.genre}<br />
                                Comment: <em> {this.props.object.comment} </em>
                                <button className="list-delete-btn" onClick={() => this.props.deleteConcert(this.props.object)}> Delete X</button>

                            </div>

                        </div>
                        
                    </div>


      



            </div>

        )

    }
}
export default Concert;