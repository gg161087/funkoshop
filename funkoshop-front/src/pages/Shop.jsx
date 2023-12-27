import { useContext } from 'react';
import { MainShop } from '././../components/MainShop.jsx';

import { DataContext } from './../contexts/DataContexts.jsx';

export const Shop = () => {

    const { products } = useContext(DataContext);

    return (
        <MainShop products={products}></MainShop>
    )
}