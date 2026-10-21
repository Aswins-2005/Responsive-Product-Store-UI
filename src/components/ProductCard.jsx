import React, { useState } from 'react'

const ProductCard = ({setcartcount,cartcount,product}) => {
    const[isclicked,setiscliked] = useState(false)
    function Addtocart(){
        setcartcount(cartcount+1)
        setiscliked(true)
        
    }

    function Removecart(){
        setcartcount(cartcount-1)
        setiscliked(false)
    }

  return (
    <>
        <div className='card'>
            <img src={product.image}/>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            {
                isclicked ? <button onClick={Removecart}>Remove From Cart</button> : <button className='remove' onClick={Addtocart}>Add To Cart</button>
            }
        </div>
    </>
)}

export default ProductCard