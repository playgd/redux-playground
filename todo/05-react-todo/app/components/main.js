'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from '../store';

let nextTodoId = 0;

const TodoApp = ({ todos }) => {
  return (
    <div>
      <button onClick={() => {
        store.dispatch({
          type: 'ADD_TODO',
          text: 'Test',
          id: nextTodoId++
        });
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
