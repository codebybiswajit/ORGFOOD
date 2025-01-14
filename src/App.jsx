import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Login from "./Component/Home/Login";
import Signup from "./Component/Home/Signup";
import ContactUs from "./Component/Home/ContactUs";
import About from "./Component/Home/About";
import Profile from "./Component/Home/Profile";
import Cart from "./Component/Home/Cart";
import Update from "./Component/Home/Update";
import "./../src/assets/style.css";
import PasswordReset from "./Component/Home/PasswordReset";
import Spinner from "./Component/Home/Spinner";
import UpdatePassword from "./Component/Home/UpdatePassword";
import AddItems from "./Component/Home/AddItems";
import ViewandUpdateProduct from "./Component/Home/ViewandUpdateProduct";
import AllProducts from "./Component/Home/AllProducts";
import AdminDashboard from "./Component/AdminDashboard";
import AdminControlUser from "./Component/AdminControlUser";
import NotFound from "./Component/NotFound";
import Doctors from "./Component/Home/Doctors";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Set initial state to null

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout as needed
  }, []);

  return (
    <>
      <Router>
        {loading ? (
          <Spinner message="Loading" />
        ) : (
          <>
            <Navbar isAuthenticated={isAuthenticated} />
            <Routes>
              <Route path="/ORGFOOD" element={<Home />} />
              <Route path="/admin/*" element={<AdminDashboard />} />
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Home />} />
              {/* Add a catch-all route for 404 Not Found */}
              <Route path="*" element={<NotFound />} />
              <Route
                path="/login"
                element={
                  !isAuthenticated ? (
                    <Login Auth={setIsAuthenticated} />
                  ) : (
                    <Navigate to="/profile" />
                  )
                }
              />
              <Route
                path="/register"
                element={
                  !isAuthenticated ? <Signup /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/profile"
                element={
                  isAuthenticated ? <Profile /> : <Navigate to="/login" />
                }
              />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/about" element={<About />} />
              <Route path="/product" element={<AllProducts />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/addItem" element={<AddItems />} />
              <Route path="/viewItem" element={<ViewandUpdateProduct />} />
              <Route path="/update" element={<Update />} />
              <Route path="/update-password" element={<UpdatePassword />} />
              <Route path="/reset-password" element={<PasswordReset />} />
              <Route path="/user" element={<AdminControlUser />}></Route>
            </Routes>
            <Footer />
          </>
        )}
      </Router>
    </>
  );
}

export default App;
