import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
// Stripe Wrapper around any page that has Stripe React elements
import { Elements, StripeProvider } from "react-stripe-elements";

import PrivateRoute from "./components/common/PrivateRoute";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";

import NavBar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Search from "./components/layout/Search";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/create-profile/CreateProfile";
import EditProfile from "./components/edit-profile/EditProfile";
import BrowseByCategory from "./components/browse/BrowseByCategory";
import ShoppingCart from "./components/cart/ShoppingCart";
import CheckoutCart from "./components/cart/CheckoutCart";
import CategoryShowProducts from "./components/browse/CategoryShowProducts";
import ProductDetail from "./components/product/ProductDetail";
import NotFound from "./components/layout/NotFound";
import RecipeItem from "./components/recipe/RecipeItem";
import BrowseRecipe from "./components/recipe/BrowseRecipe";

import CreateRecipe from "./components/recipe/CreateRecipe";
import MyRecipe from "./components/recipe/MyRecipe";
import EditRecipe from "./components/recipe/EditRecipe";

import HistoryOverview from "./components/history/HistoryOverview";
import HistorySingleOrder from "./components/history/HistorySingleOrder";
import Delivery from "./components/cart/Delivery";
import Receipt from "./components/cart/Receipt";
import Payment from "./components/cart/Payment";

import "./App.css";

// check for token
if (localStorage.jwtToken) {
  // set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

// We have to wrap PrivateRoutes in a Switch to prevent redirection issues
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavBar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/Search" component={Search} />

            <Route exact path="/Snack" component={CategoryShowProducts} />
            <Route exact path="/Drink" component={CategoryShowProducts} />
            <Route exact path="/Fruit" component={CategoryShowProducts} />
            <Route exact path="/Alcohol" component={CategoryShowProducts} />
            <Route exact path="/Dairy" component={CategoryShowProducts} />
            <Route exact path="/Meat" component={CategoryShowProducts} />
            <Route exact path="/Bakery" component={CategoryShowProducts} />

            <div className="container">
              <Route exact path="/categories" component={BrowseByCategory} />
              <Route exact path="/cart" component={ShoppingCart} />
              <Route exact path="/checkout" component={CheckoutCart} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/receipt" component={Receipt} />

              {/* Checkout Page with Stripe */}
              <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
                <Elements>
                  <Route exact path="/payment" component={Payment} />
                </Elements>
              </StripeProvider>

              {/* Checkout Page with Stripe */}
              <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
                <Elements>
                  <Route exact path="/delivery" component={Delivery} />
                </Elements>
              </StripeProvider>

              <Route exact path="/recipe/view/:id" component={RecipeItem} />
              <Route exact path="/recipe" component={BrowseRecipe} />

              <Route exact path="/MyRecipe" component={MyRecipe} />

              <Route
                exact
                path="/product/:productname"
                component={ProductDetail}
              />
              <Route exact path="/not-found/:attempt" component={NotFound} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/history"
                  component={HistoryOverview}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/history/:order"
                  component={HistorySingleOrder}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/edit-profile"
                  component={EditProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/recipe/create"
                  component={CreateRecipe}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/recipe/edit/:item"
                  component={EditRecipe}
                />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
