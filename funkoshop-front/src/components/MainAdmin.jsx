import { useContext, useState } from 'react';

import { DataContext } from './../contexts/DataContexts.jsx';
import { DynamicTabs } from './../components/DynamicTabs.jsx';
import { TableCategories } from './../components/table/TableCategories.jsx';
import { TableLicences } from './../components/table/TableLicences.jsx';
import { TableProducts } from './../components/table/TableProducts.jsx';
import { TableRoles } from './../components/table/TableRoles.jsx';
import { TableUsers } from './../components/table/TableUsers.jsx';

import './MainAdmin.css';

export const MainAdmin = () => {
    const { products, licences, categories, users, roles } = useContext(DataContext);
    
    const tabsAdmin = [
        {
            title: 'Productos',
            content: <TableProducts products={products}></TableProducts>,
        },
        {
            title: 'Licencias',
            content: <TableLicences licences={licences}></TableLicences>,
        },
        {
            title: 'Categorias',
            content: <TableCategories categories={categories}></TableCategories>,
        },
        {
            title: 'Usuarios',
            content: <TableUsers users={users}></TableUsers>,
        },
        {
            title: 'Roles',
            content: <TableRoles roles={roles}></TableRoles>
        },
    ];
    
    return (
        <div className='container'>
            <div id='admin'>
                <h1>Tablas</h1>
                <DynamicTabs tabData={tabsAdmin}></DynamicTabs>                              
            </div>
        </div>
    )
}