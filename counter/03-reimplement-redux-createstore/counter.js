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
    let listeners = [];
    const getState = () => state;
    
    const dispatch = (action) => {
    
    };

    const subscribe = (listener) => {
      listeners.push(listener); 
    };

    return { getState, dispatch, subscribe };
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

