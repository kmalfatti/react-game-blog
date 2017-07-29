import React, { Component } from 'react';

export default class Feedpost extends Component {
  render(){
    return(
      <div>
        <article className='feedpost row'>
          <a href=''><img src="http://via.placeholder.com/750x450" alt="" className='feedImg col-md-4'/></a>
          <div className='feedDesc col-md-8'>
            <a href=''><h3>This is a title</h3></a>
            <p>July 11, 2017 | Kyle Malfatti</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet expedita laborum inventore blanditiis voluptate, cupiditate, doloremque tempora similique odio perferendis quasi, amet et est perspiciatis sequi quod vitae adipisci ad.<a href="#">Read More</a></p>
          </div>
        </article>
        <hr/>
      </div>
  )}
}

