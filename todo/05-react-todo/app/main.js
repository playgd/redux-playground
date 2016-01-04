'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/todo-app';

ReactDOM.render(
  <TodoApp />,
  document.querySelector('[data-js="app"]')
);
