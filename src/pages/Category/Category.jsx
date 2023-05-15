/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaSearch,
  FaArrowAltCircleDown,
  FaMapMarkerAlt,
  FaPhoenixFramework,
} from "react-icons/fa";
import { HiStatusOffline, HiStatusOnline } from "react-icons/hi";
import "./category.css";

import { BsPersonWorkspace } from "react-icons/bs";

const Category = () => {
  return (
    <div className="main-category-container p-5">
      <h1 className="text-center p-5 text-white category-title">Category</h1>
      <div className="category-container row ">
        <div className="card">
          <img src="" alt="" />
          <HiStatusOffline color="green" fontSize="4em" />
          <h1>Offline</h1>
        </div>
        <div className="card">
          <HiStatusOnline color="green" fontSize="4em" />
          <h1>Remote</h1>
        </div>
        <div className="card">
          <FaPhoenixFramework color="green" fontSize="4em" />
          <h1>Part Time</h1>
        </div>
        <div className="card">
          <BsPersonWorkspace color="green" fontSize="4em" />
          <h1>Full time</h1>
        </div>
      </div>
    </div>
  );
};

export default Category;
