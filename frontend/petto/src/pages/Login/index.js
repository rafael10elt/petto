import React, { useState } from 'react';
import './styles.css';
import '../../global.css';
import Img_Logo from '../../assets/cat_dog_logo.png';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function Login() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await api.post('session', { id });

            localStorage.setItem('abrigoId', id);
            localStorage.setItem('abrigoNome', response.data.abrigo_nome);

            history.push('/abrigo/perfil');
        } catch (err) {
            alert('Flha no Login, tente novamente.')
        }
    }
    return (

        <div className="home-container-login">
            <header>
                <img src={Img_Logo} alt="logo" />
                <h1>Petto - Adoção de cães e gatos</h1>
            </header>
            <div className="content-login">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <h1>Insira o Token do abrigo</h1>
                    <input
                        type="password"
                        placeholder="Digite seu Token aqui."
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <div className="buttons">
                        <button id="button3" type="submit">Entrar</button>
                        <Link to="/">
                            <button id="button4">Voltar</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>

    );
}