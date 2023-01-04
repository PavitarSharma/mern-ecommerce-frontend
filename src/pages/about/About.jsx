import React from "react";
import { farmerImages, images, teamData } from "../../assets/data";
import "./About.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const sliderSettings = {
    // removes default buttons
    dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
     
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    lazyLoad: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="section-1 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="text-center yellow-color section-1-title">
                About us
              </p>
            </div>
            <div className="col-12">
              <p className="text-center section-title yellow-color mt-5">
                Company
              </p>
            </div>
            <div className="col-12">
              <div className="d-flex -align-items-center justify-content-center mt-5">
                <p className="section-1-description">
                  Cena nutrition was started in Jan 2020 as a home run business
                  catering to a small set of customers and with limited market
                  reach. In a short span of time, it has grown into an
                  established FMCG with the sole focus on providing high quality
                  super foods at an affordable price.
                </p>
              </div>
              <div className="d-flex -align-items-center justify-content-center mt-4">
                <p className="section-1-description">
                  We at Cena nutrition, focus on creating high quality products
                  made with right formula of raw ingredients that are
                  responsibly sourced directly from farmers. We have carved
                  ourselves a reputation in the market for creating extremely
                  high-quality, nutritious and healthy line of products with no
                  additives or added preservatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-2 section-team mb-5">
        <div className="container">
          <div className="row mt-5">
            <div className="col-12">
              <p className="text-center yellow-color section-title">The Team</p>
              <p className="text-center fs-5">Meet our talented team.</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <div className="d-flex flex-wrap justify-content-center gap-5">
                {teamData.map((data) => {
                  return (
                    <div className="team" key={data.id}>
                      <div className="team-head">
                        <div className="team-image">
                          <img
                            className="img-fluid"
                            src={data.image}
                            alt={data.name}
                          />
                          <div className="team-body">
                            <p className="team-author yellow-color mb-2">
                              {data.name}
                            </p>
                            <p className="team-role mb-0">{data.role}</p>
                          </div>
                        </div>
                      </div>
                      <div className="team-description">
                        <p>{data.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-3 infrastructure">
        <div className="container-fluid">
          <div className="row my-5">
            <div className="col-12">
              <p className="text-center yellow-color section-title">
                Infrastructure
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Slider {...settings}>
                {images.map((data) => (
                  <div key={data.id} className="infrastructure-image">
                    <img src={data.image} alt={data.alt} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="section-4 farmer-logo">
        <div className="container-fluid">
          <div className="row my-5">
            <div className="col-12">
              <p className="text-center yellow-color section-title">
              Affiliates & Certifications
              </p>
              <p className="text-center fs-5">Our proud affiliate partners.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="logo-images">
                <Slider {...sliderSettings}>
                  {farmerImages.map((data) => (
                    <div key={data.id} className="logo-image">
                      <img src={data.url} alt={data.alt} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
