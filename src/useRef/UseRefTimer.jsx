import React from 'react'
import { useState, useRef } from 'react';

const UseRefTimer = () => {
    const [timer, setTimer] = useState(0);
    const timerId = useRef();

    // useEffect(()=>{
    //     setInterval(()=>{
    //         setTimer((prev)=>(prev + 1))
    //     },500)
        
    // },[])

   const onStartClick = () => {
        timerId.current = setInterval(()=>{
            setTimer((prev) => prev + 1)
        },1000)
    }

    const onEndClick = () => {
            clearInterval(timerId.current)
            setTimer(0)
    }

    const onPauseClick = () => {
        clearTimeout(timerId.current);
      
    }
  return (
    <div>
        <p >{timer}</p>
        <button onClick={onStartClick}>Start</button>
        <button onClick={onEndClick}>End</button>
        <button onClick={onPauseClick}>Pause</button>
    </div>
  )
}

export default UseRefTimer
