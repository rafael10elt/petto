import React from 'react';
import { Link as button } from 'react-router-dom';
import './styles.css';
import Img_Main from '../../assets/cat_dog.png';
import Img_Logo from '../../assets/cat_dog_logo.png';

export default function Home() {
    return (
        <div className="home-container">
            <header>
                <img src={Img_Logo} alt="logo" />
                <h1>Petto adoção de animais</h1>
            </header>
            <div className="content">
                <img src={Img_Main} alt="main" />
                <section>
                    <button to="/Pets" >
                        Quero adotar
                    </button>
                    <button to="/abrigo/registrar" >
                        Registar abrigo
                    </button>
                </section>
            </div>

        </div>
    );
}