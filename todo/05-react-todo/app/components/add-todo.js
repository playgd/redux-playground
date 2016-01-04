'use strict';

import React from 'react';

let nextTodoId = 0;
const AddTodo = ({ store }) => {
    let input;
    return (
      <div>
        <input ref={node => (input = node)} />

        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            id: nextTodoId++,
            text: input.value
          });

          input.value = '';
        }}>
          Add todo
        </button>
      </div>
    );
};

export default AddTodo;
