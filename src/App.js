import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import "./App.css";

import HomePage from "./pages/homePage/homepage.component";
import ShopPage from "./pages/shops/shop.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUp from "./pages/signInAndSignUp/signInAndSignUp.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: snapshot.id,
            ...snapshot.data()
          });
        });
        console.log(this.state);
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInAndSignUp} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
