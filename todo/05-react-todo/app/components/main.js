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
            <li key={todo.id} onClick={() => {
              store.dispatch({
                type: 'TOGGLE_TODO',
                id: todo.id
              });
            }} style={{
              textDecoration: todo.completed
                ? 'line-through'
                : 'none'
            }}>
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
