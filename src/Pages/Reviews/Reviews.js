import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useReview from '../../Hooks/useReview';
import ReviewCard from '../../Card/ReviewCard/ReviewCard';

const Reviews = () => {
    const [reviews] = useReview();
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        responsive:[
            {
                breakpoint:786,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1
                }
            }
        ],
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <div className='container' >
            <h1 className='text-4xl font-bold text-center my-5 uppercase'>Customer <span className='text-color'>Opinion</span></h1>
            <Slider {...settings} className=" container my-5 md:gap-4 justufy-center">
                {
                    reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                }
            </Slider>
        </div>
    );
};

export default Reviews;