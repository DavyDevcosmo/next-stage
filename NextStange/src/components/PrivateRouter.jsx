import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import PropTypes from 'prop-types';

export const ProtectedRoute = ({ children }) => {
    const { currentUser } = useAuth();

    if (!currentUser) {
        return <Navigate to="/auth/login" replace />;
    }

    return children;
};


ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};
