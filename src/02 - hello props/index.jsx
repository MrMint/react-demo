import React, { Component } from 'react';
import { render } from 'react-dom';

export class HelloProps extends Component {
  static propTypes = {
    text: React.PropTypes.string.isRequired,
  };

  render() {
    const { text } = this.props;
    return (
      <div>{text}</div>
    );
  }
}

render(
  <HelloProps text={'Hello props!'}/>,
  document.getElementById('root')
);
