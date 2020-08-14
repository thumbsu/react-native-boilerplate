import { Button, ImageBackground, SafeAreaView, Text } from 'react-native'

import React from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../assets/img/whale.jpg')} style={styles.image}>
        <Text style={styles.text}>Home Screen</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      </ImageBackground>
    </SafeAreaView>
  )
}
