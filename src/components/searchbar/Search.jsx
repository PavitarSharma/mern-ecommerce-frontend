import React from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import "./Search.css";
const Search = ({ closeSearchedBar }) => {
  return (
    <>
      <div className="container-fluid search-bar py-4">
        <div className="container search">
          <form className="search-input-form">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
            <FiSearch size={24} className="search-icon" />
          </form>
          <AiOutlineClose onClick={closeSearchedBar} size={24} />
        </div>
      </div>
    </>
  );
};

export default Search;
