import { Header } from '../partials/Header.jsx';
import { Footer } from '../partials/Footer.jsx';

import './Message.css';

export const Message = () => {
    return (
        <>
            <Header></Header>
            <div className="container">
                <div className="message">Mensage</div>
            </div>
            <Footer></Footer>
        </>
    )
}