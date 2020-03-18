import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homePage/homepage.component";
import ShopPage from "./pages/shops/shop.component";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
