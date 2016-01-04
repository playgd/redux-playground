'use strict';

import React from 'react';
import AddTodo from './add-todo';
import VisibleTodoList from './visible-todo-list';
import Footer from './footer';

const TodoApp = ({ store }) => {
  return (
    <div>
      <AddTodo store={store} />
      <VisibleTodoList store={store} />
      <Footer store={store} />
    </div>
  );
};

export default TodoApp;
