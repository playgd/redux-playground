'use strict';

import React from 'react';
import Todo from './todo';

const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)} />
      );
    })}
  </ul>
);

export default TodoList;
