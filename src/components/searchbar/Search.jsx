import React from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import "./Search.css";
const Search = ({ closeSearchedBar }) => {
  return (
    <>
      <div className="container-fluid search-bar py-4">
        <div className="container">
          <form className="search-input-form">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
            <button>
              <FiSearch size={24} className="search-icon" />
            </button>
            <button>
              <AiOutlineClose onClick={closeSearchedBar} size={24} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;
