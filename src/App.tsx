/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler'

import MainStack from './routes/mainStack'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
}
