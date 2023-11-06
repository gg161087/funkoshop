import { Card } from './Card.jsx';

import './Slider.css';

export const Slider = ({products}) => {    
    return (
        <section className="container slider">
            <h2 className="slider__title">ÚLTIMOS LANZAMIENTOS</h2>
            <div className="slider__cards">
                {products.map((product) => ( 
                    <Card product={product} key={product.product_id}></Card>                                         
                ))}                
            </div>
            <div className="slider__arrows">                
                <button className="arrows__left">{'<'}</button>
                <button className="arrows__right">{'>'}</button>               
            </div>            
        </section>
    )
}