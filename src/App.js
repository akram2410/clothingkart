import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homePage/homepage.component";
import ShopPage from "./pages/shops/shop.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUp from "./pages/signInAndSignUp/signInAndSignUp.component";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
