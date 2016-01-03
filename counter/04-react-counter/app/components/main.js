'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from '../reducers/counter';

const Counter = (props) => {
  return (
    <h1>{props.value}</h1>    
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

