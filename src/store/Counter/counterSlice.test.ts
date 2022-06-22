import counterReducer, { increment, decrement } from './counterSlice'

describe('SliceTest', () => {
  test('should be 0 in the beginning', () => {
    const initialCount = counterReducer(undefined, { type: '' })
    expect(initialCount).toEqual({
      count: 0
    })
  })

  test('should increment the count with 1 when increment action is dispatched', () => {
    const incrementedCount = counterReducer({ count: 0 }, increment)

    expect(incrementedCount).toEqual({
      count: 1
    })
  })
  test('should decrement the count with 1 when decrement action is dispatched', () => {
    const decrementedCount = counterReducer({ count: 0 }, decrement)

    expect(decrementedCount).toEqual({
      count: -1
    })
  })
})
