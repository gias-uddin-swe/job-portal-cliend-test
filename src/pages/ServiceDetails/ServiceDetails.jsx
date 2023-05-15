/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ServiceDetails = () => {
  const [service, setService] = useState({});
  const { id } = useParams();
  // console.log(id);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`http://localhost:5000/singleServices/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const onSubmit = (data) => {
    fetch(`http://localhost:5000/updateService/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <div className="post-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            className="items"
            defaultValue={service?.name}
            {...register("name")}
          />
          <br />
          <input
            className="items"
            defaultValue={service?.email}
            {...register("email")}
          />
          <br />
          {/* include validation with required or other standard HTML validation rules */}
          <input
            defaultValue={service?.message}
            className="items"
            {...register("message", { required: true })}
          />
          <br />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" value="Edit" />
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
