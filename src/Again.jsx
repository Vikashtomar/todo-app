 import React, { useState } from 'react'

 
 function Again() {
  const[task,setTask] = useState([])
  const[inptval,setInputVal] = useState('')

  function handleadd()
  {
    setTask([...task,inptval])
    setInputVal("")
  }

   return (
     <div>

      <input type="text" placeholder='Enter value' value={inptval} 
      onChange={e=> setInputVal(e.target.value) } />

      <button onClick={handleadd}>Add</button>
 
        {task.map((val)=>{
          return(
            <ul>
              <li>
                {val}
              </li>
            </ul>
          )
        })}
    

     </div>

   )
 }
 
 export default Again