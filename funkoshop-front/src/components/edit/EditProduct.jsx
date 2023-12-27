import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getDinamic } from '../../utils/getDinamic.js';
import { updateDinamic } from '../../utils/updateDinamic.js';

export const EditProduct = ({id}) => {
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [name, setName] = useState('');    
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [sku, setSku] = useState('');
    const [dues, setDues] = useState(0);
    const [imageFront, setImageFront] = useState('');
    const [imageBack, setImageBack] = useState('');
    const [licenceId, setLicenceId] = useState(0);
    const [categoryId, setCategoryId] = useState(0);

    const getProductById = async () => {
        const response = await getDinamic(`products/${id}`)
        setProduct(response)
        setName(response.name)        
        setDescription(response.description)
        setPrice(response.price)
        setStock(response.stock)
        setDiscount(response.discount)
        setSku(response.sku)
        setDues(response.dues)
        setImageFront(response.image_front)
        setImageBack(response.image_back)
        setCategoryId(response.licence_id)        
        setCategoryId(response.category_id)        
    }

    useEffect(() => {
        getProductById()
    }, [id])

    const updateProduct = async (e) => {
        e.preventDefault()
        const updateProduct = {
            name: name,            
            description: description,
            price: price,
            stock: stock,
            discount: discount,
            sku: sku,
            dues: dues,
            image_front: imageFront,
            image_back: imageBack,
            licence_id: licenceId,
            category_id: categoryId
        }        
        const {result} = await updateDinamic('products', id, updateProduct)
    }

    if (!product) {
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
            <h1>Editar Producto </h1>
            <form onSubmit={updateProduct}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"/>
                </div>                
                <div className="mb-3">
                    <label className="form-label">Descripcción</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Precio</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Stock</label>
                    <input
                        type="number"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Descuento</label>
                    <input
                        type="number"
                        value={discount}
                        onChange={(e) => setDiscount(e.target.value)}
                        className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Codigo</label>
                    <input
                        type="text"
                        value={sku}
                        onChange={(e) => setSku(e.target.value)}
                        className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Cuotas</label>
                    <input
                        type="number"
                        value={dues}
                        onChange={(e) => setDues(e.target.value)}
                        className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Img URL Front</label>
                    <input
                        type="text"
                        value={imageFront}
                        onChange={(e) => setImageFront(e.target.value)}
                        className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Img URL Back</label>
                    <input
                        type="text"
                        value={imageBack}
                        onChange={(e) => setImageBack(e.target.value)}
                        className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Licencia ID</label>
                    <input
                        type="number"
                        value={licenceIdId}
                        onChange={(e) => setLicenceId(e.target.value)}
                        className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Categoria ID</label>
                    <input
                        type="number"
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                        className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">EDITAR</button>
            </form>
        </div>
    )
}