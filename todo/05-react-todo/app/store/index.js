'use strict';

import { createStore, combineReducers } from 'redux';
import todos from '../reducers/todos';
import visibilityFilter from '../reducers/visibility-filter';
import { loadState } from '../local-storage'

const persistedState = loadState()

const rootReducer = combineReducers({
  todos,
  visibilityFilter
});

const store = createStore(rootReducer, persistedState);

export default store;
