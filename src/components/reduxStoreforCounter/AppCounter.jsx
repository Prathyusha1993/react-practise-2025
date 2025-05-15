import React from 'react'
import store from './store';
import { decrement, increment } from './actions';

function AppCounter() {
    const unsubscribe = store.subscribe(() => console.log('state changed:', store.getState()));

    store.dispatch(increment());
    store.dispatch(increment());
    store.dispatch(increment());
    store.dispatch(decrement());

    unsubscribe();
  return (
    <div>AppCounter</div>
  )
}

export default AppCounter