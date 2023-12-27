import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const mySwal = withReactContent(Swal);

import { DataContext } from './../contexts/DataContexts.jsx';

import './Login.css';

export const Login = () => {
    const { handleLogin, isLoggedIn } = useContext(DataContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await handleLogin(formData);          
        } catch (error) {
            console.log(`Error en handleLogin ${error}`);
        }                      
    };
    useEffect(()=>{
        if (isLoggedIn) {
            navigate('/dashboard')  
        }
    })
    return (
        <main id="login" className="container">
            <div className="login__header">
                <h2 className="login__title">INGRESAR A MI CUENTA</h2>
                <p className="login__subtitle">Para obtener novedades</p>
            </div>
            <form className="login__form" action="" method="post" onSubmit={handleSubmit}>
                <div className="form__box--grid">
                    <label className="form__label" htmlFor="email">Email:</label>
                    <input className="form__input" type="text" name="email" id="email" placeholder="johndoe@email.com" onChange={handleChange} />
                </div>
                <div className="form__box--grid">
                    <label className="form__label" htmlFor="password">Contraseña:</label>
                    <input className="form__input" type="password" name="password" id="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" onChange={handleChange} />
                </div>
                <div className="form__submission">
                    <input className="form__btn btn btn--primary btn--large" type="submit" value="Ingresar" />
                    <div className="form__remember">
                        <input type="checkbox" name="remember" id="" />
                        <label htmlFor="">Recordarme</label>
                    </div>
                </div>
                <a className="form__link" href="">Olvidé mi contraseña</a>
            </form>
        </main>
    )
}