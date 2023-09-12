import { Rating } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';
import Header from '../../../Shared/Header/Header';

const ProductDetails = () => {
    const { id } = useParams();
    const [products] = useProducts();
    const productDetails = products.find(product => product?._id === id);
    const newPrice = productDetails?.price - (productDetails?.price * 10) / 100;
    return (
        <div>
            <Header />
            <div >
                <div className='lg:flex justify-betwee mx-5 my-4 p-3 pb-5 bg-gray-100'>
                    <img src={productDetails?.img} alt="" />
                    <div className='ms-4'>
                        <h1 className='text-xl font-bold text-color mb-2'>{productDetails?.productName}</h1>
                        <Rating name="read-only" value="4" readOnly />
                        <p className='text-2xl text-color ms-auto font-bold'>
                            ${newPrice} <br />
                            <del className='text-sm text-gray-400 ms-auto font-bold'>
                                ${productDetails?.price}</del>

                            <p className='d-inline text-sm text-gray-500 ms-2'>-10%</p>
                        </p>
                        <p className='my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Fugiat maiores sapiente maxime harum, <br /> dolorum molestias? Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Ipsum iusto consequuntur minim </p>
                    </div>
                    <div className='ms-auto'>
                        <div className='mb-3'>
                            <p className='text-sm text-gray-400'>Delivery</p>
                            <p>Dhaka, Dhaka - North, Badda, Bangladesh</p>
                        </div>

                        <div>
                            <p>Ships from Overseas</p>
                        </div>
                        <hr />
                        <div className='my-3'>
                            <p>Standard Delivery</p>
                            <p className='text-sm text-gray-400'>3 - 15 day(s)</p>
                        </div>
                        <hr />
                        <div>
                            <p className='text-sm text-gray-400 my-2'>Service</p>
                            <p>7 Days Returns</p>
                            <p>2 Years warranty available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;