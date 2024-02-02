import React, { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TodoItemContext } from "../store/todoItems-store";

function TODOItem({index, todoName, todoDate}) {
 const {deleteItem} = useContext(TodoItemContext);

  return (
    <div>
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col">{todoName}</div>
          <div className="col">{todoDate}</div>
          <div className="col">
            <button type="button" onClick={()=>deleteItem(index)} className="btn btn-danger newBtn">
            <MdDeleteForever />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TODOItem;
