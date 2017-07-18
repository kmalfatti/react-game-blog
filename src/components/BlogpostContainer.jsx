import React, { Component } from 'react';
import Blogpost from './Blogpost.jsx'

export default class BlogpostContainer extends Component {
  render(){
    let blogpostContainer = []
    for (let i=0; i<6; i++){
      blogpostContainer.push(<Blogpost />)
    }
    return <div>{ blogpostContainer }</div>
  }
}