import React, { Component } from 'react';

class Gallery extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: 0
    };
  }

  handleClick(){
    alert('The Developer is just new developing React');
  }

  render(){
    return(
      <div className="pic-grid" onClick={this.handleClick}>
        <div className="pic1"/>
        <div className="pic2"/>
        <div className="pic3"/>
        <div className="pic4"/>
        <div className="pic5"/>
        <div className="pic6"/>
        <br/>
      </div>
    );
  }
}

export default Gallery;