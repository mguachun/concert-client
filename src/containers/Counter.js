import React, { Component } from 'react'

export class Counter extends Component {
    state = {
        text: "",
        counter: 0
    }

    handleClick = (e) => {
        this.setState({
            counter: 
            this.state.counter + this.state.text.length,
            text: ""
        })
    }

    handleChange = (e) => {
        this.setState({text: e.target.value})
    }


    render() {
        return (
            <div>
                <input  onChange={this.handleChange} value={this.state.text}></input>
                <button onClick={this.handleClick}> Click </button>
                <p> {this.state.counter}</p>
                
            </div>
        )
    }
}

export default Counter
