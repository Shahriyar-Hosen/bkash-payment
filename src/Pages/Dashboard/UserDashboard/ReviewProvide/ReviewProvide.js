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
    <div className="box-design banner-ls xl:flex justify-center">
      <div className="xl:flex">
        <div className="my-auto w-100 xl:w-50  mx-auto ">
          <div className="">
            <h1 className="text-uppercase text-white text-center text-3xl pt-5">
              Please <span className="text-color ">Give your feedback!</span>
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
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
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
                />{" "}
                <br />
                <div className="flex justify-center">
                  <input className="btn btn-primary mt-4" type="submit" />
                </div>
              </form>
            </div>
            <br />
          </div>
          <br /> <br />
        </div>
      </div>
    </div>
    // <div className=' h-100'>
    //     <div className='mx-auto flex'>
    //         <div className='mt-5 text-center xl:w-50 mx-auto d-from'>
    //             <div className=''>
    //                 <h2 className='tittle'>Provide Your Valuable Feedback: </h2>
    //                 <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
    //                     <input className='w-100' type="text" {...register("customerName")} value={user.displayName} /> <br />
    //                     <input className='w-100' type="text" {...register("customerEmail")} value={user.email} /> <br />
    //                     <input className='w-100' type='text' {...register("feedback", { require: true })} placeholder="Give your feedback" /> <br />
    //                     <input className='w-100' type='number' {...register("rating", { required: true, min: 1, max: 5 })} placeholder="Give your rating between 1 to 5" /> <br />
    //                     <div>
    //                         <input className='btn btn-primary mt-4' type="submit" />
    //                     </div>
    //                 </form>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  );
};

export default ReviewProvide;
