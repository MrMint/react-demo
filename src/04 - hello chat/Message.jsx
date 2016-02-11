import React, { Component } from 'react';

export class Message extends Component {
  static propTypes = {
    message: React.PropTypes.string.isRequired,
  };

  render() {
    const { message } = this.props;
    return (
      <div>{message}</div>
    );
  }
}
