import React, { Component } from 'react';
import '../styles/App.css';
import Navbar from './Navbar'
import Carousel from './Carousel'
import Blogpost from './Blogpost'
import Feedpost from './Feedpost'

export default class App extends Component {
  render() {
    return (
        <div className="App">
          <Navbar />
          <Carousel />
          <Blogpost />
          <Blogpost />
          <Blogpost />
          <Blogpost />
          <Blogpost />
          <Blogpost />
          <Feedpost />
        </div>
    );
  }
}


