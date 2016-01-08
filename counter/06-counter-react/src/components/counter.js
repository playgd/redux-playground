'use strict';

import React, { Component } from 'react';
import store from '../store';

class Counter extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <h1>{store.getState()}</h1>
        <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>-</button>
        <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>+</button>
      </div>
    );
  }
}

export default Counter;
