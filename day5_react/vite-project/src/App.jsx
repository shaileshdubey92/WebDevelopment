import React from 'react'
import Person from"./Components/Person"
import Counter from './Components/Counter'
import Persondetail from './Components/Persondetail'
// import Adharcard from './Components/Adharcard'

const App = () => {

 

  return (
    <>
    <div>
      {/* <Person name={"laxman"} age={23} gamil={"ram@gmail.com"} phone={"8383838"}/>
      <Person name={"lax"} age={24} gamil={"rlax@gmail.com"} phone={"33443"}/>
      <Person name={"man"} age={25} gamil={"man@gmail.com"} phone={"8383838"}/>       */}

      
<Counter></Counter>
<Persondetail></Persondetail>

    </div>
 

 

    </>
  )
}

export default App
