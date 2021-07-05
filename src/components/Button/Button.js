import React, { Component } from "react";

import "./Button.scss";

class Button extends Component {
  render() {
    return (
      <button className={`modal-button ${this.props.className}`} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;