import React, { Component } from 'react';
import { render } from 'react-dom';

// It's just javascript!

export class HelloJavascript extends Component {
  render() {
    return (
      React.createElement('div', null, 'Hello javascript!')
    );
  }
}

render(
  React.createElement(HelloJavascript),
  document.getElementById('root')
);
