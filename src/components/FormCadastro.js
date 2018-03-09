import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';

export default props => (

    <View style={styles.view}>

        <View style={styles.viewCadastro}>
            <TextInput style={styles.txtCadastro} placeholder='Nome' />
            <TextInput style={styles.txtCadastro} placeholder='E-mail' />
            <TextInput style={styles.txtCadastro} placeholder='Senha' />
        </View>

        <View style={styles.viewCadastro}>
            <Button
                title='Acessar'
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