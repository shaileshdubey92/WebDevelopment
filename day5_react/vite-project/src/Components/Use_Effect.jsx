import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';


const Use_Effect = () => {
    const [counter, setCounter] = useState(0);

    useEffect(()=>{
console.log("use Effect is running");
document.title = `sideEffect ${counter}`

},[counter]);

    
  return (
    <div>
        <h1>{counter}</h1>

        <button
        onClick={()=>setCounter(counter+1)}
        className="btn btn-primary">Increase</button>
        
        </div>
  );
};

export default Use_Effect
