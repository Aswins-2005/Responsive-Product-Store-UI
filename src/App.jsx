import React, { useState } from 'react'
import { Banner } from './components/Banner'
import Header from './components/Header'
import "./App.css"
import ProductCard from './components/ProductCard'
import products from './data/productsData'
const App = () => {
    const [cartcount,setcartcount] = useState(0)
  return (
    <>
        <Header cartcount = {cartcount}/>
        <Banner/>
        <div className='container'>
            {
                products.map((product)=>(
                    <ProductCard key={products.id} product = {product} setcartcount = {setcartcount} cartcount ={cartcount}/>
                ))
            }
        </div>
    </>
  )
}
export default App