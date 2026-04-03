import { Navigate, useLocation } from "react-router-dom";
import { apiService } from "./api";

export const CustomerRoute = ({ element }) => {
    const location = useLocation();
    
    // Just return the element directly! No curly braces around it.
    return apiService.isCustomer() ? (
        element
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    );
};

export const AuditorRoute = ({ element }) => {
    const location = useLocation();
    
    // Just return the element directly!
    return apiService.isAuditor() || apiService.isAdmin() ? (
        element
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    );
};