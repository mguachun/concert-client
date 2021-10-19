import React, { Component } from "react";
import { connect } from "react-redux";

class CreateConcert extends Component {
  constructor() {
    super();
    this.state = {
      artist: '',
      concert_title: '',
      venue: '',
      date: '',
      genre:'',
      comment:''
    };
  }


  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addConcert(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="text"
              placeholder="artist"
              onChange={this.handleChange}
              value={this.state.text}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="add todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addConcert: (formData) => dispatch({ type: "ADD_CONCERT", payload: formData }),
  };
};

export default connect(null, mapDispatchToProps)(CreateConcert);