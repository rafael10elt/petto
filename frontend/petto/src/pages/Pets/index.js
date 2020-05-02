import React, { useState, useEffect } from 'react';
import './styles.css';
import '../../global.css'
import Img_Logo from '../../assets/cat_dog_logo.png';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';


export default function Pets() {

    const [pets, setPets] = useState([]);

    useEffect(() => {
        api.get('pets').then(response => {
            setPets(response.data);
        })
    });

    return (
        <div className="container-pets">
            <header>
                <img src={Img_Logo} alt="logo" />
                <h1>Petto - Adoção de cães e gatos</h1>
            </header>
            <div className="content-pets">
                <Link to="/">
                    <button type="button" id="btnvoltar">
                        <FiArrowLeft size={20} color="#fffff" />Voltar
                        </button>
                </Link>
                <ul>
                    {pets.map(pet => (
                        <li key={pet.id}>
                            <div className="sort2">

                                <strong>Nome:</strong>
                                <p>{pet.pet_nome}</p>
                            </div>
                            <div className="sort2">
                                <strong>Idade:</strong>
                                <p>{pet.idade}</p>
                            </div>
                            <div className="sort2">
                                <strong>Tipo:</strong>
                                <p>{pet.tipo}</p>
                            </div>
                            <div className="sort2">
                                <strong>Sexo:</strong>
                                <p>{pet.sexo}</p>
                            </div>

                            <div className="sort2">
                                <strong>Nome do abrigo:</strong>
                                <p>{pet.abrigo_nome}</p>
                            </div>
                            <div className="sort2">
                                <strong>Email:</strong>
                                <p>{pet.email}</p>
                            </div>
                            <div className="sort2">
                                <strong>Whatsapp:</strong>
                                <p>{pet.whatsapp}</p>
                            </div>
                            <div className="sort">
                                <div className="line">
                                    <strong>Localidade:</strong>
                                    <p>{pet.localidade}</p>
                                    <strong id="linha3">UF:</strong>
                                    <p>{pet.uf}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}