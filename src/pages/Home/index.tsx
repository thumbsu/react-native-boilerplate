import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import { useObserver } from 'mobx-react'
import useStores from '../../hooks/useStores'

export default function Home() {
  const { counter } = useStores()

  return useObserver(() => (
    <SafeAreaView>
      <View>
        <Text>{counter.count}</Text>
      </View>
      <TouchableOpacity onPress={() => counter.increment()}>
        <View>
          <Text>++</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => counter.decrement()}>
        <View>
          <Text>--</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  ))
}
