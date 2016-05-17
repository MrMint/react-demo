import React, { Component } from 'react';
import { render } from 'react-dom';
import { Chat } from './Chat';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [
        'test message 1',
        'test message 2',
      ]
    };
  }

  handleSend = (message) => {
    const { messages } = this.state;
    this.setState({ messages: [...messages, message] });
  };

  render() {
    const { messages } = this.state;
    return (
      <Chat messages={messages} onSend={this.handleSend} />
    );
  }
}

render(
  <App />,
  document.getElementById('root')
);
