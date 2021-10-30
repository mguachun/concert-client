import React from 'react'
import { NavLink } from 'react-router-dom';

const link = {
  fontfamily: 'Stick No Bills',
  fontstyle: 'sans-serif',
  width: '100px',
  margin: '0 4px 4px',
  background: '#3621ad',
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
            background: '#3621ad'
          }}
        >Home</NavLink>
        <NavLink
          to="/create"
          exact
          style={link}
          activeStyle={{
            background: '#3621ad'
          }}
        >Add a Ticket</NavLink>
        <NavLink
          to="/about"
          exact
          style={link}
          activeStyle={{
            background: '#3621ad'
          }}
          >About</NavLink>
      </div>
    )
  }
}
export default NavBar;