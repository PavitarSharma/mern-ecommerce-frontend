import React from "react";
import "./Banner.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const Banner = () => {
    
  return (
    <div>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item  active">
            <div className="carousel-1">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 col-md-6">
                    <div className="banner">
                      <h1 className="text-capitalize">Proteus</h1>
                      <p className="text-capitalize fs-sm-5">
                        Everyday health drink
                      </p>
                      <div>
                        <button className="banner-btn">
                          Shop Now <span> &#8594;</span>{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="carousel-2">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="banner">
                      <h1 className="text-capitalize">Natural Cena SF12</h1>
                      <p className="text-capitalize fs-sm-5">
                        The complexity natural cena sf21 - <br />
                        Day-to-Day Nourishmentfor mind &#8211; Body & Soul
                      </p>
                      <div>
                        <button className="banner-btn">
                          Shop Now <span> &#8594;</span>{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="carousel-3">
              <div className="container">
                <div className="row d-flex">
                  <div className="col-12">
                    <div className="banner">
                      <h1 className="text-capitalize">Millet Mix Meal</h1>
                      <p className="text-capitalize fs-sm-5">
                        The wholesome Millet Mix meal &#8211; Daily Bowl of
                        health
                      </p>
                      <div>
                        <button className="banner-btn">
                          Shop Now <span> &#8594;</span>{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="carousel-control-prev"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <div className="carousel-icon">
            <BsArrowLeft className="carousel-control-prev-icon" />
          </div>
        </div>

        <div
          className="carousel-control-next"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <div className="carousel-icon">
            <BsArrowRight className="carousel-control-next-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
