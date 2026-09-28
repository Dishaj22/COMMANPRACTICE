import { useContext } from "react";
import { CartContext } from "./Context/CartContext";

function Header() {
  const { cartItems } = useContext(CartContext);

  return (
    <header>
      <h1>My Shopping App</h1>

      <p>Cart Items: {cartItems.length}</p>
    </header>
  );
}

export default Header;