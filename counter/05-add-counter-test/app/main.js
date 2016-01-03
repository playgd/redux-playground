'use strict';

import expect from 'expect';
import deepFreeze from 'deep-freeze';

const addCounter = (list) => {
  return list.concat([0]);
};

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);

  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
};

testAddCounter();
console.log('All tests passed!');
