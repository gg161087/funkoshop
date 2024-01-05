import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { DataContext } from './../contexts/DataContexts.jsx';

import { TablesAdmin } from './../components/TablesAdmin.jsx';

export const Admin = () => {
    return (
        <main className='container'>
            <TablesAdmin/>
            <Link to='/dashboard'>Volver</Link>
        </main>
    )
}