'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from '../store';

const TodoApp = (todos) => {
  return (
    <div>
      Hello!
    </div>    
  );
};

const render = () => {
  ReactDOM.render(
    <TodoApp todos={store.getState().todos} />,
    document.getElementById('app')
  );
};

store.subscribe(render);
render();
