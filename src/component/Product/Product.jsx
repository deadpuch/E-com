import React from 'react'
import './Product.css'

function Product({main}) {
  return (
    <div>
       <div className='ProductimageContainer'>
        <img src={main.image} alt="" className='w-full h-full  object-contain' />
       </div>

       <div>
        <h1>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
        <h3>Price:{`${main.price}`}</h3>
       </div>
    </div>
  )
}

export default Product