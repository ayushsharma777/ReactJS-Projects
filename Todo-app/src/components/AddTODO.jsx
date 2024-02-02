import React, { useContext, useRef } from 'react'
// import { useState } from 'react'
import { MdAddCircle } from "react-icons/md";
import { TodoItemContext } from '../store/todoItems-store';
function AddTODO() {
  const {addNewItem} = useContext(TodoItemContext);

  // const [todoName,setTodoName] = useState("");
  // const [todoDate,setTodoDate] = useState("");

  // const handleNameChange=(event)=>{
  //   setTodoName(event.target.value);
  // }
  // const handleDateChange=(event)=>{
  //   setTodoDate(event.target.value);
  // }
  const elementName = useRef();
  const elementDate = useRef();


  const handleAddButtonClicked =()=>{
    const todoName = elementName.current.value;
      const todoDate = elementDate.current.value;
    if(todoName.length===0 || todoDate.length===0)
    {
      alert("Enter todo name or date");
    }
    else{
      
      addNewItem(todoName,todoDate);
    elementName.current.value="";
    elementDate.current.value="";
    // setTodoName("");
    // setTodoDate("");
  }
  }
  
  return (
    <div>
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col"><input type="text"  placeholder="Enter TODO here" ref={elementName}
          // value={todoName}
          // onChange={handleNameChange} 
          /></div>
          <div className="col"><input type="date" ref={elementDate}
          // value={todoDate} 
          // onChange={handleDateChange}
          /></div>
          <div className="col"><button type="button" className="btn btn-success newBtn"
          onClick={handleAddButtonClicked}><MdAddCircle />
          </button></div>
        </div>
        </div>
    </div>
  )
}

export default AddTODO
