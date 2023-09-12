import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import blog1 from "../../images/Blog/blog-item-image-1.jpg";
import blog2 from "../../images/Blog/blog-item-image-2.jpg";
import blog3 from "../../images/Blog/blog-item-image-3.jpg";
import blog4 from "../../images/Blog/blog-item-image-4.jpg";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <Header />
      <div className="md:grid grid-cols-4">
        <div className="py-4 md:px-5 px-3 bg-slate-100 col-span-1">
          <h3 className="text-xl font-semibold"> Categories</h3>
          <ul>
            <li className="text-base font-medium ms-3 me-3 my-3 hover:text-cyan-600 ">
              Fiction
            </li>
            <li className="text-base font-medium ms-3 me-3 my-3 hover:text-cyan-600 ">
              Non-Fiction
            </li>
            <li className="text-base font-medium ms-3 me-3 my-3 hover:text-cyan-600 ">
              Reference
            </li>
            <li className="text-base font-medium ms-3 me-3 my-3 hover:text-cyan-600 ">
              Children's Books
            </li>
            <li className="text-base font-medium ms-3 me-3 my-3 hover:text-cyan-600 ">
              Religious and Spiritual
            </li>
            <li className="text-base font-medium ms-3 me-3 my-3 hover:text-cyan-600 ">
              Academic
            </li>
          </ul>
        </div>
        <div className="grid md:grid-cols-2 px- my-4 md:gap-4 sm:gap-1 col-span-3  justufy-center container py-10">
          {/* Blog  */}
          <div>
            <img className="img-size" src={blog1} alt="" />
            <div>
              <h3 className="mt-3 text-xl uppercase font-bold">
                The Digital Reading Revolution: Embracing E-books
              </h3>
              <h6 className="mt-1 mb-4 text-sm text-gray-400">
                Posted By <span className="font-bold text-black">Admin</span> |
                Jul 11TH, 2018 |{" "}
                <span className="font- text-black">Fiction</span>
              </h6>
              <p className="me-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                ad numquam aut perferendis fugit at vero et? Hic, repudiandae
                voluptas! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Velit ipsam, ad enim perferendis aliquam eligendi.
              </p>
            </div>
          </div>
          <div>
            <img className="img-size" src={blog2} alt="" />
            <div>
              <h3 className="mt-3 text-xl uppercase font-bold">
                The Digital Reading Revolution: Embracing E-books
              </h3>
              <h6 className="mt-1 mb-4 text-sm text-gray-400">
                Posted By <span className="font-bold text-black">Admin</span> |
                Jul 11TH, 2018 |{" "}
                <span className="font- text-black">Fiction</span>
              </h6>
              <p className="me-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                ad numquam aut perferendis fugit at vero et? Hic, repudiandae
                voluptas! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Velit ipsam, ad enim perferendis aliquam eligendi.
              </p>
            </div>
          </div>
          <div>
            <img className="img-size" src={blog3} alt="" />
            <div>
              <h3 className="mt-3 text-xl uppercase font-bold">
                The Digital Reading Revolution: Embracing E-books
              </h3>
              <h6 className="mt-1 mb-4 text-sm text-gray-400">
                Posted By <span className="font-bold text-black">Admin</span> |
                Jul 11TH, 2018 |{" "}
                <span className="font- text-black">Fiction</span>
              </h6>
              <p className="me-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                ad numquam aut perferendis fugit at vero et? Hic, repudiandae
                voluptas! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Velit ipsam, ad enim perferendis aliquam eligendi.
              </p>
            </div>
          </div>
          <div>
            <img className="img-size" src={blog4} alt="" />
            <div>
              <h3 className="mt-3 text-xl uppercase font-bold">
                The Digital Reading Revolution: Embracing E-books
              </h3>
              <h6 className="mt-1 mb-4 text-sm text-gray-400">
                Posted By <span className="font-bold text-black">Admin</span> |
                Jul 11TH, 2018 |{" "}
                <span className="font- text-black">Fiction</span>
              </h6>
              <p className="me-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                ad numquam aut perferendis fugit at vero et? Hic, repudiandae
                voluptas! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Velit ipsam, ad enim perferendis aliquam eligendi.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
