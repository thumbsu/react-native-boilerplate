import * as actions from './actions'

import { ActionType, AsyncActionCreatorBuilder } from 'typesafe-actions'

import { AsyncState } from '../../../lib/reducerUtils'

export interface IPost {
  userId: number
  id: number
  title: string
  body: string
}

export type PostsAction = ActionType<typeof actions>

export type PostsState = {
  posts: AsyncState<IPost[], Error>
}
export type AnyAsyncActionCreator = AsyncActionCreatorBuilder<any, any, any>
