import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function B2BPrivateRoute({ children, ...rest }) {
    const { isLoggedIn } = useSelector((state) => state.users);

    if (!isLoggedIn) {
        return <Navigate replace to="/login" />;
    }

    return children;
}

export default B2BPrivateRoute;
