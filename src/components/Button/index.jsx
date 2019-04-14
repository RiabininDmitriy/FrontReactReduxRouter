import React, { Component } from 'react';

class ButtonComponent extends Component {
  render() {
    return (
      <button {...this.props}>
        {this.props.name}
      </button>
    );
  }
}


export default ButtonComponent 