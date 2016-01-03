'use strict';

import { createStore, combineReducers } from 'redux';
import todos from '../reducers/todos';
import visibilityFilter from '../reducers/visibility-filter';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const store = createStore(todoApp);

export default store;
