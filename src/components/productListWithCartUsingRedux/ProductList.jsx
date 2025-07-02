import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';

const products = [
    {id: 1, name: 'Mac Book', price: 1200},
    {id: 2, name: 'Iphone', price: 900},
    {id: 3, name: 'Airpods', price: 400},
]

function ProductList() {
    const dispatch = useDispatch();
  return (
    <div>
        <h2>Products</h2>
        {products.map((product) => (
            <div>
            <p>{product.name} - ${product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
            </div>
        ))}
    </div>
  )
}

export default ProductList;