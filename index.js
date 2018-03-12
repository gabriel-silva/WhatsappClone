import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Routes from './src/Routes';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyB-vLSUdczz_RgpDxKrs08_cNtDCluGQ6s",
      authDomain: "whatsapp-clone-64532.firebaseapp.com",
      databaseURL: "https://whatsapp-clone-64532.firebaseio.com",
      projectId: "whatsapp-clone-64532",
      storageBucket: "whatsapp-clone-64532.appspot.com",
      messagingSenderId: "904762112537"
    });
  }

  render() {
    return (
      <Provider store={
        createStore(
          reducers,
          {}, //estado inicial da aplicação
          applyMiddleware(ReduxThunk) //Middleware 
        )
      }>
        <Routes />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('WhatsappClone', () => App);
