import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

const formCadastro = props => (

    <View style={styles.view}>

        <View style={styles.viewCadastro}>
            <TextInput style={styles.txtCadastro} placeholder='Nome' />
            <TextInput style={styles.txtCadastro} placeholder='E-mail' />
            <TextInput style={styles.txtCadastro} placeholder='Senha' />
        </View>

        <View style={styles.viewCadastro}>
            <Button
                title='Cadastrar'
                color='#115E54'
                onPress={() => false}
            />
        </View>

    </View>

);

const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 10
    },
    viewCadastro: {
        flex: 4,
        justifyContent: 'center'
    },
    txtCadastro: {
        fontSize: 20,
        height: 45
    },
    viewCadastrar: {
        flex: 1
    },
    txtLogin: {
        fontSize: 20,
        height: 45
    }
});

const mapStateToProps = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
);

//decorando com o estado o redux
export default connect(mapStateToProps, null)(formCadastro);