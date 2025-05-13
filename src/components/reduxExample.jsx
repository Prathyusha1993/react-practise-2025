import React from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from './store';

function Counter() {
    const counter = useSelector((state) => state.count);
    const dispatch = useDispatch();
    return (
        <>
        <p>{counter}</p>
        <button onClick={() => dispatch({ type: 'INCREMENT'})}>+</button>
        <button onClick={() => dispatch({ type: 'DECREMENT'})}>-</button>
        </>
    )
}

function reduxExample() {
  return (
    <Provider store={store}>
        <Counter  />
    </Provider>
  )
}

export default reduxExample;