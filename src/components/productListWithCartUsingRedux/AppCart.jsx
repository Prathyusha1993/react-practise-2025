import React from 'react'
import { Provider } from 'react-redux';
import ProductList from './ProductList';
import Cart from './Cart';
import { store } from './store';

function AppCart() {

  return (
    <div>
        <Provider store={store}>
        <ProductList />
        <Cart />
        </Provider>
    </div>
  )
}

export default AppCart;