import React, { Component } from 'react';
import '../styles/App.css';
import Navbar from './Navbar'
import Carousel from './Carousel'
import BlogpostContainer from './BlogpostContainer.jsx'
import FeedpostContainer from './FeedpostContainer.jsx'
import Footer from './Footer.jsx'

export default class App extends Component {
  render() {
    return (
        <div className="App">
          <Navbar />
          <Carousel />
          <BlogpostContainer />
          <FeedpostContainer />
          <Footer/>
        </div>
    );
  }
}


