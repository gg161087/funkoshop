// DataContext.js
import { createContext, useState, useEffect } from 'react';

import { getDynamic, postDynamic } from '../utils/httpClient.js';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [licences, setLicences] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null)
    const [roles, setRoles] = useState(null)
    const [productsCart, setProductsCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProductsCart, setCountProductsCart] = useState(0);

    const getProducts = async () => {
        const response = await getDynamic('products');        
        if (response) {
            setProducts(response);
        }
    }
    const getLicences = async () => {
        const response = await getDynamic('licences');
        if (response) {
            setLicences(response);
        }
    }
    const getCategories = async () => {
        const response = await getDynamic('categories');
        if (response) {
            setCategories(response)
        }
    }    
    const getToken = () => {
        const localToken = localStorage.getItem('token')
        const localUser = localStorage.getItem('user')
        if (localToken && localUser) {
            let user = JSON.parse(localUser)            
            setIsLoggedIn(true);
            setUser(user)
            setRoles(user.roles)
        }        
    }

    const handleLogin = async (credentials) => {        
        try {            
            const response = await postDynamic('users/login', {
                email: credentials.email,
                password: credentials.password
            });                                   
            if (response) {                
                const authToken = response.token;
                localStorage.setItem('token', authToken);
                localStorage.setItem('user', JSON.stringify(response))
                setUser(response);  
                setRoles(response.roles)                                             
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
                console.error('Error de inicio de sesión');
            }
        } catch (error) {
            setIsLoggedIn(false);
            console.error('Error de red:', error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');       
        setIsLoggedIn(false);
    };

    useEffect(() =>{
        getProducts()
        getLicences()
        getCategories()   
        getToken()        
    },[])

    if (!products && !licences && !categories) {
        return null
    }
    
    return (
        <DataContext.Provider value={
            { 
                products, 
                licences, 
                categories, 
                isLoggedIn, 
                productsCart, 
                total, 
                countProductsCart,
                user,
                roles, 
                handleLogin, 
                handleLogout,
                setProductsCart,
                setTotal,
                setCountProductsCart 
            }
        }>
            {children}
        </DataContext.Provider>
    );
};