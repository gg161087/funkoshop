import { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { faSpinner, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { DataContext } from './../contexts/DataContexts.jsx';
import { Card } from '././../components/Card.jsx';
import { Icon } from './../components/Icon.jsx';

import './Shop.css';

export const Shop = () => {
    const { category, licence_id } = useParams();   
    const { products } = useContext(DataContext); 
    const [ showProducts, setShowProducts] = useState([])
    
    const setProducts = () => {
        if (category) {
            const productsByCategory = products.filter(
                product => licence_id ? product.category.name === category & product.licence_id === parseInt(licence_id) :
                product.category.name === category
            );
            setShowProducts(productsByCategory)
        } else {
            setShowProducts(products)
        }
    }
    
    useEffect(() => {
       setProducts()   
    },[category])    
    if (!showProducts) {
        return (
            <div className="container">
                <Icon css='icon' icon={faSpinner} />
            </div>
        )
    }    
    console.log(showProducts);
    return (
        <main id="shop" className="container">
            <aside className="shop__filters filters">
                <div className="filters__search">
                    <label className="filters__title" htmlFor="search">BUSCAR</label>
                    <input type="text" name="search" id="search" placeholder="item o categoría" />
                </div>
                <div className="filters__order">
                    <label className="filters__title" htmlFor="orderby">ORDERNAR POR</label>
                    <select name="orderby" id="orderby">
                        <option value="az">A-Z</option>
                        <option value="za">Z-A</option>
                        <option value="desc">Mayor precio</option>
                        <option value="asc">Menor precio</option>
                    </select>
                </div>
                <div className="filters__price">
                    <span className="filters__title" >PRECIO</span>
                    <div>
                        <label htmlFor="min">MIN</label>
                        <input type="text" name="min" id="min" placeholder="0" />
                        <label htmlFor="max">- MAX</label>
                        <input type="text" name="max" id="max" placeholder="0" />
                    </div>
                </div>
                <div className="filters__checks">
                    <span className="filters__title" htmlFor="filter">FILTRAR</span>
                    <div>
                        <input type="checkbox" name="filter" id="news" value="news" />
                        <label htmlFor="">NUEVOS</label>
                    </div>
                    <div>
                        <input type="checkbox" name="filter" id="offers" value="offers" />
                        <label htmlFor="">OFERTAS</label>
                    </div>
                    <div>
                        <input type="checkbox" name="filter" id="specials" value="specials" />
                        <label htmlFor="">EDICIÓN ESPECIAL</label>
                    </div>
                    <div>
                        <input type="checkbox" name="filter" id="favs" value="favs" />
                        <label htmlFor="">FAVORITOS</label>
                    </div>
                </div>
            </aside>
            <section className="shop__content">
                <ul className="shop__items">
                    {showProducts.map((product) => (
                        <li key={product.id}>
                            <Card product={product}></Card>
                        </li>
                    ))}
                </ul>
                <div className="pagination">
                    <Link className="pagination__link" href="#" ><Icon css='icon' icon={faChevronLeft}/></Link>
                    <Link className="pagination__link pagination__link--selected" href="#" >1</Link>
                    <Link className="pagination__link" href="#" >2</Link>
                    <Link className="pagination__link" href="#" >3</Link>
                    <Link className="pagination__link" href="#" >4</Link>
                    <Link className="pagination__link" href="#" >5</Link>
                    <Link className="pagination__link" href="#" ><Icon css='icon' icon={faChevronRight}/></Link>
                </div>
            </section>
        </main>
    )
}