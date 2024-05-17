import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "./cartSlice";
function Cart() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);
  const cart = useSelector((state) => state.cart.cart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <h2 className="mt-7 text-xl font-semibold">
        Your cart, {username ? username : "User"}
      </h2>
      {cart.length > 0 ? (
        <ul className="my-5 divide-y divide-stone-200 border-b">
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </ul>
      ) : (
        <div className="my-10 flex flex-col items-center justify-center">
          <p className="mb-2">Your cart is empty, add something to checkout</p>
          <Button type="small" to="/menu">
            Go to menu
          </Button>
        </div>
      )}

      <div className="space-x-2">
        <Button to="/order/new">Order pizzas</Button>
        <Button type="secondary" onClick={handleClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
