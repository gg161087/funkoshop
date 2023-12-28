import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { DataContext } from './../contexts/DataContexts.jsx';
import { Icon } from './../components/Icon.jsx'

export const Dashboard = () => {
    const navigate = useNavigate()
    const { handleLogout, user, roles } = useContext(DataContext);

    const logOut = () => {
        handleLogout()
        navigate('/')
    }
    if(!user) {
        return (
            <div className="container">
                <Icon css='css' icon={faSpinner}></Icon>
            </div>
        )
    }
    
    return (
        <main className='container'>
            <h2>{user.name}</h2>
            <button onClick={logOut}>LogOut</button>
            <Link to='/dashboard/admin'>Administrar</Link>                  
        </main>
    )
}