'use strict';

import { createStore, combineReducers } from 'redux';

const todoApp = combineReducers({
  require('../reducers/todos'),
  require('../reducers/visibility-filter')
});

const store = createStore(todoApp);

export default store;
