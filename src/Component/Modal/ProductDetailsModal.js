import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useCardProducts from "../../Hooks/useCardProducts";
import useProducts from "../../Hooks/useProducts";
import "./ProductDetailsModal.css";

const ProductDetailsModal = ({ productId, setOpenModal }) => {
  const { user } = useAuth();
  let navigate = useNavigate();
  const [products] = useProducts();
  const productDetails = products.find((product) => product?._id === productId);
  const newPrice = productDetails?.price - (productDetails?.price * 10) / 100;
  const [cardDetails] = useCardProducts();
  const singlePdcInCard = cardDetails.find(
    (product) => product.cart._id === productId
  );

  const addToCard = (product) => {
    // If users did't login yet
    if (!user?.email) {
      // Navigate to login
      navigate("/login", { replace: true });
    }
    // If product have already added to shoping card
    if (user?.email && singlePdcInCard) {
      const customAlert = document.getElementById("customAlert");
      document.getElementById("customAlert").style.display = "block";
      const cardNotify = document.createElement("div");
      cardNotify.innerHTML = `
                <h4>Already Added to Card </h4>
                `;
      customAlert.appendChild(cardNotify);

      setTimeout(() => {
        // Notification
        document.getElementById("customAlert").style.display = "none";
        cardNotify.innerHTML = "";
        setOpenModal(false);
      }, 2500);
    }

    // If the product did not add to shopping cart yet
    if (user?.email && !singlePdcInCard) {
      product.email = user.email;
      product.quantity = 1;
      product.newPrice = newPrice;
      const productDetails = { cart: product };

      axios
        .post(
          "https://pixacam-serverside.vercel.app/productscard",
          productDetails
        )
        .then((res) => {
          if (res.data.insertedId) {
            const customAlert = document.getElementById("customAlert");
            document.getElementById("customAlert").style.display = "block";
            const cardNotify = document.createElement("div");
            cardNotify.innerHTML = `
                            <h4> Added to Card </h4>
                            `;
            customAlert.appendChild(cardNotify);

            setTimeout(() => {
              // Notification
              document.getElementById("customAlert").style.display = "none";
              cardNotify.innerHTML = "";
              setOpenModal(false);
            }, 1000);
          }
        });
    }
    // Condition end
  };
  return (
    <div className="modal-container">
      <div className="modal-content-container bg-gray-100">
        <FontAwesomeIcon
          icon={faXmarkCircle}
          className=" btn-cart absolute right-0 top-2 ms-auto text-2xl me-2 cursor-pointer"
          onClick={() => setOpenModal(false)}
        />
        <div className="lg:flex mx-5 my-4 p-3 pb-5 ">
          <div className="flex">
            <img className="w-50" src={productDetails?.img} alt="" />
            <div className="ms-4">
              <h1 className="text-xl font-bold text-color mb-2">
                {productDetails?.productName}
              </h1>
              <Rating name="read-only" value="4" readOnly />
              <p className="text-2xl text-color ms-auto font-bold">
                ${newPrice} <br />
                <del className="text-sm text-gray-400 ms-auto font-bold">
                  ${productDetails?.price}
                </del>
                <p className="d-inline text-sm text-gray-500 ms-2">-10%</p>
              </p>
              <p className="my-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />{" "}
                Fugiat maiores sapiente maxime harum, <br /> dolorum molestias?
                Lorem ipsum dolor sit amet,{" "}
              </p>
              <button
                className="btn-all mx-2"
                onClick={() => addToCard(productDetails)}
              >
                {" "}
                Add to card{" "}
              </button>
            </div>
          </div>
          <div className="ms-auto">
            <div className="mb-3">
              <p className="text-sm text-gray-400">Seller Address</p>
              <p>Dhaka, Dhaka - North, Badda, Bangladesh</p>
            </div>

            <div>
              <p>Ships from Overseas</p>
            </div>
            <hr />
            <div className="my-3">
              <p>Standard Delivery</p>
              <p className="text-sm text-gray-400">3 - 15 day(s)</p>
            </div>
            <hr />
            <div>
              <p className="text-sm text-gray-400 my-2">Service</p>
              <p>7 Days Returns</p>
              <p>2 Years warranty available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
