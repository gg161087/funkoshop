import { Link } from 'react-router-dom';

import './MainShop.css'

export const MainShop = ({products}) => {
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
                    {products.map((product) => (
                        <li className="shop__item" key={product.id}>
                            <article className="card-item">
                                <Link className="card-item__link" href={`/shop/${product.id}`}>
                                    <picture className="card-item__cover">
                                        <span className="card-item__tag">Nuevo</span>
                                        <img className="card-item__img--front" src={`../../img/${product.image_front}`} alt={`Figura coleccionable Funko de un ${product.name}`} />
                                        <img className="card-item__img--back" src={`../../img/${product.image_front}`} alt={`Figura coleccionable Funko de un ${product.name} en caja`} />
                                    </picture>
                                    <div className="card-item__content">
                                        <p className="card-item__licence">{product.licence.name}</p>
                                        <h4 className="card-item__name">{product.name}</h4>
                                        <p className="card-item__price">{product.price}</p>
                                        <p className="card-item__promo">{product.dues} CUOTAS SIN INTERÉS</p>
                                    </div>
                                </Link>
                            </article>
                        </li>
                    ))}
                </ul>
                <div className="pagination">
                    <Link className="pagination__link" href="#" >{'<'}</Link>
                    <Link className="pagination__link pagination__link--selected" href="#" >1</Link>
                    <Link className="pagination__link" href="#" >2</Link>
                    <Link className="pagination__link" href="#" >3</Link>
                    <Link className="pagination__link" href="#" >4</Link>
                    <Link className="pagination__link" href="#" >5</Link>
                    <Link className="pagination__link" href="#" >{'>'}</Link>
                </div>
            </section>
        </main>
    )
}
