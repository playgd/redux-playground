((doc) => {
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

  const { createStore } = Redux;
  const store = createStore(counter);

  const render = () => {
    doc.querySelector('#root').innerText = store.getState();
  };

  store.subscribe(render);
  render();

  doc.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
  }, false);
})(document);

