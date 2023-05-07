import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { RiMovie2Fill } from "react-icons/ri";

const Header = () => {
  const [first, setFirst] = useState(false);
  return (
    <div className="header">
      <div>
        <Link to="/">
          <img
            alt=""
            className="header__icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
          />
        </Link>
      </div>
      <div className="headerLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Home</span>
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>
      <div className="headerList">
        <div
          className="icon"
          onClick={() => setFirst((prevState) => !prevState)}
        >
          <RiMovie2Fill />
        </div>
        <div className={`headerListItems ${first ? "active" : "inActive"}`}>
          <Link
            onClick={() => setFirst((prevState) => !prevState)}
            to="/"
            style={{ textDecoration: "none" }}
          >
            <span>Home</span>
          </Link>
          <Link
            onClick={() => setFirst((prevState) => !prevState)}
            to="/movies/popular"
            style={{ textDecoration: "none" }}
          >
            <span>Popular</span>
          </Link>
          <Link
            onClick={() => setFirst((prevState) => !prevState)}
            to="/movies/top_rated"
            style={{ textDecoration: "none" }}
          >
            <span>Top Rated</span>
          </Link>
          <Link
            onClick={() => setFirst((prevState) => !prevState)}
            to="/movies/upcoming"
            style={{ textDecoration: "none" }}
          >
            <span>Upcoming</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
