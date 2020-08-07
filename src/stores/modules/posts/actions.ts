import { IPost } from './types'
import { createAsyncAction } from 'typesafe-actions'

const GET_POSTS = 'posts/GET_POSTS' as const
const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS' as const
const GET_POSTS_ERROR = 'posts/GET_POSTS_ERROR' as const

export const getPostsAsync = createAsyncAction(GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_ERROR)<
  undefined,
  IPost[],
  Error
>()
