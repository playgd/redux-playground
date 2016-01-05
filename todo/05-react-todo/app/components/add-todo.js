'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
    let input;
    return (
      <form>
        <input ref={node => (input = node)} />

        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(addTodo(input.value));
            input.focus();
            input.value = '';
          }}>
          Add todo
        </button>
      </form>
    );
};

AddTodo = connect()(AddTodo);

export default AddTodo;
