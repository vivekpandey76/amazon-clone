import React, { useEffect, useReducer } from "react";
import "./App.css";
import Header from "../Header/Header";
import Home from "../Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "../Checkout/Checkout";
import Login from "../Login/Login";
import { auth } from "./Firebase";
import { useStateValue } from "../ContextApiPart/Stateprovider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("USER >>", authUser);

      if (authUser) {
        //the user just logged in/or the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
