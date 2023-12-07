import React, { useState } from "react";
import { product } from "../Product_data";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setproducts] = useState(product);

  const filterMethod = (category) =>{

    setproducts(product.filter((data) => data.category == category));
  }

  // console.log(product);
  return (
    <>
      <div className="container d-flex justified-content-between sticky-top bg-light">
        <button
         onClick={()=>setproducts(product)}
        className="btn btn-primary mx-3">All</button>
        <button
        onClick={()=>filterMethod("mobile")}
        className="btn btn-warning mx-3">mobile</button>
        <button
        onClick={()=>filterMethod("smartwatch")}
        className="btn btn-danger mx-3">smartwatch</button>
        <button
        onClick={()=>filterMethod("laptop")}
        className="btn btn-secondary mx-3">laptop</button>
      </div>
      <div className="container my-5">
        {products.map((data) => {
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
  );
};
export default Product;
