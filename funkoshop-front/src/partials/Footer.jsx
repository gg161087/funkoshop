import { Link } from 'react-router-dom';

import './Footer.css';

export const Footer = () => { 
    return (
        <footer className="footer">
            <nav className="navbar container">
                <ul className="navbar__item">
                    <li className="navbar__item">
                        <Link className="navbar__link" href="./pages/shop.html">SHOP</Link>
                    </li>                    
                    <li className="navbar__item">
                        <Link className="navbar__link" href="/login">LOGIN</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" href="/register">REGISTER</Link>
                    </li>                    
                    <li className="navbar__item">
                        <Link className="navbar__link" href="./pages/contact.html">CONTACTO</Link>
                    </li>
                </ul>
                <picture>
                    <img src="./img/branding/isotype.svg" alt="Isotipo de la marca FunkoShop"/>    
                </picture>
            </nav>
            <p className="footer__copy">All rights reserved 2023 - FunkoShop of Gonzalo Gonzalez &copy;</p>      
        </footer>
    )
}