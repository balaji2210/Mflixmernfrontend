import React from "react";

import "./Signup.css";

function Signup() {
  return (
    <div className="text-white text-center signup">
      <div className="col-md-6 offset-md-3 p-5 rounded ">
        <div>
          <form className="bg-dark p-3">
            <div className="form-outline mb-4">
              <span className="lead fs-3">Name</span>
              <input
                type="text"
                className="form-control  bg-white"
                placeholder="Name"
              />
            </div>
            <div className="form-outline mb-4">
              <span className="lead fs-3">Email</span>
              <input
                type="email"
                className="form-control  bg-white"
                placeholder="Email"
              />
            </div>

            <div className="form-outline mb-5">
              <span className="lead fs-3">Password</span>
              <input
                type="password"
                className="form-control bg-white"
                placeholder="password"
              />
            </div>
            <button type="submit" className="btn btn-danger btn-block mb-4">
              SignUp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
