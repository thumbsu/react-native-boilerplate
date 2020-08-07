import { PostsAction, PostsState } from './types'
import { asyncState, createAsyncReducer, transformToArray } from '../../../lib/reducerUtils'

import { createReducer } from 'typesafe-actions'
import { getPostsAsync } from './actions'

const initialState: PostsState = {
  posts: asyncState.initial(),
}

const posts = createReducer<PostsState, PostsAction>(initialState).handleAction(
  transformToArray(getPostsAsync),
  createAsyncReducer(getPostsAsync, 'posts'),
)

export default posts
