import React, { Component } from 'react';
import { render } from 'react-dom'

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
