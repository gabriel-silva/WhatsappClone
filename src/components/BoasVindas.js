import React from 'react';
import {
    View,
    Button,
    Text,
    Image,
    StyleSheet,
    ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux';


const logo = require('../imgs/logo.png');
const bgBoasVindas = require('../imgs/bg.png');

export default props => (

    <ImageBackground style={{ flex: 1, width: null }} source={bgBoasVindas}>

        <View style={{ flex: 1, padding: 15 }}>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.txtBoasVindas}> Seja Bem-Vindo </Text>
                <Image source={logo} />
            </View>
            <View style={{ flex: 1 }}>
                <Button title='Fazer Login' onPress={() => Actions.formLogin()} />
            </View>
        </View>

    </ImageBackground>
);

const styles = StyleSheet.create({
    txtBoasVindas: {
        fontSize: 20,
        color: '#ffffff'
    }
});