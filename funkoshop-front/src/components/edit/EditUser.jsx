import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { DataContext } from './../../contexts/DataContexts.jsx';
import { updateDynamic } from './../../utils/httpClient.js';
import { Icon } from './../../components/Icon.jsx';

import './Edit.css';

export const EditUser = () => {
    const { id } = useParams();
    const { users } = useContext(DataContext);
    const user = users.find(user => user.id === parseInt(id));

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [telephone, setTelephone] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const setProperties = (props) => {        
        setName(props.name) 
        setLastName(props.last_name) 
        setTelephone(props.telephone)
        setEmail(props.email)
        setPassword(props.password)  
    }

    useEffect(() => {
        if (user) {             
            setProperties(user);
        }
    }, [user])

    const updateUser = async (e) => { 
        e.preventDefault()
        const updateUser = {
            name:name,
            last_name: lastName,
            telephone: telephone,
            email: email,
            password: password
        }        
        const result = await updateDynamic('users', id, updateUser)
    }

    if (!user) {
        return (
            <div className="container">
                <Icon css='icon' icon={faSpinner} />
            </div>
        )
    }
    return (
        <div id="edit">
            <h2 className='edit__title'>Editar Usuario</h2>
            <form onSubmit={updateUser} className='edit__form'>
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
                        <label className="form__label">Apellido</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="form__input"/>
                    </div>
                </div>
                <div className="form__flex">
                    <div className="form__box--flex">
                        <label className="form__label">Telefono</label>
                        <input
                            type="number"
                            value={telephone}
                            onChange={(e) => setTelephone(e.target.value)}
                            className="form__input"/>                        
                    </div>
                </div>
                <div className="form__flex">
                    <div className="form__box--flex">
                        <label className="form__label">Email</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form__input"/>                        
                    </div>
                </div>
                <div className="form__flex">
                    <div className="form__box--flex">
                        <label className="form__label">Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form__input"/>                        
                    </div>
                </div>               
                <button type="submit" className="btn btn--primary btn--large">EDITAR</button>
            </form>
        </div>
    )
}