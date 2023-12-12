import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import {product} from '../Product_Data';



const SearchItems = () => {

    // console.log(useParams())
const {superman} = useParams();

const[filterData, setfilterData] = useState([])

useEffect(()=> {

    const filterData =() => {
        setfilterData(product.filter((data)=>data.title.toLowerCase().includes(superman.toLowerCase())
        )
        );
    };
    filterData();

},[superman]);

console.log(filterData);

  return (
<>

<div className="container my-5">
        {filterData.map((data) => {
          return (
            <>
              <div className="text-center my-5">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <Link to={`/products/${data.Id}`}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "1rem",
                  }}
                >
                  <img
                    style={{
                      height: "100%",
                      width: "30%",
                      objectFit: "contain",
                    }}
                    src={data.imgurl}
                    alt="img"
                  />
                </Link>
                <button className="btn btn-warning">
                  {data.price}
                  {""}₹
                </button>
              </div>
            </>
          );
        })}
      </div>
  </>


    
  )
}

export default SearchItems
