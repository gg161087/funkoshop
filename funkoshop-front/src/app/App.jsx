import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from '../pages/home.jsx';
import { Shop } from '../pages/Shop.jsx';
import { Login } from '../pages/Login.jsx';
import { Register } from '../pages/Register.jsx';

import './App.css';

export const App = () => {    

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/shop' element={<Shop/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                </Routes>                       
            </BrowserRouter>
        </>
    )
}