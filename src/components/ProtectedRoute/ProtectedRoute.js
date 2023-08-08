import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, element, link }) {
  return isLoggedIn ? element : <Navigate to={link} />;
}

export default ProtectedRoute;
