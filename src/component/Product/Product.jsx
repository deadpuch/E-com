import React from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { cart } from "../../Redux/ProductSlice";
import {useNavigate } from "react-router-dom";

function Product({ main }) {
  const { addcart } = useSelector((store) => store.data);
  const dispatch = useDispatch();
  const navigate =useNavigate()

  const addtocart = () => {
    dispatch(cart(main));
  };

  const showProduct = () => {

    navigate(`/Singlepage/${main.id}`);
    
  };

    

  return (
    <>
      
        <div className="flex P_M_Container flex-col " >
          <div className="ProductimageContainer" onClick={showProduct}>
            <img
              src={main.image}
              alt=""
              className="w-full h-full  object-contain"
            />
          </div>

          <div className="mt-2">
            <h1 className="font-Opensans font-medium text-gray-600">
              {main.title}
            </h1>
          </div>

          <div className="mt-2 flex justify-between">
            <h3 className="font-Opensans font-semibold">
              {`${main.price}`} INR
            </h3>
            <h3
              className=" underline font-Opensans font-medium cursor-pointer"
              onClick={addtocart}
            >
              Add to cart
            </h3>
          </div>
        </div>
      
    </>
  );
}

export default Product;
