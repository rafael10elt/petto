import React from 'react';
import './styles.css';
import '../../global.css'
import Img_Main from '../../assets/cat_dog.png';
import Img_Logo from '../../assets/cat_dog_logo.png';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
export default function Pets() {
    return (
        <body>
            <div className="container-pets">
                <header>
                    <img src={Img_Logo} />
                    <h1>Petto - Adoção de cães e gatos</h1>
                </header>
                <div className="content-pets">
                    <Link to="/">
                        <button type="button" id="btnvoltar">
                            <FiArrowLeft size={20} color="#fffff" />Voltar
                        </button>
                    </Link>

                    <ul>
                        <li>
                            <div className="sort">
                                <div className="line">
                                    <strong>Nome:</strong>
                                    <p>Alvinho</p>
                                    <strong id="linha1">Idade:</strong>
                                    <p>3 a 5 anos</p>
                                </div>
                            </div>
                            <div className="sort">
                                <div className="line">
                                    <strong>Tipo:</strong>
                                    <p>Cachorro</p>
                                    <strong id="linha2">Sexo:</strong>
                                    <p>Masculino</p>
                                </div>
                            </div>
                            <div className="sort2">
                                <strong>Nome do abrigo:</strong>
                                <p>Nanda abrigo</p>
                            </div>
                            <div className="sort2">
                                <strong>Email:</strong>
                                <p>nandabrigo@abrigo.com</p>
                            </div>
                            <div className="sort2">
                                <strong>Whatsapp:</strong>
                                <p>81 947893</p>
                            </div>
                            <div className="sort">
                                <div className="line">
                                    <strong>Localidade:</strong>
                                    <p>Recife</p>
                                    <strong id="linha3">UF:</strong>
                                    <p>PE</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="sort">
                                <div className="line">
                                    <strong>Nome:</strong>
                                    <p>Alvinho</p>
                                    <strong id="linha1">Idade:</strong>
                                    <p>3 a 5 anos</p>
                                </div>
                            </div>
                            <div className="sort">
                                <div className="line">
                                    <strong>Tipo:</strong>
                                    <p>Cachorro</p>
                                    <strong id="linha2">Sexo:</strong>
                                    <p>Masculino</p>
                                </div>
                            </div>
                            <div className="sort2">
                                <strong>Nome do abrigo:</strong>
                                <p>Nanda abrigo</p>
                            </div>
                            <div className="sort2">
                                <strong>Email:</strong>
                                <p>nandabrigo@abrigo.com</p>
                            </div>
                            <div className="sort2">
                                <strong>Whatsapp:</strong>
                                <p>81 947893</p>
                            </div>
                            <div className="sort">
                                <div className="line">
                                    <strong>Localidade:</strong>
                                    <p>Recife</p>
                                    <strong id="linha3">UF:</strong>
                                    <p>PE</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="sort">
                                <div className="line">
                                    <strong>Nome:</strong>
                                    <p>Alvinho</p>
                                    <strong id="linha1">Idade:</strong>
                                    <p>3 a 5 anos</p>
                                </div>
                            </div>
                            <div className="sort">
                                <div className="line">
                                    <strong>Tipo:</strong>
                                    <p>Cachorro</p>
                                    <strong id="linha2">Sexo:</strong>
                                    <p>Masculino</p>
                                </div>
                            </div>
                            <div className="sort2">
                                <strong>Nome do abrigo:</strong>
                                <p>Nanda abrigo</p>
                            </div>
                            <div className="sort2">
                                <strong>Email:</strong>
                                <p>nandabrigo@abrigo.com</p>
                            </div>
                            <div className="sort2">
                                <strong>Whatsapp:</strong>
                                <p>81 947893</p>
                            </div>
                            <div className="sort">
                                <div className="line">
                                    <strong>Localidade:</strong>
                                    <p>Recife</p>
                                    <strong id="linha3">UF:</strong>
                                    <p>PE</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="sort">
                                <div className="line">
                                    <strong>Nome:</strong>
                                    <p>Alvinho</p>
                                    <strong id="linha1">Idade:</strong>
                                    <p>3 a 5 anos</p>
                                </div>
                            </div>
                            <div className="sort">
                                <div className="line">
                                    <strong>Tipo:</strong>
                                    <p>Cachorro</p>
                                    <strong id="linha2">Sexo:</strong>
                                    <p>Masculino</p>
                                </div>
                            </div>
                            <div className="sort2">
                                <strong>Nome do abrigo:</strong>
                                <p>Nanda abrigo</p>
                            </div>
                            <div className="sort2">
                                <strong>Email:</strong>
                                <p>nandabrigo@abrigo.com</p>
                            </div>
                            <div className="sort2">
                                <strong>Whatsapp:</strong>
                                <p>81 947893</p>
                            </div>
                            <div className="sort">
                                <div className="line">
                                    <strong>Localidade:</strong>
                                    <p>Recife</p>
                                    <strong id="linha3">UF:</strong>
                                    <p>PE</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="sort">
                                <div className="line">
                                    <strong>Nome:</strong>
                                    <p>Alvinho</p>
                                    <strong id="linha1">Idade:</strong>
                                    <p>3 a 5 anos</p>
                                </div>
                            </div>
                            <div className="sort">
                                <div className="line">
                                    <strong>Tipo:</strong>
                                    <p>Cachorro</p>
                                    <strong id="linha2">Sexo:</strong>
                                    <p>Masculino</p>
                                </div>
                            </div>
                            <div className="sort2">
                                <strong>Nome do abrigo:</strong>
                                <p>Nanda abrigo</p>
                            </div>
                            <div className="sort2">
                                <strong>Email:</strong>
                                <p>nandabrigo@abrigo.com</p>
                            </div>
                            <div className="sort2">
                                <strong>Whatsapp:</strong>
                                <p>81 947893</p>
                            </div>
                            <div className="sort">
                                <div className="line">
                                    <strong>Localidade:</strong>
                                    <p>Recife</p>
                                    <strong id="linha3">UF:</strong>
                                    <p>PE</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="sort">
                                <div className="line">
                                    <strong>Nome:</strong>
                                    <p>Alvinho</p>
                                    <strong id="linha1">Idade:</strong>
                                    <p>3 a 5 anos</p>
                                </div>
                            </div>
                            <div className="sort">
                                <div className="line">
                                    <strong>Tipo:</strong>
                                    <p>Cachorro</p>
                                    <strong id="linha2">Sexo:</strong>
                                    <p>Masculino</p>
                                </div>
                            </div>
                            <div className="sort2">
                                <strong>Nome do abrigo:</strong>
                                <p>Nanda abrigo</p>
                            </div>
                            <div className="sort2">
                                <strong>Email:</strong>
                                <p>nandabrigo@abrigo.com</p>
                            </div>
                            <div className="sort2">
                                <strong>Whatsapp:</strong>
                                <p>81 947893</p>
                            </div>
                            <div className="sort">
                                <div className="line">
                                    <strong>Localidade:</strong>
                                    <p>Recife</p>
                                    <strong id="linha3">UF:</strong>
                                    <p>PE</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="sort">
                                <div className="line">
                                    <strong>Nome:</strong>
                                    <p>Alvinho</p>
                                    <strong id="linha1">Idade:</strong>
                                    <p>3 a 5 anos</p>
                                </div>
                            </div>
                            <div className="sort">
                                <div className="line">
                                    <strong>Tipo:</strong>
                                    <p>Cachorro</p>
                                    <strong id="linha2">Sexo:</strong>
                                    <p>Masculino</p>
                                </div>
                            </div>
                            <div className="sort2">
                                <strong>Nome do abrigo:</strong>
                                <p>Nanda abrigo</p>
                            </div>
                            <div className="sort2">
                                <strong>Email:</strong>
                                <p>nandabrigo@abrigo.com</p>
                            </div>
                            <div className="sort2">
                                <strong>Whatsapp:</strong>
                                <p>81 947893</p>
                            </div>
                            <div className="sort">
                                <div className="line">
                                    <strong>Localidade:</strong>
                                    <p>Recife</p>
                                    <strong id="linha3">UF:</strong>
                                    <p>PE</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="sort">
                                <div className="line">
                                    <strong>Nome:</strong>
                                    <p>Alvinho</p>
                                    <strong id="linha1">Idade:</strong>
                                    <p>3 a 5 anos</p>
                                </div>
                            </div>
                            <div className="sort">
                                <div className="line">
                                    <strong>Tipo:</strong>
                                    <p>Cachorro</p>
                                    <strong id="linha2">Sexo:</strong>
                                    <p>Masculino</p>
                                </div>
                            </div>
                            <div className="sort2">
                                <strong>Nome do abrigo:</strong>
                                <p>Nanda abrigo</p>
                            </div>
                            <div className="sort2">
                                <strong>Email:</strong>
                                <p>nandabrigo@abrigo.com</p>
                            </div>
                            <div className="sort2">
                                <strong>Whatsapp:</strong>
                                <p>81 947893</p>
                            </div>
                            <div className="sort">
                                <div className="line">
                                    <strong>Localidade:</strong>
                                    <p>Recife</p>
                                    <strong id="linha3">UF:</strong>
                                    <p>PE</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </body >
    );
}