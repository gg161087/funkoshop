import { Hero } from '../components/Hero.jsx';
import { MainHome } from '../components/MainHome.jsx';

export const Home = ({licences, products}) => {
    return (
        <>         
            <Hero></Hero>            
            <MainHome licences={licences} products={products}></MainHome>
        </>
    )
}