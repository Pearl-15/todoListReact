import React,{useState} from "react";

function InputArea(props){

    const [newItem, setNewItem] = useState("");

    function handleChange(e){
        const newItem = e.target.value
        setNewItem(newItem)
      }

    return(
        <div className="form">
            <input type="text" name="item" value={newItem} onChange={handleChange}/>
            <button onClick={()=>{
                props.onAdd(newItem);
                setNewItem("")
            }}>
            <span>Add</span>
            </button>
      </div>
    )
}

export default InputArea;