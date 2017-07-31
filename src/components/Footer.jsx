import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return(
        <footer>
          <div className='col-md-3 footer-ul'>
            <ul>
              <li id='copy' style={{width:'140px'}}>&copy; 2017 GameSource. All rights reserved.</li>
            </ul>
          </div>
          <div className='col-md-3 footer-ul'>
            <ul className='footer-ul-links'>
              <li><a href="#">PC</a></li>
              <li><a href="#">PS4</a></li>
              <li><a href="#">Xbox One</a></li>
              <li><a href="#">Switch</a></li>
            </ul>
          </div>
          <div className='col-md-3 footer-ul'>
            <ul className='footer-ul-links'>
              <li><a href="#">About</a></li>
              <li><a href="#">Advertising</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>
          <div className='col-md-3 footer-ul'>
            <ul className='footer-ul-links'>
              <li style={{width:'140px'}}><a href="">Request to contribute</a></li>
            </ul>
          </div>
        </footer>
      )
  }
}