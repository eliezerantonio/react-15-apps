import React, { useContext, useEffect } from "react";

import { Navigate, Outlet } from "react-router-dom";

import AuthContext from "../../context/auth/authContext";

const PrivateRoute = () => {
  const authContext = useContext(AuthContext);
  const { authenticated, loading, getAuthUser } = authContext;

  React.useEffect(() => {
    getAuthUser();
  }, []);

  return !authenticated && !loading ? <Navigate to="/" /> : <Outlet />;
};

export default PrivateRoute;
