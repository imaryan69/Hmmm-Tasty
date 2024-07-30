import React from "react";
import { blog } from "../Data";
const Blog = () => {
  return (
    <>
      <section class="blogs" id="blogs">
        <h1 class="heading">
          our <span>blogs</span>
        </h1>

        <div class="box-container">
          {blog.map((item, index) => (
            <div class="box" key={index * Math.random()}>
              <div class="image">
                <img src={item.img} alt="" />
              </div>
              <div class="content">
                <a href="#" class="title">
                  Tasty and Refreshing spices
                </a>
                <span>by admin / 21st may, 2023</span>
                <p>
                The food was a delightful experience, bursting with tasty and refreshing spices. Each bite was a perfect blend of flavors, creating a symphony of taste on the palate. The spices were well-balanced, making every dish a memorable culinary adventure.
                </p>
                <a href="#" class="btn">
                  read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;