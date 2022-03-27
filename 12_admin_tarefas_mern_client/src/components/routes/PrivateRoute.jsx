import React, { useContext, useEffect } from "react";

import { Navigate, Outlet } from "react-router-dom";

import AuthContext from "../../context/auth/authContext";

const PrivateRoute = () => {
  const authContext = useContext(AuthContext);
  const { authenticated } = authContext;

  return authenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
