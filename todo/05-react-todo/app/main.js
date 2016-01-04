'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/todo-app';
import store from './store';

const render = () => {
  ReactDOM.render(
    <TodoApp {...store.getState()} />,
    document.getElementById('app')
  );
};

store.subscribe(render);
render();
