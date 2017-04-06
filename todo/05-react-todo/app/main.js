'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TodoApp from './components/todo-app';
import store from './store';
import { saveState } from './local-storage'
import throttle from 'lodash.throttle'

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.querySelector('[data-js="app"]')
);

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  })
}))
