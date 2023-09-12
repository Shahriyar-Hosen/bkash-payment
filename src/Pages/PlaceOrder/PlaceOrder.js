import axios from "axios";
import React, { useEffect, useState } from "react";
import { useBkash } from "react-bkash";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import AddCardItems from "../../Card/AddCardItems/AddCardItems";
import useAuth from "../../Hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { user } = useAuth();
  const [cartDetails, setCartDetails] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const redirect_url = location.state?.from || "/dashboard/dashboard/myorder";

  const { error, loading, triggerBkash } = useBkash({
    onSuccess: (data) => {
      console.log("on success", data); // this contains data from api response from onExecutePayment
      if (data) {
        // onSubmit({ ...data });
        console.log("submitted");
        navigate(redirect_url);
        window.location.reload();
      }
    },
    onClose: () => {
      console.log("Bkash iFrame closed");
    },
    bkashScriptURL:
      "https://scripts.sandbox.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout-sandbox.js",
    amount: 1,
    onCreatePayment: async (paymentRequest) => {
      // call your API with the payment request here
      return await fetch(
        "https://pixacam-serverside.vercel.app/createCheckout",
        {
          method: "POST",
          body: JSON.stringify(paymentRequest),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("on creatate payment", data);
          return { ...data };
        });
    },
    onExecutePayment: async (paymentID) => {
      // call your executePayment API here
      return await fetch(
        `https://pixacam-serverside.vercel.app/execute/${paymentID}`,
        {
          method: "POST",
        }
      ).then((res) => res.json());
      // .then((data) => {
      //   console.log("on execute", data);
      //   return { ...data };
      // });
    },
  });

  const onSubmit = async (data) => {
    data.status = "Pending";
    data.myOrder = cartDetails;
    await triggerBkash();
    axios
      .post("https://pixacam-serverside.vercel.app/orders", data)
      .then((res) => {
        if (res.data.insertedId) {
          // alert("Placing order successfully");
          reset();
          // navigate(redirect_url);
        }
      });

    axios.delete("https://pixacam-serverside.vercel.app/productscard");
  };

  useEffect(() => {
    fetch("https://pixacam-serverside.vercel.app/productscard")
      .then((res) => res.json())
      .then((data) => {
        const myCart = data.filter((cart) => cart.cart.email === user.email);
        setCartDetails(myCart);
      });
  }, [user.email]);

  // Get current date
  useEffect(() => {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    const today = year + "-" + month + "-" + day;
    document.getElementById("theDate").value = today;
  }, []);

  // Order cancel function
  const removeItems = (id) => {
    const proced = window.confirm("Do you want to cancel your order");
    if (proced) {
      const url = `https://pixacam-serverside.vercel.app/productscard/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Successfully Cancel Your Order");
            const remainigOrders = cartDetails.filter(
              (order) => order._id !== id
            );
            setCartDetails(remainigOrders);
          }
        });
    }
  };
  // if (loading) {
  //   return <h1>loading</h1>;
  // }

  // if (error) {
  //   return <h1>{error?.message}</h1>;
  // }
  const onAlert = () => {
    alert("Please add at lest one product");
  };

  return (
    <div>
      <Header />
      {error && <h1>{error?.message}</h1>}
      {loading && <h1>Loading</h1>}
      {cartDetails.length ? (
        <div>
          <table className="container my-5">
            <thead className="">
              <tr className="text-light text-black text-center fs-6 fw-bold">
                <td className="p-2 w-20">SL No.</td>
                <td className="p-2 w-28">Image</td>
                <td className="p-2">Product</td>
                <td className="p-2">Qantity</td>
                <td className="p-2">Unit Price</td>
                <td className="p-2">Total Price</td>
              </tr>
            </thead>
            <tbody>
              {cartDetails.map((product) => (
                <AddCardItems
                  key={product?._id}
                  product={product}
                  removeItems={removeItems}
                >
                  {" "}
                </AddCardItems>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      {/* Customer Information  */}
      <div className="container row mx-auto my-5 pt-5 pb-5">
        <section className="col-lg-6  my-4 mx-auto form-design ">
          <h3 className="text-light text-black  text-3xl mb-4 fw-bold">
            {" "}
            Provide Your Information:
          </h3>
          <form
            onSubmit={handleSubmit(cartDetails.length > 0 ? onSubmit : onAlert)}
          >
            <p className="text-left">Customer Name:</p>
            <input
              className="w-100"
              {...register("firstName")}
              value={user.displayName}
              placeholder="Enter your name"
            />{" "}
            <br />
            <p className="text-left mt-3">Customer Email:</p>
            <input
              className="w-100"
              type="email"
              {...register("email")}
              value={user.email}
            />{" "}
            <br />
            <p className="text-left mt-3">Order Date:</p>
            <input
              className="w-100"
              type="date"
              {...register("orderDate")}
              placeholder="Order Date"
              id="theDate"
            />{" "}
            <br />
            <p className="text-left mt-3">Phone Number:</p>
            <input
              className="w-100"
              placeholder="Phone Number"
              type="number"
              {...register("phone")}
            />{" "}
            <br />
            <p className="text-left mt-3">Delivery Address:</p>
            <input
              className="w-100"
              placeholder="Address"
              type="address"
              {...register("address")}
            />{" "}
            <br />
            {/* <input
              className="w-25 mt-4  text-lg "
              type="submit"
              to="/mybooking"
            /> */}
            <div>
              <button
                className="text-black mt-4 px-2 py-2 rounded-lg  text-lg bg-[#DCBB87] hover:bg-[#aa9265]"
                onClick={triggerBkash}
              >
                Pay with bKash
              </button>
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PlaceOrder;
