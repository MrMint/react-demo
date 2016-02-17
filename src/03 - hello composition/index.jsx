import React, { Component } from 'react';
import { render } from 'react-dom';
import { HelloJavascript } from '../00 - hello javascript/index';
import { HelloJsx } from '../01 - hello jsx';
import { HelloProps } from '../02 - hello props';

export class HelloComposition extends Component {
  render() {
    return (
      <div>
        <div>Hello Composition!</div>
        <HelloProps text={'Composition rocks!'} />
        <HelloJavascript />
        <HelloJsx />
      </div>
    );
  }
}

render(
  <HelloComposition />,
  document.getElementById('root')
);
