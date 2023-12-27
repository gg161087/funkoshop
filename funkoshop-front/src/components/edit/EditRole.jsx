import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getDinamic } from '../../utils/getDinamic.js';
import { updateDinamic } from '../../utils/updateDinamic.js';

export const EditRole = ({id}) => {
    const navigate = useNavigate();

    const [role, setRole] = useState('');

    const [name, setName] = useState('');

    const getRoleById = async () => {
        const response = await getDinamic(`roles/${id}`)
        setRole(response)
        setName(response.name)    
    }

    useEffect(() => {
        getRoleById()
    }, [id])

    const updateRole = async (e) => {
        e.preventDefault()        
        const result = await updateDinamic('roles', id, {name:name})
    }

    if (!role) {
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
            <h1>Editar Rol </h1>
            <form onSubmit={updateRole}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"/>
                </div>                
                <button type="submit" className="btn btn-primary">EDITAR</button>
            </form>
        </div>
    )
}