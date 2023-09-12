import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const SignUp = () => {
  const { registerUser, signinUsingGoogle } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [userIsLoading, setUserIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const redirect_url = location.state?.from || "/home";

  // Submit user details
  const onSubmit = (data) => {
    if (data.password === data.confirmPassword) {
      registerUser(data.email, data.password, data.name, navigate, location);
      reset();
    } else {
      alert(" Password did not match");
    }
  };

  const handleGoogleLogin = () => {
    signinUsingGoogle()
      .then((result) => {
        const user = result.user;
        // setUser(user);
        navigate(redirect_url);
      })
      .catch((error) => {
        // setError(error.massage)
      })
      .finally(() => setUserIsLoading(false));
  };

  return (
    <>
      <Header />

      <div className="box-design">
        <h1 className="text-center text-3xl font-bold text-cyan-500">
          Sign Up now!
        </h1>
        <form className="d-from mt-5" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="w-100 mb-2"
            placeholder="Enter Your Name"
            {...register("name", { required: true })}
          />
          <br />

          <input
            type="email"
            className="w-100 mb-2"
            placeholder="Enter Your Email"
            {...register("email", { required: true })}
          />
          <br />
          <input
            type="password"
            className="w-100 mb-2"
            placeholder="PassWord"
            {...register("password", { required: true })}
          />
          <br />
          <input
            type="password"
            className="w-100 mb-2"
            placeholder="Confirm PassWord"
            {...register("confirmPassword", { required: true })}
          />
          <br />
          <button className="btn-all w-100 my-3" type="submit">
            Sign Up
          </button>
          <Link
            className="link-d text-lg font-medium text-center text-black"
            to="/login"
          >
            Already have an account:- &nbsp;
            <span className="text-[#160f75]">Login</span>
          </Link>
          <hr className="w-100 bg-black mt-4" />
        </form>

        {/* Google Login  */}
        <button className="btn-all mt-4" onClick={handleGoogleLogin}>
          Login with Google
        </button>
      </div>

      <Footer />
    </>
  );
};

export default SignUp;
