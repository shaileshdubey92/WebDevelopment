import React, { useContext } from 'react'
import moneyContext from '../Context/MoneyContext'



const Janta_People = () => {
    // console.log(useContext(moneyContext))
    const data = useContext(moneyContext)

  return (
    <>
      Janta_People = {data.money}

      <div className='container'>
<h1>{data.person.name}</h1>
<h2>{data.person.gmail}</h2>
<h3>{data.person.contact}</h3>

<h1>Counter = {data.counter}</h1>

<button
onClick={()=>data.setCounter(data.counter+1)}
className="btn btn-warning">Increace</button>

      </div>
      </>
   
  )
}

export default Janta_People
