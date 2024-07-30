import React from 'react'

const Footer = () => {
  return (
    <>
    <section className="footer">
        <div className="share">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
            <a href="#" className="fab fa-pinterest"></a>
        </div>
        <div className="links">
            <a href="#"> Home</a>
            <a href="#"> About Us</a>
            <a href="#"> Menu</a>
            <a href="#"> Products</a>
            <a href="#"> Review</a>
            <a href="#"> Contact Us</a>
            <a href="#"> Blogs</a>
        </div>
        <div className="credit">
            Created by <span>Aryan</span>
        </div>
    </section>
    </>
  )
}

export default Footer