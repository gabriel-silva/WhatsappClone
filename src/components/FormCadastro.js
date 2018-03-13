import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    ImageBackground,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import {
    modificaEmail,
    modificaSenha,
    modificaNome,
    cadastraUsuario
} from '../actions/AutenticacaoActions';

const bgFormCadastro = require('../imgs/bg.png');

class FormCadastro extends Component {

    _cadastraUsuario() {

        const { nome, email, senha } = this.props;

        this.props.cadastraUsuario({
            nome: nome,
            email: email,
            senha: senha
        });
    }

    renderBtnCadastro() {
        if (this.props.loadCadastro) {
            return (
                <ActivityIndicator size="large" />
            );
        }
        return (
            <Button
                title='Cadastrar'
                color='#115E54'
                onPress={() => this._cadastraUsuario()}
            />
        );
    }

    render() {

        return (

            <ImageBackground style={styles.imgFormCadastro} source={bgFormCadastro}>

                <View style={styles.view}>

                    <View style={styles.viewCadastro}>
                        <TextInput
                            value={this.props.nome}
                            placeholderTextColor='#FFF'
                            style={styles.txtCadastro}
                            placeholder='Nome'
                            onChangeText={(texto) => { this.props.modificaNome(texto) }}
                        />
                        <TextInput
                            value={this.props.email}
                            placeholderTextColor='#FFF'
                            style={styles.txtCadastro}
                            placeholder='E-mail'
                            onChangeText={(texto) => { this.props.modificaEmail(texto) }}
                        />
                        <TextInput
                            secureTextEntry
                            value={this.props.senha}
                            placeholderTextColor='#FFF'
                            style={styles.txtCadastro}
                            placeholder='Senha'
                            onChangeText={(texto) => { this.props.modificaSenha(texto) }}
                        />


                        <Text style={styles.erroCadastro}>{this.props.erroCadastro}</Text>

                    </View>

                    <View style={styles.viewCadastro}>
                        {this.renderBtnCadastro()}
                    </View>

                </View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    imgFormCadastro: {
        flex: 1
    },
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
    },
    erroCadastro: {
        color: '#ff0000',
        fontSize: 18
    }
});

const mapStateToProps = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroCadastro: state.AutenticacaoReducer.erroCadastro,
        loadCadastro: state.AutenticacaoReducer.loadCadastro
    }
);

//decorando com o estado do redux
export default connect(mapStateToProps,
    {
        modificaEmail: modificaEmail,
        modificaSenha: modificaSenha,
        modificaNome: modificaNome,
        cadastraUsuario: cadastraUsuario
    }
)(FormCadastro);