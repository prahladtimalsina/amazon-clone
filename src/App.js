import React, { useEffect, unsubscribe } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider"; //data layer
import { auth } from "./firebase";
import Payment from "./Payment";

function App() {
  const [{ user }, dispatch] = useStateValue();
  //useEffect <<<<< PowerFull
  //piece of code which runs based on a given condition
  useEffect(() => {
    //for listen when uer in and out
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in...

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out...

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //Any cleanup operation go in there...
      unsubscribe();
    };
  }, []);
  console.log("User is >>>>", user);
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
          <Route path="/payment">
            <Header />
            <Payment />
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
