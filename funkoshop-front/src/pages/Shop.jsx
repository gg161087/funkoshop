import { useState, useEffect} from 'react';

import { Header } from './../partials/Header.jsx';
import { MainShop } from '././../components/MainShop.jsx';
import { Footer } from './../partials/Footer.jsx';

import { getDynamic } from './../utils/httpClient.js';

export const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() =>{
        getDynamic(`/products`).then((data)=>{                   
            setProducts(data.data)            
        })            
    },[])

    return (
        <>
            <Header></Header>
            <MainShop products={products}></MainShop>
            <Footer></Footer>
        </>
    )
}