import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';
import AdicionarContato from './components/AdicionarContato';

export default props => (
    <Router
        navigationBarStyle={{ backgroundColor: '#115E54' }}
        titleStyle={{ color: '#fff' }}>
        <Scene key='app'>

            <Scene key='formLogin'
                component={FormLogin}
                hideNavBar={true}
                title="Login"
            />

            <Scene key='formCadastro'
                component={FormCadastro}
                hideNavBar={false}
                title="Cadastro"
            />

            <Scene key='boasVindas'
                component={BoasVindas}
                hideNavBar={true}
                title="Bem-Vindo"
            />

            <Scene key='principal'
                component={Principal}
                hideNavBar={true}
                initial
                title="Principal"
            />

            <Scene key='adicionarContato'
                component={AdicionarContato}
                hideNavBar={false}
                title="Adicionar Contato"
            />

        </Scene>
    </Router>
);