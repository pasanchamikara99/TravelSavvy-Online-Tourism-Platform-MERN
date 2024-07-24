import React, { useState } from 'react'
import axios from "axios";

export default function AddEvent() {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    function saveEvent(e){
      e.preventDefault();
      const newEvent = {name, image};

      axios.post('http://localhost:8000/event/add', newEvent)
      .then((res)=>{
          console.log(res);
      })
      .catch((err)=>{
          console.log(err);
      })
    }
  return (
    <div>
        Add New Event
        <hr/>
        <input
         onChange={(e)=>{
            setName(e.target.value)
         }}></input>
         <br/>

         <input
         onChange={(e)=>{
            setImage(e.target.value)
         }}></input>
         <br/>
         <button
            onClick={saveEvent}>Submit</button>
    </div>
  )
}
