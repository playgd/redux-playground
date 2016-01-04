'use strict';

import React from 'react';
import FilterLink from './filter-link';

const Footer = ({ store }) => (
  <p>
    Show:{' '}
    <FilterLink filter='SHOW_ALL' store={store}>All</FilterLink>{', '}
    <FilterLink filter='SHOW_COMPLETED' store={store}>Completed</FilterLink>{', '}
    <FilterLink filter='SHOW_ACTIVE' store={store}>Active</FilterLink>
  </p>
);

export default Footer;
