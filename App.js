import React, { Component } from 'react';
import {View} from 'react-native';
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
