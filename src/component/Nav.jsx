import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut, selectUser } from "../Redux/userSlice";
const Nav = () => {
  const user=useSelector(selectUser)
  const dispatch=useDispatch()
    const logOutHundler=(e)=>{
        e.preventDefault()
        dispatch(logOut())
    }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          
          <Link className="navbar-brand text-light" to={"/"}>
           Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
          
              <li className="nav-item d-flex justify-content-center align-items-center">
                <span className="text-end">
                <img className="w-25 rounded-circle" src={user&&user.avatar?user.avatar:""} alt="Img User"/>
                </span>
                <h2 className="nav-link active fw-bold text-light pb-0">

                {user?`Welcome ${user.first_name} ${user.last_name}`:"UserName"}
                </h2>
              </li>
              <li className="nav-item">
                <button className="nav-link border-0 fw-bold bg-dark"style={{"color":"#888"}} onClick={logOutHundler}>
                  {user?"logOut":""}
                </button>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
