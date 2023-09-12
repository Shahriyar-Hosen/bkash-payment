import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddNewProduct.css";
// import banner from '../../Images/add-service-banner.jpg'

const AddNewProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://pixacam-serverside.vercel.app/products", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Added new service successfully");
          reset();
        }
      });
  };
  return (
    <div className="box-design banner-ls xl:flex justify-center">
      <div className="xl:flex">
        <div className="my-auto w-100 xl:w-50  mx-auto ">
          <div className="">
            <h1 className="text-uppercase text-white text-center text-3xl pt-5">
              {" "}
              <span className="text-color ">Add New product!</span>
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
                  className="w-100 mt-3"
                  type="text"
                  {...register("productName")}
                  placeholder=" Enter Your Service Name"
                />{" "}
                <br />
                <input
                  className="w-100"
                  type="text"
                  {...register("description")}
                  placeholder="Enter Description"
                />{" "}
                <br />
                <input
                  className="w-100"
                  type="text"
                  {...register("img")}
                  placeholder="Image"
                />{" "}
                <br />
                <input
                  className="w-100"
                  type="number"
                  {...register("price")}
                  placeholder="Price"
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
    // <div className=' box-design  add-banner'>

    //     <div className=' bg-t  p-5 mx-auto'>
    //         <div className='mt-5 text-center mx-auto'>
    //             <div className='d-from'>
    //                 <h2 className='tittle'>Add New Fetured Service: </h2>
    //                 <form onSubmit={handleSubmit(onSubmit)}>
    //                     <input type="text" {...register("productName")} placeholder=" Enter Your Service Name" /> <br />
    //                     <input type='text' {...register("description")} placeholder="Enter Description" /> <br />
    //                     <input type='text' {...register("img")} placeholder="Image" /> <br />
    //                     <input type='number' {...register("price")} placeholder="Price" /> <br />
    //                     <input className='btn btn-primary mt-4' type="submit" />
    //                 </form>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  );
};

export default AddNewProduct;
