import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Navbar from "./components/layout/Navbar";
import Customer from './components/Customer/Customer';
import AuthContext from "./context/AuthContext";

function Router() {

    const { loggedIn } = useContext(AuthContext);

    return (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <h1>Здравейте</h1>
              <p>Тряба да сте си влезете в акаунта, за да търсите картинка</p>
              <p>Ако нямате регистрация, трябва да се регистрирате</p>
            </Route>
            {loggedIn === false && (
              <>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
              </>
            )}
            {loggedIn === true && (
              <>
                <Route path="/customer">
                  <Customer />
                </Route>
              </>
            )}
          </Switch>
        </BrowserRouter>
      );
    }


export default Router;