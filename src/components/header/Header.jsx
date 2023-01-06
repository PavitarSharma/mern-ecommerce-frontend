import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FiUsers, FiSearch } from "react-icons/fi";
import { GrLanguage } from "react-icons/gr";
import { SlBag } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import "./Header.css";
import Search from "../searchbar/Search";
import { useState } from "react";
import Sidenav from "../sidenav/Sidenav";
const Header = () => {
  const navigate = useNavigate()
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [openSideNav, setOpenSideNav] = useState(false);
  const closeSearchedBar = () => setOpenSearchBar(false);
  const openSearchedBar = () => setOpenSearchBar((prev) => !prev);
  return (
    <>
      {openSearchBar ? <Search closeSearchedBar={closeSearchedBar} /> : null}
      {openSideNav ? (
        <Sidenav openSideNav={openSideNav} setOpenSideNav={setOpenSideNav} />
      ) : null}
      <header className="header-upper py-4">
        <div className="container-lg">
          <div className="row d-flex align-items-center">
            <div className="col-6">
              <div className="d-md-flex d-none align-items-center gap-10">
                <TfiHeadphoneAlt size={26} />
                <span className="fs-5">+917845858545</span>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="d-flex align-items-center justify-content-md-end justify-content-between gap-30">
                <div className="d-flex align-items-center gap-20">
                  <div className="d-flex align-items-center gap-10">
                    <FiSearch size={26} onClick={openSearchedBar} />
                    <p className="mb-0 d-md-block d-none fs-5">Search</p>
                  </div>
                  <div className="d-flex align-items-center  gap-10" onClick={() => navigate("/my-account")} style={{ cursor: "pointer"}}>
                    <FiUsers size={26} />
                    <p className="mb-0 fs-5 d-md-block d-none">Account</p>
                  </div>
                </div>
                <div className="d-flex align-items-center  gap-10">
                  <GrLanguage size={26} />
                  <p className="mb-0 fs-5">Language</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-lower py-4">
        <div className="container-lg">
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-6">
              <div className="d-flex align-items-center gap-30">
                <Link to="/">
                  <img
                    src="images/logo.png"
                    alt="logo"
                    className="img-fluid logo"
                    width="200px"
                    height="200px"
                    style={{ cursor: "pointer" }}
                  />
                </Link>

                <ul className="menu-links mb-0 ">
                  <li className="nav-item">
                    <NavLink to="/"  className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                      Blog
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6">
              <div className="cart d-flex align-items-center justify-content-end gap-20">
                <div className="menu-icon">
                  <AiOutlineMenu
                    onClick={() => setOpenSideNav((prev) => !prev)}
                    size={22}
                  />
                </div>
                <div className="cart-button d-flex align-items-center gap-10">
                  <SlBag size={22} />
                  <div className="cart-total">
                    <p className="mb-0">
                      ₹00.00 <span>/</span> <span>0 item</span>
                    </p>
                  </div>
                </div>

                <div className="whishlist">
                  <CiHeart size={22} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
