import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import '../../global.css';
import Img_Main from '../../assets/cat_dog.png';
import Img_Logo from '../../assets/cat_dog_logo.png';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <body>
            <div className="home-container-login">
                <header>
                    <img src={Img_Logo} />
                    <h1>Petto - Adoção de cães e gatos</h1>
                </header>
                <div className="content-login">
                    <h1>Login</h1>
                    <form>
                        <h1>Insira o Token do abrigo</h1>
                        <input type="password" />
                        <div className="buttons">
                            <button id="button3">Entrar</button>
                            <Link to="/">
                                <button id="button4">Voltar</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </body>
    );
}