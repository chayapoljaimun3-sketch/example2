"use client"

import { useState } from "react"

export default function add() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
    

  function addNewName(e: any){
    e.preventDefault();
    setItems([...items,name]);
  }

  function handleNameChange(e: any){
    e.preventDefault();
    setName(e.target.value);
  }   

  return (
    <div>
        <ul>
            {items.map(i => (<li key={i}>{i}</li>))}
        </ul>
      <form onSubmit = {addNewName} >
        <input type="text" value={name} onChange={handleNameChange} />
        <button type="submit" >เพิ่มชื่อ</button>
      </form>
    </div>
  );
}
    