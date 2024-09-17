import React, { Fragment, useEffect, useState } from "react";
import Product from "../Product/Product";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { allapi } from "../../Redux/ProductSlice";

function Home() {
  const { count, apistate } = useSelector((store) => store.data);
  const dispatch = useDispatch();

  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then((res) => {
        dispatch(allapi(res.data));
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [dispatch]);

  return (
    <section className="container mx-auto flex flex-wrap gap-20 mt-9">
      {apistate.map((product) => (
        <Product main={product} key={product?.id} />
      ))}
    </section>
  );
}

export default Home;
