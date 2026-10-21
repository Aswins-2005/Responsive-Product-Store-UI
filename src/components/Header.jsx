import React from 'react'

const Header = ({cartcount  = 0}) => {
  return (
    <header className='header'>
        <nav className='nav'>
           <h2 className="logo">HoodieZone<span></span></h2>
            <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
            </ul>

            <div className='icom'>
                 <i className="fa-solid fa-cart-shopping"></i>
                 <span>Cart ({cartcount})</span>

            </div>

        </nav>
    </header>
  )
}

export default Header