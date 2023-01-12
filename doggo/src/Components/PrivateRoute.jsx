import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function PrivateRoute({ children }) {
  const { token } = useContext(AppContext);
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default PrivateRoute;
