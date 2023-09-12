import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Login = () => {
    const { signinUsingGoogle, loginRegisteredUser } = useAuth();
    const [userIsLoading, setUserIsLoading] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();


    const redirect_url = location.state?.from || '/home';

    // Registered user login 

    const onSubmit = (data) => {
        loginRegisteredUser(data.email, data.password)
            .then(result => {
                navigate(redirect_url)
            })
            .catch(error => {
                const errorMassage = error.massage;
            })
            .finally(() => setUserIsLoading(false))
    }

    const handleGoogleLogin = () => {
        signinUsingGoogle()
            .then(result => {
                const user = result.user;
                // setUser(user);
                navigate(redirect_url)


            })
            .catch((error) => {
                // setError(error.massage)
            })
            .finally(() => setUserIsLoading(false))
    }
    return (
        <>
            <Header />

            <div className="box-design banner-ls xl:flex justify-center">
                <div className='xl:flex'>
                    <div className='my-auto w-100 xl:w-50  mx-auto '>
                        <div className=''>
                            <h1 className='text-uppercase text-white text-center text-3xl pt-5'>Please <span className='text-color '>Sign In now!</span></h1>
                            <p className='text-lg text-white mt-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatum, molestiae esse ullam tenetur similique!</p>
                        </div>
                    </div>
                    <div className='w-100'>
                        <div className='flex justify-center mt-5'>
                            <div className="d-from">

                                <form className=" " onSubmit={handleSubmit(onSubmit)}>

                                    <input className='w-100 mt-4' type="email" placeholder="Enter Your Email" {...register("email", { required: true })} />
                                    <br /> <br />
                                    <input className='w-100' type="password" placeholder="PassWord"  {...register("password", { required: true })} />
                                    <br />
                                    <div className='flex justify-center mt-3'>
                                        <button className="btn-all" type="submit">Login</button>
                                    </div>
                                </form>

                                {/* Google Login  */}
                                <div className="text-center mx-auto">

                                    <br />
                                    {/* On Click */}
                                    <button className="btn-all  mb-4">
                                        <img width="40px" alt="" /> <span className="fs-6 fw-bold p-3" onClick={handleGoogleLogin} >Login with Google</span>
                                    </button>
                                    <span className="d-block text-danger">

                                    </span>
                                    <h6 className='text-xl text-color'>Don’t have an account? <Link className='link-d' to='/signup'>Register Now</Link></h6>
                                </div>
                            </div>
                            <br />
                        </div>
                        <br /> <br />
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
};

export default Login;