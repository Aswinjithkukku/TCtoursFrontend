import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function B2BPrivateRoute({ children, ...rest }) {
    const { isLoggedIn, isSiteLoading } = useSelector((state) => state.agents);
    if(isSiteLoading) {
        return <div>Loading.....</div>
    }
    if (!isLoggedIn) {
        return <Navigate replace to="/b2b/login" />;
    }

    return children;
}

export default B2BPrivateRoute;
