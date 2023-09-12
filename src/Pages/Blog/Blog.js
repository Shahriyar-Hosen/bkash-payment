import React from 'react';
import Header from '../../Shared/Header/Header';
import './Blog.css';
import blog1 from '../../images/Blog/blog-item-image-1.jpg';
import blog2 from '../../images/Blog/blog-item-image-2.jpg';
import blog3 from '../../images/Blog/blog-item-image-3.jpg';
import blog4 from '../../images/Blog/blog-item-image-4.jpg';
import Footer from '../../Shared/Footer/Footer';

const Blog = () => {
    return (
        <div>
            <Header />
            <div className='md:grid grid-cols-4'>
                <div className='py-4 md:px-5 px-3 bg-slate-100 col-span-1'>
                    <h3 className='text-xl font-semibold'> Categories</h3>
                    <ul>
                        <li className='text-sm font-medium ms-3 me-3 my-3 hover:text-orange-600 '>Camera & CC Camera</li>
                        <li className='text-sm font-medium ms-3 me-3 my-3 hover:text-orange-600 '>Smart Watch</li>
                        <li className='text-sm font-medium ms-3 me-3 my-3 hover:text-orange-600 '> Camera Accesories </li>
                        <li className='text-sm font-medium ms-3 me-3 my-3 hover:text-orange-600 '> Computer & Laptop</li>
                        <li className='text-sm font-medium ms-3 me-3 my-3 hover:text-orange-600 '>Tv & Audio System</li>
                        <li className='text-sm font-medium ms-3 me-3 my-3 hover:text-orange-600 '> Accessories </li>
                    </ul>
                </div>
                <div className='grid md:grid-cols-2 px- my-4 md:gap-4 sm:gap-1 col-span-3  justufy-center container'>
                    {/* Blog  */}
                    <div>
                        <img className='img-size' src={blog1} alt="" />
                        <div>
                            <h3 className='mt-3 text-xl uppercase font-bold'> THIS IS SECOUND POST FOR XIPBLOG </h3>
                            <h6 className='mt-1 mb-4 text-sm text-gray-400'>Posted By <span className='font-bold text-black'>Admin</span> | Jul 11TH, 2018 | <span className='font- text-black'>Natural</span></h6>
                            <p className='me-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ad numquam aut perferendis fugit at vero et? Hic, repudiandae voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsam, ad enim perferendis aliquam eligendi.</p>
                        </div>
                    </div>
                    <div>
                        <img className='img-size' src={blog2} alt="" />
                        <div>
                            <h3 className='mt-3 text-xl uppercase font-bold'> The most attractive Smart watch comming in this February</h3>
                            <h6 className='mt-1 mb-4 text-sm text-gray-400'>Posted By <span className='font-bold text-black'>Admin</span> | Jul 11TH, 2018 | <span className='font- text-black'>Smart Watch</span></h6>
                            <p className='me-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ad numquam aut perferendis fugit at vero et? Hic, repudiandae voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsam, ad enim perferendis aliquam eligendi.</p>
                        </div>
                    </div>
                    <div>
                        <img className='img-size' src={blog3} alt="" />
                        <div>
                            <h3 className='mt-3 text-xl uppercase font-bold'> New Conan D70 don’t miss any moments any where</h3>
                            <h6 className='mt-1 mb-4 text-sm text-gray-400'>Posted By <span className='font-bold text-black'>Admin</span> | Jul 11TH, 2018 | <span className='font- text-black'>Camera & CC Camera</span></h6>
                            <p className='me-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ad numquam aut perferendis fugit at vero et? Hic, repudiandae voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsam, ad enim perferendis aliquam eligendi.</p>
                        </div>
                    </div>
                    <div>
                        <img className='img-size' src={blog4} alt="" />
                        <div>
                            <h3 className='mt-3 text-xl uppercase font-bold'> THIS IS SECOUND POST FOR XIPBLOG </h3>
                            <h6 className='mt-1 mb-4 text-sm text-gray-400'>Posted By <span className='font-bold text-black'>Admin</span> | Jul 11TH, 2018 | <span className='font- text-black'>Computer & Laptop</span></h6>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ad numquam aut perferendis fugit at vero et? Hic, repudiandae voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsam, ad enim perferendis aliquam eligendi.</p>
                        </div>
                    </div>
                    <div>
                        <img className='img-size' src={blog1} alt="" />
                        <div>
                            <h3 className='mt-3 text-xl uppercase font-bold'> THIS IS SECOUND POST FOR XIPBLOG </h3>
                            <h6 className='mt-1 mb-4 text-sm text-gray-400'>Posted By <span className='font-bold text-black'>Admin</span> | Jul 11TH, 2018 | <span className='font- text-black'>Natural</span></h6>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ad numquam aut perferendis fugit at vero et? Hic, repudiandae voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsam, ad enim perferendis aliquam eligendi.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Blog;