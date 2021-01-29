import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const newOpacityValue = this.props.opacity - 0.1;
    console.log(newOpacityValue);
    return this.props.opacity <= 0.2 ? null : (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        <ColorBox opacity={newOpacityValue} />
      </div>
    )
  }

}

