import React, { useState } from 'react'
import moneyContext from './MoneyContext'

const MoneyState = (props) => {
const money = 1000;


const [person, setPerson]= useState({
name: 'Ram Sharma',
gmail: 'RAm@sssgg',
contact: 363633
})

const [counter, setCounter] =useState(0);
  return (
    <moneyContext.Provider
     value={{money,person,counter,setCounter}}>
        {props.children}
    </moneyContext.Provider>
  )
}

export default MoneyState
