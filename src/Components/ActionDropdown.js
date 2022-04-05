import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { signout } from "../data";

function ActionDropdown() {
  const logout = () => {
    localStorage.clear();
    signout().then((data) => {
      if (data.success) {
        toast.success(data.message, {
          position: "top-center",
          theme: "light",
          autoClose: 1000,
        });
      }
    });
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-danger m-3 float-end dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        Actions
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
          <Link className="dropdown-item" to="/admin/movies/action">
            Action Movies
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/admin/movies/comedy">
            Comedy Movies
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/admin/movies/thriller">
            Thriller Movies
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/admin/movies/romantic">
            Romantic Movies
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/admin/movie/create">
            Add Movie
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/admin/movie/banners">
            Movie Banners
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/" onClick={logout}>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ActionDropdown;
