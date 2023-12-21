import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const mySwal = withReactContent(Swal);

import { postDynamic } from './../utils/httpClient.js';

const apiUrl = 'http://localhost:3000/api';

import './Login.css';

export const Login = () => {
    const navigate = useNavigate()
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
            const response = await postDynamic(`${apiUrl}/auth/login`, {
                email: formData.email,
                password: formData.password
            });  
            console.log(response);          
            if (response.success) {                
                const authToken = response.token;
                localStorage.setItem('token', authToken);
                console.log('navigate aca');
                return navigate('/');
            } else {
                console.error('Error de inicio de sesión');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };
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