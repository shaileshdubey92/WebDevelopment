import React, { useState } from 'react'

const Multiple_input_handling = () => {
const style={
    margin: '2rem'
}

const [formData, setFormData,] = useState({

    name:'',
    gmail:'',
    password:'',
})
const handleChange =(e) =>{
    setFormData({...formData, [e.target.name]:[e.target.value]});
}
const submitHandler = (e) =>{
  e.preventDefault();
  alert("you're form has been submited")
  setFormData({
    name:'',
    gmail:'',
    password:'',
})
}

  return (
    <form onSubmit={submitHandler}>
      name :-{" "}
      <input 
      name="name"
      value={formData.name}
      onChange={handleChange}
      style={style}
      type="text" />

      <br/>

      password :-{" "}
       <input
      name="password"
      value={formData.password} 
      onChange={handleChange}
      style={style}
      type="text" />
      <br/>
      gmail :- {" "} 
      <input
      name="gmail"
      value={formData.gmail}
      onChange={handleChange}
      style={style}
        type="text" />

<br/>
<button>Submit</button>
    </form>
    
  )
}

export default Multiple_input_handling
