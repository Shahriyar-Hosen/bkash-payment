import React from 'react';

const MyOrderCard = ({ order, cancelOrder }) => {
    return (
        <div className=' drop-shadow-lg'>
            <div className='flex'>
                <div>
                    <h2 className='text-lg fw-bold'>Order No: {order?._id}</h2>
                    <h2>Placed on {order?.orderDate}</h2>
                </div>
                <div className='ml-auto mt-auto text-lg text-color'>
                    <h2>{order?.status}</h2>
                </div>
            </div>
            <div className='w-100 my-2'>
                {
                    order?.myOrder.map(e => <div key={e._id} e={e}
                        className="flex"
                    >
                        <div>
                            <img className='w-50 h-75' src={e?.cart?.img} alt="" srcset="" />
                        </div>
                        <div className=''>
                            <h1 className='text-xl fw-bold'>{e?.cart?.productName}</h1>
                            <p className='text-md fw-bold'>${e?.cart?.newPrice}</p>
                            <p>x {e?.cart?.quantity}</p>
                        </div>
                    </div>)
                }
                <div className=' flex justify-end'>
                    <button className='cancel_btn' onClick={() => cancelOrder(order?._id)}> Cancel </button>
                </div>
            </div>
            {/* <div className='card-design shadow-2xl m-3'>
                <div className='p-3'>
                    <img className='img-edit' src={props?.order?.product?.img} alt="" />
                </div>
                <div>
                    <h4 className='text-xl font-bold text-color my-2 text-center'> {props?.order?.product?.productName}</h4>
                    <p className='p-2'> Description : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat maiores sapiente maxime harum, dolorum molestias?</p>
                    <div className='flex items-center p-2'>
                        <button className='btn-all' onClick={() => props.cancelOrder(props?.order?._id)}> Cancel </button>
                        <p className='text-xl text-color ms-auto font-bold'> ${props?.order?.product?.price}</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default MyOrderCard;