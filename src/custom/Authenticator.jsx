import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export const Authenticator = () => {
    const { isLoading, userObject, isUserLoggedIn } = useSelector((state) => state.users);
    
    return (
        isUserLoggedIn && userObject ? (<Outlet />) : isLoading ? (
            <div>Loading...</div>
        ) : (
            <div>Not Authorized</div>
        )
    )
}