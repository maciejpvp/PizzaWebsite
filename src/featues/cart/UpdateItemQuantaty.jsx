import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decItemQuantity,
  deleteItem,
  getCurrentQuantity,
  incItemQuantity,
} from "./cartSlice";

const UpdateItemQuantaty = ({ id, renderStatus = false }) => {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantity(id));

  const handleInc = () => {
    dispatch(incItemQuantity(id));
  };
  const handleDec = () => {
    dispatch(decItemQuantity(id));
  };

  return (
    <div className="flex items-center gap-2">
      <Button type="round" onClick={handleDec}>
        -
      </Button>
      {renderStatus && <p className="text-sm font-medium">{currentQuantity}</p>}
      <Button type="round" onClick={handleInc}>
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantaty;
