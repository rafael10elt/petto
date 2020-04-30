import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import '../../global.css'
import Img_Main from '../../assets/cat_dog.png';
import Img_Logo from '../../assets/cat_dog_logo.png';

export default function Home() {
    return (
        <body>
            <div class="home-container-home">
                <header>
                    <img src={Img_Logo} />
                    <h1>Petto - Adote seu melhor amigo</h1>
                </header>
                <div class="content-home">
                    <img src={Img_Main} />
                    <div class="buttons">
                        <Link to="/pets">
                            <button id="button1">Quero adotar</button>
                        </Link>
                        <Link to="/abrigo/registrar">
                            <button id="button2">Cadastrar abrigo</button>
                        </Link>
                    </div>
                </div>
            </div>
        </body>
    );
}