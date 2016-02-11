import React, { Component } from 'react';

export class Message extends Component {
  render() {
    const { message } = this.props;
    return (
      <div>{message}</div>
    );
  }
}
