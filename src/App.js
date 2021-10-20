import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/cart-provider";

function App() {
  const [shownCart, setShownCart] = useState(false);

  const showCartHandler = () => {
    setShownCart(true);
  };

  const hideCartHandler = () => {
    setShownCart(false);
  };

  return (
    <Fragment>
      <CartProvider>
        {shownCart && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
      </CartProvider>
    </Fragment>
  );
}

export default App;
