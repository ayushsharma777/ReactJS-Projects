import React from "react";
import AppName from "./components/AppName";
import AddTODO from "./components/AddTODO";
import ToDoItems from "./components/ToDoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemContext } from "./store/todoItems-store";


function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "01/03/2024",
  //   },
  //   {
  //     name: "Go to college",
  //     dueDate: "01/03/2024",
  //   },
  // ];

  const [todoItems, setTodoItems] = useState([]);
  const addNewItem = (itemName, itemDueDate) => {
   
      const newTodoItems = [
        ...todoItems,
        {
          name: itemName,
          dueDate: itemDueDate,
        },
      ];
  
      setTodoItems(newTodoItems);
    
    
  };

  const deleteItem=(index)=>{
    const newItems = [...todoItems];
    newItems.splice(index,1); //alternate method is filter
    setTodoItems(newItems);
  }
  return (
    //Context should only be used when we have a constant value, It causes re-rended, and
    // that's why if a value if frequently changed, we should not use it as context

    <TodoItemContext.Provider value={
      {
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem : deleteItem
      }
    }>
    <center>
      <div className="container text-center">
        <AppName></AppName>
        <AddTODO ></AddTODO>
        <WelcomeMessage></WelcomeMessage>
        <ToDoItems></ToDoItems>
      </div>
    </center>
    </TodoItemContext.Provider>
  );
}

export default App;
