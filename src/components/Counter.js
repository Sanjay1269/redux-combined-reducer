import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../redux/action/action';

function Counter() {
    const state = useSelector(state => state.countReducer)
    const dispatch = useDispatch()
    console.log(state);



    const incrementCount = () => {
        dispatch((increment()))
    }


    const decrementCount = () => {
        dispatch((decrement()))
    }

    const resetCount = () => {
        dispatch((reset()))
    }

    return <div>
        <p>Count - {state.count}</p>
        <button onClick={incrementCount}> increment</button>
        <button onClick={decrementCount}> decrement</button>
        <button onClick={resetCount}> reset</button>
    </div>
}

export default Counter