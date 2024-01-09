import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { DataContext } from './../../contexts/DataContexts.jsx';
import { updateDynamic } from '../../utils/httpClient.js';
import { Icon } from './../Icon.jsx';

export const EditCategory = () => {
    const { id } = useParams();
    const { categories } = useContext(DataContext);
    const category = categories.find(category => category.id === parseInt(id));
    
    const navigate = useNavigate();

    const [name, setName] = useState('');

    useEffect(() => {
        if (category) {
            setName(category.name)            
        }
    }, [category])

    const updateCategory = async (e) => {
        e.preventDefault()        
        const result = await updateDynamic('categories', id, {name:name})
    }

    if (!category) {
        return (
            <div className="container">
                <Icon css='icon' icon={faSpinner} />
            </div>
        )
    }
    return (
        <div id="edit">
            <h2 className='edit__title'>Editar Categoria</h2>
            <form onSubmit={updateCategory} className='edit__form'> 
                <div className="form__flex">
                    <div className="form__box--flex">
                        <label className="form__label">Nombre</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form__input"/>
                    </div>
                </div>  
                <button type="submit" className="btn btn--primary btn--large">EDITAR</button>                            
            </form>            
        </div>
    )
}