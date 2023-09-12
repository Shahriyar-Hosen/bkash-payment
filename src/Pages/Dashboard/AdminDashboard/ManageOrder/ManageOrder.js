import React, { useEffect, useState } from "react";
import ManageOrderCard from "../../../../Card/ManageOrderCard/ManageOrderCard";
import useAuth from "../../../../Hooks/useAuth";

const ManageOrder = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://pixacam-serverside.vercel.app/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  const cancelOrder = (id) => {
    const proced = window.confirm(" Do you want to cancel order?");
    if (proced) {
      const url = `https://pixacam-serverside.vercel.app/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Successfully cancel order");
            const remainingOrder = data.filter((order) => order._id !== id);
            setOrders(remainingOrder);
          }
        });
    }
  };

  const updateOrderStatus = (id) => {
    const proceed = window.confirm("Do Want To Update Order Status?");
    if (proceed) {
      const url = `https://pixacam-serverside.vercel.app/orders/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "Shipped" }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("Status Update Successfully");
          }
        });
    }
  };
  return (
    <div>
      <div className="container mb-5">
        <h1 className="text-4xl font-bold text-center my-5">
          Manage All <span className="text-color">Orders</span>
        </h1>

        <div className="sm:grid md:grid-cols-3 my-4 md:gap-4 grid-cols-2 sm:gap-1 justufy-center container">
          {orders.map((order) => (
            <ManageOrderCard
              key={order.id}
              order={order}
              cancelOrder={cancelOrder}
              updateOrderStatus={updateOrderStatus}
            ></ManageOrderCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
