import './Header.css';

export const Header = () => {

    return (
        <header className="page-header">
            <nav className="navbar container">
                <picture className="navbar__logo">
                    <a href="">                    
                        <img src="./img/branding/logo_light_horizontal.svg" alt="FunkoShop Logotipo"/>
                    </a>
                </picture>
                <ul className="navbar__menu">
                    <li className="navbar__item with-submenu">
                        <a className="navbar__link with-icon" href="">SHOP<iconify-icon icon="ion:chevron-down"></iconify-icon></a>
                        <ul className="submenu">
                            <li className="submenu__item">
                                <a className="submenu__link" href="">Funkos</a>
                            </li>
                            <li className="submenu__item">
                                <a className="submenu__link" href="">Remeras</a>
                            </li>
                            <li className="submenu__item">
                                <a className="submenu__link" href="">LLaveros</a>
                            </li>
                        </ul>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="./pages/contact.html">CONTACTO</a>                    
                    </li>                    
                    <li className="navbar__item">
                        <a className="navbar__link" href="/login">LOGIN</a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="/register">REGISTER</a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__cart" href="./pages/cart.html"><img src="./img/icons/cart-icon.svg" alt="icono de carrito de compras"/></a>                    
                    </li>
                </ul>
            </nav>
        </header>
    )
}