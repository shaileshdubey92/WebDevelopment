import React, { useState } from 'react';

const Counter = () => {
 
  const [counter, setCounter] = useState(0);

 
  const increase = () => setCounter(counter + 1);

  console.log(counter)

 
  const decrease = () => setCounter(counter - 1);

  console.log(counter)

  return (
    <div>
      <p>{counter}</p>
      <br />

    
      <button onClick={increase}>Increase</button>

      
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default Counter;
