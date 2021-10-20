import { Component } from 'react';


class ConcertForm extends Component {

    state = {
        concerts: []
    }



    // fetchNewConcert = (concert) => {
    //     const configObj = {
    //         method: "POST",
    //         headers: {
    //             accept: "application/json",
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(this.state)
    //     }
    //     fetch("http://localhost:3000/concerts", configObj)
    //     .then(resp => resp.json())
    //     .then(json => this.addConcert(json))
    // }



    handleSubmit = (e) => {
        console.log(e.target)
        e.preventDefault();
        e.target.reset()

      const concert = {...this.state}
      const url = "http://localhost:3000/concerts"
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(concert),
        })
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                artist: '',
                concert_title: '',
                venue: '',
                date: '',
                genre:'',
                comment:''
            })
        })
        window.location.replace(`http://localhost:3001/`)
      
    };

    onFormChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]: value

        }, () => console.log(this.state))
    }

        //allows change of state for any field DRY
        handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
    
            });
        };

        displayFormChange = () => {
            const { artist, concert_title, venue, date, genre, comment } = this.state
            return(

                <div className="form-container">
                <form id="concert-form" onSubmit={this.handleSubmit}>
                <h1> Track a Ticket </h1>
                <div>
                    <label htmlFor="artist">Artist:</label>
                    <input name="artist" onChange={this.onFormChange} value={artist} />
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor="Concert Title">Concert Title:</label>
                    <input  name="concert_title" onChange={this.onFormChange} value={concert_title}/>
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor="Venue">Venue:</label>
                    <input name="venue" onChange={this.onFormChange} value={venue}/>
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor="Date">Date:</label>
                    <input name="date" onChange={this.onFormChange} value={date} n/>
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor="Genre">Genre:</label>
                    <input name="genre" onChange={this.onFormChange} value={genre} />
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor="Comment">Comment:</label>
                    <input name="comment" onChange={this.onFormChange} value={comment} />
                    </div>
                    <br></br>
                    <input type="submit"  value="Add Concert"/>
                    {/* <div>
                        <button>Submit</button>
                    </div> */}
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
    console.log(this.state.concerts)
        return (
            <div>
                { this.displayFormChange() } 
            </div>

    
        );
      
    };
};

export default ConcertForm;