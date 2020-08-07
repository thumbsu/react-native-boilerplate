import { applyMiddleware, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'

import AsyncStorage from '@react-native-community/async-storage'
import ReduxThunk from 'redux-thunk'
import { rootReducer } from './modules'

const enhancedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
  },
  rootReducer,
)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function create(): any {
  const store = createStore(enhancedReducer, applyMiddleware(ReduxThunk))
  const persistor = persistStore(store)
  return {
    store,
    persistor,
  }
}
