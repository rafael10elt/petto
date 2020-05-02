import React, { useState } from 'react';
import './styles.css';
import '../../global.css'
import Img_Logo from '../../assets/cat_dog_logo.png';
import Img_Pets from '../../assets/cat_dog_circle.png';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function NovoPet() {
    const [pet_nome, setPet_Nome] = useState('');
    const [sexo, setSexo] = useState('');
    const [idade, setIdade] = useState('');
    const [tipo, setTipo] = useState('');

    const history = useHistory();
    const abrigoId = localStorage.getItem('abrigoId');

    async function handleNovoPet(e) {
        e.preventDefault();

        const data = {
            pet_nome,
            sexo,
            idade,
            tipo,
        };
        try {
            await api.post('pets', data, {
                headers: {
                    Authorization: abrigoId,
                }
            })
            history.push('/abrigo/perfil')
        } catch (err) {
            alert('Erro ao cadastrar, tente novamente.' + err);
        }
    }

    return (
        <div className="home-container-novoPet">
            <header>
                <img src={Img_Logo} alt="logo" />
                <h1>Petto - Adoção de cães e gatos</h1>
            </header>
            <div className="content-novoPet">
                <form onSubmit={handleNovoPet}>
                    <h1>Nome do Pet</h1>
                    <input
                        type="text"
                        placeholder=" Digite o nome"
                        value={pet_nome}
                        onChange={e => setPet_Nome(e.target.value)}
                    />
                    <h1>Sexo</h1>
                    <section>

                        <select
                            id="sexo"
                            value={sexo}
                            onChange={e => setSexo(e.target.value)}
                        >
                            <option value="">Selecione</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                        </select>
                    </section>
                    <h1>Tipo</h1>
                    <section>

                        <select
                            id="tipo"
                            value={tipo}
                            onChange={e => setTipo(e.target.value)}
                        >
                            <option value="">Selecione</option>
                            <option value="Cachorro">Cachorro</option>
                            <option value="Gato">Gato</option>
                        </select>
                    </section>
                    <h1>Idade</h1>
                    <section>

                        <select
                            id="idade"
                            value={idade}
                            onChange={e => setIdade(e.target.value)}
                        >
                            <option value="">Selecione</option>
                            <option value="Menos de 3 meses"> Menos de 3 meses</option>
                            <option value="3 e 6 meses"> 3 a 6 meses</option>
                            <option value="7 meses a 1 ano"> 7 meses a 1 ano</option>
                            <option value="1 a 3 anos"> 1 a 3 anos</option>
                            <option value="3 a 5 anos"> 3 a 5 anos</option>
                            <option value="+ de 5 anos"> + de 5 anos</option>
                        </select>
                    </section>
                    <div className="buttons">
                        <button id="salvar" type="submit">Salvar</button>
                        <Link to="/abrigo/perfil">
                            <button id="cancelar">Cancelar</button>
                        </Link> </div>
                </form>
                <div>
                    <img src={Img_Pets} alt="pets" />
                </div>
            </div>
        </div>
    );
}