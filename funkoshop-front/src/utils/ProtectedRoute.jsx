import {Outlet, Navigate} from 'react-router-dom';

import { useAuth } from './AuthProvider.jsx';

export const ProtectedRoute = () => {
    const auth = useAuth()
    return auth.isAuthenticated ? <Outlet /> : <Navigate to='/'/>
}