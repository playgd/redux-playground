'use strict';

import React from 'react';
import AddTodo from './add-todo';
import VisibleTodoList from './visible-todo-list';
import Footer from './footer';

const TodoApp = () => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
};

export default TodoApp;
