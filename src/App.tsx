/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { Provider, useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { SafeAreaView, StatusBar, Text } from 'react-native'

import Home from './pages/Home'
import Icon from 'react-native-vector-icons/FontAwesome'
import { PersistGate } from 'redux-persist/integration/react'
import { create } from './stores'

const { store, persistor } = create()

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Icon.Button name="facebook" backgroundColor="#3b5998">
            <Text style={{ fontSize: 15, color: '#fff' }}>Login with Facebook</Text>
          </Icon.Button>
          <Home />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  )
}
