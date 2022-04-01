import React from 'react'
import { NavLink } from 'react-router-dom';

const link = {


  // width: '100px',
  float: "right",
  marginRight: '20px',
  margin: '0 10px 4px',
  background: 'rgb(66, 68, 125)',
  textDecoration: 'none',
  color: 'white',
  // borderRadius: '30px',
  // border: '1px',

  padding: '5px',

  fontSize: '19px',
}

class NavBar extends React.Component {
  render() {
    return (
      <div className='nav'>
        <NavLink 
          to="/"
          exact
          style={link}
          activeStyle={{
            background: 'rgb(66, 68, 125)',
    
          }}
        >Home</NavLink>
        <NavLink
          to="/create"
          exact
          style={link}
          activeStyle={{
            background: 'rgb(66, 68, 125)'
          }}
        >Add a Ticket</NavLink>
        <NavLink
          to="/about"
          exact
          style={link}
          activeStyle={{
            background: 'rgb(66, 68, 125)',

         

          }}
          >About</NavLink>
      </div>
    )
  }
}
export default NavBar;