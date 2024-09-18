import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./cat.css";



function Catpage() {
  const { category } = useParams();
  const [data, setdata] = useState([]);


  useEffect(() => {
    axios(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [category]);


  return (
    <>
      <div className="flex flex-wrap gap-20 container mx-auto my-10 justify-center">
        {data.map((product) => (
          <div className="catimagholder flex flex-row flex-wrap">
            <div className="catimageContainer">
              <img
                src={product.image}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <div>
                <h1 className="font-Opensans font-medium text-gray-600">
                  {product.title}
                </h1>
              </div>

              <div className="mt-2 flex justify-between">
                <h3 className="font-Opensans font-semibold">
                  {`${product.price}`} INR
                </h3>

              
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Catpage;
