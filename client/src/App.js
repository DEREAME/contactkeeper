import "./App.css";

import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/layout/pages/Home";
import About from "./components/layout/pages/About";
import NavBar from "./components/layout/navbar";
import ContactState from "./context/contact/contactState";
import AuthState from "./context/contact/auth/AuthState";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alerts";
import NavigateRoute from "./components/routing/NavigateRoute"; // Fixed for React Router v6
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <NavBar title="Contact Keeper" />
              <div className="container">
                <Alerts />
                <Routes>
                  {/* Protected Route for Home */}
                  <Route path="/" element={<NavigateRoute />}>
                    <Route index element={<Home />} />
                  </Route>
                  {/* Public Routes */}
                  <Route path="/about" element={<About />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
