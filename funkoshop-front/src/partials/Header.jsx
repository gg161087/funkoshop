import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { Icon } from './../components/Icon.jsx'
import { DataContext } from './../contexts/DataContexts.jsx';

import './Header.css';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { categories, isLoggedIn } = useContext(DataContext);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

    return (
        <header className="page-header">
            <div className="container">
                <nav className="navbar">
                    
                    <picture className="navbar__logo">
                        <Link to="/">                    
                            <img src="/img/branding/logo_light_horizontal.svg" alt="FunkoShop Logotipo"/>
                        </Link>
                    </picture>
                    <div className="navbar-toggle" id="navbarToggle">
                        <Icon css='icon' icon={faBars}/>                           
                    </div>
                    <ul className={isOpen ? 'navbar__menu active' : 'navbar__menu'}>
                        <li className="navbar__item with-submenu">
                            <Link className="navbar__link with-icon">SHOP<Icon css='icon' icon={faChevronDown}/></Link>
                            <ul className="submenu">
                                {categories.map((category) =>(
                                    <li className="submenu__item" key={category.id}>
                                        <Link className="submenu__link" to={`/shop/${category.name}`}>{category.name}</Link>
                                    </li>
                                ))}                           
                            </ul>
                        </li>
                        <li className="navbar__item">
                            <Link className="navbar__link" to="/contact">CONTACTO</Link>                    
                        </li>  
                        {!isLoggedIn ? 
                            <>
                                <li className="navbar__item">
                                    <Link className="navbar__link" to="/login">LOGIN</Link>
                                </li>
                                <li className="navbar__item">
                                    <Link className="navbar__link" to="/register">REGISTER</Link>
                                </li>                            
                            </>
                        :
                            <>
                                <li className="navbar__item">
                                    <Link className="navbar__link" to="/dashboard">DASHBOARD</Link>
                                </li>
                            </>  
                        }                  
                        <li className="navbar__item">
                            <Link className="navbar__cart" to="/cart"><img src="/img/icons/cart-icon.svg" alt="icono de carrito de compras"/></Link>                    
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}