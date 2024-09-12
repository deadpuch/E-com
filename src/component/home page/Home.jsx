import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import axios from 'axios'

function Home() {

    const [store,setstore]=useState([])
    

const show=()=>{
    axios('https://fakestoreapi.com/products').then((res)=>{

debugger
setstore(res.data);
    }).catch((err)=>{
        console.error(err);
    })
}

  return (


    <section>
        <div className='p-6 bg-slate-700 flex w-16' onClick={show}>Click me</div>
        {store.map((product)=><Product main={product} key={product.id} />)}
        
    </section>
  )
}

export default Home