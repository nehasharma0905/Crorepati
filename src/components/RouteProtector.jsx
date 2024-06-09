import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const RouteProtector = () => {
   const { isLoading, userObject, isUserLoggedIn } = useSelector((state) => state.users);
    
    return (
        isUserLoggedIn && userObject ? (<Outlet />) : isLoading ? (
            <div>Loading...</div>
        ) : (
            <Navigate to="/login"/>
        )
    )
}