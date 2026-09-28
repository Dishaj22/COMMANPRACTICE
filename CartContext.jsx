import { createContext, useReducer } from "react";

export const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];

    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  // expose as `cartItems` to match consumer expectations
  return (
    <CartContext.Provider value={{ cartItems: cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}