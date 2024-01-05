import { useState } from 'react';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { Card } from './Card.jsx';
import { Icon } from './Icon.jsx';

import './Slider.css';

export const Slider = ({ products }) => { 
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;
    const numPages = Math.ceil(products.length / itemsPerPage);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + itemsPerPage) % products.length);    
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - itemsPerPage + products.length) % products.length);
    };

    return (
        <section className="container">
            <div className="slider">
                <h2 className="slider__title">ÚLTIMOS LANZAMIENTOS</h2>
                <div className="slider__cards">
                    {(currentIndex + itemsPerPage <= products.length ? products.slice(currentIndex, currentIndex + itemsPerPage) : products.slice(currentIndex)).map((product) => (
                        <Card product={product} key={product.id}></Card>
                    ))}
                </div>
                <div className="slider__arrows">
                    <button className="pagination__link arrows__left" onClick={prevSlide}><Icon css='icon' icon={faChevronLeft}/></button>
                    <button className="pagination__link arrows__right" onClick={nextSlide}><Icon css='icon' icon={faChevronRight}/></button>
                </div>
            </div>
        </section>
    )
}