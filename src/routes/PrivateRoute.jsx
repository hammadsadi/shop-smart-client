import { Navigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} />;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
