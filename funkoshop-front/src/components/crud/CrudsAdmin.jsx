import { useState, useEffect } from 'react';

import { TableWithPagination } from './TableWithPagination.jsx';

import { getDynamic } from './../../utils/httpClient.js';

export const CrudsAdmin = () => {

    const [products, setProducts] = useState([]); 
    const [licences, setLicences] = useState([]);    
    const [categories, setCategories] = useState([]);    
    const [roles, setRoles] = useState([]);    
    const [users, setUsers] = useState([]);

    const getProducts = async () => {
        const columnsToShow = [
            'id',
            'name',            
            'description',
            'price',
            'stock',        
            'discount',
            'sku',
            'dues',
            'image_front',
            'image_back',
            'licence_id',
            'category_id'      
        ];
        const response = await getDynamic('products');
        const filteredData = response.map(item =>
            Object.keys(item)
              .filter(key => columnsToShow.includes(key))
              .reduce((obj, key) => {
                obj[key] = item[key];
                return obj;
              }, {})
          );
        setProducts(filteredData);
    };
    const getLicences = async () => {
        const response = await getDynamic('licences');
        setLicences(response);
    };
    const getCategories = async () => {
        const response = await getDynamic('categories');
        setCategories(response);
    };
    
    const getRoles = async () => {
        const response = await getDynamic('roles');
        setRoles(response);
    };
    
    const getUsers = async () => {
        const columnsToShow = [
            'id',
            'name',
            'last_name',
            'telephone',
            'email',
            'password'        
        ];
        const response = await getDynamic('users');
        const filteredData = response.map(item =>
            Object.keys(item)
              .filter(key => columnsToShow.includes(key))
              .reduce((obj, key) => {
                obj[key] = item[key];
                return obj;
              }, {})
          );
        setUsers(filteredData);
    };
    const getAll = () => {
        getProducts();
        getLicences();        
        getCategories();        
        getRoles();        
        getUsers();
    }
    useEffect(() => {
        getAll()
    }, []);

    if (!products && !licences && !categories && !roles && !users) {
        return (
            <div className="container">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <div className="container mt-4" style={{minHeight: '60rem'}}>
            <ul className="nav nav-tabs" id="myTabCrud" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="tabProducts" data-bs-toggle="tab" href="#tabProductsContent" role="tab" aria-controls="tabProductsContent" aria-selected="true">
                        Productos
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="tabLicences" data-bs-toggle="tab" href="#tabLicencesContent" role="tab" aria-controls="tabLicencesContent" aria-selected="false">
                        Licencias
                    </a>
                </li> 
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="tabCategories" data-bs-toggle="tab" href="#tabCategoriesContent" role="tab" aria-controls="tabCategoriesContent" aria-selected="false">
                        Categorías
                    </a>
                </li>                                               
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="tabUsers" data-bs-toggle="tab" href="#tabUsersContent" role="tab" aria-controls="tabUsersContent" aria-selected="false">
                        Usuarios
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="tabRoles" data-bs-toggle="tab" href="#tabRolesContent" role="tab" aria-controls="tabRolesContent" aria-selected="false">
                        Roles
                    </a>
                </li>                
            </ul>
            <div className="tab-content" id="myTabCrudContent">
                <div className="tab-pane fade show active" id="tabProductsContent" role="tabpanel" aria-labelledby="tabProducos">
                    <TableWithPagination data={products} path='products'/>
                </div>
                <div className="tab-pane fade" id="tabLicencesContent" role="tabpanel" aria-labelledby="tabLicences">
                    <TableWithPagination data={licences} path='licences'/>
                </div>
                <div className="tab-pane fade" id="tabCategoriesContent" role="tabpanel" aria-labelledby="tabCategories">
                    <TableWithPagination data={categories} path='categories'/>
                </div>                
                <div className="tab-pane fade" id="tabUsersContent" role="tabpanel" aria-labelledby="tabUsers">
                    <TableWithPagination data={users} path='users'/>
                </div>
                <div className="tab-pane fade" id="tabRolesContent" role="tabpanel" aria-labelledby="tabRoles">
                    <TableWithPagination data={roles} path='roles'/>
                </div>                
            </div>
        </div>
    )
}