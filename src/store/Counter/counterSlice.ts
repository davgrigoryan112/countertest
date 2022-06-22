import { CounterActionType, CounterState, CounterActions } from "./types";
import { createSlice } from '@reduxjs/toolkit'

const initialState: CounterState = {
    count: 0
};

export const counterSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer




//
// const count = (
//     state: CounterState = initialState,
//     action: Action | CounterActions
// ): CounterState => {
//     switch (action.type) {
//         case CounterActionType.INCREMENT:
//             return { ...state, count: state.count + 1 };
//         case CounterActionType.DECREMENT:
//             return { ...state, count: state.count - 1 };
//         default:
//             return state;
//     }
// };
//
// export default count;


