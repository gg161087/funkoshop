import { useContext } from 'react';

import { Hero } from '../components/Hero.jsx';
import { Collection } from './../components/Collection.jsx';
import { Slider } from './../components/Slider.jsx'
import { DataContext } from './../contexts/DataContexts.jsx';

import { news } from './../utils/news.js'

export const Home = () => {

    const { licences, products } = useContext(DataContext);

    const latestReleases = products.filter(product => news(product.createdAt));

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
                <Slider products={latestReleases}></Slider>
            </main>      
        </>
    )
}