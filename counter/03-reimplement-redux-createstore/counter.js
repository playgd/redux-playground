(() => {
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

  const createStore = (reducer) => {
    let state;
    const getState = () => state;
  };

  const store = createStore(counter);

  const render = () => {
    document.body.innerText = store.getState();
  };
  
  store.subscribe(render);
  render();

  document.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
  }, false);
})();

