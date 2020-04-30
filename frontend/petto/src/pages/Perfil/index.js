import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import '../../global.css'
import Img_Main from '../../assets/cat_dog.png';
import Img_Logo from '../../assets/cat_dog_logo.png';
import { FiTrash2, FiPower, FiEdit, FiPlus } from 'react-icons/fi';

export default function Perfil() {
    return (
        <body>
            <div className="container-pets">
                <header>
                    <img src={Img_Logo} />
                    <h1>Petto - Adoção de cães e gatos</h1>
                </header>
                <div className="content-pets">
                    <section>
                        <button type="button" id="btnsair">
                            <FiPower size={20} color="#fffff" />Sair
                        </button>
                        <span>Seja bem vindo, NOME DO ABRIGO</span>
                        <div >
                            <Link to="/pet/registrar">
                                <button id="buttonnp">
                                    <FiPlus size={18} color="#fffff" />Cadastrar Novo Pet</button>
                            </Link>
                        </div>
                    </section>
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
                            <button type="button" title="Editar">
                                <FiEdit size={30} color="#a8a8b3" />
                            </button>
                            <button type="button" title="Apagar">
                                <FiTrash2 size={30} color="#a8a8b3" />
                            </button>
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
                            <button type="button" title="Editar">
                                <FiEdit size={30} color="#a8a8b3" />
                            </button>
                            <button type="button" title="Apagar">
                                <FiTrash2 size={30} color="#a8a8b3" />
                            </button>
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
                            <button type="button" title="Editar">
                                <FiEdit size={30} color="#a8a8b3" />
                            </button>
                            <button type="button" title="Apagar">
                                <FiTrash2 size={30} color="#a8a8b3" />
                            </button>
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
                            <button type="button" title="Editar">
                                <FiEdit size={30} color="#a8a8b3" />
                            </button>
                            <button type="button" title="Apagar">
                                <FiTrash2 size={30} color="#a8a8b3" />
                            </button>
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
                            <button type="button" title="Editar">
                                <FiEdit size={30} color="#a8a8b3" />
                            </button>
                            <button type="button" title="Apagar">
                                <FiTrash2 size={30} color="#a8a8b3" />
                            </button>
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
                            <button type="button" title="Editar">
                                <FiEdit size={30} color="#a8a8b3" />
                            </button>
                            <button type="button" title="Apagar">
                                <FiTrash2 size={30} color="#a8a8b3" />
                            </button>
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
                            <button type="button" title="Editar">
                                <FiEdit size={30} color="#a8a8b3" />
                            </button>
                            <button type="button" title="Apagar">
                                <FiTrash2 size={30} color="#a8a8b3" />
                            </button>
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
                            <button type="button" title="Editar">
                                <FiEdit size={30} color="#a8a8b3" />
                            </button>
                            <button type="button" title="Apagar">
                                <FiTrash2 size={30} color="#a8a8b3" />
                            </button>
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
                            <button type="button" title="Editar">
                                <FiEdit size={30} color="#a8a8b3" />
                            </button>
                            <button type="button" title="Apagar">
                                <FiTrash2 size={30} color="#a8a8b3" />
                            </button>
                        </li>

                    </ul>
                </div>
            </div>
        </body >
    );
}