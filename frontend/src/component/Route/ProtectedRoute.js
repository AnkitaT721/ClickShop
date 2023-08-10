import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, children }) => {
  const { isAuthenticated, loading, user } = useSelector((state) => state.user);

  if (loading === false && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (isAdmin === true && (!user || user.role !== "admin")) {
    return <Navigate to="/login" replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
