import React from 'react';
import './styles.css';
import '../../global.css'
import Img_Logo from '../../assets/cat_dog_logo.png';
import Img_Pets from '../../assets/cat_dog_circle.png';
import { Link } from 'react-router-dom';

export default function EditarPet() {
    return (
        <body>
            <div class="home-container-novoPet">
                <header>
                    <img src={Img_Logo} />
                    <h1>Petto - Adoção de cães e gatos</h1>
                </header>
                <div class="content-novoPet">
                    <form>
                        <h1>Nome do Pet</h1>
                        <input type="text" placeholder=" Digite o nome" />
                        <h1>Sexo</h1>
                        <div className="radios">
                            <label>
                                <input type="radio" value="macho" name="sexo" checked="true" />
                                Macho
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div className="radios">
                            <label>
                                <input type="radio" value="femea" name="sexo" />
                                Fêmea
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <h1>Tipo</h1>
                        <div className="radios">
                            <label>
                                <input type="radio" value="cachorro" name="tipo" checked="true" />
                                Cachorro
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div className="radios">
                            <label>
                                <input type="radio" value="gato" name="tipo" />
                                Gato
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <section>
                            <h1 for="idade">Idade</h1>
                            <select id="idade">
                                <option value="">Selecione</option>
                                <option value="Menos de 3 meses"> Menos de 3 meses</option>
                                <option value="3 e 6 meses"> 3 a 6 meses</option>
                                <option value="7 meses a 1 ano"> 7 meses a 1 ano</option>
                                <option value="1 a 3 ano"> 1 a 3 anos</option>
                                <option value="3 a 5 anos"> 3 a 5 anos</option>
                                <option value="+ de 5 anos"> + de 5 anos</option>
                            </select>
                        </section>
                        <div class="buttons">
                            <button id="salvar">Salvar</button>
                            <Link to="/">
                                <button id="cancelar">Cancelar</button>
                            </Link> </div>
                    </form>
                    <div>
                        <img src={Img_Pets} />
                    </div>
                </div>
            </div>
        </body>
    );
}