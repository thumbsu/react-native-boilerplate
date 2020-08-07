import { Text, View } from 'react-native'

import { IPost } from '../../stores/modules/posts'
import PostCard from '../PostCard'
import React from 'react'

type PostListProps = {
  posts: IPost[]
}

export default function PostList({ posts }: PostListProps): JSX.Element {
  return (
    <View>
      {posts.map(post => (
        <PostCard key={post.id} title={post.title} body={post.body} />
      ))}
    </View>
  )
}
