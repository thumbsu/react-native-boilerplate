/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { SafeAreaView, StatusBar, Text } from 'react-native'

import Home from './pages/Home'
import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react'

export default function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Icon.Button name="facebook" backgroundColor="#3b5998">
          <Text style={{ fontSize: 15, color: '#fff' }}>Login with Facebook</Text>
        </Icon.Button>
        <Home />
      </SafeAreaView>
    </>
  )
}
