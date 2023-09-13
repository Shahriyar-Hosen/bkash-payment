/* eslint-disable react/prop-types */
import axios from "axios";

const Home = ({ totalPrice, cart }) => {
  const pay = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/bkash/payment/create",
        { amount: totalPrice, orderId: 1, cart },
        { withCredentials: true }
      );
      window.location.href = await data.bkashURL;
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <button
        style={{
          border: "none",
          padding: "5px 14px",
          background: "#D82F70",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={pay}
      >
        Pay with bkash
      </button>
    </div>
  );
};

export default Home;
