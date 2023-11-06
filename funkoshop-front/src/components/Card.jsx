import './Card.css';

export const Card = ({product}) => {    
    return (
        <article className="card-item">
            <a className="card-item__link" href={`/shop/item/${product.product_id}`}>
                <picture className="card-item__cover">
                    <span className="card-item__tag">Nuevo</span>
                    <img className="card-item__img--front" src={`./img/${product.image_front}`} alt={`Figura coleccionable Funko de un ${product.product_name}`}/>
                    <img className="card-item__img--back" src={`./img/${product.image_back}`} alt={`Figura coleccionable Funko de un ${product.product_name} en caja`}/>
                </picture>
                <div className="card-item__content">
                    <p className="card-item__licence">{product.licence_name}</p>
                    <h4 className="card-item__name">{product.product_name}</h4>
                    <p className="card-item__price">${product.price}.-</p>
                    <p className="card-item__promo">{product.dues} CUOTAS SIN INTERÉS</p>
                </div>
            </a>
        </article>
    )
}