import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Routes from './src/Routes';
import reducers from './src/reducers';

const App = props => (
  <Provider store={createStore(reducers)}>
    <Routes />
  </Provider>
);

AppRegistry.registerComponent('WhatsappClone', () => App);
