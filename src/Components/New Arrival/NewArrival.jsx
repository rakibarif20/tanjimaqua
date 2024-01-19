import React from 'react'
import Slider from "react-slick";
import { productLists } from '../../Data';
import NewArrivalItem from './New Arrival Item/NewArrivalItem';
import './newArrival.scss'

const NewArrival = () => {
    const  newArrivalProducts = productLists.slice(0,20)
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
  return (
    <div className='newArrival'>
      <h2>New Arrival :</h2>
      <div className='newArrival__items'>
      <Slider {...settings}>
        {
            newArrivalProducts.map(item=>{
                const {cover,title} = item;
                return <NewArrivalItem cover={cover} title={title} />
            })
        }
      </Slider>
      </div>
    </div>
  )
}

export default NewArrival
