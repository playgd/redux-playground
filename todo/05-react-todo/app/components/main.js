'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from '../store';

const render = () => {
  console.log('render');
};

store.subscribe(render);
render();
