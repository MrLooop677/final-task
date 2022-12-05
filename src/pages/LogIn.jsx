import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/api";
import { register } from "../Redux/userSlice";

const LogIn = () => {
  const [password, setPassWord] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const submitHundler = (e) => {
    e.preventDefault();
    addUser(
      {
        password,
        email,
        loggedIn: true,
      },
      dispatch
    );
  };

const makeRegistration=(e)=>{
    e.preventDefault()
    dispatch(register())
}

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card shadow mt-5">
              <div className="card-title text-center border-bottom">
                <h2 className="p-3">Login</h2>
              </div>
              <div className="card-body">
                <form onSubmit={submitHundler}>
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      onChange={(e) => setPassWord(e.target.value)}
                      required
                    />
                  </div>

                  <div className="d-grid mb-2">
                    <button type="submit" className="btn text-light bg-info">
                      Log In
                    </button>
                  </div>
                  <div className="w-100 " style={{"height":"2px","backgroundColor":"#DEE2E6"}}></div>
                  <div className="d-grid mt-5">
                    <button type="submit" className="btn text-light bg-success" onClick={makeRegistration}>
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
