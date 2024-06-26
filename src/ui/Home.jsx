import { useSelector } from "react-redux";
import CreateUser from "../featues/user/CreateUser.jsx";
import Button from "./Button.jsx";
import { getUsername } from "../featues/user/userSlice.js";

function Home() {
  const username = useSelector(getUsername);
  return (
    <div className="my-10 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {!username && <CreateUser />}
      {username && <Button to="/menu">Continue ordering, {username}</Button>}
    </div>
  );
}

export default Home;
