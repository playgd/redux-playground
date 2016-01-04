'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './components/provider';
import TodoApp from './components/todo-app';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.querySelector('[data-js="app"]')
);
