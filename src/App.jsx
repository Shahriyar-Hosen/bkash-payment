import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error/Error";
import About from "./Pages/About/About";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import AuthProvider from "./Context/AuthProvider";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Products from "./Pages/Products/Products";
import MyOrder from "./Pages/Dashboard/UserDashboard/MyOrder/MyOrder";
import ManageOrder from "./Pages/Dashboard/AdminDashboard/ManageOrder/ManageOrder";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import AddNewProduct from "./Pages/Dashboard/AdminDashboard/AddProduct/AddNewProduct";
import ReviewProvide from "./Pages/Dashboard/UserDashboard/ReviewProvide/ReviewProvide";
import SignUp from "./Pages/SignUp/SignUp";
import MakeAdmin from "./Pages/Dashboard/AdminDashboard/MakeAdmin/MakeAdmin";
import Blog from "./Pages/Blog/Blog";
import ProductDetails from "./Pages/Products/ProductDetails/ProductDetails";
// import Payment from "./Pages/Home/payment";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            {/* <Route path="payment" element={<Payment />} /> */}
            {/* <Route path="payment" element={<Payment />} /> */}
            {/* <Route path='placeorder/:id' element={<RequireAuth><PlaceOrder /></RequireAuth>} /> */}
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route
              path="placeorder"
              element={
                <RequireAuth>
                  <PlaceOrder />
                </RequireAuth>
              }
            />
            <Route path="/:productname/:id" element={<ProductDetails />} />
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  {" "}
                  <Dashboard />{" "}
                </RequireAuth>
              }
            >
              <Route
                exact
                path="/dashboard"
                element={
                  <RequireAuth>
                    <DashboardHome />
                  </RequireAuth>
                }
              ></Route>
              <Route
                path="/dashboard/dashboard/myorder"
                element={
                  <RequireAuth>
                    <MyOrder />
                  </RequireAuth>
                }
              />
              <Route
                path="/dashboard/dashboard/reviewprovide"
                element={
                  <RequireAuth>
                    <ReviewProvide />
                  </RequireAuth>
                }
              />
              <Route
                path="/dashboard/dashboard/manageorder"
                element={
                  <RequireAuth>
                    <ManageOrder />
                  </RequireAuth>
                }
              />
              <Route
                path="/dashboard/dashboard/addnewproduct"
                element={
                  <RequireAuth>
                    <AddNewProduct />
                  </RequireAuth>
                }
              />
              <Route
                path="/dashboard/dashboard/makeadmin"
                element={
                  <RequireAuth>
                    <MakeAdmin />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="products" element={<Products />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
