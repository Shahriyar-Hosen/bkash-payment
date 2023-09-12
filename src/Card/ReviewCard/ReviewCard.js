import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar, Rating } from '@mui/material';
import './ReviewCard.css'

const ReviewCard = (props) => {
    const { img, customerName, feedback, rating } = props.review;
    
    return (
        <div className='card-design shadow pt-3 m-3 mb-5'>
            <div className='p-3 flex justify-center'>
                <Avatar
                    alt="Remy Sharp"
                    src={img}
                    sx={{ width: 85, height: 85 }}
                />
            </div>
            <div className='m-2 pb-3 '>
                <h4 className='text-color text-center p-2'> {customerName}</h4>
                <p className='text-center p-3 tex-overflow min-h-max'> {feedback}</p>
                <div className='flex justify-center p-2 pb-4'>
                <Rating  name="read-only" value={parseFloat(rating)} readOnly />
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;