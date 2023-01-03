import React from "react";
import "./Sidenav.css";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Sidenav = ({ setOpenSideNav, openSideNav }) => {
  return (
    <div className={`${openSideNav ? "sidenav": " invisible"}`}>
      <div className="close-icon py-3" onClick={() => setOpenSideNav(false)}>
        <p className="mb-0">Close</p>
        <AiOutlineClose size={24} />
      </div>
      <div className="sidemenu-links mb-0 ">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'sidemenu-active' : 'sidemenu-inactive')}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'sidemenu-active' : 'sidemenu-inactive')}>
          About Us
        </NavLink>
        <NavLink to="/blog" className={({ isActive }) => (isActive ? 'sidemenu-active' : 'sidemenu-inactive')}>
          Blog
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'sidemenu-active' : 'sidemenu-inactive')}>
          Contact
        </NavLink>
      </div>
      <div>
        <img className="img-fluid bg-image" src="/images/bg-3.jpg" alt="bg-3" />
      </div>
    </div>
  );
};

export default Sidenav;
