'use strict';

const counter = (state = 0, action) => {
  const actions = {
    INCREMENT: state + 1,
    DECREMENT: state - 1
  };

  return (actions[action.type] !== undefined)
    ? actions[action.type]
    : state;
};

export default counter;
