import React, { Component } from 'react';
import '../styles/App.css';
import Navbar from './Navbar'
import Carousel from './Carousel'
// import Blogpost from './Blogpost'
import BlogpostContainer from './BlogpostContainer.jsx'
// import Feedpost from './Feedpost'
import FeedpostContainer from './FeedpostContainer.jsx'

export default class App extends Component {
  render() {
    return (
        <div className="App">
          <Navbar />
          <Carousel />
          <BlogpostContainer />
          <FeedpostContainer />
        </div>
    );
  }
}


