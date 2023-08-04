import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {


  const [toDoList, setToDoList] = useState([]);

  function handleClick(newItem){
    if (newItem !== ""){
    //   const newToDoList = [...toDoList,newItem]
    // setToDoList(newToDoList)

    //Alternative
    setToDoList(preItems =>{
      return(
        [...preItems, newItem]
      )
    })

    }
    
  }

  function deleteItem(id){
    setToDoList(preItems =>{
      return preItems.filter((item, index)=>{
        return index !== id;
      })
    })
  }

  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={handleClick}/>
      <div>
        <ul>
        {toDoList.map((item,index) => 
        <TodoItem 
        key={index}
        id={index}
        text={item}
        onChecked={deleteItem}
        />)}
        </ul>
        
      </div>
    </div>
  );
}

export default App;
