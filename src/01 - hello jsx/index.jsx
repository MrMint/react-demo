import React, { Component } from 'react';
import { render } from 'react-dom';

export class HelloJsx extends Component {
  render() {
    return (
      <div>Hello Jsx!</div>
    );
  }
}

render(<HelloJsx />, document.getElementById('root'));

// Babel compiles the xml syntax down to javascript function calls
