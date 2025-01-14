import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import { FaIndianRupeeSign } from "react-icons/fa6";

export default function Cart() {
  const [cart, setCart] = useState({ items: [], totalPrice: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [shippingCost, setShippingCost] = useState(25);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get("/api/v0/cart/getcartItems", {
          withCredentials: true,
        });
        setCart(response.data.data);
      } catch (error) {
        setError("Failed to load cart");
        console.error("Error fetching cart:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  const handleIncrementQuantity = async (productId) => {
    try {
      const response = await axios.put(
        `/api/v0/cart/increment/${productId}`,
        {},
        { withCredentials: true },
      );
      setCart((prevCart) => {
        const updatedItems = prevCart.items.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
        return {
          ...prevCart,
          items: updatedItems,
          totalPrice: response.data.data.totalPrice,
        };
      });
      setStatus("Product quantity incremented successfully");
      setTimeout(() => setStatus(""), 1000);
    } catch (error) {
      console.error("Error incrementing quantity:", error);
    }
  };

  const handleDecrementQuantity = async (productId) => {
    try {
      const response = await axios.put(
        `/api/v0/cart/decrement/${productId}`,
        {},
        { withCredentials: true },
      );
      setCart((prevCart) => {
        const updatedItems = prevCart.items.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
        return {
          ...prevCart,
          items: updatedItems,
          totalPrice: response.data.data.totalPrice,
        };
      }); // Update cart state with the new data
      setStatus("Product quantity decremented successfully");
      setTimeout(() => setStatus(""), 1000);
    } catch (error) {
      console.error("Error decrementing quantity:", error);
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      const response = await axios.delete(
        `/api/v0/cart/remove-item/${productId}`,
        { withCredentials: true },
      );
      setCart((prevCart) => {
        const updatedItems = prevCart.items.filter(
          (item) => item.productId !== productId,
        );
        return {
          ...prevCart,
          items: updatedItems,
          totalPrice: response.data.data.totalPrice,
        };
      }); // Update cart state with the new data
      setStatus("Product removed from cart successfully");
      setTimeout(() => setStatus(""), 1000);
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  const handleShippingChange = (event) => {
    const selectedValue = event.target.value;
    let cost = 0;

    if (selectedValue === "1") {
      cost = 25;
    } else if (selectedValue === "2") {
      cost = 50;
    }

    setShippingCost(cost);
  };

  if (loading) {
    return <Spinner message="Cart Loading" />;
  }

  if (error) {
    return <div className="text-center">{error}</div>;
  }
  const handleQuantityChange = async (productId, quantity) => {
    const newQuantity = parseInt(quantity, 10);

    // If the input is not a valid number or is less than 1, remove the item
    if (isNaN(newQuantity) || newQuantity < 1) {
      return handleRemoveFromCart(productId);
    }

    try {
      const response = await axios.put(
        `/api/v0/cart/update/${productId}`,
        { quantity: newQuantity },
        { withCredentials: true },
      );
      setCart((prevCart) => {
        const updatedItems = prevCart.items.map((item) =>
          item.productId === productId
            ? { ...item, quantity: newQuantity }
            : item,
        );
        return {
          ...prevCart,
          items: updatedItems,
          totalPrice: response.data.data.totalPrice,
        };
      });
      setStatus("Product quantity updated successfully");
      setTimeout(() => setStatus(""), 1000);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12">
          <div
            className="card card-registration card-registration-2"
            style={{ borderRadius: "15px" }}
          >
            <div className="card-body p-0">
              <div className="row g-0">
                <div className="col-lg-8">
                  <div className="p-5">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                      <h1 className="fw-bold mb-0">Shopping Cart</h1>
                      <h6 className="mb-0 text-muted">
                        {cart.items.length} items
                      </h6>
                    </div>
                    {cart.items.length === 0 ? (
                      <p className="text-center d-flex justify-content-center align-content-center flex-column text-primary fs-3 ">
                        <span className="fs-2">
                          There is Nothing In Your Cart
                        </span>
                        <span className="text-danger">
                          Add Something To View Here{" "}
                        </span>
                      </p>
                    ) : (
                      <>
                        {status && (
                          <p className="text-center text-success">{status}</p>
                        )}
                        <hr className="my-4" />
                        {cart.items.map((item) => (
                          <div
                            className="row mb-4 d-flex justify-content-between align-items-center"
                            key={item.productId}
                          >
                            <div className="col-md-2 col-lg-2 col-xl-2">
                              <img
                                src={item.imageUrl}
                                className="img-fluid rounded-3"
                                alt={item.productName}
                              />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                              <h6 className="text-muted">{item.productName}</h6>
                              <h6 className="mb-0">
                                {item.productDescription
                                  .toString()
                                  .substring(0, 50)}
                                ...
                              </h6>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                              <button
                                aria-label="Decrease quantity"
                                data-mdb-button-init
                                data-mdb-ripple-init
                                className="btn btn-link px-2"
                                onClick={() =>
                                  handleDecrementQuantity(item.productId)
                                }
                              >
                                <i className="fas fa-minus"></i>
                              </button>
                              <input
                                id="form1"
                                min="0"
                                name="quantity"
                                value={item.quantity}
                                type="number"
                                className="form-control form-control-sm"
                                onChange={(e) =>
                                  handleQuantityChange(
                                    item.productId,
                                    parseInt(e.target.value, 10),
                                  )
                                }
                              />{" "}
                              <span className="text-muted ms-1">kg</span>
                              <button
                                aria-label="Increase quantity"
                                data-mdb-button-init
                                data-mdb-ripple-init
                                className="btn btn-link px-2"
                                onClick={() =>
                                  handleIncrementQuantity(item.productId)
                                }
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h6 className="mb-0">
                                <FaIndianRupeeSign /> {item.price}
                              </h6>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                              <button
                                aria-label="Remove Product"
                                data-mdb-button-init
                                data-mdb-ripple-init
                                className="btn btn-link px-2"
                                onClick={() =>
                                  handleRemoveFromCart(item.productId)
                                }
                              >
                                <i className="fas fa-times"></i>
                              </button>
                            </div>
                          </div>
                        ))}
                      </>
                    )}

                    <hr className="my-4" />
                    <div className="pt-5">
                      <h6 className="mb-0 d-flex justify-content-end align-content-center">
                        <Link to={"/product"} className="text-body">
                          <i className="fas fa-long-arrow-alt-left me-2"></i>
                          Back to shop
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 bg-body-tertiary">
                  <div className="p-5">
                    <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                    <hr className="my-4" />
                    <div className="d-flex justify-content-between mb-4">
                      <h5 className="text-uppercase">
                        items {cart.items.length}
                      </h5>
                      <h5>
                        <FaIndianRupeeSign /> {cart.totalPrice}
                      </h5>
                    </div>
                    <h5 className="text-uppercase mb-3">Shipping</h5>
                    <div className="mb-4 pb-2">
                      <select
                        data-mdb-select-init
                        className="form-select"
                        onChange={handleShippingChange} // Call the function here
                      >
                        <option value="1">Standard Delivery - ₹25.00</option>
                        <option value="2">Fast Delivery - ₹50.00</option>
                      </select>
                    </div>
                    <h5 className="text-uppercase mb-3">Gift Card Code</h5>
                    <div className="mb-5">
                      <div data-mdb-input-init className="form-outline">
                        <input
                          type="text"
                          id="form3Examplea2"
                          className="form-control form-control-lg"
                          placeholder=""
                        />
                        <label className="form-label" htmlFor="form3Examplea2">
                          Enter your code if any
                        </label>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <div className="d-flex justify-content-between mb-5">
                      <h5 className="text-uppercase">Total price</h5>
                      <h5>
                        <FaIndianRupeeSign /> {cart.totalPrice + shippingCost}
                      </h5>
                    </div>
                    <button
                      type="button"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-dark btn-block btn-lg fs-3"
                      data-mdb-ripple-color="dark"
                    >
                      Pay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
