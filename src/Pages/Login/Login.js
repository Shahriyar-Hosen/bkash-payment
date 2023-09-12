import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const Login = () => {
  const { signinUsingGoogle, loginRegisteredUser } = useAuth();
  const [userIsLoading, setUserIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const redirect_url = location.state?.from || "/home";

  // Registered user login

  const onSubmit = (data) => {
    loginRegisteredUser(data.email, data.password)
      .then((result) => {
        navigate(redirect_url);
      })
      .catch((error) => {
        const errorMassage = error.massage;
      })
      .finally(() => setUserIsLoading(false));
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
          Please Sign In now!
        </h1>
        <form className="d-from" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="w-100 mt-4"
            type="email"
            placeholder="Enter Your Email"
            {...register("email", { required: true })}
          />
          <br />
          <input
            className="w-100"
            type="password"
            placeholder="PassWord"
            {...register("password", { required: true })}
          />
          <button className="btn-all w-100 my-3" type="submit">
            Login
          </button>
          <Link
            className="link-d text-lg font-medium text-center text-black"
            to="/signup"
          >
            Don't have an account?:- &nbsp;
            <span className="text-[#160f75]"> Register Now</span>
          </Link>
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

export default Login;
