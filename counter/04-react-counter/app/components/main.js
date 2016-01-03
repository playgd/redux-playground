'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from '../store';

const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => {
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
    </div>
  );
};

const render = () => {
  ReactDOM.render(
    <Counter 
      value={store.getState()}
      onIncrement={() =>
        store.dispatch({ type: 'INCREMENT' })
      }
      onDecrement={() =>
        store.dispatch({ type: 'DECREMENT' })
      }
    />,
    document.getElementById('app')  
  );
};

store.subscribe(render);
render();

