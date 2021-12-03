<!-- // <div key={concert.id} className="concert-card">
                    {/* Artist: {this.concert.artist} <br/>
                    Concert Title: {this.concert.concert_title} <br/>
                    Venue:{this.concert.venue} <br/>
                    Date:{this.concert.date} <br/>
                    Genre:{this.concert.genre} <br/>
                    Comment: {this.concert.comment} <br/>
                    <div>
                        <button classname="delete-button" onClick={() => this.handleClick(concert)}>Delete</button>
                    </div> */}
                    
                // </div>) -->

<!-- 
// const mapStateToProps = (state, ownProps) => {
   
 
//      return {
//         concerts: displayConcerts,
//         loading: state.loading
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchConcerts: () => dispatch(fetchConcerts())
//     }
// } -->





<!-- counter: 
import React, { Component } from "react";

class ButtonCounter extends Component {
  constructor() {
    super();
    // initial state has count set at 0
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    // when handleClick is called, newCount is set to whatever this.state.count is plus 1 PRIOR to calling this.setState
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default ButtonCounter; -->

<!-- 
//practice counter 
import React from 'react'



class Counter extends React.Component {
  state = {
    count: 0
  };

  handleClick = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
  };



  render() {
    return (
        <div>
      <button className="block" onClick={this.handleClick} className="block" >
        <div className="counter">{this.state.count}</div>
        </button>
    
      </div>


    );
  }
}
export default Counter; -->

------------------------------------------------------------------------------------
<!-- import React from 'react'



class Count extends React.Component {
  state = {
    count: 0
  };

  handleClick = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
  };

  decreaseCount = () => {
    this.setState(prev => ({ count: prev.count - 1}));
  }

  incrementFiveCount = () => {
    this.setState(prev => ({ count: prev.count + 5}));
  }
  toggleClick = () => {
    this.setState({ count: !this.state.count});
  }

  render() {
    return (
        <div>
        {/* <button className="block" onClick={this.handleClick}  >
        <div className="count">{this.state.count}</div>
        </button> */}

        <button onClick={this.handleClick}> Click to increment by 1</button>
        <button onClick={this.decreaseCount}> Click to decrease by 1</button>
        <button onClick={this.incrementFiveCount}> Click to increase by 5</button>
        <button onClick={this.toggleClick}>
          { this.state.count ? 'Hide number' : 'Show number'}
           </button>
           { this.state.count ? <h2>{this.state.count}</h2> : ''}

      </div>


    );
  }
}
export default Count; -->


=----------------------------------------------------------------------------------------
<!-- Search : 
import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Search Tickets"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar -->
--------------------------------------------------------------------------------------
<!-- import { Component } from 'react'; -->
<!-- class InputCount extends Component {
    state = {
        text: "",
        counter: 0,
        
      }
      handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
      }

      handleClick = (e) => {
        this.setState({
            counter: 
            this.state.counter + this.state.text.length
        })
        
      }
      render() {
        return(
          <div style ={{textAlign: "center"}}>
           <p onClick={this.handleClick}>Count Input: {this.state.text.length}</p> 
           <input onChange={this.handleChange}></input> 
          </div> 
        );
      }
    }


export default InputCount; -->
-------------------------------------------------------------------------------------------------------------
<!-- import { Component } from 'react';
class Count extends Component{
    state = {
        count: 0
      };
    
      handleClick = () => {
        this.setState(prev => ({ count: prev.count + 1 }));
      };

    
      render() {
        return (
            <div>
            <button onClick={this.handleClick}> Like   {this.state.count} </button>
          </div>
    
    
        );
      }
}
export default Count; -->
