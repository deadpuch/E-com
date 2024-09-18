import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Single.css";

function Singlepage() {
  const [data, setdata] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [id]);

  return (
    <section className="container mx-auto my-20">
      <div className="flex flex-col sm:flex-row p-5">
        <div className="SPimgContainer">
          <img
            src={data?.image}
            alt={data?.title}
            
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="font-Opensans text-sm text-gray-400 mb-2">
            {" "}
            {data?.category}{" "}
          </h2>
          <h1 className="font-Opensans font-medium text-gray-500 mb-4">
            {data?.title}
          </h1>
          <p className="font-Opensans lg:pr-60">{data?.description}</p>
          <div className="mt-8">
            <h1 className="font-Opensans font-bold">Price : {data?.price} INR</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Singlepage;
