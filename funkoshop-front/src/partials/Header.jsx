import { Link } from 'react-router-dom';

import './Header.css';

export const Header = () => {

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
                        <a className="navbar__link with-icon" href="">SHOP<iconify-icon icon="ion:chevron-down"></iconify-icon></a>
                        <ul className="submenu">
                            <li className="submenu__item">
                                <Link className="submenu__link" to="/shop">Funkos</Link>
                            </li>
                            <li className="submenu__item">
                                <Link className="submenu__link" to="/shop">Remeras</Link>
                            </li>
                            <li className="submenu__item">
                                <Link className="submenu__link" to="/shop">LLaveros</Link>
                            </li>
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