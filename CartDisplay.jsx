import { useContext } from "react";
import { CartContext } from "./Context/CartContext";

function CartDisplay() {
  const { cartItems, dispatch } = useContext(CartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>

            <p>₹{item.price}</p>

            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_ITEM",
                  payload: item.id,
                })
              }
            >
              Remove
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default CartDisplay;