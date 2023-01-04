import React from "react";
import Slider from "react-slick";
import { testimonialData } from "../../assets/data";
import "./Testimonial.css";
testimonialData;
const Testimonial = () => {
  const slider = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 6000,
    cssEase: "linear",
  };
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide position-relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        {testimonialData.map((data) => {
          return (
            <div
              className={`${
                data.id === 1 ? "carousel-item active" : "carousel-item"
              }`}
              key={data.id}
            >
              <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="testimonial">
                            <h2 className="testimonial-header">Testimonials</h2>
                            <p className="testimonial-description my-4">{data.description}</p>
                            <div className="mt-4">
                                <p className="testimonial-author mb-0">{data.author}</p>
                                <p className="testimonial-role mt-1">{data.role}</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default Testimonial;
