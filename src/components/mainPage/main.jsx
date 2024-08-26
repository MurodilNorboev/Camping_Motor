import React from "react";
import Slider from "react-slick";
import './main.css'
import car1 from '../../assets/car1.svg'
import car2 from '../../assets/car2.svg'
import car3 from '../../assets/car3.svg'
import car4 from '../../assets/car4.svg'
import car5 from '../../assets/car5.svg'
import car6 from '../../assets/car6.svg'
import car7 from '../../assets/car7.svg'
import car8 from '../../assets/car8.svg'
import car9 from '../../assets/car9.jpg'
import car10 from '../../assets/car10.jpg'
import car11 from '../../assets/car11.jpg'
import car12 from '../../assets/car12.webp'
import but from '../../assets/button.png'

export default function MainComponent() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settingsw = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  }
  return (
    <>
    <Slider {...settings} className="carusel">
      <div className="carusel_img"></div>
      <div className="carusel_img2"></div>
      <div className="carusel_img3"></div>
    </Slider>
   
   <div>
   <div className="Recomend"><h2>Recomend</h2></div>
   <Slider {...settingsw} className="Multiplay">

     <div>
       <div className="multiConWrap">
        <img src={car1} alt="" />
        <h3>Knaus</h3>
       <div className="but">
       Discover the range
       </div>
        <h4>Choose a model</h4>
       </div>
     </div>

     <div>
       <div className="multiConWrap">
        <img src={car2} alt="" />
        <h3>Knaus</h3>
       <div className="but">
       Discover the range
       </div>
        <h4>Choose a model</h4>
       </div>
     </div>
     <div>
       <div className="multiConWrap">
        <img src={car3} alt="" />
        <h3>Knaus</h3>
       <div className="but">
       Discover the range
       </div>
        <h4>Choose a model</h4>
       </div>
     </div>
     <div>
       <div className="multiConWrap">
        <img src={car4} alt="" />
        <h3>Knaus</h3>
       <div className="but">
       Discover the range
       </div>
        <h4>Choose a model</h4>
       </div>
     </div>
     <div>
       <div className="multiConWrap">
        <img src={car5} alt="" />
        <h3>Knaus</h3>
       <div className="but">
       Discover the range
       </div>
        <h4>Choose a model</h4>
       </div>
     </div>
     <div>
       <div className="multiConWrap">
        <img src={car6} alt="" />
        <h3>Knaus</h3>
       <div className="but">
       Discover the range
       </div>
        <h4>Choose a model</h4>
       </div>
     </div>
     <div>
       <div className="multiConWrap">
        <img src={car7} alt="" />
        <h3>Knaus</h3>
       <div className="but">
       Discover the range
       </div>
        <h4>Choose a model</h4>
       </div>
     </div>
     <div>
       <div className="multiConWrap">
        <img src={car8} alt="" />
        <h3>Knaus</h3>
       <div className="but">
       Discover the range
       </div>
        <h4>Choose a model</h4>
       </div>
     </div>
     <div>
       <div className="multiConWrap">
        <img src={car9} alt="" />
        <h3>Knaus</h3>
       <div className="but">
       Discover the range
       </div>
        <h4>Choose a model</h4>
       </div>
     </div>
     <div>
       <div className="multiConWrap">
        <img src={car10} alt="" />
        <h3>Knaus</h3>
       <div className="but">
       Discover the range
       </div>
        <h4>Choose a model</h4>
       </div>
     </div>
     <div>
       <div className="multiConWrap">
        <img src={car11} alt="" />
        <h3>Knaus</h3>
       <div className="but">
       Discover the range
       </div>
        <h4>Choose a model</h4>
       </div>
     </div>
     <div>
       <div className="multiConWrap">
        <img src={car12} alt="" />
        <h3>Knaus</h3>
       <div className="but">
       Discover the range
       </div>
        <h4>Choose a model</h4>
       </div>
     </div>

   </Slider>
   </div>
   </>
      ); 
  }

