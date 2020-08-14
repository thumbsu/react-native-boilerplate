import Home from '../pages/Home'
import React from 'react'
import Welcome from '../pages/Welcome'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}
