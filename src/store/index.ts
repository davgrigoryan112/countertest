import { combineReducers, compose } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Counter/counterSlice'
import { CounterState } from './Counter/types'

const reducers = combineReducers({
  count: counterReducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = configureStore({ reducer: reducers, enhancers: composeEnhancers })

export default store
