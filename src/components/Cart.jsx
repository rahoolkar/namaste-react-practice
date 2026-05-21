import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cartItems = useSelector(function (store) {
    return store.cart.addedItems;
  });

  if (cartItems.length === 0) {
    return <EmptyCart/>;
  }
  return <div>cart</div>;
}

export default Cart;