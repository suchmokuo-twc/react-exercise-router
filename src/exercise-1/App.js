import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components";
import { Home, MyProfile, AboutUs } from "./pages";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Header />

          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/my-profile" component={MyProfile} />
              <Route exact path="/about-us" component={AboutUs} />
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
