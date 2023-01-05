import React from "react";
import { organicData } from "../../assets/data";
import { CiFilter, CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import "./Blog.css";
import Tooltip from "../../components/tooltip/Tooltip";
import { useState } from "react";

const navData = [
  {
    id: 1,
    title: "Agriculture",
    length: 6,
    link: "agriculture",
  },
  {
    id: 2,
    title: "Envato",
    length: 2,
    link: "envato",
  },
  {
    id: 3,
    title: "Farmer",
    length: 4,
    link: "farmer",
  },
  {
    id: 4,
    title: "Health",
    length: 7,
    link: "health",
  },
  {
    id: 5,
    title: "Organic",
    length: 6,
    link: "organic",
  },
  {
    id: 6,
    title: "Vegatables",
    length: 2,
    link: "vegatables",
  },
];

export const BlogNav = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-8 col-md-6">
            {navData.map((data) => {
              return (
                <Link
                  key={data.id}
                  className="navData-links"
                  to={`/category/${data.link}`}
                >
                  <div className="tooltip-top">
                    {data.title}
                    <span className="tooltiptext">{data.length}</span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="col-lg-4 col-md-6 col-6">
            <div className="input-box category-search-desktop">
              <input
                type="text"
                placeholder="Search"
                className="searcgInput-desktop"
              />
              <CiSearch size={22} className="icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Blog = () => {
  const [openSearchBox, setOpenSearchBox] = useState(false);
  return (
    <section className="blog-section">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="title yellow-color text-center mb-0">
                Organic Blog
              </p>
              <p className="text-center fs-4" style={{ opacity: "0.6" }}>
                We publish exciting blogs every weekend, tune in now!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="position-relative">
        <div className="category">
          <div className="category-nav-desktop">
            <BlogNav />
          </div>
          <div className="category-nav-mobile">
            <div className="container">
              <div className="row d-flex align-items-center justify-content-between">
                <div className="col-6">
                  <div className="">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle d-flex align-items-center gap-2"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <CiFilter size={24} /> <span>Category</span>
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        {navData.map((data) => {
                          return (
                            <li key={data.id} className my-5>
                              <Link
                                className="text-dark fs-5 ps-2"
                                to={`/category/${data.link}`}
                              >
                                <div className="tooltip-top">
                                  {data.title}
                                  <span className="tooltiptext">
                                    {data.length}
                                  </span>
                                </div>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="search-dropdown position-relative">
                    <button
                      className="btn d-flex align-items-center gap-2"
                      onClick={() => setOpenSearchBox((prev) => !prev)}
                    >
                      <CiSearch size={24} className="icon" />{" "}
                      <span
                        className="d-sm-block d-none"
                        style={{ opacity: "0.6" }}
                      >
                        Search
                      </span>
                    </button>
                    {openSearchBox ? (
                      <div className="input-search-box">
                        <input
                          type="text"
                          placeholder="Search"
                          className="searcgInput-desktop"
                        />
                        <CiSearch size={22} className="icon" />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="container">
          <div className="row d-flex">
            {organicData.map((data) => {
              return (
                <div className="col-lg-6" key={data.id}>
                  <div className="d-flex flex-lg-row flex-column organic-blog my-2">
                    <div>
                      <img src={data.image} alt={data.title} />
                    </div>
                    <div className="p-4">
                      <h4
                        style={{
                          letterSpacing: "2px",
                          fontWeight: 400,
                        }}
                      >
                        {data.title}
                      </h4>
                      <p className="yellow-color">{data.date}</p>
                      <p style={{ opacity: "0.6" }}>
                        {data.discription.length > 100
                          ? data.discription.slice(0, 120) + "..."
                          : data.discription}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Blog;
