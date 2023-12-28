import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProvider } from './contexts/DataContexts.jsx';

import { Header } from './partials/Header.jsx';
import { Footer } from './partials/Footer.jsx';

import { Admin } from './pages/Admin.jsx';
import { Contact } from './pages/Contact.jsx';
import { Dashboard } from './pages/Dashboard.jsx';
import { Detail } from './pages/Detail.jsx';
import { Edit } from './pages/Edit.jsx'
import { Home } from './pages/Home.jsx';
import { Login } from './pages/Login.jsx';
import { Register } from './pages/Register.jsx';
import { Shop } from './pages/Shop.jsx';

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
                    <Route path='/dashboard/admin' element={<Admin/>}/>
                    <Route path='/edit/:table/:id' element={<Edit/>}/>
                </Routes>
                <Footer />
            </DataProvider>
        </BrowserRouter>
    )
}