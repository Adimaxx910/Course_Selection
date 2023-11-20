import React from 'react';
import '../Components/Styles/Slider.css'; 


const Content = () => {
    return (
      <div className="content-container">
        <h1 className='p-5 text-center text-3xl text-yellow-200 mb-12 font-bold mt-14 bg-cyan-800'>Features</h1>
        <div className="content-section left">
          <div className="content-image">
            <img src="slide1.jpg" alt="Content 1" />
          </div>
          <div className="content-text">
            <h2>Welcome to Our Website!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua.
            </p>
            <button className="read-more-button">Read More</button>
          </div>
        </div>
  
        <div className="content-section right">
          <div className="content-text">
            <h2>Discover Our Amazing Features</h2>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua.
            </p>
            <button className="read-more-button">Read More</button>
          </div>
          <div className="content-image">
            <img src="slide2.jpg" alt="Content 2" />
          </div>
        </div>
  
        <div className="content-section left">
          <div className="content-image">
            <img src="slide3.jpg" alt="Content 3" />
          </div>
          <div className="content-text">
            <h2>Explore Our Services</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
              et dolore magna aLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua.
              it Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua.
            </p>
            <button className="read-more-button">Read More</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Content;