import { Link } from 'react-router-dom';

import './Hero.css'

export const Hero = () => {
    return (
        <section className="hero">
            <article className="hero__content container">
                <h3 className="hero__title">Nuevos Ingresos</h3>
                <p className="hero__text">Descubri el próximo Funko Pop de tu colección</p>                    
                <Link className="hero__link" to="/shop">SHOP</Link>   
            </article>           
        </section>
    )
}