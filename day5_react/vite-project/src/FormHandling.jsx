import React, { useState } from 'react'

const FormHandling = () => {
    const [data, setData]= useState("");
    const [userName, setUserName]= useState("");
    const [password, setpassword]= useState("");
    const [Gmail, setGmail]= useState("");

    const handlechange = (value) =>{
        setUserName(value)
    }
  return (
    <>
     <div className="container my-5
     text-center d-flex
     justified-content-center items-center">
    
{/* <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form> */}

     
userName:- <input 
value={userName}
onChange={(e)=>setUserName(e.target.value)}
type="text"/>
<botton className="btn btn-primary mx-3">Submit</botton>


password:- <input 
value={password}
onChange={(e)=>setpassword(e.target.value)}
type="text"/>
<botton className="btn btn-primary mx-3">password</botton>

Gmail:- <input 
value={Gmail}
onChange={(e)=>setGmail(e.target.value)}
type="text"/>
<botton className="btn btn-primary mx-3">Gmail</botton>

</div>

<h1 className="text-center">{userName}</h1>
<h1 className="text-center">{password}</h1>
<h1 className="text-center">{Gmail}</h1>



    </>
  )
}

export default FormHandling
