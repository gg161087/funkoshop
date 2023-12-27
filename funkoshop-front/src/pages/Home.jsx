import { useContext } from 'react';

import { Hero } from '../components/Hero.jsx';
import { MainHome } from '../components/MainHome.jsx';
import { DataContext } from './../contexts/DataContexts.jsx';

export const Home = () => {

    const { licences, products} = useContext(DataContext);

    return (
        <>         
            <Hero></Hero>            
            <MainHome licences={licences} products={products}></MainHome>
        </>
    )
}