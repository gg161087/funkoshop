import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { DataContext } from './../contexts/DataContexts.jsx';

import { MainAdmin } from './../components/MainAdmin.jsx';

export const Admin = () => {
    return (
        <main className='container'>
            <MainAdmin/>
            <Link to='/dashboard'>Volver</Link>
        </main>
    )
}