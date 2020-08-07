import createAsyncThunk from '../../../lib/createAsyncThunk'
import { getPosts } from './api'
import { getPostsAsync } from './actions'

export const getPostsThunk = createAsyncThunk(getPostsAsync, getPosts)
