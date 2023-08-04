import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {

  const [newItem, setNewItem] = useState("");
  const [toDoList, setToDoList] = useState([]);

  function handleClick(){
    if (newItem !== ""){
    //   const newToDoList = [...toDoList,newItem]
    // setToDoList(newToDoList)

    //Alternative
    setToDoList(preItems =>{
      return(
        [...preItems, newItem]
      )
    })
    setNewItem("")
    }
    
  }

  function deleteItem(id){
    setToDoList(preItems =>{
      return preItems.filter((item, index)=>{
        return index !== id;
      })
    })
  }

  function handleChange(e){
    const newItem = e.target.value
    setNewItem(newItem)
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" name="item" value={newItem} onChange={handleChange}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
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
