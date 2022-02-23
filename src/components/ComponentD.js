import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../redux/action/action';

function ComponentD() {

  const countState = useSelector(state => state.countReducer)
  const dispatch = useDispatch()
  return <div>
    <p>Count is ComponentD - {countState.count}</p>
    <button onClick={() => {
      dispatch(increment())
    }}>Increment</button>
    </div>;
}

export default ComponentD;
