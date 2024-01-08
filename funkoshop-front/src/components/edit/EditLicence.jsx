import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { DataContext } from './../../contexts/DataContexts.jsx';
import { updateDynamic } from '../../utils/httpClient.js';
import { Icon } from './../Icon.jsx';

import './Edit.css';

export const EditLicence = () => {
    const { id } = useParams();
    const { licences } = useContext(DataContext);
    const licence = licences.find(licence => licence.id === parseInt(id));
    
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        if (licence) {
            setName(licence.name);
            setDescription(licence.description);
            setImage(licence.image)            
        }
    }, [licence])

    const updateLicence = async (e) => {
        e.preventDefault()        
        const result = await updateDynamic('categories', id, {name:name})
    }

    if (!licence) {
        return (
            <div className="container">
                <Icon css='icon' icon={faSpinner} />
            </div>
        )
    }
    return (
        <div id="edit">
            <h2 className='edit__title'>Editar Licencia</h2>
            <form onSubmit={updateLicence} className='edit__form'> 
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
                <div className="form__flex">
                    <div className="form__box--flex">
                        <label className="form__label">Descripcción</label>
                        <textarea                        
                            name="description" 
                            id="description"                            
                            cols="30" rows="6"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        >
                        </textarea>
                    </div>
                </div>
                <div className="form__flex">
                    <div className="form__box--flex">
                        <label className="form__label">Image URL</label>
                        <input
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            className="form__input"/>
                    </div>
                </div>  
                <div>
                    <button type="submit" className="btn btn--primary btn--large">EDITAR</button>
                </div>              
            </form>
        </div>
    )
}