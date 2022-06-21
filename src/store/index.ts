import { combineReducers, compose } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import count from "./Counter/reducer";
import { CounterState } from "./Counter/types";

const reducers = combineReducers({
    count
});


export interface RootState {
    count: CounterState;
}

const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({ reducer: reducers, enhancers: composeEnhancers })

export default store;
