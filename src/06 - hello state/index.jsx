import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <span>{count}</span>
        <button onClick={() => this.setState({count: count + 1})}>Increment</button>
        <button onClick={() => this.setState({count: count - 1})}>Decrement</button>
      </div>
    );
  }
}

render(<Counter />, document.getElementById('root'));
// render(<Counter />, document.getElementById('root1'));
// render(<Counter />, document.getElementById('root2'));
// render(<Counter />, document.getElementById('root3'));
