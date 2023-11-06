import { Collection } from './Collection.jsx';
import { Slider } from './Slider.jsx';

import products from '../database/products.json';

export const Main = () => {
    return (
        <main className="main-container">
            <Collection></Collection>       
            <Slider products={products}></Slider>
        </main>
    )
}