/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./Menubar.css";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
const Menubar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user?.email);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="Menubar-container">
      <div className="logo">
        <img
          className="logo"
          src="https://cdn-icons-png.flaticon.com/512/4017/4017739.png"
          alt=""
        />
      </div>
      <div className="menu-container">
        <Link className="menu-item" to="/">
          <li>Home</li>
        </Link>
        <Link className="menu-item" to="/MyJobs">
          <li>My Job</li>
        </Link>
        <Link className="menu-item" to="/addJob">
          <li>Post Job</li>
        </Link>

        {user?.email ? (
          <li className="p-2">
            <button onClick={handleLogout}>Logout</button>
          </li>
        ) : (
          <Link className="menu-item" to="/login">
            <li>Login</li>
          </Link>
        )}
        {/* <li>{user?.email}</li> */}
        <Link className="menu-item" to="/register">
          <li>Registration</li>
        </Link>

        {/* <li>home</li>
        <li>sds</li>
        <li>asdsa</li>
        <li>asdas</li> */}
      </div>
    </div>
  );
};

export default Menubar;
