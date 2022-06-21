import {fireEvent, render} from "@testing-library/react";
import Counter from "./Counter";
import {Provider} from "react-redux";
import store from "../store";



describe('CounterTest',() => {

    test('should increment by 1 when clicking increment button',()=>{
        const {baseElement} = render(
            <Provider store={store}>
                <Counter />
            </Provider>
        );
        const incrementButton = baseElement.querySelector('#increment')
        const count = baseElement.querySelector('#count')
        expect(count?.innerHTML).toEqual('0')


        fireEvent.click(incrementButton as Element)
        fireEvent.click(incrementButton as Element)
        fireEvent.click(incrementButton as Element)

        expect(count?.innerHTML).toEqual('3')
    })
    test('should decrement by 1 when clicking decrement button',()=>{
        const {baseElement} = render(
            <Provider store={store}>
                <Counter />
            </Provider>
        );
        const decrementButton = baseElement.querySelector('#decrement')
        const count = baseElement.querySelector('#count')
        expect(count?.innerHTML).toEqual('3')

        fireEvent.click(decrementButton as Element)
        fireEvent.click(decrementButton as Element)

        expect(count?.innerHTML).toEqual('1')

    })
})

