import { Header } from '../partials/Header.jsx';
import { Hero } from '../components/Hero.jsx';
import { Main } from '../components/Main.jsx';
import { Footer } from '../partials/Footer.jsx';


import './Home.css';

export const Home = () => {
    
    return (
        <>
            <Header></Header>
            <Hero></Hero>
            <Main></Main>
            <Footer></Footer>
        </>
    )
}