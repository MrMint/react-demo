import React, { Component } from 'react';
import { render } from 'react-dom';
import { Chat } from './Chat';

const messages = [
  'test message 1',
  'test message 2',
];

class App extends Component {
  initialState = () => {
    return { messages };
  };

  handleSend = (message) => {
    this.setState({messages: messages.push(message)});
  };

  render() {
    return (
      <Chat messages={messages} onSend={this.handleSend} />
    );
  }
}



render(
  <App />,
  document.getElementById('root')
);
