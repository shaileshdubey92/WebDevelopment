import React from 'react'
import { useParams } from 'react-router-dom'
import { product} from '../product_data';
import Navigate_Component from '../Components/Navigate_Component';

const DynamicRouter = () => {
    // console.log(useParams());
    const {slug} = useParams();

const product_Detail = product.filter((data)=>data.Id==slug);
console.log(product_Detail);



  return (
    <>
    <div className='container text-center'>
      <h1>{product_Detail[0].title}</h1>
      <p>{product_Detail[0].discription}</p>
      <div 
      style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        margin:"1rem",

      }

      }>
        <img
        style={{
          height:"100%",
          width:"30%",
          objectFit:"contain",

        }}
        src={product_Detail[0].imgurl}
        alt=""
        />

      </div>
      <div className='my-5'>
        <Navigate_Component/>
      </div>
      
    </div>
    </>
  )
}

export default DynamicRouter
