import { fireEvent, render, queryByAttribute } from '@testing-library/react'
import Counter from './Counter'
import { Provider } from 'react-redux'
import store from '../store'
import { useAppDispatch } from '../hooks/hooks'
import { AnyAction } from 'redux'
import { increment, decrement } from '../store/Counter'

jest.mock('../hooks/hooks', () => ({
  ...jest.requireActual('../hooks/hooks'),
  useAppDispatch: jest.fn()
}))

jest.mock('../store/Counter', () => ({
  ...jest.requireActual('../store/Counter'),
  increment: jest.fn(),
  decrement: jest.fn()
}))

const useDispatchMock = useAppDispatch as jest.Mock
const incrementMock = increment as unknown as jest.Mock
const decrementMock = decrement as unknown as jest.Mock

describe('CounterTest', () => {
  let renderedElement: HTMLElement
  let fakeDispatch: jest.Mock

  beforeEach(() => {
    fakeDispatch = jest.fn()
    incrementMock.mockImplementation(() => 'increment')
    decrementMock.mockImplementation(() => 'decrement')
    useDispatchMock.mockImplementation(() => fakeDispatch)
    useDispatchMock.mockClear()

    renderedElement = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    ).baseElement
  })

  test('should increment by 1 when clicking increment button', () => {
    incrementMock.mockClear()

    const incrementButton = queryByAttribute('id', renderedElement, 'increment')
    const count = queryByAttribute('id', renderedElement, 'count')

    fireEvent.click(incrementButton as Element)
    fireEvent.click(incrementButton as Element)
    fireEvent.click(incrementButton as Element)

    expect(useDispatchMock).toHaveBeenCalledTimes(1)
    expect(incrementMock).toHaveBeenCalledTimes(3)
    expect(fakeDispatch).toHaveBeenCalledWith('increment')
  })
  test('should decrement by 1 when clicking decrement button', () => {
    decrementMock.mockClear()

    const decrementButton = queryByAttribute('id', renderedElement, 'decrement')
    const count = queryByAttribute('id', renderedElement, 'count')

    fireEvent.click(decrementButton as Element)
    fireEvent.click(decrementButton as Element)

    expect(useDispatchMock).toHaveBeenCalledTimes(1)
    expect(decrementMock).toHaveBeenCalledTimes(2)
    expect(fakeDispatch).toHaveBeenCalledWith('decrement')
  })
})
