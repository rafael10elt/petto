import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import '../../global.css'
import { FiLogIn, FiUserPlus, FiHeart } from 'react-icons/fi'
import Img_Main from '../../assets/cat_dog.png';
import Img_Logo from '../../assets/cat_dog_logo.png';

export default function Home() {
    return (
        <body>
            <div class="home-container-home">
                <header>
                    <img src={Img_Logo} />
                    <h1>Petto - Adoção de cães e gatos</h1>
                </header>
                <div class="content-home">
                    <img src={Img_Main} />
                    <div class="buttons">
                        <Link to="/pets">
                            <button id="button1"><FiHeart size={20}></FiHeart>Quero adotar</button>
                        </Link>
                        <Link to="/login">
                            <button id="button2"><FiLogIn size={20}></FiLogIn> Login</button>
                        </Link>
                    </div>
                    <Link to="/abrigo/registrar" id="msg"><FiUserPlus size={20} color={"#00acee"}></FiUserPlus>Cadastrar Novo Abrigo</Link>
                </div>
            </div>
        </body>
    );
}