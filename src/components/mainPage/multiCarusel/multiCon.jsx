import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pastle from '../../../assets/pastle.svg'
import car1 from '../../../assets/car1.svg'
import car2 from '../../../assets/car2.svg'
import car3 from '../../../assets/car3.svg'
import car4 from '../../../assets/car4.svg'
import car5 from '../../../assets/car5.svg'
import car6 from '../../../assets/car6.svg'
import car7 from '../../../assets/car7.svg'
import car8 from '../../../assets/car8.svg'
import car9 from '../../../assets/car9.jpg'
import car10 from '../../../assets/car10.jpg'
import car11 from '../../../assets/car11.jpg'
import car12 from '../../../assets/car12.webp'
import { MultiCon } from "./multiStyle";
import { Button } from "@mui/material";

export const  Responsive = ()=> {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <MultiCon>
        <div className="Recomend"><h2>Recommend</h2></div>
        <div className="slider-container">
      <Slider {...settings}>
      <div className="box">
          <div className="box2">
            <img src={car1} alt="" />
            <h3>Knaus</h3>
            <div className="Butwrap"><Button>Discover the range</Button></div>
            <h5>Choose a model <img src={pastle} alt="img-icon" /></h5>
          </div>
      </div>
      <div className="box">
          <div className="box2">
            <img src={car2} alt="" />
            <h3>Knaus</h3>
            <div className="Butwrap"><button>Discover the range</button></div>
            <h5>Choose a model <img src={pastle} alt="img-icon" /></h5>
          </div>
      </div>
      <div className="box">
          <div className="box2">
            <img src={car3} alt="" />
            <h3>Knaus</h3>
            <div className="Butwrap"><button>Discover the range</button></div>
            <h5>Choose a model <img src={pastle} alt="img-icon" /></h5>
          </div>
        </div>
        <div className="box">
          <div className="box2">
            <img src={car4} alt="" />
            <h3>Knaus</h3>
            <div className="Butwrap"><button>Discover the range</button></div>
            <h5>Choose a model <img src={pastle} alt="img-icon" /></h5>
          </div>
        </div>
        <div className="box">
          <div className="box2">
            <img src={car5} alt="" />
            <h3>Knaus</h3>
            <div className="Butwrap"><button>Discover the range</button></div>
            <h5>Choose a model <img src={pastle} alt="img-icon" /></h5>
          </div>
        </div >
        <div className="box">
          <div className="box2">
            <img src={car6} alt="" />
            <h3>Knaus</h3>
            <div className="Butwrap"><button>Discover the range</button></div>
            <h5>Choose a model <img src={pastle} alt="img-icon" /></h5>
          </div>
        </div>
        <div className="box">
          <div className="box2">
            <img src={car7} alt="" />
            <h3>Knaus</h3>
            <div className="Butwrap"><button>Discover the range</button></div>
            <h5>Choose a model <img src={pastle} alt="img-icon" /></h5>
          </div>
        </div>
        <div className="box">
          <div className="box2">
            <img src={car8} alt="" />
            <h3>Knaus</h3>
            <div className="Butwrap"><button>Discover the range</button></div>
            <h5>Choose a model <img src={pastle} alt="img-icon" /></h5>
          </div>
        </div>
        <div className="box">
          <div className="box2">
            <img src={car9} alt="" />
            <h3>Knaus</h3>
            <div className="Butwrap"><button>Discover the range</button></div>
            <h5>Choose a model <img src={pastle} alt="img-icon" /></h5>
          </div>
        </div>
        <div className="box">
          <div className="box2">
            <img src={car10} alt="" />
            <h3>Knaus</h3>
            <div className="Butwrap"><button>Discover the range</button></div>
            <h5>Choose a model <img src={pastle} alt="img-icon" /></h5>
          </div>
        </div>
        <div className="box">
          <div className="box2">
            <img src={car11} alt="" />
            <h3>Knaus</h3>
            <div className="Butwrap"><button>Discover the range</button></div>
            <h5>Choose a model <img src={pastle} alt="img-icon" /></h5>
          </div>
        </div>
        <div className="box">
          <div className="box2">
            <img src={car12} alt="" />
            <h3>Knaus</h3>
            <div className="Butwrap"><button>Discover the range</button></div>
            <h5>Choose a model <img src={pastle} alt="img-icon" /></h5>
          </div>
        </div>
      </Slider>
        </div>
        <div className="Recomend2"><h2>video</h2></div>
    </MultiCon>
  );
}

export default Responsive;
