'use strict';

import React from 'react';
import FilterLink from './filter-link';

const Footer = ({
  visibilityFilter,
  onFilterClick
}) => (
   <p>
    Show:
    {' '}
    <FilterLink 
      filter='SHOW_ALL'
      currentFilter={visibilityFilter}
      onClick={onFilterClick}
    >
      All
    </FilterLink>
    {' '}
    <FilterLink 
      filter='SHOW_COMPLETED'
      currentFilter={visibilityFilter}
      onClick={onFilterClick}
    >
      Completed
    </FilterLink>
    {' '}
    <FilterLink 
      filter='SHOW_ACTIVE'
      currentFilter={visibilityFilter}
      onClick={onFilterClick}
    >
      Active
    </FilterLink>
  </p>
);

export default Footer;
