import { useRef,  } from "react"
import React  from 'react'


const UseRef = () => {
const inputRef = useRef(null);
console.log(inputRef);

// useEffect(()=>{
//     inputRef.current.style.border = "2px solid blue"
//     inputRef.current.focus()
// },[])

const focusing = () => {
  inputRef.current.focus();
}

  return (
    <div>
      <input  className="focus" ref={inputRef} type="text" />
      <button onClick={focusing}>Focus Input</button>
    </div>
  )
}

export default UseRef
