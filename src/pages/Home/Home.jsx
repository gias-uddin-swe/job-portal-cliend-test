/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Jobs from "../Jobs/Jobs";

const Home = () => {
  const [servicesData, setServicesData] = useState([]);

  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Jobs></Jobs>
    </div>
  );
};

export default Home;
