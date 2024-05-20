import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

const UpdateOrder = () => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button>Make priority</Button>
    </fetcher.Form>
  );
};

export default UpdateOrder;

export const action = async ({ params }) => {
  const data = { priority: true };
  console.log(params);
  //await updateOrder(params.orderId, data);
  return null;
};
