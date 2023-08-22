 
import React, { useState } from "react";

function App() {
  const [inptVal, setInptval] = useState("");
  const [task, setTask] = useState([]);

  function handleadd() {
    setTask([...task, inptVal]);
    setInptval("");
  }

  function handledlt(value,index)
  {
    
  }

    return (
    <div>
      <input
        type="text"
        placeholder="enter something"
        value={inptVal}
        onChange={(e) => setInptval(e.target.value)}

    
      />

      <button onClick={handleadd}>Add</button>
      <button onClick={handledlt}> Delete</button>
      
      <ul>
        <div>
          {task.map((val) => {
            return <li>{val}</li>;
          })}
        </div>
      </ul>
    </div>
  );
}

export default App;
