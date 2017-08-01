import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return(
        <footer>
          <div className='col-md-3 footer-div'>
            <ul>
              <li id='copy' style={{width:'140px'}}>&copy; 2017 GameSource. All rights reserved.</li>
            </ul>
          </div>
          <div className='col-md-3 footer-div'>
            <ul className='footer-ul-links'>
              <li><a href="#">PC</a></li>
              <li><a href="#">PS4</a></li>
              <li><a href="#">Xbox One</a></li>
              <li><a href="#">Switch</a></li>
            </ul>
          </div>
          <div className='col-md-3 footer-div'>
            <ul className='footer-ul-links'>
              <li><a href="#">About</a></li>
              <li><a href="#">Advertising</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>
          <div className='col-md-3 footer-div'>
            <ul className='footer-ul-links'>
              <li id='follow'>Follow us</li>
              <ul id='social-media-icons'>
                <li><a href=''><i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a></li>
                <li><a href=''><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a></li>
                <li><a href=''><i className="fa fa-youtube-play fa-2x" aria-hidden="true"></i></a></li>
              </ul>
            </ul>
          </div>
        </footer>
      )
  }
}