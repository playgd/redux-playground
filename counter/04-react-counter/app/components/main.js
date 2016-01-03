'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from '../store';

const Counter = ({
  value
}) => {
  return (
    <h1>{value}</h1>    
  );
};

const render = () => {
  ReactDOM.render(
    <Counter value={store.getState()} />,
    document.getElementById('app')  
  );
};

store.subscribe(render);
render();

