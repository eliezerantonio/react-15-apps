import React, { useContext, useEffect } from "react";

import { Navigate, Outlet } from "react-router-dom";

import AuthContext from "../../context/auth/authContext";

const PrivateRoute = ({ component: Component, ...props }) => {
  const authContext = useContext(AuthContext);
  const { authenticated } = authContext;

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return authenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
