import React, { Component } from 'react';
import {View, Platform, StatusBar} from 'react-native';
import Router from './app/scene/scene'
import {store, persistor} from './app/store/persistStore'
import {Provider, connect} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const RouterWithRedux = connect()(Router)

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    if (Platform.OS == 'android') {
      StatusBar.setTranslucent(true)
      StatusBar.setBackgroundColor('transparent', true)
    }
    StatusBar.setBarStyle('light-content', true)
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={{flex: 1}}>
            <RouterWithRedux store={store}/>
          </View>
        </PersistGate>
      </Provider>
    );
  }
}
