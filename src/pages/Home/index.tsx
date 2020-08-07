import React, { useEffect } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import PostList from '../../components/PostList'
import { RootState } from '../../stores/modules'
import { getPostsThunk } from '../../stores/modules/posts'

export default function Home(): JSX.Element {
  const { data, loading, error } = useSelector((state: RootState) => state.posts.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPostsThunk())
  }, [dispatch])

  return (
    <View>
      <Text>Home</Text>
      {loading && <Text>loading...</Text>}
      {error && <Text>error!!</Text>}
      {data && (
        <ScrollView>
          <PostList posts={data} />
        </ScrollView>
      )}
    </View>
  )
}
