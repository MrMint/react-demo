import React, { Component } from 'react';
import { MessageList } from './MessageList';

export class Chat extends Component {
  static propTypes = {
    onSend: React.PropTypes.func.isRequired,
    messages: React.PropTypes.array,
  };

  handleSendWrapper = () => {
    this.props.onSend(this.refs.messageInput.value);
  };

  render() {
    const { messages } = this.props;
    return (
      <div>
        <MessageList messages={messages} />
        <input ref="messageInput"/>
        <button onClick={this.handleSendWrapper}>Send</button>
      </div>
    );
  }
}
