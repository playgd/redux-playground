'use strict';

import expect from 'expect';
import deepFreeze from 'deep-freeze';

const addCounter = (list) => {

};

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
};

testAddCounter();
console.log('All tests passed!');
