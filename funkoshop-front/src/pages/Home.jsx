import { useState, useEffect} from 'react';

import { Header } from '../partials/Header.jsx';
import { Hero } from '../components/Hero.jsx';
import { MainHome } from '../components/MainHome.jsx';
import { Footer } from '../partials/Footer.jsx';

import { getDynamic } from './../utils/httpClient.js';

export const Home = () => {
    
    const [products, setProducts] = useState([]);
    const [licences, setLicences] = useState([])

    useEffect(() =>{
        getDynamic(`/products`).then((data)=>{                   
            setProducts(data.data)            
        })
        getDynamic(`/licences`).then((data)=>{                   
            setLicences(data.data)            
        })    
    },[])

    return (
        <>
            <Header></Header>
            <Hero></Hero>            
            <MainHome licences={licences} products={products}></MainHome>
            <Footer></Footer>
        </>
    )
}