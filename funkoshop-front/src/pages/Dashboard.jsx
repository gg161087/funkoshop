import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { DataContext } from './../contexts/DataContexts.jsx';

export const Dashboard = () => {
    const navigate = useNavigate()
    const { handleLogout, user, roles } = useContext(DataContext);

    const logOut = () => {
        handleLogout()
        navigate('/')
    }
    if(!user) {
        return null
    }

    console.log(roles); 
    
    return (
        <main className='container'>
            <h2>{user.name}</h2>
            <button onClick={logOut}>LogOut</button>
        </main>
    )
}