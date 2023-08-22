 import React, { useState } from 'react'

 
 function Again() {
  const[task,setTask] = useState([])
  const[inptval,setInputVal] = useState('')
  const[editing,setEditIndex] = useState(-1)

  function handleadd()
  {
    setTask([...task,inptval])
    setInputVal("")
  }
  function handledlt(index)
  {
    const updatedval = [...task]
    updatedval.splice(index,1)
    setTask(updatedval)
    console.log("dlt")
  }

  function handleEditSave(index, newValue) {
    const editedVal = [...task];
    editedVal[index] = newValue;
    setTask(editedVal);
    setEditIndex(-1); // Stop editing mode
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
                {val}  <button onClick={handledlt}> Remove item</button> 
                <button onClick={handleEditSave}> Edit</button>
              </li>
            </ul>
          )
        })}
    

     </div>

   )
 }
 
 export default Again