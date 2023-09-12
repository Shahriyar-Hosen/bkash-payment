import React, { useState } from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    reset();
    setEmail(data);
    fetch("https://pixacam-serverside.vercel.app/users/admin", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="box-design banner-ls xl:flex justify-center">
      <div className="xl:flex">
        <div className="my-auto w-100 xl:w-50  mx-auto ">
          <div className="">
            <h1 className="text-uppercase text-white text-center text-3xl pt-5">
              Please <span className="text-color ">Make admin!</span>
            </h1>
            <p className="text-lg text-white mt-3 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              voluptatum, molestiae esse ullam tenetur similique!
            </p>
          </div>
        </div>
        <div className="w-100">
          <div className="flex justify-center mt-5">
            <div className="d-from">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="w-100 p-2"
                  type="email"
                  placeholder="Enter Email address"
                  {...register("email")}
                />
                <br />
                <div className="flex justify-center">
                  <input className=" mt-3" type="submit" value="Admin" />
                </div>
              </form>
            </div>
            <br />
          </div>
          <br /> <br />
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
