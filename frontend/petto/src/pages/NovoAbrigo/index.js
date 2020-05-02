import React, { useState } from 'react';
import './styles.css';
import '../../global.css'
import Img_Logo from '../../assets/cat_dog_logo.png';
import Img_Pets from '../../assets/cat_dog_circle.png';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function NovoAbrigo() {
    const [abrigo_nome, setAbrigo_nome] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [localidade, setLocalidade] = useState('');
    const [uf, setUF] = useState('');

    const history = useHistory();

    async function handleNovoAbrigo(e) {
        e.preventDefault();

        const data = {
            abrigo_nome,
            email,
            whatsapp,
            localidade,
            uf,
        };
        try {
            const response = await api.post('/abrigos', data);

            alert(`Cadastro realizado com sucesso, guarde seu Token de acesso: ${response.data.id}`);

            history.push('/');
        } catch (err) {
            alert('Erro ao cadastrar, tente novamente.' + err)
        }
    }

    return (
        <div className="home-container-novoAbrigo">
            <header>
                <img src={Img_Logo} alt="logo" />
                <h1>Petto - Adoção de cães e gatos</h1>
            </header>
            <div className="content-novoAbrigo">
                <form onSubmit={handleNovoAbrigo}>
                    <h1>Nome do abrigo</h1>
                    <input
                        type="text"
                        placeholder=" Meu abrigo"
                        value={abrigo_nome}
                        onChange={e => setAbrigo_nome(e.target.value)}
                    />
                    <h1>Email</h1>
                    <input
                        type="email"
                        placeholder=" meuabrigo@abrigo.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <h1>Whatsapp com DDD</h1>
                    <input
                        type="tel"
                        placeholder=" (81) 99999-9999"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    <section>
                        <h1 for="localidade">Região</h1>
                        <select id="localidade"
                            value={localidade}
                            onChange={e => setLocalidade(e.target.value)}
                        >
                            <option value="">Selecione</option>
                            <option value="Centro">Centro</option>
                            <option value="Interior">Interior</option>
                            <option value="Região Metropolitana">Região Metropolitana</option>
                        </select>
                        <h1 for="UF">UF</h1>
                        <select id="UF"
                            value={uf}
                            onChange={e => setUF(e.target.value)}
                        >
                            <option value="">UF</option>
                            <option value="AC">AC</option>
                            <option value="AL">AL</option>
                            <option value="AM">AM</option>
                            <option value="AP">AP</option>
                            <option value="BA">BA</option>
                            <option value="CE">CE</option>
                            <option value="DF">DF</option>
                            <option value="ES">ES</option>
                            <option value="GO">GO</option>
                            <option value="MA">MA</option>
                            <option value="MG">MG</option>
                            <option value="MS">MS</option>
                            <option value="MT">MT</option>
                            <option value="PA">PA</option>
                            <option value="PB">PB</option>
                            <option value="PE">PE</option>
                            <option value="PI">PI</option>
                            <option value="PR">PR</option>
                            <option value="RJ">RJ</option>
                            <option value="RN">RN</option>
                            <option value="RS">RS</option>
                            <option value="RO">RO</option>
                            <option value="RR">RR</option>
                            <option value="SC">SC</option>
                            <option value="SE">SE</option>
                            <option value="SP">SP</option>
                            <option value="TO">TO</option>
                        </select>
                    </section>
                    <div className="buttons">
                        <button id="salvar" type="submit">Salvar</button>
                        <Link to="/">
                            <button id="cancelar">Cancelar</button>
                        </Link>
                    </div>
                </form>
                <div>
                    <img src={Img_Pets} alt="pets" />
                </div>
            </div>
        </div>

    );
}