import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { Loader } from "./Loader";

export const RouteProtector = () => {
   const { isLoading, userObject, isUserLoggedIn } = useSelector((state) => state.users);
    
    return (
        isUserLoggedIn && userObject ? (<Outlet />) : isLoading ? (
            <Loader className="router-protector-loading"/>
        ) : (
            <Navigate to="/login"/>
        )
    )
}