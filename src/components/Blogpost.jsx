import React, { Component } from 'react';

export default class Blogpost extends Component {
  render() {
    return (
      <div className='blogpost col-md-4'>
        <img src="http://via.placeholder.com/750x450" alt=""/>
        <div className='blogpost-desc'>
          <h3><a href="">This is a blogpost title</a></h3>
          <p>This is a lot more information about the blogpost or like a describption also works</p>
          <p><i>July 9, 2017</i></p>
        </div>
      </div>
    );
  }
}