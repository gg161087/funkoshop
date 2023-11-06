import  { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { Header } from '../partials/Header.jsx';
import { Footer } from '../partials/Footer.jsx';

const apiUrl = 'http://localhost:3000/api';

import './Login.css';

export const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();      
        try {
            const response = await fetch(`${apiUrl}/auth/login`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });            
            if (response.ok) {                
                const data = await response.json();                
                const authToken = data.token;
                localStorage.setItem('token', authToken);  
                console.log('navigate aca');              
                return <Navigate to={'/home'} />;
            } else {                
                console.error('Error de inicio de sesión');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };
    return (
        <>
            <Header></Header>
            <main id="login" className="container">
                <h2 className="login__title">INGRESAR A MI CUENTA</h2>
                <form className="login__form form" action="" method="post" onSubmit={handleSubmit}>
                    <div className="form__box--grid">
                        <label className="form__label" htmlFor="email">Email:</label>
                        <input className="form__input" type="text" name="email" id="email" placeholder="johndoe@email.com" onChange={handleChange}/>
                    </div>
                    <div className="form__box--grid">
                        <label className="form__label" htmlFor="password">Contraseña:</label>
                        <input className="form__input" type="password" name="password" id="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"onChange={handleChange}/>
                    </div>
                    <div className="form__submission">
                        <input className="form__btn btn btn--primary btn--large" type="submit" value="Ingresar"/>
                        <div className="form__remember">
                            <input type="checkbox" name="remember" id=""/>
                            <label htmlFor="">Recordarme</label>
                        </div>
                    </div>
                    <a className="form__link" href="">Olvidé mi contraseña</a>
                </form>
            </main>                         
            <Footer></Footer>
        </>
    )
}