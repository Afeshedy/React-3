import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increment, Decrement } from './Redux/CounterSlice';

function Counter() {

    const count = useSelector((state) => state.mycounter.count)

    console.log(count);

    const dispatch = useDispatch();

    
  return (
    <div>
      <h1 className='flex flex-col items-center justify-center h-screen gap-4'>
        <button onClick={() => dispatch(Increment())}>+</button>
        <span className='text-2xl font-bold'> {count}  </span>
        <button onClick={() => dispatch(Decrement())}>-</button>
      </h1>
    </div>
  )
}

export default Counter
