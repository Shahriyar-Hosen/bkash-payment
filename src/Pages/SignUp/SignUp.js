import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const SignUp = () => {
    const { registerUser, signinUsingGoogle } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const [userIsLoading, setUserIsLoading] = useState(true);
    const navigate = useNavigate()
    const location = useLocation();

    const redirect_url = location.state?.from || '/home';

    // Submit user details 
    const onSubmit = data => {
        if (data.password === data.confirmPassword) {
            registerUser(data.email, data.password, data.name, navigate, location);
            reset();
        }
        else {
            alert(' Password did not match')
        }
    };

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
            <Header> </Header>

            <div className="box-design banner-ls xl:flex justify-center">
                <div className='xl:flex'>
                    <div className='my-auto w-100 xl:w-50  mx-auto '>
                        <div className=''>
                            <h1 className='text-uppercase text-white text-center text-3xl pt-5'>Please <span className='text-color '>Sign Up now!</span></h1>
                            <p className='text-lg text-white mt-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatum, molestiae esse ullam tenetur similique!</p>
                        </div>
                    </div>
                    <div className='w-100'>
                        <div className='flex justify-center mt-5'>
                            <div className="d-from">

                                <form className=" " onSubmit={handleSubmit(onSubmit)}>

                                    <input type="text" className='w-100 mb-2' placeholder="Enter Your Name" {...register("name", { required: true })} />
                                    <br />

                                    <input type="email" className='w-100 mb-2' placeholder="Enter Your Email" {...register("email", { required: true })} />
                                    <br />
                                    <input type="password" className='w-100 mb-2' placeholder="PassWord"  {...register("password", { required: true })} />
                                    <br />
                                    <input type="password" className='w-100 mb-2' placeholder="Confirm PassWord"  {...register("confirmPassword", { required: true })} />
                                    <br />
                                    <button className="btn-all " type="submit">Sign Up</button>
                                    <br />
                                    <br />
                                    <Link className='link-d text-black text-xl' to="/login"> Already have an account. </Link>
                                </form>

                                {/* Google Login  */}
                                <div className="text-center mx-auto">

                                    <br />
                                    {/* On Click */}
                                    <button className="btn-all  mb-4">
                                        <img width="40px" alt="" /> <span className="fs-6 fw-bold p-3" onClick={handleGoogleLogin}>Login with Google</span>
                                    </button>

                                </div>
                            </div>
                            <br />
                        </div>
                        <br /> <br />
                    </div>
                </div>
            </div >
            {/* <div className='box-design '>
            <h1 className='text-uppercase text-white text-center text-5xl pt-5'>Please create a <span className='text-color '>new user</span></h1>
                <div className='flex justify-center py-5'>               
                    <div className="d-from mt-">

                        <form className=" " onSubmit={handleSubmit(onSubmit)}>

                            <input type="text" placeholder="Enter Your Name" {...register("name", { required: true })} />
                            <br />

                            <input type="email" placeholder="Enter Your Email" {...register("email", { required: true })} />
                            <br />
                            <input type="password" placeholder="PassWord"  {...register("password", { required: true })} />
                            <br />
                            <input type="password" placeholder="Confirm PassWord"  {...register("confirmPassword", { required: true })} />
                           <br />
                            <button className="btn-all " type="submit">Sign Up</button>
                            <br />
                            <br />
                            <Link className='link-d text-color text-xl' to="/login"> Already have an account. </Link>
                        </form>
                    </div>
                </div>
            </div> */}
            <Footer></Footer>
        </>
    );
};

export default SignUp;