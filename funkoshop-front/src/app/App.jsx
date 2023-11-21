import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from '../pages/Home.jsx';
import { Shop } from '../pages/Shop.jsx';
import { Detail } from './../pages/Detail.jsx';
import { Login } from '../pages/Login.jsx';
import { Register } from '../pages/Register.jsx';
import { Contact } from './../pages/Contact.jsx';

export const App = () => {    

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/shop' element={<Shop/>}/>
                    <Route path='/shop/:id' element={<Detail/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>                       
            </BrowserRouter>
        </>
    )
}