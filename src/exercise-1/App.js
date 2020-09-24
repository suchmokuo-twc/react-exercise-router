import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Header } from "./components";
import { Home, MyProfile, AboutUs, Products, ProductDetails } from "./pages";
import "./App.css";

class App extends Component {
  links = [
    {
      pathRegex: /^\/$/,
      to: "/",
      name: "Home",
    },
    {
      pathRegex: /^\/products/,
      to: "/products",
      name: "Products",
    },
    {
      pathRegex: /^\/my-profile$/,
      to: "/my-profile",
      name: "My Profile",
    },
    {
      pathRegex: /^\/about-us$/,
      to: "/about-us",
      name: "About Us",
    },
  ];

  render() {
    const { links } = this;

    return (
      <div className="app">
        <Router>
          <Header links={links} />

          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/my-profile" component={MyProfile} />
              <Route exact path="/about-us" component={AboutUs} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/products/:id" component={ProductDetails} />
              <Redirect from="/goods" to="/products" />
              <Redirect from="*" to="/" />
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
