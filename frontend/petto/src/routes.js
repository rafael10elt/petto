import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import NovoAbrigo from './pages/NovoAbrigo';
import NovoPet from './pages/NovoPet';
import EditarPet from './pages/EditarPet';
import Perfil from './pages/Perfil';
import Pets from './pages/Pets';
import Login from './pages/Login';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/abrigo/registrar" component={NovoAbrigo} />
                <Route path="/abrigo/perfil" component={Perfil} />
                <Route path="/pets" component={Pets} />
                <Route path="/pet/registrar" component={NovoPet} />
                <Route path="/pet/editar" component={EditarPet} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    );
};
