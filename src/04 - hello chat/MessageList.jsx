import React, { Component } from 'react';
import { Message as MessageListItem } from './Message';

export class MessageList extends Component {
  static propTypes = {
    messages: React.PropTypes.array,
  };

  render() {
    const { messages } = this.props;
    return (
      <div>
      { messages.map(message => <MessageListItem message={message} />)}
      </div>
    );
  }
}
