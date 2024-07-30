import React from 'react'
import AboutImg from '../assets/images/about-img' 
const About = () => {
  return (
    <section className="about" id="about">
        <h1 className="heading">
            <span>About</span> us
        </h1>
        <div className="row">
            <div className="image">
                <img src={AboutImg} alt="" />
            </div>
            <div className="content">
                <h3>What Makes Our Food Special?</h3>
                <p>
                Our food is special because we use the freshest ingredients, sourced locally to ensure quality and taste. Each dish is crafted with care, blending traditional recipes with innovative techniques, resulting in flavors that are both unique and unforgettable.
                </p>
                <p>

Our food stands out due to our commitment to freshness and quality. We source the finest local ingredients and combine traditional recipes with creative flair, ensuring each dish is bursting with flavor and made with love and care.
                </p>
                <a href="#" className="btn">Learn More</a>
            </div>
        </div>
    </section>
  );
};

export default About
