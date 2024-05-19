import { useSelector } from "react-redux";
import { getUsername } from "./userSlice";

const Username = () => {
  const username = useSelector(getUsername);
  if (!username) return;
  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
};

export default Username;
