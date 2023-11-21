import './Collection.css'

export const Collection = ({licence}) => {    
    return (
        <section className="collection container">
            <article className="collection__content">
                <h3 className="collection__title">{licence.licence_name}</h3>
                <p className="collection__text">{licence.licence_description}</p>
                <a className="collection__link" href="./pages/shop.html">VER COLECCIÓN</a>                              
            </article>
            <picture className="collection__cover">
                <img src={`./img/${licence.licence_image}`} alt={`Figura de ${licence.licence_name}`}/>
            </picture>
        </section>  
    )
}