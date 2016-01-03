'use strict';

function counter(state, action) {
  return state;
}

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

console.log('All tests passed!');
