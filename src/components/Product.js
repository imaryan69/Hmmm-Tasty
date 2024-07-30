import React from 'react'
import { product } from '../Data'
const Product = () => {
  return (
    <section className="products" id = "products">
       <h1 className='heading'>
        Our <span>Products</span>
       </h1>
        <div className="box-container">
            {product.map((item,index)=>(
                <div className="box">
                    <div className="icons">
                        <a href="#" className="fas fa-shopping-cart"></a>
                        <a href="#" className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                    </div>
                    <div className="image">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="content">
                        <h3>fresh Coffee</h3>
                        <div className="stars">
                            < i className="fas fa-star"/>
                            < i className="fas fa-star"/>
                            < i className="fas fa-star"/>
                            < i className="fas fa-star"/>
                            < i className="fas fa-star-half-alt"/>
                        </div>
                        <div className="price">
                        ₹222.12 <span>₹344.21</span>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    </section>
  )
}

export default Product
