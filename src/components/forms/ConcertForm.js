import { Component } from 'react';
import { connect } from "react-redux";
import { deleteConcert, sendForm } from '../../actions/ConcertActions';


class ConcertForm extends Component {


    state = {artist: '',
    concert_title: '',
    venue: '',
    date: '',
    genre:'',
    comment:''}


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.sendFormWithDispatchFn(this.state)
        //props being sent to dispatch a call on it 
        //passing data from one component to another 
        window.location.replace(`http://localhost:3001/`)
    };

    onFormChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]: value

        }, () => console.log(this.state))
    }

      

        displayFormChange = () => {
           
            return(

                <div className="form-container">
                <form id="concert-form" onSubmit={this.handleSubmit}>
                <h1> Track a Ticket </h1>
                <div>
                    <label htmlFor="artist">Artist:</label>
                    <input name="artist" onChange={this.onFormChange} value={this.state.artist}/>
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor="Concert Title">Concert Title:</label>
                    <input  name="concert_title" onChange={this.onFormChange} value={this.state.concert_title}/>
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor="Venue">Venue:</label>
                    <input name="venue" onChange={this.onFormChange} value={this.state.venue}/>
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor="Date">Date:</label>
                    <input name="date" onChange={this.onFormChange} value={this.state.date} />
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor="Genre">Genre:</label>
                    <input name="genre" onChange={this.onFormChange} value={this.state.genre} />
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor="Comment">Comment:</label>
                    <input name="comment" onChange={this.onFormChange} value={this.state.comment} />
                    </div>
                    <br></br>
                    <input className="submit_btn" type="submit"  value="Add Concert"/>
                </form>
                <img
          style={{ float: "left", paddingLeft: "215px", marginTop: "-400px" }}
          src="https://media.giphy.com/media/MUFlTPzL3fBmwIPiTK/giphy.gif"
          alt="blinking ticket gif"
          height="50px"
          width="50px"
        />
            </div>
            )
        }


    render() {
        console.log(this.props)
        return (
            <div>
                { this.displayFormChange() } 
            </div>
        );
    };
};

const mdp = (globalDispatch) => {
    return {
      deleteConcert: () => globalDispatch(deleteConcert()),
      sendFormWithDispatchFn: (obj) => globalDispatch(sendForm(obj))
    }
  }

export default connect(null, mdp)(ConcertForm);


// connect here doesn't need to map state to props because this component
// doesn't use the list. it just updates it
// connect(null, mapDispatchToProps)