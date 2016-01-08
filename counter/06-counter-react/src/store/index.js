'use strict';

import { createStore } from 'redux';
import counter from '../reducers/counter';

const store = createStore(counter);

export default store;
