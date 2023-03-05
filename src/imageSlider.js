import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import React from 'react'

const ImageSlider = ({images}) => {

const settings = {
    infinite: true,         /* Allows for an infinite scroll */
    dots: true,             /* Navigation dots */
    slidesToShow: 1,        /* Number of slides shown in frame */
    slideToScroll: 1,       /* Number of slides to Scroll at once */
    autoplay: true,         /* Autoplays the slides without user interaction */
autoplaySpeed: 4000,        /* Speed of autoplay */

};
return (
	<>
	<div className="tag">
		<h1>Carousel</h1>
	</div>
	<div className="imgslider">
		<Slider {...settings}>                      {/* Take in settings variable declared above */}
		{images.map((item) => (                      /* Map through the images */
			<div key={item.id}>                     {/* Grab the image id */}
			<img src={item.src} alt={item.alt} />   {/* Grab the image source or alt if source broken */}
			</div>
		))}
		</Slider>
	</div>
		</>
)
}
export default ImageSlider;
