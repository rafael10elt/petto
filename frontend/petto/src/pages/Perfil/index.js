import React, { useState, useEffect } from 'react';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import '../../global.css'
import Img_Logo from '../../assets/cat_dog_logo.png';
import { FiTrash2, FiPower, FiEdit, FiPlus } from 'react-icons/fi';
import api from '../../services/api';

export default function Perfil() {
    const [pets, setPets] = useState([]);
    const history = useHistory();

    const abrigoId = localStorage.getItem('abrigoId');
    const abrigoNome = localStorage.getItem('abrigoNome');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: abrigoId,
            }
        }).then(response => {
            setPets(response.data);
        })
    }, [abrigoId]);

    async function handleDeletePet(id) {
        try {
            await api.delete(`pets/${id}`, {
                headers: {
                    Authorization: abrigoId,
                }
            });

            setPets(pets.filter(pets => pets.id !== id));
        } catch (err) {
            alert('Erro ao tentar deletar o pet, tente novamente' + err);
        }
    }
    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }
    return (
        <div className="container-pets">
            <header>
                <img src={Img_Logo} alt="logo" />
                <h1>Petto - Adoção de cães e gatos</h1>
            </header>
            <div className="content-pets">
                <section>
                    <button onClick={handleLogout} type="button" id="btnsair">
                        <FiPower size={20} color="#fffff" />Sair
                        </button>
                    <span>Seja bem vindo, {abrigoNome}</span>
                    <div >
                        <Link to="/pet/registrar">
                            <button id="buttonnp">
                                <FiPlus size={18} color="#fffff" />Cadastrar Novo Pet</button>
                        </Link>
                    </div>
                </section>
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
                            <button type="button" title="Editar">
                                <FiEdit size={30} color="#a8a8b3" />
                            </button>
                            <button onClick={() => handleDeletePet(pet.id)} type="button" title="Apagar">
                                <FiTrash2 size={30} color="#a8a8b3" />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    );
}