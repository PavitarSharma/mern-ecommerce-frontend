import React from "react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="title yellow-color text-center mb-1">Contact us</p>
              <p className="subtitle text-center fs-5">
                Feel free to contact us
              </p>
            </div>
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-center">
                <Breadcrumb page="Contact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-2 col-12">
              <div className="box-1">
                <p className="text-center fs-4">Address</p>
                <p className="box-subtitle">
                  201, Ground Floor -15th Main , 19th <br /> Cross Padmanabha
                  Nagar Bangalore <br /> 560061, Karnataka, India
                </p>
              </div>
            </div>
            <div className="ccol-md-3 col-sm-2 col-12">
              <div className="box-2">
                <p className="text-center fs-4">Phone</p>
                <p className="box-subtitle">+918798562345</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-2 col-12">
              <div className="box-3">
                <p className="text-center fs-4">Email</p>
                <p className="box-subtitle">getintouch@cena.care</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-2 col-12">
              <div className="box-4">
                <p className="text-center fs-4">Working hours</p>
                <p className="box-subtitle">
                  Monday to Friday <br />
                  09:00 AM to 05:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-12">
              <div className="form-container mx-auto py-5">
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      aria-describedby="emailHelp"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      cols="20"
                      rows="5"
                      aria-describedby="emailHelp"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn form-button">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
