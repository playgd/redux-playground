'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/todo-app';
import store from './store';

ReactDOM.render(
  <TodoApp store={store} />,
  document.querySelector('[data-js="app"]')
);
