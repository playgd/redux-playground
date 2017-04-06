'use strict';

import React from 'react';
import { render } from 'react-dom';
import Root from './components/root'
import configureStore from './store';

const store = configureStore()

render(
  <Root store={store} />,
  document.querySelector('[data-js="app"]')
);
