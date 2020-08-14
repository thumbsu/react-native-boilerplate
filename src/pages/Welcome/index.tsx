import { Button, SafeAreaView, Text, View } from 'react-native'

import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
  )
}
