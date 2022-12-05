import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/apiUser";
import { closeRegister} from "../Redux/userSlice";
const Register = () => {
    const[first_name,setFirstName]=useState("")
    const[last_name,setLastName]=useState("")
    const [password, setPassWord] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const submitHundler = (e) => {
      e.preventDefault();
      addUser(
        {
          first_name,
          last_name,
          password,
          email,
          loggedIn: true,
        },
        dispatch
      );
      dispatch(closeRegister())
    };
  
  return (
    <div>
       <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card shadow mt-5">
              <div className="card-title text-center border-bottom">
                <h2 className="p-3">Sign Up</h2>
              </div>
              <div className="card-body">
                <form onSubmit={submitHundler}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label htmlFor="first_name" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="first_name"
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label htmlFor="last_Name" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="last_Name"
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

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

                  <div className="d-grid">
                    <button type="submit" className="btn text-light bg-success">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
