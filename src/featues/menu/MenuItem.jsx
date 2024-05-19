import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantity } from "../cart/cartSlice";
import DeleteButton from "../cart/DeleteButton";
import UpdateItemQuantaty from "../cart/UpdateItemQuantaty";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const handleAddToCart = () => {
    const quantity = 1;
    dispatch(addItem(id, name, unitPrice, quantity));
  };
  const currentQuantity = useSelector(getCurrentQuantity(id));

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col ">
        <span>
          <p className="text-lg font-medium">{name}</p>
          <p className="capitalize italic text-stone-500">
            {ingredients.join(", ")}
          </p>
        </span>
        <div className="mt-auto flex items-center justify-between text-sm">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="font-medium uppercase text-stone-500">Sold out</p>
          )}
          {!currentQuantity && !soldOut && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
          {!!currentQuantity && (
            <div className="flex gap-3 sm:gap-8">
              <UpdateItemQuantaty id={id} renderStatus />
              <DeleteButton id={id} />
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
