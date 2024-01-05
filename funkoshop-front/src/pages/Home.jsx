import { useContext } from 'react';

import { Hero } from '../components/Hero.jsx';
import { Collection } from './../components/Collection.jsx';
import { Slider } from './../components/Slider.jsx'
import { DataContext } from './../contexts/DataContexts.jsx';

export const Home = () => {

    const { licences, products } = useContext(DataContext);

    return (
        <>         
            <Hero></Hero>
            <main className="main-container">
                <div className="container">
                    {licences.map((licence, index) =>(
                        <Collection 
                            licence={licence} 
                            key={licence.id}
                            nameClass={index % 2 === 0 ? 'collection__cover__par' : 'collection__cover'}
                        >
                        </Collection>      
                    ))}
                </div>
                <Slider products={products}></Slider>
            </main>      
        </>
    )
}