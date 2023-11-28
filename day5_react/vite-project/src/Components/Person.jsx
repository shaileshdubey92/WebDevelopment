import React from 'react'

const Person = () => {

    const person = {
        name:"ram",
        age:23,
        gmail:"sha.d92@gmail.com",
        phone:383747493,
    }

const style ={
  border:"2px solid yellow",
  padding:"2rem",
  backgroundColor:"blue",
}

const style2 ={
  border:"5px solid blue",
  padding:"2rem",
  backgroundColor:"yellow",
  color:'black',
}


  return (
    <>
    <div
    //  style={{
    //   border:'2px solid yellow',
    //   padding: '2rem',
    //   backgroundColor:'blue',
    // }}
    style={style}>
    <h1 
    className='suparman'
    // style={style2}
    >{person.name}</h1>
    <h1>{person.age}</h1>
    <h1>{person.gmail}</h1>
    <h1>{person.phone}</h1>
      
    </div>
    </>
  )
}

export default Person
