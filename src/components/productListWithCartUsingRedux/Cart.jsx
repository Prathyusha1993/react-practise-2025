import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "./cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div>
            <p>
              {item.name} - ${item.price} x{" "}
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: Number(e.target.value),
                    })
                  )
                }
              />
            </p>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove from Cart
            </button>
          </div>
        ))
      )}
      <h3>SubTotal: ${subTotal.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;
