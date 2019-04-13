import React, { Component } from 'react';

class ButtonComponent extends Component {
  render() {
    const { disabled } = this.props
    console.log(disabled)
    return (
      <button {...this.props}>
        {this.props.name}
      </button>
    );
  }
}


export default ButtonComponent 