import { useSelector } from "react-redux";

function LoadingWrapper({ children, ...rest }) {
    const { isSiteLoading } = useSelector((state) => state.users);
    if(isSiteLoading) {
        return <div>Loading.....</div>
    }

    return children;
}

export default LoadingWrapper;
