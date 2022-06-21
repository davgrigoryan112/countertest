import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {FC} from "react";

import { Button, CountContainer, MainContainer } from "./styles/styled";
import {
    incrementCounter,
    decrementCounter
} from "../store/Counter/";
import { RootState } from "../store";

const Counter: FC = () => {

    const count = useSelector( (state: RootState ) => state.count)
    const dispatch = useDispatch()

    const onIncrement = () => {
        dispatch(incrementCounter())
    }
    const onDecrement = () => {
        dispatch(decrementCounter())
    }

    return (
        <MainContainer>
            <Button id='increment' onClick={onIncrement}><span>+1</span></Button>
            <CountContainer id='count'>{count.count}</CountContainer>
            <Button id='decrement' onClick={onDecrement}><span>-1</span></Button>
        </MainContainer>
    );
};


export default Counter;
