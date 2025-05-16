import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './actions';

function CartComponent() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const sampleItem = {
        id: 1,
        name: "Sample Item",
        price: 100
    }


  return (
    <div>
        <h2>Cart Items</h2>
        <ul>
            {cart.map((item) => (
                <li key={item.id}>
                    {item.name} - {item.price}
                    <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
                </li>
            ))}
        </ul>
        <button onClick={() => addToCart(sampleItem)}>Add Sample Item</button>
    </div>
  )
}

export default CartComponent;