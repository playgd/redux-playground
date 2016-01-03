'use strict';

import expect from 'expect';
import deepFreeze from 'deep-freeze';

const addCounter = (list) => {
  return [...list, 0];
};

const removeCounter = (list, index) => {
  list.splice(index, 1);
  return list;
};

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);

  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
};

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];

  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter);
};

testAddCounter();
testRemoveCounter();
console.log('All tests passed!');
