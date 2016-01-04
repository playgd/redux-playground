'use strict';

import React from 'react';
import TodoList from './todo-list';
import AddTodo from './add-todo';
import Footer from './footer';
import store from '../store';

const getVisibleTodos = (
  todos,
  filter
) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
  }
};

let nextTodoId = 0;
const TodoApp = ({
  todos,
  visibilityFilter
}) => {
  const visibleTodos = getVisibleTodos(todos, visibilityFilter);
  return (
    <div>
      <AddTodo 
        onAddClick={text => {
          store.dispatch({
            type: 'ADD_TODO',
            id: nextTodoId++,
            text
          });
        }}
      />
      <TodoList
        todos={visibleTodos}
        onTodoClick={(id) => {
          store.dispatch({
            type: 'TOGGLE_TODO',
            id: id
          })
        }}
      />
    <Footer />
    </div>
  );
};

export default TodoApp;
