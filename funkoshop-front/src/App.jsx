import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProvider } from './contexts/DataContexts.jsx';

import { Header } from './partials/Header.jsx';
import { Footer } from './partials/Footer.jsx';

import { Home } from './pages/Home.jsx';
import { Shop } from './pages/Shop.jsx';
import { Detail } from './pages/Detail.jsx';
import { Login } from './pages/Login.jsx';
import { Register } from './pages/Register.jsx';
import { Contact } from './pages/Contact.jsx';
import { Dashboard } from './pages/Dashboard.jsx';

export const App = () => {
    return (
        <BrowserRouter>
            <DataProvider>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/shop' element={<Shop/>}/>
                    <Route path='/shop/:id' element={<Detail/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                </Routes>
                <Footer />
            </DataProvider>
        </BrowserRouter>
    )
}