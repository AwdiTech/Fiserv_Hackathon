import promotionpic from "../../assets/images/food-promotion.jpg";
import foodpic1 from "../../assets/images/food-pic1.jpg";
import foodpic2 from "../../assets/images/food-pic2.jpeg";
import foodpic3 from "../../assets/images/food-pic3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./ImageCarousel.scss";

/**
 * Renders an image carousel component using the "react-responsive-carousel" npm package.
 *
 */
function ImageCarousel() {
  const settings = {
    showThumbs: false,
    infiniteLoop: true,
    autoPlay: true,
    showArrows: false,
    infiniteLoop: true,
    interval: 7000,
    showIndicators: true,
    transitionTime: 750,
    showStatus: false,
    dynamicHeight: false,
  };

  return (
    <div className="slider-container">
      <Carousel {...settings} className="carousel">
        <div>
          <img src={promotionpic} alt="promotion" className="slider-image" />
        </div>
        <div>
          <img src={foodpic1} alt="food" className="slider-image" />
        </div>
        <div>
          <img src={foodpic2} alt="food" className="slider-image" />
        </div>
        <div>
          <img src={foodpic3} alt="food" className="slider-image" />
        </div>
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
