import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from '../pages/home.jsx';

import './App.css';

export const App = () => {    

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>                            
                </Routes>                       
            </BrowserRouter>
        </>
    )
}