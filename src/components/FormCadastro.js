import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, modificaNome } from '../actions/AutenticacaoActions';

const formCadastro = props => (

    <View style={styles.view}>

        <View style={styles.viewCadastro}>
            <TextInput value={props.nome} style={styles.txtCadastro} placeholder='Nome' onChangeText={(texto) => { props.modificaNome(texto) }} />
            <TextInput value={props.email} style={styles.txtCadastro} placeholder='E-mail' onChangeText={(texto) => { props.modificaEmail(texto) }} />
            <TextInput secureTextEntry value={props.senha} style={styles.txtCadastro} placeholder='Senha' onChangeText={(texto) => { props.modificaSenha(texto) }} />
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
export default connect(mapStateToProps,
    {
        modificaEmail: modificaEmail,
        modificaSenha: modificaSenha,
        modificaNome: modificaNome
    }
)(formCadastro);