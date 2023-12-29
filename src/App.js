
import React, { useState } from "react";
import Header from './Component/Layout/Header';
import { Meals } from "./Component/Meals/Meals";
import Cart from "./Component/Cart/Cart";

function App() {
  const [CartIsShow, setCartIsShow] = useState(false);

  function ShowCart() {
    setCartIsShow(true);
  }

  function hideCart() {
    setCartIsShow(false);
  }

  return (
    <React.Fragment>
      {CartIsShow && <Cart hideCart={hideCart} />}
      <Header ShowCart={ShowCart} />
      <main>
        <Meals />
      </main>
    </React.Fragment>

  );
}

export default App;
