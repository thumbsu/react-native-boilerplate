/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { AnyAsyncActionCreator } from '../stores/modules/posts'
import { Dispatch } from 'react'

export default function createAsyncThunk<
  A extends AnyAsyncActionCreator,
  F extends (...params: any[]) => Promise<any>
>(asyncActionCreator: A, promiseCreator: F) {
  type Params = Parameters<F>
  return function thunk(...params: Params) {
    return async (dispatch: Dispatch<any>) => {
      const { request, success, failure } = asyncActionCreator
      dispatch(request(undefined))
      try {
        const result = await promiseCreator(...params)
        dispatch(success(result))
      } catch (e) {
        dispatch(failure(e))
      }
    }
  }
}
