import { Component } from 'react';


class ConcertForm extends Component {
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
            <div className="concert-form">
                <h1> Track a Ticket </h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Artist:</label>
                    {/* the value of each input must rely on the state */}
                    <input type="text" value={this.state.artist} onChange={this.handleChange} name="artist"/> <br />
                    <label>Concert Title:</label>
                    <input type="text" value={this.state.concert_title} onChange={this.handleChange} name="concert_title"/> <br />
                    <label>Venue:</label>
                    <input type="venue" value={this.state.venue} onChange={this.handleChange} name="venue"/> <br />
                    <label>Date:</label>
                    <input type="date" value={this.state.date} onChange={this.handleChange} name="date"/> <br />
                    <label>Genre:</label>
                    <input type="genre" value={this.state.genre} onChange={this.handleChange} name="genre"/> <br />
                    <label>Comment:</label>
                    <input type="comment" value={this.state.comment} onChange={this.handleChange} name="comment"/> <br />

                    <input type="submit" />

                </form>
            </div>
        );
    };
};

export default ConcertForm;