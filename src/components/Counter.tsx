import * as React from 'react'
import { FC } from 'react'

import { Button, CountContainer, MainContainer } from './styles/styled'
import { increment, decrement } from '../store/Counter'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'

const Counter: FC = () => {
  const count = useAppSelector((state) => state.count)
  const dispatch = useAppDispatch()

  const onIncrement = () => {
    dispatch(increment())
  }
  const onDecrement = () => {
    dispatch(decrement())
  }

  return (
    <MainContainer>
      <Button id="increment" onClick={onIncrement}>
        <span>+1</span>
      </Button>
      <CountContainer id="count">{count.count}</CountContainer>
      <Button id="decrement" onClick={onDecrement}>
        <span>-1</span>
      </Button>
    </MainContainer>
  )
}

export default Counter
