import React from 'react';
import './styles.css';
import '../../global.css'
import Img_Logo from '../../assets/cat_dog_logo.png';
import Img_Pets from '../../assets/cat_dog_circle.png';
import { Link } from 'react-router-dom';

export default function NovoAbrigo() {
    return (
        <body>
            <div class="home-container-novoAbrigo">
                <header>
                    <img src={Img_Logo} />
                    <h1>Petto - Adoção de cães e gatos</h1>
                </header>
                <div class="content-novoAbrigo">
                    <form>
                        <h1>Nome do abrigo</h1>
                        <input type="text" placeholder=" Meu abrigo" />
                        <h1>Email</h1>
                        <input type="email" placeholder=" meuabrigo@abrigo.com" />
                        <h1>Whatsapp com DDD</h1>
                        <input type="tel" placeholder=" (81) 99999-9999" />
                        <section>
                            <h1 for="localidade">Região</h1>
                            <select id="localidade">
                                <option value="">Selecione</option>
                                <option value="Centro">Centro</option>
                                <option value="Interior">Interior</option>
                                <option value="Região Metropolitana">Região Metropolitana</option>
                            </select>
                            <h1 for="UF">UF</h1>
                            <select id="UF">
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
                        <div class="buttons">
                            <button id="salvar">Salvar</button>
                            <Link to="/">
                                <button id="cancelar">Cancelar</button>
                            </Link>
                        </div>

                    </form>
                    <div>
                        <img src={Img_Pets} />
                    </div>
                </div>
            </div>
        </body>
    );
}