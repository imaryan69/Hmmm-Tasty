import React from 'react'
import { menu } from '../Data'
const Menu = () => {
  return (
    <section className="menu" id ="menu">
        <h1 className="heading">
            Our <span>Menu</span>
        </h1>
        <div className="box-container">
            {
                menu.map((item,index)=>(
                    <div className="box">
                        <img src={item.img} alt="" />
                        <h3>Tasty and Healty</h3>
                        <div className="price">
                        ₹219.32 <span>302.21</span>
                        </div>
                        <a href="" className="btn">Add To Cart</a>
                    </div>
                
                ))
            }

        </div>
    </section>
  )
}

export default Menu
