/** @format */

import React, { useState } from "react";

function Again() {
  const [task, setTask] = useState([]);
  const [inptval, setInputVal] = useState("");
  const [editIndex, setEditIndex] = useState(0);
  const [isEdit, setIsEdit] = useState(false);


//----------------------ADD FUNCTION--------------------------//
  function handleadd() {
    setTask([...task, inptval]);
    setInputVal("");

    if (isEdit) {
      const updatedval = [...task];
      updatedval.splice(editIndex, 1, inptval);
      setTask(updatedval);
      setIsEdit(false);
    }
  }
//----------------------Delete Function-------------------------//
  function handledlt(index) {
    const updatedval = [...task];
    updatedval.splice(index, 1);
    setTask(updatedval);
    console.log("dlt");
  }

  //--------------------EDIT FUNCTION-----------------------//
  function handleEdit(e, val, index) {
    e.preventDefault();
    setInputVal(val);
    setEditIndex(index);
    setIsEdit(true);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter value"
        value={inptval}
        onChange={(e) => setInputVal(e.target.value)}
      />

      <button onClick={handleadd}>Add</button>

      <ul>
        {task.map((val, index) => {
          return (
            <li>
              {" "}
              {val} <button onClick={handledlt}> Remove item</button>
              <button onClick={(e) => handleEdit(e, val, index)}> Edit</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Again;
