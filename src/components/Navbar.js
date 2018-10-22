import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <div className="container">
        <a className="navbar-brand" href="#/">
          <i className="fab fa-2x fa-instagram" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex flex-grow-1 align-items-center options">
            <li className="nav-item border-left mx-2 px-2">
              <a className="nav-link" href="#/">
                <img className="logo" src="./images/logo.png" alt="Instagram" />
              </a>
            </li>
            <li className="nav-item dropdown mx-auto search-form">
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control form-control-sm mr-sm-2 no-outline stretch"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">
                <i className="far fa-2x fa-compass" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">
                <i className="far fa-2x fa-heart" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">
                <i className="far fa-2x fa-user" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
