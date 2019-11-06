import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={CountryList} />
          <Route exact path="/:cca3" component={CountryDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
