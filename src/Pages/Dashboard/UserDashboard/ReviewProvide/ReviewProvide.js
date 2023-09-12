import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";

const ReviewProvide = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    data.img = user.photoURL;
    axios
      .post("https://pixacam-serverside.vercel.app/reviews", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Thanks for your valuable feedback!");
          reset();
          navigate("/");
        }
      });
  };
  return (
    <div className="box-design">
      <h1 className="text-center text-3xl font-bold">
        Please Give your <br />
        <span className="text-cyan-500"> Feedback!</span>
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col d-from mt-5"
      >
        <input
          className="w-100"
          type="text"
          placeholder="Enter your name"
          {...register("customerName")}
          value={user.displayName}
        />{" "}
        <br />
        <input
          className="w-100"
          type="text"
          {...register("customerEmail")}
          value={user.email}
        />{" "}
        <br />
        <input
          className="w-100"
          type="text"
          {...register("feedback", { require: true })}
          placeholder="Give your feedback"
        />{" "}
        <br />
        <input
          className="w-100"
          type="number"
          {...register("rating", { required: true, min: 1, max: 5 })}
          placeholder="Give your rating between 1 to 5"
        />
        <br />
        <button type="submit" className="from-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewProvide;
