import React, { useState } from 'react';

function Componet() {
    const[name,setName]=useState("Jose");
    function handleNameChange(event){
        setName(event.target.value)
        console.log(name)
        }
    
    


  return (
    <div>
      <input value={name} onChange={handleNameChange}/>
      <p>Name:{name}</p>
    </div>
  )
}

export default Componet
