/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, } from "react";

import { Navigate, Outlet } from "react-router-dom";

import AuthContext from "../../context/auth/authContext";

const PrivateRoute = () => {
  const authContext = useContext(AuthContext);
  const { authenticated, loading, getAuthUser } = authContext;

  React.useEffect(() => {
    getAuthUser();
  }, [ ]);

  return authenticated && !loading ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
