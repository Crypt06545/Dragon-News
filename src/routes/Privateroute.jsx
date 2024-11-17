import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  // Show loading spinner while authentication state is being determined
  if (loading) {
    return <Loading />;
  }

  // If user is authenticated, render children
  if (user && user.email) {
    return children;
  }

  // Redirect to login page if user is not authenticated
  return <Navigate to="/auth/login" />;
};

export default PrivateRoute;
