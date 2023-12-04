import React, {useEffect, useState} from 'react'


const Fetch_Data = () => {
    const [apiData, setApiData]= useState([])

    useEffect(()=> {

const fetchdata = async () => {
    const api = await fetch('https://jsonplaceholder.typicode.com/users');
const data = await api.json()

console.log(data);
setApiData(data);

}

fetchdata()

    },[])
  return (
    <div>
        {apiData.map((data)=>{
        return(
            <><div className='container text-center bg-primary my-5'>
                <h1>{data.userId}</h1>
                <h1>{data.title}</h1>
                <h1>{data.name}</h1>
                <h2>{data.gmail}</h2>
            </div>
            </>
        )
        })}
    </div>
  )
  
}

export default Fetch_Data
