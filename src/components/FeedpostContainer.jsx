import React, { Component } from 'react';
import Feedpost from './Feedpost.jsx';

export default class FeedpostContainer extends Component {
  render(){
    let feedpostContainer = [];
    for (let i=0; i<5; i++ ){
      feedpostContainer.push(<Feedpost/>)
    }
    return (<div className='feed-container clearfix'>
      <div>
        <hr/><h3>More recent articles</h3><hr/>
      </div>
      { feedpostContainer }
    </div>)
  }
}