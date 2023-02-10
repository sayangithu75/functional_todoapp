import React, {useState} from 'react'
import {v4 as uuidv4} from "uuid";
import "./todolist.css"
function Aray(){

    const [item,setItem]=useState("");
    const [list,setList]=useState([]);
    
    const handleClick=(e)=>{
        if(e.target.style.textDecoration){
            e.target.style.removeProperty('text-decoration');
        }
        else {
            e.target.style.setProperty('text-decoration', 'line-through');
          }
    }
    const addTodo=(todo)=>{
        const newItem=[...list,{id:uuidv4(),title:item}];
        setList(newItem);
    }
    const formSubmit=(e)=>{
        e.preventDefault();
        if(!item)return;
        addTodo(item);
        setItem("");
    }
    return(
        <>
        <h1>Enter the todo list</h1>
        <input  type='text'id='m' name='m' value={item} onChange={e=>setItem(e.target.value)}></input>
        <button type="submit" onClick={formSubmit}>Add Item</button>

        <div className="list">
        <ul>
            {list.map((todo)=>{
                return <li key={todo.id} onClick={handleClick}>{todo.title}</li>
            })}
        </ul>
        </div>
        </>
    )
}
export default Aray