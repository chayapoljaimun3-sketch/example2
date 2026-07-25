"use client"
import { useState } from "react";

export default function Home() {

  const [number , setNumber] = useState(1);
  const [name , setName] = useState("สมชาย");

  function incrementNumber() {
    setNumber(number + 1)
  }

  function decrementNumber() {
    if (number > 0) {
      setNumber(number - 1)
    }
  }

  function changeName(e: any) {
    e.preventDefault();
    alert(name)
  }

  function handleChangeName(e: any) {
    e.preventDefault();
    setName(e.target.value);

  }  
    
  return (
    <div>
      จำนวนที่คลิก: {number} <br />
      <button onClick = {incrementNumber} >คลิกเพิ่มค่า</button> | <button onClick = {decrementNumber} >คลิกเพิ่มค่า</button>
      <hr />
      <form onSubmit = {changeName} >
        ชื่อ : {name}  <br />
        <input value="text" name="name" onChange={handleChangeName}/>
        <button type="submit">เปลี่ยนชื่อ</button> 
      </form>
    </div>
  );
}
