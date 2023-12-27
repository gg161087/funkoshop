import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getDinamic } from '../../utils/getDinamic.js';
import { updateDinamic } from '../../utils/updateDinamic.js';

export const EditCategory = ({id}) => {
    const navigate = useNavigate();

    const [category, setCategory] = useState('');

    const [name, setName] = useState('');

    const getCategoryById = async () => {
        const response = await getDinamic(`categories/${id}`)
        setCategory(response)
        setName(response.name)    
    }

    useEffect(() => {
        getCategoryById()
    }, [id])

    const updateCategory = async (e) => {
        e.preventDefault()        
        const result = await updateDinamic('categories', id, {name:name})
    }

    if (!category) {
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
            <h1>Editar Categoria </h1>
            <form onSubmit={updateCategory}>
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