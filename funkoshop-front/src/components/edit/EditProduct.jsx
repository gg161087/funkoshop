import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { updateDynamic } from '../../utils/httpClient.js';
import { DataContext } from './../../contexts/DataContexts.jsx';
import { Icon } from './../../components/Icon.jsx';

import './Edit.css';

export const EditProduct = () => { 
    const { id } = useParams();
    const { licences, products, categories } = useContext(DataContext);
    const product = products.find(product => product.id === parseInt(id));

    const navigate = useNavigate();    

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

    const setProperties = (props) => {       
        setName(props.name)        
        setDescription(props.description)
        setPrice(props.price)
        setStock(props.stock)
        setDiscount(props.discount)
        setSku(props.sku)
        setDues(props.dues)
        setImageFront(props.image_front)
        setImageBack(props.image_back)
        setLicenceId(props.licence_id)        
        setCategoryId(props.category_id)
    }

    const handleDuesChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setDues(value);
    };
    
    useEffect(() => {  
        if (product) {            
            setProperties(product);
        }       
    }, [product])

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
        const {result} = await updateDynamic('products', id, updateProduct)
    }
    if (!product) {
        return (
            <div className="container">
                <Icon css='icon' icon={faSpinner} />
            </div>
        )
    }
    
    return (
        <div id="edit">
            <h2 className='edit__title'>Editar Producto</h2>
            <form onSubmit={updateProduct} className='edit__form'>
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
                        <label className="form__label">Precio</label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="form__input"/>
                    </div>
                </div>
                <div className="form__flex">
                    <div className="form__box--flex">
                        <label className="form__label">Stock</label>
                        <input
                            type="number"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            className="form__input"/>
                    </div>
                </div>
                <div className="form__flex">
                    <div className="form__box--flex">
                        <label className="form__label">Descuento</label>
                        <input
                            type="number"
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
                            className="form__input"/>
                    </div>
                </div>
                <div className="form__flex">
                    <div className="form__box--flex">
                        <label className="form__label">Codigo</label>
                        <input
                            type="text"
                            value={sku}
                            onChange={(e) => setSku(e.target.value)}
                            className="form__input"/>
                    </div>
                </div>
                <div className="form__flex">
                    <div className="form__box--flex">
                        <label className="form__label" htmlFor='dues'>Cuotas</label>
                        <select 
                            className="form__select" 
                            name="dues" 
                            id="dues" 
                            value={dues}
                            onChange={(e) => handleDuesChange(e)}
                        >
                            <option value="0">Sin cuotas</option>
                            <option value="3">3 cuotas s/ interés</option>
                            <option value="6">6 cuotas s/ interés</option>
                            <option value="9">9 cuotas s/ interés</option>
                            <option value="12">12 cuotas s/ interés</option>
                            <option value="18">18 cuotas s/ interés</option>
                            <option value="24">24 cuotas s/ interés</option>
                        </select>
                    </div>
                </div>
                <div className="form__flex">
                    <div className="form__box--flex">
                        <label className="form__label">Img URL Front</label>
                        <input
                            type="text"
                            value={imageFront}
                            onChange={(e) => setImageFront(e.target.value)}
                            className="form__input"/>
                    </div>
                </div>
                <div className="form__flex">
                    <div className="form__box--flex">
                        <label className="form__label">Img URL Back</label>
                        <input
                            type="text"
                            value={imageBack}
                            onChange={(e) => setImageBack(e.target.value)}
                            className="form__input"/>
                    </div>
                </div>
                <div className="form__flex">
                    <div className="form__box--flex">
                        <label className="form__label">Licencia ID</label>
                        <select 
                            className="form__select" 
                            name="collection" 
                            id="collection" 
                            required 
                            value={licenceId}
                            onChange={(e) => setLicenceId(e.target.value)}
                        >
                            {licences.map((licence) => (
                                <option key={licence.id} value={licence.id}>{licence.name}</option>
                            ))}
                        </select>                        
                    </div>
                </div>
                <div className="form__flex">
                    <div className="form__box--flex">
                        <label className="form__label">Categoria ID</label>
                        <select 
                            className="form__select" 
                            name="category" 
                            id="category" 
                            required 
                            value={categoryId}
                            onChange={(e) => setCategoryId(e.target.value)}
                        >
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>{category.name.toUpperCase()}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div>
                    <button type="submit" className="btn btn--primary btn--large">EDITAR</button>
                </div>
            </form>
        </div>
    )
}