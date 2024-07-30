import React from 'react'

const Contact = () => {
  return (
    <section className="contact" id ="contact">
        <h1 className="heading">
         <span>Contact </span>Us   
        </h1>
        <div className="row">
        <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        <form >
            <h3>Get In Touch</h3>
            <div className="inputBox">
                <span className="fa fa-user"></span>
                <input type="text" placeholder="name"/>
            </div>
            <div className="inputBox">
                <span className="fa fa-envelope"></span>
                <input type="email" placeholder="email"/>
            </div>
            <div className="inputBox">
                <span className="fa fa-phone"></span>
                <input type="number" placeholder="Number"/>
            </div>
            <input type="submit" className="btn" placeholder="contact now" />
        </form>
        </div>
        
    </section>
  )
}

export default Contact
