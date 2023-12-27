import { Collection } from './Collection.jsx';
import { Slider } from './Slider.jsx';

export const MainHome = ({products, licences}) => {
    return (
        <main className="main-container">
            {licences.map((licence, index) =>(
                <Collection 
                    licence={licence} 
                    key={licence.id}
                    nameClass={index % 2 === 0 ? 'collection__cover__par' : 'collection__cover'}
                >
                </Collection>      
            ))}
            <Slider products={products}></Slider>
        </main>
    )
}