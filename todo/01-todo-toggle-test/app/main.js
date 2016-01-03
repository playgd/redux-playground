'use strict';

import expect from 'expect';
import deepFreeze from 'deep-freeze';

const toggleTodo = (todo) => {
  return {
    id: todo.id,
    text: todo.text,
    completed: !todo.completed
  };
};

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: true
  };
  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  };

  expect(
    toggleTodo(todoBefore)    
  ).toEqual(todoAfter);
};

testToggleTodo();
console.log('All tests passed!');
