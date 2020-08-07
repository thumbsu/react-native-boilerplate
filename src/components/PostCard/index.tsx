import { Text, View } from 'react-native'

import React from 'react'

type PostCardProps = {
  title: string
  body: string
}

export default function PostCard({ title, body }: PostCardProps): JSX.Element {
  return (
    <View>
      <View>
        <Text>{title}</Text>
      </View>
      <View>
        <Text>{body}</Text>
      </View>
    </View>
  )
}
