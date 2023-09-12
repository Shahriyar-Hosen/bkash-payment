import {
  faArrowRightArrowLeft,
  faAward,
  faTruck,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProductCard from "../../Card/ProductCard/ProductCard";
import SelectInput from "../../Component/FilterOption/FilterOption";
import useProducts from "../../Hooks/useProducts";
import AddToCard from "../../Notify/AddToCard/AddToCard";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import offerBanner6 from "../../images/banner-6.jpg";
import offerBanner7 from "../../images/banner-7.jpg";
import book1 from "../../images/brand-logo/book-1.jpg";
import book2 from "../../images/brand-logo/book-2.jpg";
import book3 from "../../images/brand-logo/book-3.jpg";
import book4 from "../../images/brand-logo/book-4.jpg";
import book5 from "../../images/brand-logo/book-5.jpg";
import Reviews from "../Reviews/Reviews";
import "./Home.css";

const Home = () => {
  const [products, productsIsLoading] = useProducts();
  const [selectedOption, setSelectedOption] = useState();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  if (products.length === 0) {
    return (
      <Stack
        sx={{ color: "#484C54", justifyContent: "center", marginTop: "350px" }}
        direction="row"
      >
        <CircularProgress size={80} color="inherit" />
      </Stack>
    );
  }

  const filterByPrice = (a, b) => {
    if (selectedOption === "Low to High") {
      return a.price - b.price;
    }
    if (selectedOption === "High to Low") {
      return b.price - a.price;
    }
    return a;
  };

  return (
    <div>
      <Header />

      {/* Top Banner */}
      <div className="top-section top-banner">
        <h1 className="md:text-6xl sm:text-sm text-white text-center ">
          Dive into Our <br /> <span className=""> E-Book Collection </span>{" "}
          Today!
        </h1>
        <p className=" md:text-xl sm:text-sm text-white text-center mt-3">
          Baitul Hikmah- Your Gateway to Timeless Wisdom – Download the E-Book
          Today!
        </p>
        <div className="flex justify-center p-12">
          <Button className="explore-btn "> Explore Now</Button>
        </div>
      </div>

      {/* Popular Books */}

      <div className="mb-5 container">
        <h1 className="text-2xl font-bold text-center mt-5">
          POPULAR <span className="text-color">BOOKS</span>
        </h1>
        <Slider
          {...settings}
          className=" container md:gap-2 flex justufy-center brnad"
        >
          <div className=" p-3  ">
            <img className="ms-auto me-auto" src={book1} alt="fdg" />
          </div>
          <div className=" p-3">
            <img className="ms-auto me-auto" src={book2} alt="dfg" />
          </div>
          <div className="p-3">
            <img className="ms-auto me-auto" src={book3} alt="dfg" />
          </div>
          <div className="p-3">
            <img className="ms-auto me-auto" src={book4} alt="dfg" />
          </div>
          <div className="p-3">
            <img className="ms-auto me-auto" src={book5} alt="dfg" />
          </div>
        </Slider>
      </div>

      {/* Products Section */}

      <div className=" my-5">
        <h1 className="text-4xl font-bold text-center uppercase">
          Featured <span className="text-color">Products</span>
        </h1>
        <h3 className="text-xl font-bold text-center mt-2 mb-5">
          Select your best choice <span className="text-color"></span>
        </h3>
        <div className="flex justify-between items-center mx-10 md:mx-20">
          <div></div>
          <SelectInput
            options={["Default", "Low to High", "High to Low"]}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
        <div className="sm:grid md:grid-cols-4 my-4 md:gap- grid-cols-2 sm:gap-1 justify-center container ">
          {products
            .slice(0, 8)
            .sort(filterByPrice)
            .map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
        </div>
        <Link
          className="text-color link-d flex justify-end text-lg pe-4 ms-auto"
          to={`/products`}
        >
          {" "}
          More Products
        </Link>
      </div>

      {/* Feature  */}

      <div className="my-5">
        <hr />
        <div className="sm:grid md:grid-cols-4 my-4 md:gap-4 grid-cols-2 sm:gap-1 justufy-center container">
          <div className="text-base flex items-center my-4  ">
            <span className="text-5xl text-color">
              {<FontAwesomeIcon icon={faTruck} />}
            </span>
            <div className="mx-3">
              <h3 className="text-xl font-bold text-color">Free Shipping</h3>
              <p className="text-base">
                Place your order anytime to get at your door
              </p>
            </div>
          </div>
          <div className="text-base flex items-center my-4  ">
            <span className="text-5xl text-color">
              {<FontAwesomeIcon icon={faAward} />}
            </span>
            <div className="mx-3">
              <h3 className="text-xl font-bold text-color">
                {" "}
                Quality Products
              </h3>
              <p> We Deliver branded product allaways </p>
            </div>
          </div>
          <div className="text-base flex items-center my-4  ">
            <span className="text-5xl text-color">
              {<FontAwesomeIcon icon={faUserShield} />}
            </span>
            <div className="mx-3">
              <h3 className="text-xl font-bold text-color"> Secure Payment</h3>
              <p>Our payment system is highly Confeidential</p>
            </div>
          </div>
          <div className="text-base flex items-center my-4  ">
            <span className="text-5xl text-color">
              {<FontAwesomeIcon icon={faArrowRightArrowLeft} />}
            </span>
            <div className="mx-3">
              <h3 className="text-xl font-bold text-color">
                {" "}
                5 Days return policy
              </h3>
              <p> Easy to return your products </p>
            </div>
          </div>
        </div>
        <hr />
      </div>

      {/* Offer Section */}
      <div className="flex justify-center">
        <div className="md:flex md:gap-5 my-5 offer-section containe">
          <div className="w-100 me-auto ms-auto offer mb-4">
            <img src={offerBanner6} alt="" />
          </div>
          <div className="w-100 me-auto ms-auto offer mb-4">
            <img src={offerBanner7} alt="" />
          </div>
        </div>
      </div>

      {/* Reviews Section  */}
      <Reviews />

      {/* Alert  */}
      <AddToCard></AddToCard>
      <Footer />
    </div>
  );
};

export default Home;
