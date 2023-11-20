import React from 'react';
import Slider from 'react-slick';
import { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Components/Styles/Slider.css'; 

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
 
  useEffect(() => {
    // Trigger a re-render to start the autoplay initially
    const handleAutoplayStart = () => {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 0);
    };

    handleAutoplayStart();

    // Cleanup
    return () => window.removeEventListener('focus', handleAutoplayStart);
  }, []);

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="slide1.jpg" alt="Slider 1" />
        </div>
        <div>
          <img src="slide2.jpg" alt="Slider 2" />
        </div>
        <div>
          <img src="slide3.jpg" alt="Slider 3" />
        </div>
        <div>
          <img src="slide4.webp" alt="Slider 4" />
        </div>
        <div>
          <img src="slide5.jpg" alt="Slider 5" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
