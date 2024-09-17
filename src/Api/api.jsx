import { axios } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { allapi } from "../Redux/ProductSlice";
import { useEffect } from "react";



const {apistate}=useSelector((store)=>store.data)
const dispatch=useDispatch()





useEffect(() => {
    axios('https://fakestoreapi.com/products').then((res)=>{
    
    dispatch(allapi(res.data))
    
    }).catch((err)=>{
      console.log("error",err);
      
    })
      }, [dispatch]);