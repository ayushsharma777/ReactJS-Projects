import React, { useContext } from "react";
import TODOItem from "./TODOItem";
import { TodoItemContext } from "../store/todoItems-store";
const ToDoItems = () => {
  const {todoItems} = useContext(TodoItemContext);
  return (
    <div className="items-container">
      {todoItems.map((item, index) => {
        
        return (
          <TODOItem
            key={index}
            index={index}
            todoName={item.name}
            todoDate={item.dueDate}
          ></TODOItem>
        );
      })}
      
    </div>
  );
};

export default ToDoItems;
