import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return (<nav style={{fontSize:20, fontWeight:'bold',}}  className="navbar navbar-light bg-dark">
  <a className="navbar-brand" href="#" style={{color:'white', margin:10}}>Navbar</a>
   <form class="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-primary" type="submit">Search</button>
      </form>
</nav>);
    }
}
 
export default NavBar;