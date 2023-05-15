/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./services.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const Services = () => {
  return (
    <div>
      <h1>Our Services</h1>
      <div className="services">
        {/* {data?.map((service) => (
          <div key={service?.id} className="service-card">
            <h2>{service?.name}</h2>
            <p>{service?.email}</p>
            <p>Price: {service?.message}</p>
            <button onClick={() => handleDelete(service?._id)}>Delete</button>
            <Link to={`/services/${service?._id}`}>
              <button>Edit</button>
            </Link>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Services;
