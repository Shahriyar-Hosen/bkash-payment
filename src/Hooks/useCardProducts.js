import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useCardProducts = () => {
  const [cartDetails, setCartDetails] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch("https://pixacam-serverside.vercel.app/productscard")
      .then((res) => res.json())
      .then((data) => {
        const myCart = data.filter((cart) => cart.cart.email === user.email);
        setCartDetails(myCart);
      });
  }, [user.email]);
  return [cartDetails];
};

export default useCardProducts;
