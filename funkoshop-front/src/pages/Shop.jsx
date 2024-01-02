import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MainShop } from '././../components/MainShop.jsx';

import { DataContext } from './../contexts/DataContexts.jsx';

export const Shop = () => {
    const { category, licence_id } = useParams();   
    const { products } = useContext(DataContext);    
    
    const productsByCategory = products.filter(
        product => licence_id ? product.category.name === category & product.licence_id === parseInt(licence_id) :
        product.category.name === category
    );

    return (
        <MainShop products={!category ? products : productsByCategory}></MainShop>
    )
}