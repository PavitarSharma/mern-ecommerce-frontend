import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6">
              <div>
                <div className="mb-4">
                  <img
                    src="images/logo.png"
                    alt="logo"
                    className="img-fluid footer-logo"
                  />
                </div>
                <div>
                  <p className="yellow-color mb-1">Address</p>
                  <p className="low-opacity fs-5">
                    201, Ground Floor -15th Main , <br /> 19th Cross Padmanabha
                    Nagar Bangalore 560061, <br /> Karnataka, India
                  </p>
                </div>
                <div>
                  <p className="yellow-color mb-1">Email</p>
                  <p className="low-opacity fs-5">abc@gmail.com</p>
                </div>
                <div>
                  <p className="yellow-color mb-1">Phone</p>
                  <p className="low-opacity fs-5">+915478954678</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <div>
                  <p className="yellow-color fs-3 fw-bolder">Sign Up & Save</p>
                  <p className="low-opacity fs-5">
                    Get exclusive offers, free shipping events & more by signing
                    up for our promotional emails.
                  </p>
                </div>

                <div className="d-flex align-items-center footer-input">
                  <input
                    type="text"
                    className="input-group py-3 px-2"
                    placeholder="Enter your email address"
                  />
                  <button className="py-3 px-3">
                    <FaPaperPlane />
                  </button>
                </div>

                <div className="footer-links mb-0 mt-4">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "footer-active" : "footer-inactive"
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/terms-and-conditions"
                    className={({ isActive }) =>
                      isActive ? "footer-active" : "footer-inactive"
                    }
                  >
                    Terms & Conditions
                  </NavLink>
                  <NavLink
                    to="/privacy-policy"
                    className={({ isActive }) =>
                      isActive ? "footer-active" : "footer-inactive"
                    }
                  >
                    Privacy Policy
                  </NavLink>
                  <NavLink
                    to="/refunds-shipping-and-cancellation-policy"
                    className={({ isActive }) =>
                      isActive ? "footer-active" : "footer-inactive"
                    }
                  >
                    Refund, Shipping and Cancellation Policy
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-6">
              <p className="yellow-color fs-5">© 2022 Cena Nutrition All rights reserved by Cena.care</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
