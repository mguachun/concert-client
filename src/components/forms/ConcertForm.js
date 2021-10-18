import { Component } from 'react';
import { connect } from 'react-redux'

class ConcertForm extends Component {
    cons
    state = {
        artist: '',
        concert_title: '',
        venue: '',
        date: '',
        genre:'',
        comment:''
    };


    //allows change of state for any field DRY
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.artist, this.state.concert_title, this.state.venue, this.state.date, this.state.genre, this.state.comment);
        this.setState({
            artist: '',
            concert_title: '',
            venue: '',
            date: '',
            genre:'',
            comment:''

        });
    };

    render() {
        return (
            <div className="form-container">
                <form>
                <h1> Track a Ticket </h1>
                <div>
                     {/* the value of each input must rely on the state
                    <label>Artist:</label>
                    <input type="text" value={this.state.artist} onChange={this.handleChange} name="artist"/> <br />
                    </div>
                    <label>Concert Title:</label>
                    <input type="text" value={this.state.concert_title} onChange={this.handleChange} name="concert_title"/> <br />
                    <br></br>
                    <label>Venue:</label>
                    <input type="venue" value={this.state.venue} onChange={this.handleChange} name="venue"/> <br />
                    <br></br>
                    <label>Date:</label>
                    <input type="date" value={this.state.date} onChange={this.handleChange} name="date"/> <br />
                    <br></br>
                    <label>Genre:</label>
                    <input type="genre" value={this.state.genre} onChange={this.handleChange} name="genre"/> <br />
                    <br></br>
                    <label>Comment:</label>
                    <input type="comment" value={this.state.comment} onChange={this.handleChange} name="comment"/> <br />
                    <br></br>
                    <input type="submit" /> */}
                    <label htmlFor="artist">Artist:</label>
                    <input className="artist" />
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor="Concert Title">Concert Title:</label>
                    <input className="concert-title" />
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor="Venue">Venue:</label>
                    <input className="venue" />
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor="Date">Date:</label>
                    <input className="date" />
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor="Genre">Genre:</label>
                    <input className="genre" />
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor="Comment">Comment:</label>
                    <input className="comment" />
                    </div>
                    <br></br>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
                <img
          style={{ float: "left", paddingLeft: "210px", marginTop: "-420px" }}
          src="https://media.giphy.com/media/MUFlTPzL3fBmwIPiTK/giphy.gif"
        //   "https://media.giphy.com/media/ThfdBssxMqeE8/giphy.gif"
        // "https://media.giphy.com/media/kinlAqef3yqTIj9PyB/giphy.gif"
          alt="blinking ticket gif"
          height="50px"
          width="50px"
        />
            </div>
        );
    };
};

export default ConcertForm;