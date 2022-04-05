import React from "react";
import { useState } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { isAuthenticated } from "../data";

import "./Header.css";

function Header() {
  const [search, setSearch] = useState("");
  const history = useHistory();

  const auth = isAuthenticated();
  const user = JSON.parse(localStorage.getItem("user"));

  const handelSubmit = (e) => {
    e.preventDefault();
    setSearch("");
    history.push(`/movies/search/${search}`);
  };
  return (
    <>
      <nav className="navbar navbar-dark sticky-top">
        {auth && user ? (
          <>
            {auth && user.role === "admin" ? (
              <div className="container-fluid">
                <Link className="navbar-brand text-danger" to="/">
                  Mflix
                </Link>
                <div className="d-flex input-group w-auto search ">
                  <form onSubmit={handelSubmit}>
                    <input
                      type="search"
                      className="form-control rounded "
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="search-addon"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </form>
                  <span>
                    <Link className="nav-link text-white" to="/admin/movies">
                      Admin
                    </Link>
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          <div className="container-fluid">
            <Link className="navbar-brand text-danger" to="/">
              Mflix
            </Link>
            <div className="d-flex input-group w-auto search ">
              <form onSubmit={handelSubmit}>
                <input
                  type="search"
                  className="form-control rounded "
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </form>
              <Link className="nav-link text-white" to="/signin">
                Signin
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default withRouter(Header);
