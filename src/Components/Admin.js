import React from "react";
import { Link, useHistory } from "react-router-dom";
import ActionDropdown from "./ActionDropdown";

function Admin() {
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();
  return (
    <>
      {user && user.role === "admin" ? (
        <div className="container mt-5">
          <ActionDropdown />
          <div className="col-md-6 offset-md-3">
            <div className="card ">
              <h1 className="text-center display-2 fs-2x">
                Welcome To Mflix Admin Panel{" "}
              </h1>
              <div className="text-center m-2">
                <Link to="/" className="btn  btn-danger">
                  go to home page
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        history.push("/")
      )}
    </>
  );
}

export default Admin;
