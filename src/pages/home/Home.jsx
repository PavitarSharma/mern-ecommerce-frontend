import React from "react";
import { packageData } from "../../assets/packageData";
import Banner from "../../components/banner/Banner";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css";
import { formatIndianPrice } from "../../helpers/formatPrice";

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

      <section className="section-description pb-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-3">
              <h2>What are we <br /> missing?</h2>
            </div>
            <div className="col-md-9 mt-md-0 mt-5">
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
            <div className="col-md-3">
              <h2>Healing through <br /> Nature & Tradition</h2>
            </div>
            <div className="col-md-9 mt-md-0 mt-5">
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
    </>
  );
};

export default Home;
