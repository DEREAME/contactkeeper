import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../context/contact/auth/authContext";

const NavigateRoute = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default NavigateRoute;
