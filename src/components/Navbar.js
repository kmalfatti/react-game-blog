import React, { Component } from 'react';
// import '../styles/navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <navbar>
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="dropdown menu" data-dropdown-menu>
              <li className="menu-text">Game Blog</li>
              <li><a href="#">PC</a></li>
              <li><a href="#">PS4</a></li>
              <li><a href="#">Switch</a></li>
              <li><a href="#">Xbox One</a></li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li><input type="search" placeholder="Search" /></li>
              <li><button type="button" className="button">Search</button></li>
            </ul>
          </div>
        </div>
      </navbar>
    );
  }
}

