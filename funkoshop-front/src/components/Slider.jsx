import { useState } from 'react';

import { Card } from './Card.jsx';

import './Slider.css';

export const Slider = ({ products }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    const nextSlide = () => {
        const lastIndex = products.length - 1;
        const shouldResetIndex = currentIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    };

    const prevSlide = () => {
        const lastIndex = products.length - 1;
        const shouldResetIndex = currentIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentIndex - 1;
        setCurrentIndex(index);
    };

    return (
        <section className="container">
            <div className="slider">
                <h2 className="slider__title">ÚLTIMOS LANZAMIENTOS</h2>
                <div className="slider__cards">
                    {products.slice(currentIndex, currentIndex + itemsPerPage).map((product) => (
                        <Card product={product} key={product.id}></Card>
                    ))}
                </div>
                <div className="slider__arrows">
                    <button className="pagination__link arrows__left" onClick={prevSlide}>{'<'}</button>
                    <button className="pagination__link arrows__right" onClick={nextSlide}>{'>'}</button>
                </div>
            </div>
        </section>
    )
}