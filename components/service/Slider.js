import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function OurPartners({ data }) {
	console.log(data);
	if (!data) {
		return <p>Loading...</p>;
	}

	const { images } = data;
	const settings = {
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<div className="container ">
			<div className="text-center  py-5">
				<h1 className="text-3xl lg:text-4xl font-bold text-red-900 tracking-wide">
					PACKAGES
				</h1>
				<p className="text-lg lg:text-2xl font-semibold tracking-wide">
					We are committed to providing our clients with <br /> the highest
					quality services and results.
				</p>
			</div>

			{/* <div className="slider-container  rounded-lg">
        <Slider {...settings} className="customer-logos mt-4">
          {images.map((image, index) => (
            <div key={index} className="slide">
              <div className="slide-content">
                <div className="w-72 h-72 mx-auto">
                  <Image
                    width={300}
                    height={300}
                    src={image}
                    alt={`partner-logo-${index}`}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div> */}
		</div>
	);
}

export default OurPartners;
