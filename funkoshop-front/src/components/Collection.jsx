import { Link } from 'react-router-dom';

import './Collection.css'

export const Collection = ({licence, nameClass}) => {       
    return (
        <section className="collection container">
            <article className="collection__content">
                <h3 className="collection__title">{licence.licence_name}</h3>
                <p className="collection__text">{licence.licence_description}</p>
                <Link className="collection__link" to='/shop' >VER COLECCIÓN</Link>                              
            </article>
            <picture className={nameClass}>
                <img src={`./img/${licence.licence_image}`} alt={`Figura de ${licence.licence_name}`}/>
            </picture>
        </section>  
    )
}