import { CounterState } from './types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: CounterState = {
  count: 0
}

export const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    }
  }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
