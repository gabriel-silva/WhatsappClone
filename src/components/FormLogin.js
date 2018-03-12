import React from 'react';
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
import { modificaEmail, modificaSenha } from '../actions/AutenticacaoActions';

const bgFormLogin = require('../imgs/bg.png');

const formLogin = props => {

    return (

        <ImageBackground style={styles.imgFormLogin} source={bgFormLogin}>

            <View style={styles.view}>
                <View style={styles.viewTopo}>
                    <Text style={styles.txtWhatsapp}> WhatsApp Clone </Text>
                </View>

                <View style={styles.viewLogin}>
                    <TextInput value={props.email} placeholderTextColor='#FFF' style={styles.txtLogin} placeholder='E-mail' onChangeText={(texto) => { props.modificaEmail(texto) }} />
                    <TextInput secureTextEntry value={props.senha} placeholderTextColor='#FFF' style={styles.txtLogin} placeholder='Senha' onChangeText={(texto) => { props.modificaSenha(texto) }} />
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
                        onPress={() => false}
                    />
                </View>
            </View>

        </ImageBackground>

    );

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
    }
});

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
);

//decorando com o estado o redux
export default connect(mapStateToProps,
    {
        modificaEmail: modificaEmail,
        modificaSenha: modificaSenha
    }
)(formLogin);