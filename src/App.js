import React, { useState } from 'react';
import ToDoList from "./toDoList";
import './App.css';


function App() {
  const [inputlist,setItem]=useState("");
  const[list,setList]=useState([]);
  const itemEvent=(event)=>{
    setItem(event.target.value);
  }
  const listOfItems=()=>{
    setList((oldlist)=>{
      return [...oldlist,inputlist];
    });
    setItem("");
  }
  const deleteItems=(id)=>{
    console.log("deleted");
    setList((oldItem)=>{
      return oldItem.filter((arrele,index)=>{
        //console.log(id);
        return index!==id;
      });

    })
  }
  return (
    <div className="main_div">
    <div className="center_div">
      <br/>
      <h1>To Do List</h1>
      <input type="text" placeholder="Add a item" value={inputlist} onChange={itemEvent}/>
      <button onClick={listOfItems}>+</button> 
      <ul>
        {/* <li>{inputlist}</li> */}
        {list.map((item,index)=>{
          return <ToDoList key={index} id={index} text={item} onSelect={deleteItems}/>
        })}
      </ul>
    </div>
    </div>
  );
}

export default App;
