import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { getTotalCartItems, getTotalCartPrice } from "./cartSlice";

function CartOverview() {
  const totalPizzas = useSelector(getTotalCartItems);
  const totalPrice = useSelector(getTotalCartPrice);
  if (!totalPizzas) return;
  return (
    <div className="slide-in slide-out fixed bottom-0 flex w-full items-center justify-between bg-stone-800 p-4 uppercase text-stone-200">
      <p className="space-x-4 font-semibold text-stone-300">
        <span>{totalPizzas} Pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
