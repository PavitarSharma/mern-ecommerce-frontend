import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import "./Dashboard.css";

const buttons = [
  {
    id: 1,
    name: "Dashboard",
    url: "/my-account",
  },
  {
    id: 2,
    name: "Orders",
    url: "orders",
  },
  {
    id: 3,
    name: "Address",
    url: "address",
  },
  {
    id: 4,
    name: "Account Details",
    url: "edit-account",
  },
  {
    id: 5,
    name: "Logout",
    url: "/my-account",
  },
];
const Dashboard = () => {
  const navigate = useNavigate();
  const [clickedId, setClickedId] = useState(-1);
  const user = false;
  return (
    <>
      <section>
        <div className="container">
          <div className="row my-5">
            <div className="col-12">
              <h1 className="yellow-color text-center account-title">
                My account
              </h1>
            </div>
          </div>
          {user ? (
            <div className="row my-5">
              <div className="col-md-6 col-12">
                <form className="mb-5 login-form">
                  <div>
                    <p className="yellow-color text-start fs-3">Login</p>
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      className="form-control mt-2"
                      id="email"
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control mt-2"
                      id="password"
                    />
                  </div>
                  <div className=" d-flex align-items-center gap-2 mt-2">
                    <input type="checkbox" className="me-2" id="rememberMe" />
                    <label
                      htmlFor="rememberMe"
                      style={{ opacity: "0.5", fontSize: "18px" }}
                    >
                      Rember me
                    </label>
                  </div>

                  <button className="btn account-btn">Login</button>

                  <p className="password-lost">Lost your password?</p>
                </form>
              </div>

              <div className="col-md-6 col-12">
                <form className="register-form mb-5">
                  <div>
                    <p
                      className="yellow-color text-start fs-3"
                      style={{ opacity: 1 }}
                    >
                      Register
                    </p>
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      className="form-control mt-2"
                      id="email"
                    />
                  </div>

                  <p className="mt-4">
                    A link to set a new password will be sent to your email
                    address.
                  </p>
                  <p>
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account,
                    and for other purposes described in our{" "}
                    <span>privacy policy</span>.
                  </p>

                  <button className="btn account-btn">Register</button>
                </form>
              </div>
            </div>
          ) : (
            <div className="row" style={{ margin: "120px 0" }}>
              <div className="col-md-4">
                <div className="account-link">
                  {buttons.map((data, index) => {
                    return (
                      <button
                        className={` ${
                          data.id === clickedId
                            ? "customButton active"
                            : "customButton"
                        }`}
                        key={data.id}
                        onClick={() => {
                          navigate(`${data.url}`);
                          setClickedId(data.id);
                        }}
                      >
                        {data.name}
                      </button>
                    );
                  })}
                 
                </div>
              </div>

              <div className="col-md-8 mt-md-0 mt-5">
                <Outlet />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
