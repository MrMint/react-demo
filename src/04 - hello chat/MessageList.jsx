import React, { Component } from 'react';
import { Message as MessageListItem } from './Message';

export class MessageList extends Component {
  render() {
    const { messages } = this.props;
    return (
      <div>
      { messages.map(message => <MessageListItem message={message} />)}
      </div>
    );
  }
}
