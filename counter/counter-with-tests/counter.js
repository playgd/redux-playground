'use strict';

function counter(state, action) {
  if(action.type === 'INCREMENT') {
    return state + 1;
  } 
  else if(action.type === 'DECREMENT') {
    return state - 1;
  }
  else {
    return state;
  }
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

console.assert(
  counter(1, { type: 'SOMETHING_ELSE' }),
  'Should counter receives 1 and return 1'  
);

console.assert(
  counter(undefined, {}) === 0,
  'First load, counter receives undefined state and no actions; and should returns 0'
);

console.log('All tests passed!');
