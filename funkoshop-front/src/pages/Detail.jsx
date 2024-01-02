import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { DataContext } from './../contexts/DataContexts.jsx';

import './Detail.css';

export const Detail = () => {    
    const { id } = useParams();
    const { products } = useContext(DataContext);
    
    const product = products.find(product => product.id === parseInt(id));    
    
    if (!product) {
        return null
    }

    return (
        <div className="container">
            <div>{product.name}</div>
        </div>
    )
}