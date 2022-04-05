import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { signin } from "../data";

import "./Signup.css";

function SignIn() {
  const [email, setEmail] = useState("balaji@gmail.com");
  const [password, setPassword] = useState("123456");
  const history = useHistory();

  const handelSubmit = (e) => {
    e.preventDefault();
    signin({ email, password }).then((data) => {
      if (data.success) {
        localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem("user", JSON.stringify(data.user));
      }
      history.push("/admin/movies");
    });
  };

  return (
    <div className="text-white text-center signup">
      <div className="col-md-6 offset-md-3 p-5 rounded ">
        <div>
          <form className="bg-dark p-3" onSubmit={handelSubmit}>
            <div className="form-outline mb-4">
              <span className="lead fs-3">Email</span>
              <input
                type="email"
                className="form-control  bg-white"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-outline mb-5">
              <span className="lead fs-3">Password</span>
              <input
                type="password"
                className="form-control bg-white"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-danger btn-block mb-4">
              SignIn
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
