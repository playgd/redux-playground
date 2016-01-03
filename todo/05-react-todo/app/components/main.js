'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from '../store';

let nextTodoId = 0;

const TodoApp = ({ todos }) => {
  let input;
  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        store.dispatch({
          type: 'ADD_TODO',
          text: input.value,
          id: nextTodoId++
        });
        input.value = '';
      }}>
        Add todo
      </button>
      <ul>
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              {todo.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const render = () => {
  ReactDOM.render(
    <TodoApp todos={store.getState().todos} />,
    document.getElementById('app')
  );
};

store.subscribe(render);
render();
