import React, { Component } from 'react';

export default class Header extends Component {
  // header is the component that locate above the navbar. Try put some text in the div and see.
  render(){
    return(
      <div id="header" style={{
        fontFamily:"Tangerine",
        fontSize:"50px"
        }}>
        Hello World
      </div>
    );
  }
}
