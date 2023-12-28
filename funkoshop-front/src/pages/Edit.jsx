import { useParams } from 'react-router-dom';

import { EditProduct } from './../components/edit/EditProduct.jsx';
import { EditCategory } from './../components/edit/EditCategory.jsx'

import './Edit.css';

export const Edit = () => {
    const { table, id } = useParams();
    const Item = () => {
        switch (table) {
            case 'products':
                return <EditProduct id={id} />;
            case 'categories':
                return <EditCategory id={id} />;            
            default:
                return <div className='container'>No se encontró un componente para {table}</div>;
        }
    };
    return (
        <div className="container">  
            <Item></Item>                
        </div>
    )
}