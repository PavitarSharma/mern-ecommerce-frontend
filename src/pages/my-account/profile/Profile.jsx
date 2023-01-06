import React, { useState } from "react";
import "./Profile.css";
import { BiShow } from "react-icons/bi";
const Profile = () => {
  const [passwordShown, setPasswordShown] = useState("text");

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown((type) => (type === "text" ? "password" : "text"));
  };
  return (
    <>
      <section>
        <form className="edit-form">
          <div className="d-flex flex-sm-row flex-column align-items-sm-center gap-4">
            <div
              className=""
              style={{
                width: "100%",
              }}
            >
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="form-control"
              />
            </div>
            <div
              style={{
                width: "100%",
              }}
            >
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group my-4">
            <label htmlFor="displayName">Display Name</label>
            <input
              type="text"
              id="displayName"
              name="displayName"
              className="form-control"
            />
            <p
              className="mt-1"
              style={{ opacity: "0.6", fontStyle: "italic", fontSize: "18px" }}
            >
              This will be how your name will be displayed in the account
              section and in reviews
            </p>
          </div>
          <div className="form-group my-4">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              id="email"
              name="email"
              className="form-control"
            />
          </div>
          <div className="form-group my-4">
            <p className="mb-1" style={{ opacity: "0.6", fontSize: "18px" }}>
              Password Change
            </p>
            <label htmlFor="password">Current Password</label>
            <div className="position-relative">
              <input
                type={passwordShown}
                id="password"
                name="password"
                className="form-control"
              />
              <BiShow
                onClick={togglePassword}
                className={`${
                  passwordShown === "text"
                    ? "password-icon"
                    : "password-icon hide-password"
                }`}
              />
            </div>
          </div>
          <div className="form-group my-4">
            <label htmlFor="newPassword">New Password</label>
            <div className="position-relative">
              <input
                type={passwordShown}
                id="newPassword"
                name="newPassword"
                className="form-control"
              />
              <BiShow
                onClick={togglePassword}
                className={`${
                  passwordShown === "text"
                    ? "password-icon"
                    : "password-icon hide-password"
                }`}
              />
            </div>
          </div>
          <div className="form-group my-4">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="position-relative">
              <input
                type={passwordShown}
                id="confirmPassword"
                name="confirmPassword"
                className="form-control"
              />
              <BiShow
                onClick={togglePassword}
                className={`${
                  passwordShown === "text"
                    ? "password-icon"
                    : "password-icon hide-password"
                }`}
              />
            </div>
          </div>
          <button className="btn edit-btn">Save changes</button>
        </form>
      </section>
    </>
  );
};

export default Profile;
