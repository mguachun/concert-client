import React from 'react'
import { NavLink } from 'react-router-dom';

const link = {
  fontfamily: 'Stick No Bills',
  fontstyle: 'sans-serif',
  width: '100px',
  margin: '0 4px 4px',
  background: 'rgb(34, 3, 31)',
  textDecoration: 'none',
  color: 'white',
  borderRadius: '30px',
  border: '1px',
  padding: '10px',
  fontSize: '19px',
}

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <NavLink 
          to="/"
          exact
          style={link}
          activeStyle={{
            background: 'rgb(34, 3, 31)'
          }}
        >Home</NavLink>
        <NavLink
          to="/create"
          exact
          style={link}
          activeStyle={{
            background: 'rgb(34, 3, 31)'
          }}
        >Add a Ticket</NavLink>
        <NavLink
          to="/about"
          exact
          style={link}
          activeStyle={{
            background: 'rgb(34, 3, 31)'
          }}
          >About</NavLink>
      </div>
    )
  }
}
export default NavBar;