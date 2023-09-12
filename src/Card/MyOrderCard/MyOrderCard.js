import React from "react";

const MyOrderCard = ({ order, cancelOrder }) => (
  <div className=" drop-shadow-lg">
    <div className="flex">
      <div>
        <h2 className="text-lg fw-bold">Order No: {order?._id}</h2>
        <h2>Placed on {order?.orderDate}</h2>
      </div>
      <div className="ml-auto mt-auto text-lg text-color">
        <h2>{order?.status}</h2>
      </div>
    </div>
    <div className="w-100 my-2 d-flex flex-column gap-3 border-bottom border-primary pb-3">
      {order?.myOrder.map((e) => (
        <div key={e._id} e={e} className="flex gap-3">
          <div>
            <img className="w-14" src={e?.cart?.img} alt="" srcset="" />
          </div>
          <div className="">
            <h1 className="text-xl fw-bold">{e?.cart?.productName}</h1>
            <p className="text-md fw-bold">${e?.cart?.newPrice}</p>
            <p>x {e?.cart?.quantity}</p>
          </div>
        </div>
      ))}
      <div className=" flex justify-end">
        <button className="cancel_btn" onClick={() => cancelOrder(order?._id)}>
          Cancel
        </button>
      </div>
    </div>
  </div>
);

export default MyOrderCard;
