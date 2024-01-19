import React from 'react';
import Slider from "react-slick";
import { productLists } from '../../../Data';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './style.scss';




const Index = () => {
  const sliderProducts = productLists.slice(0,4)
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "white" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className='mainSlider'>
      <Slider {...settings}>
        {
          sliderProducts.map((item)=>{
            const {cover} = item;
            return <div className='mainSlider__slide'>
              <img src={cover} alt="slider__image" />
            </div>
          })
        }
      </Slider>
    </div>
  )
}

export default Index;