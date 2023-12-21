import { Link } from 'react-router-dom';

import './Header.css';

export const Header = ({
    productsCart,
    setProductsCart,
    countProductsCart,
    setCountProductsCart,
    total,
    setTotal,
    categories
}) => {

    return (
        <header className="page-header">
            <nav className="navbar container">
                <picture className="navbar__logo">
                    <Link to="/">                    
                        <img src="./img/branding/logo_light_horizontal.svg" alt="FunkoShop Logotipo"/>
                    </Link>
                </picture>
                <ul className="navbar__menu">
                    <li className="navbar__item with-submenu">
                        <Link className="navbar__link with-icon">SHOP<iconify-icon icon="ion:chevron-down"></iconify-icon></Link>
                        <ul className="submenu">
                            {categories.map((category) =>(
                                <li className="submenu__item">
                                    <Link className="submenu__link" to={`/shop/${category.category_name}`}>{category.category_name}</Link>
                                </li>
                            ))}                           
                        </ul>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/contact">CONTACTO</Link>                    
                    </li>                    
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/login">LOGIN</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/register">REGISTER</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__cart" to="/cart"><img src="./img/icons/cart-icon.svg" alt="icono de carrito de compras"/></Link>                    
                    </li>
                </ul>
            </nav>
        </header>
    )
}