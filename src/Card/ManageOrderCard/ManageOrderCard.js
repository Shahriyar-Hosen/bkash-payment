import React from 'react';

const ManageOrderCard = ({ order }) => {
    const { _id, firstName, address, myOrder, status } = order;

    return (
        <div>
            <div className='card-design shadow-2xl m-3'>
                <div className='p-3 '>
                    <h3 className='text-md font-bold'> No:{_id}</h3>
                    <h3> {firstName}</h3>
                    <h3> Address:{address}</h3>
                    <div className='flex'>
                        <h3> Total product:<span className='text-color'> {myOrder.length}</span></h3>
                        <p className='ms-auto text-md text-color'> {status}</p>
                    </div>
                </div>
                <div >
                    {
                        myOrder.map(e => <div className='p-2' key={e.id} e={e}>
                            {/* {const quan =(e?.cart?.quantity)} */}
                            <h3>Items:</h3>
                            <div className='flex justify-between'>
                                <h3>{e.cart.productName}</h3>
                                <p className='text-color'>{e.cart.quantity}</p>
                            </div>
                            {/* <h3 value={valueSet}></h3> */}
                        </div>)
                    }
                </div>
            </div>
            {/* <div className='card-design shadow-2xl m-3'>
                <div className='p-3'>
                    <img className='img-edit' src={props?.order?.product?.img} alt="" />
                </div>
                <div className='p-3'>
                    <h4 className='text-xl font-bold text-color my-2 text-center'> {props?.order?.product?.productName}</h4>
                    <p className='p-2'> Customer Name: {props?.order?.firstName}</p>
                    <p className='p-2'> Order Date: {props?.order?.orderDate}</p>
                    <p className='p-2'> Status: {props?.order?.status}</p>
                    <div className='flex items-center'>
                        <button className='btn-all' onClick={() => props.cancelOrder(props?.order?._id)}> Cancel </button>
                        <button className='btn-all ms-auto' onClick={() => props.updateOrderStatus(props?.order?._id)}> Update </button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default ManageOrderCard;