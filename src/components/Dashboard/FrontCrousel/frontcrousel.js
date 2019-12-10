import React from 'react';
import Slider from "react-slick";
// import { baseUrl } from "./config";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SliderImg from './images/FC.png'
import SliderImg1 from './images/slider.png'
import AuraImg from './images/aura.jpg'

class FrontCarousel extends React.Component {
    render() {
      const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
       
        return (
         
          <div>
          <Slider autoplay={true} {...settings} style={{overflow:'hidden'}}>
            <div>
              <img src={AuraImg} style={{
                  width:'100%'
                }}/>/>
            </div>
            <div>
              <img src={SliderImg1} style={{
                  width:'100%'
                }}/>
            </div>
          </Slider>
        </div>
        )
    }
}
export default FrontCarousel;