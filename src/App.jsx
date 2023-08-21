 import React, { useState } from 'react'

 
 function App() {
  const [task,setTask] = useState([])

  function handlechnage(e){
    // e.preventDefaul()
    setTask(e.target.value)

  }
   return (
     <div>

      <input type="text"  placeholder="enter something"  onChange={handlechnage}  />


    <p>
      {task}
    </p>
     </div>
   )
 }
 
 export default App