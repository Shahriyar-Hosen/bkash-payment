import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import MyOrderCard from "../../../../Card/MyOrderCard/MyOrderCard";
import useAuth from "../../../../Hooks/useAuth";

const MyOrder = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  // Order details load
  useEffect(() => {
    fetch("https://pixacam-serverside.vercel.app/orders")
      .then((res) => res.json())
      .then((data) => {
        const myOrders = data.filter((order) => order.email === user.email);
        setOrders(myOrders);
      });
  }, [user.email]);
  // orders.map(order=> setOrder(order.myOrder))

  // Order cancel function
  const cancelOrder = (id) => {
    const proced = window.confirm("Do you want to cancel your order");
    if (proced) {
      const url = `https://pixacam-serverside.vercel.app/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Successfully Cancel Your Order");
            const remainigOrders = orders.filter((order) => order._id !== id);
            setOrders(remainigOrders);
          }
        });
    }
  };

  return (
    <div>
      <div className="container mb-5">
        <h1 className="text-4xl font-bold text-center my-5">
          My <span className="text-color">Orders</span>
        </h1>
        <Row xs={1} md={1} className="gap-3">
          {/* xs={1} md={3} */}
          {orders.map((order) => (
            <MyOrderCard
              key={order._id}
              order={order}
              cancelOrder={cancelOrder}
            ></MyOrderCard>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default MyOrder;
