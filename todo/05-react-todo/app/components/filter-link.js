'use strict';

import React from 'react';

const FilterLink = ({
  filter,
  currentFilter,
  children,
  onClick
}) => {
  if(currentFilter === filter) {
    return <span>{children}</span>;
  }

  return (
    <a href="#" onClick={(e) => {
      e.preventDefault();
      onClick(filter);
    }}>
      { children }
    </a>
  );
};

export default FilterLink;
