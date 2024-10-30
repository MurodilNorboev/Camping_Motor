import React from "react";
import Slider from "react-slick";
import { CampCon } from './datailStyle'
import img1 from '../../assets/campimg1.png'
import img2 from '../../assets/campimg2.png'
import img3 from '../../assets/campimg3.png'
import img4 from '../../assets/campimg4.jpg'
import img5 from '../../assets/campimg5.jpeg'
import img6 from '../../assets/campimg6.jpg'
import img7 from '../../assets/campimg7.jpeg'
import img8 from '../../assets/campimg8.jpg'
import img9 from '../../assets/campimg9.webp'
import img10 from '../../assets/campimg10.avif'
import img11 from '../../assets/campimg11.jpg'
import img12 from '../../assets//campimg12.jpg'
import map_img from '../../assets/map_img0.svg'
import './camp.css'



function DatailCamping() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    speed: 20000,
    autoplaySpeed: 20000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
         
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
  <>
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3><img src={img1} alt="camping-img" /></h3>
        </div>
        <div>
          <h3><img src={img2} alt="camping-img" /></h3>
        </div>
        <div>
          <h3><img src={img3} alt="camping-img" /></h3>
        </div>
        <div>
          <h3><img src={img4} alt="camping-img" /></h3>
        </div>
        <div>
          <h3><img src={img5} alt="camping-img" /></h3>
        </div>
        <div>
          <h3><img src={img6} alt="camping-img" /></h3>
        </div>
        <div>
          <h3><img src={img7} alt="camping-img" /></h3>
        </div>
        <div>
          <h3><img src={img8} alt="camping-img" /></h3>
        </div>
        <div>
          <h3><img src={img9} alt="camping-img" /></h3>
        </div>
        <div>
          <h3><img src={img10} alt="camping-img" /></h3>
        </div>
        <div>
          <h3><img src={img11} alt="camping-img" /></h3>
        </div>
        <div>
          <h3><img src={img12} alt="camping-img" /></h3>
        </div>
      </Slider>
    </div>
    <CampCon>
        <div className="flexCon">
            <h1>Camping Del Sole Village</h1>

            <div className="Location">
                 <h4>Location</h4>
                 <button>Copy map</button>
            </div>

            <div className="numWrap">

                <div className="locationWrap">
                <div><img src="" alt="" /><h5>Korea, Seul</h5></div>
                <div><img src="" alt="" /><h5>005- 862 -8569</h5></div>
                </div>

                <div className="locationWrap">
                <div><img src="" alt="" /><h5>from 11:00 to 19:00</h5></div>
                <div><img src="" alt="" /><h5>logo.com</h5></div>
                </div>

            </div>

            
            <div className="info">
                <h4>Description</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien senectus feugiat in vitae consequat libero placerat nascetur ultrices. Aenean mattis sapien a donec urna, 
               bibendum. Maecenas mattis phasellus nunc sed a fringilla risus. Aenean sed fusce pretium sit venenatis bibendum convallis commodo enim.Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit. Sapien senectus feugiat in vitae consequat libero placerat nascetur ultrices. Aenean mattis sapien a donec urna, <br />
               bibendum. Maecenas mattis phasellus nunc sed a fringilla risus. Aenean sed fusce pretium sit venenatis bibendum convallis commodo enim.</p>
            </div>
        </div>
        <div className="map-img">
        <img src={map_img} alt="map-img" />
        </div>
    </CampCon>
  </>
  );
}

export default DatailCamping;
