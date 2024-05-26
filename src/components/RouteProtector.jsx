import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const RouteProtector = () => {
    const {isUserLoggedIn} = useSelector((state) => state.users);

    return isUserLoggedIn ? <Outlet /> : <Navigate to="/login" />;
    }