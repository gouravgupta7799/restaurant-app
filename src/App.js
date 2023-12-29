
import React, { useState } from "react";
import Header from './Component/Layout/Header';
import { Meals } from "./Component/Meals/Meals";
import Cart from "./Component/Cart/Cart";
import CartProvider from "./Component/Store/CartProvider";

function App() {
  const [CartIsShow, setCartIsShow] = useState(false);

  function ShowCart() {
    setCartIsShow(true);
  }

  function hideCart() {
    setCartIsShow(false);
  }

  return (
    <CartProvider>
      {CartIsShow && <Cart hideCart={hideCart} />}
      <Header ShowCart={ShowCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>

  );
}

export default App;
