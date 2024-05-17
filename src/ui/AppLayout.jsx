import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../featues/cart/CartOverview";
import Loader from "./Loader";
import Header from "./Header";

const App = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scrool">
        <main className=" mx-auto max-w-3xl">
          <h1>
            <Outlet />
          </h1>
        </main>
      </div>

      <CartOverview />
    </div>
  );
};

export default App;
