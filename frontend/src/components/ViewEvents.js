import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function ViewEvents() {

    const [event, setEvent] = useState([]);
    const [changed, setChanged] = useState(false);

    function deleteEvent(id){
        console.log(id);
        axios.delete(`http://localhost:8000/event/delete/${id}`)
        .then((res)=>{
            console.log(res);
            setChanged(true)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        axios.get('http://localhost:8000/event/')
        .then((res)=>{
            setEvent(res.data);
            setChanged(true)
        })
        .catch((error)=>{
            console.log(error);
        });
        setChanged(true);
    },[changed])

  return (
    <div>
        {event.map((eventData)=>(
            <div>
                <p>{eventData.name}</p>
                <img src={eventData.image} style={{width: "100px"}}/>
                <button
                    onClick={() => deleteEvent(eventData._id)}>Delete</button>
            </div>
        ))}
    </div>
  )
}
