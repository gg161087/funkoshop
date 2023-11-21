import { Collection } from './Collection.jsx';
import { Slider } from './Slider.jsx';

export const MainHome = ({products, licences}) => {
    return (
        <main className="main-container">
            {licences.map((licence) =>(
                <Collection licence={licence} key={licence.licence_id}></Collection>      
            ))}
            <Slider products={products}></Slider>
        </main>
    )
}