import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getDinamic } from '../../utils/getDinamic.js';
import { updateDinamic } from '../../utils/updateDinamic.js';

export const EditUser = ({id}) => {
    const navigate = useNavigate();

    const [user, setUser] = useState('');

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [telephone, setTelephone] = useState(0);
    const [email, setEmail] = useState('');
    const [passwowrd, setPassword] = useState('');

    const getUserById = async () => {
        const response = await getDinamic(`users/${id}`)
        setUser(response)
        setName(response.name) 
        setLastName(response.last_name) 
        setTelephone(response.telephone)
        setEmail(response.email)
        setPassword(response.password)  
    }

    useEffect(() => {
        getUserById()
    }, [id])

    const updateUser = async (e) => {
        console.log(user);
        e.preventDefault()
        const updateUser = {
            name:name,
        }        
        const result = await updateDinamic('users', id, updateUser)
    }

    if (!user) {
        return (
            <div className="container">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <div className='container'>
            <h1>Editar Usuario </h1>
            <form onSubmit={updateUser}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"/>
                </div> 
                <div className="mb-3">
                    <label className="form-label">Apellido</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Telefono</label>
                    <input
                        type="number"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                        className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                        type="password"
                        value={passwowrd}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"/>
                </div>               
                <button type="submit" className="btn btn-primary">EDITAR</button>
            </form>
        </div>
    )
}