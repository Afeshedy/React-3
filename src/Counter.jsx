import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increment, Decrement } from './Redux/CounterSlice';

function Counter() {

    const count = useSelector((state) => state.mycounter.count)

    console.log(count);

    const dispatch = useDispatch();

    const button = {
        // backgroundColor: "black",
        color: "black",
        borderRadius: "5px",
        padding: "10px 20px",
        margin: "5px",
        cursor: "pointer"
    }
    
  return (
    <div>
      <h1>
        <button style={button} onClick={() => dispatch(Increment())}>+</button>
        <br />
        <span> {count}  </span>
        <br />
        <button style={button} onClick={() => dispatch(Decrement())}>-</button>
        <br />
      </h1>
    </div>
  )
}

export default Counter
