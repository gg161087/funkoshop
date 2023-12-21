import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './partials/Header.jsx';
import { Footer } from './partials/Footer.jsx';

import { Home } from './pages/Home.jsx';
import { Shop } from './pages/Shop.jsx';
import { Detail } from './pages/Detail.jsx';
import { Login } from './pages/Login.jsx';
import { Register } from './pages/Register.jsx';
import { Contact } from './pages/Contact.jsx';

import { getDynamic } from './utils/httpClient.js';

export const App = () => {
    const [products, setProducts] = useState([]);
    const [licences, setLicences] = useState([]);
    const [categories, setCategories] = useState([]);
    const [productsCart, setProductsCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProductsCart, setCountProductsCart] = useState(0);

    const getProducts = async () => {
        const response = await getDynamic('products');
        if (response) {
            setProducts(response.data);
        }
    }
    const getLicences = async () => {
        const response = await getDynamic('licences');
        if (response) {
            setLicences(response.data);
        }
    }
    const getCategories = async () => {
        const response = await getDynamic('categories');
        if (response) {
            setCategories(response.data)
        }
    }
    useEffect(() =>{
        getProducts()
        getLicences()
        getCategories()    
    },[])
    if (!products && !licences && !categories) {
        return null
    }

    return (
        <BrowserRouter>
            <Header
                productsCart={productsCart}
                setProductsCart={setProductsCart}
                total={total}
                setTotal={setTotal}
                countProductsCart={countProductsCart}
                setCountProductsCart={setCountProductsCart}
                categories={categories}
            />
            <Routes>
                <Route path='/' element={<Home licences={licences} products={products}/>}/>
                <Route path='/shop' element={<Shop products={products}/>}/>
                <Route path='/shop/:id' element={<Detail/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}