import React from "react";
import { packageData } from "../../assets/packageData";
import Banner from "../../components/banner/Banner";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css";
import { formatIndianPrice } from "../../helpers/formatPrice";
import Testimonial from "../../components/testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <section className="section-banner">
        <Banner />
      </section>

      <section className="section-package py-5">
        {packageData.map((data) => {
          return (
            <div
              key={data.id}
              className="package d-flex flex-column align-items-end py-5 pe-5 text-white"
              style={{ backgroundImage: `url(${data.image})` }}
            >
              <h4>{data.title}</h4>
              <p className="mt-2 text-capitalize fs-5 fw-normal">
                from{" "}
                <span className="ms-2">{formatIndianPrice(data.price)}</span>
              </p>
              <div className="package-btn">
                <FaArrowRight className="fw-bold fs-4" />
              </div>
            </div>
          );
        })}
      </section>

      <section className="section-description py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-3">
              <h2 className="me-lg-5">
                What are we <br /> missing?
              </h2>
            </div>
            <div className="col-lg-9 mt-md-0 mt-5">
              <div className="row">
                <div className="col-md-6">
                  <p>
                    It’s a well-known fact that nutrition impacts not only the
                    physical aspects of the body but also the mental and
                    psychological. There’s a fundamental flaw in the daily diet
                    of even the most passionate health enthusiasts of the
                    present day – easy access to completely natural products
                    sans any synthetic additions.
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="mt-md-0 mt-5">
                    This leads to loss of vital nutrients that robs us of the
                    strength to counter the ill effects of our current day
                    lifestyle, which over a period of time is bound to manifest
                    as mild or even chronic health issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-3">
              <h2 className="me-lg-5">
                Healing through <br /> Nature & Tradition
              </h2>
            </div>
            <div className="col-lg-9 mt-md-0 mt-5">
              <p>
                It’s a well-known fact that nutrition impacts not only the
                physical aspects of the body but also the mental and
                psychological. There’s a fundamental flaw in the daily diet of
                even the most passionate health enthusiasts of the present day –
                easy access to completely natural products sans any synthetic
                additions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-about py-5">
        <div className="container">
          <div className="row d-flex align-items-center my-5">
            <div className="col-lg-3">
              <h2 className="text-md-start text-center">
                Why choose Cena products?
              </h2>
            </div>
            <div className="col-lg-9 ">
              <div className="d-flex flex-lg-row flex-column  align-items-center  gap-20 ">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <img
                    src="images/icons/icon-1.png"
                    className="img-fluid section-about-icon"
                    alt="icon-1"
                  />
                  <p className="text-center mt-4">
                    Time honoured traditional recipes
                  </p>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <img
                    src="images/icons/icon-2.png"
                    className="img-fluid section-about-icon"
                    alt="icon-2"
                  />
                  <p className="text-center mt-4">
                    Responsibly sourced Quality ingredients​
                  </p>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <img
                    src="images/icons/icon-3.png"
                    className="img-fluid section-about-icon"
                    alt="icon-3"
                  />
                  <p className="text-center mt-4">
                    Natural Nutrition from whole super food​s{" "}
                  </p>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <img
                    src="images/icons/icon-4.png"
                    className="img-fluid section-about-icon"
                    alt="icon-4"
                  />
                  <p className="text-center mt-4">
                    No additives or added preservatives
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row d-flex align-items-center my-5">
            <div className="col-lg-3">
              <h2 className="text-md-start text-center">
                Why choose Cena products?
              </h2>
            </div>
            <div className="col-lg-9 ">
              <div className="d-flex flex-lg-row flex-column justify-content-md-between  align-items-center  gap-14 ">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <img
                    src="images/icons/icon-5.png"
                    className="img-fluid section-about-icon"
                    alt="icon-1"
                  />
                  <p className="text-center mt-4">
                    Children <br />& the elderly
                  </p>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <img
                    src="images/icons/icon-6.png"
                    className="img-fluid section-about-icon"
                    alt="icon-2"
                  />
                  <p className="text-center mt-4">
                    Sports <br />
                    persons
                  </p>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <img
                    src="images/icons/icon-7.png"
                    className="img-fluid section-about-icon"
                    alt="icon-3"
                  />
                  <p className="text-center mt-4">
                    Pre-natal & <br />
                    Post-natal
                  </p>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <img
                    src="images/icons/icon-8.png"
                    className="img-fluid section-about-icon"
                    alt="icon-4"
                  />
                  <p className="text-center mt-4">
                    Those recovering <br />
                    from surgery
                  </p>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <img
                    src="images/icons/icon-9.png"
                    className="img-fluid section-about-icon"
                    alt="icon-4"
                  />
                  <p className="text-center mt-4">
                    Healthy <br />
                    Person
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-testimonial py-5">
        <Testimonial />
      </section>
    </>
  );
};

export default Home;
