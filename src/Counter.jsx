import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increment, Decrement } from './Redux/CounterSlice';

function Counter() {

    const count = useSelector((state) => state.mycounter.count)

    console.log(count);

    const dispatch = useDispatch();

    
  return (
    <div>
      
      <h1 className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-3xl font-bold text-center'>Counter</h1>
      <h1 className='text-2xl font-bold text-center'>Using React Redux</h1>
      <h1 className='text-2xl font-bold text-center'>Count: {count}</h1>
        <button onClick={() => dispatch(Increment())}>+</button>
        <span className='text-2xl font-bold'> {count}  </span>
        <button onClick={() => dispatch(Decrement())}>-</button>
      </h1>
    </div>
  )
}

export default Counter
