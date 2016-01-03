'use strict';

const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  } 
};

console.assert(
  counter(0, { type: 'INCREMENT' }) === 1, 
  'Should counter receives 0 and returns 1'
);

console.assert(
  counter(1, { type: 'INCREMENT' }) === 2,
  'Should counter receives 1 and returns 2'
);

console.assert(
  counter(2, { type: 'DECREMENT' }) === 1,
  'Should counter receives 2 and returns 1'
);

console.assert(
  counter(1, { type: 'SOMETHING_ELSE' }),
  'Should counter receives 1 and return 1'  
);

console.assert(
  counter(undefined, {}) === 0,
  'First load, counter receives undefined state and no actions; and should returns 0'
);

console.log('All tests passed!');
