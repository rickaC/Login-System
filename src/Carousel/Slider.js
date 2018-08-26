import React,{Component} from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider1 from '../Assets/img/slider1.jpg';

class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <Slider {...settings}>
        <div>
          <div className="hero-content">
            <div className="hero-text">
              <h1>ReactJS Project</h1>
            </div>
            <img className="img-responsive" src={Slider1}/>
          </div>
        </div>
        <div>
          <div className="hero-content">
            <div className="hero-text">
              <h1>ReactJS Project</h1>
            </div>
            <img className="img-responsive" src={Slider1}/>
          </div>
        </div>
        <div>
          <div className="hero-content">
            <div className="hero-text">
              <h1>ReactJS Project</h1>
            </div>
            <img className="img-responsive" src={Slider1}/>
          </div>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;