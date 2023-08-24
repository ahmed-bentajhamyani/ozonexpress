import { Navigate, Outlet, useLocation } from 'react-router-dom';

function RequireAuth({ user }) {
    const location = useLocation();

    return (
        user?.email ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default RequireAuth