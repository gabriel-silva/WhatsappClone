import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    TouchableHighlight,
    ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
    modificaEmail,
    modificaSenha,
    autenticarUsuario
} from '../actions/AutenticacaoActions';

const bgFormLogin = require('../imgs/bg.png');

class formLogin extends Component {

    _autenticarUsuario() {
        const { email, senha } = this.props;
        this.props.autenticarUsuario({ email, senha });
    }

    render() {

        return (

            <ImageBackground style={styles.imgFormLogin} source={bgFormLogin}>

                <View style={styles.view}>
                    <View style={styles.viewTopo}>
                        <Text style={styles.txtWhatsapp}> WhatsApp Clone </Text>
                    </View>

                    <View style={styles.viewLogin}>
                        <TextInput
                            value={this.props.email}
                            placeholderTextColor='#FFF'
                            style={styles.txtLogin}
                            placeholder='E-mail'
                            onChangeText={(texto) => { this.props.modificaEmail(texto) }}
                        />

                        <TextInput
                            secureTextEntry
                            value={this.props.senha}
                            placeholderTextColor='#FFF'
                            style={styles.txtLogin}
                            placeholder='Senha'
                            onChangeText={(texto) => { this.props.modificaSenha(texto) }}
                        />

                        <Text style={styles.erroLogin}>{this.props.erroLogin}</Text>

                        <TouchableHighlight
                            onPress={
                                () => Actions.formCadastro()
                            }>
                            <Text style={styles.txtCadastro}>Ainda não tem cadastro? cadastre-se</Text>
                        </TouchableHighlight>

                    </View>

                    <View style={styles.viewAcessar}>
                        <Button
                            title='Acessar'
                            color='#115E54'
                            onPress={() => this._autenticarUsuario()}
                        />
                    </View>

                </View>

            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({
    imgFormLogin: {
        flex: 1
    },
    view: {
        flex: 1,
        padding: 10
    },
    viewTopo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewLogin: {
        flex: 2
    },
    viewAcessar: {
        flex: 2
    },
    txtWhatsapp: {
        fontSize: 25,
        color: '#FFF'
    },
    txtLogin: {
        fontSize: 20,
        height: 45
    },
    txtCadastro: {
        fontSize: 20,
        color: '#FFF'
    },
    erroLogin: {
        color: '#ff0000',
        fontSize: 18
    }
});

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin
    }
);

//decorando com o estado do redux
export default connect(mapStateToProps,
    {
        modificaEmail: modificaEmail,
        modificaSenha: modificaSenha,
        autenticarUsuario: autenticarUsuario
    }
)(formLogin);