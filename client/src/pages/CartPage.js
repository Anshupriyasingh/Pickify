// import React, { useState, useEffect } from "react";
//  import Layout from "./../components/Layout/Layout";
//  import { useCart } from "../context/cart";
// import { useAuth } from "../context/auth";
// import { useNavigate } from "react-router-dom";
//  import DropIn from "braintree-web-drop-in-react";
//  import { AiFillWarning } from "react-icons/ai";
//  import axios from "axios";
//  import toast from "react-hot-toast";
//  import "../styles/CartStyles.css";

// const CartPage = () => {
//    const [auth, setAuth] = useAuth();
//   const [cart, setCart] = useCart();
//    const [clientToken, setClientToken] = useState("");
//    const [instance, setInstance] = useState("");
//    const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//    //total price
//    const totalPrice = () => {
//      try {
//        let total = 0;
//        cart?.map((item) => {
//          total = total + item.price;
//        });
//       return total.toLocaleString("en-US", {
//         style: "currency",
//          currency: "USD",
//        });
//      } catch (error) {
//       console.log(error);
//      }
//    };
//    //detele item
//    const removeCartItem = (pid) => {
//      try {
//       let myCart = [...cart];
//        let index = myCart.findIndex((item) => item._id === pid);
//        myCart.splice(index, 1);
//        setCart(myCart);
//        localStorage.setItem("cart", JSON.stringify(myCart));
//      } catch (error) {
//        console.log(error);
//      }
//   };

//    //get payment gateway token
//    const getToken = async () => {
//      try {
//        const { data } = await axios.get("/api/v1/product/braintree/token");
//        setClientToken(data?.clientToken);
//      } catch (error) {
//        console.log(error);
//      }
//    };
//    useEffect(() => {
//     getToken();
//    }, [auth?.token]);

//    //handle payments
//   //  const handlePayment = async () => {
//   //    try {
//   //      setLoading(true);
//   //      console.log(instance);
//   //      const { nonce } = await instance.requestPaymentMethod();
//   //      const { data } = await axios.post("/api/v1/product/braintree/payment", {
//   //        nonce,
//   //        cart,
//   //      });
//   //      setLoading(false);
//   //      localStorage.removeItem("cart");
//   //      setCart([]);
//   //      navigate("/dashboard/user/orders");
//   //      toast.success("Payment Completed Successfully ");
//   //    } catch (error) {
//   //      console.log(error);
//   //      setLoading(false);
//   //    }
//   //  };
//   const [isPayPalLoaded,setIsPayPalLoaded] = useState(false);
//   useEffect( ()=>{
//     const script = document.createElement("script");
//     script.src = "https://www.paypal.com/sdk/js?client-id=AfekG1i2okRM3Xjb6q73dhx-y3sDueDRL7Jyv0NkFr09BDLGexBltKwJJO0MgLcI0zTxW50EzJtJ4PSF&currency=USD"
//     script.async = true;
//     script.onload = ()=> setIsPayPalLoaded(true);
//     document.body.appendChild(script);
//     return ()=>{
//       document.body.removeChild(script);
//     }
//   },[]);
//   const handlePayment = ()=>{
//     if(isPayPalLoaded)
//     {
//       window.paypal.Buttons({
//         createOrder : function(data,actions){
//           return actions.order.create({
//             purchase_units:[
//               {
//                 amount:{
//                   value:'10.00',
//                 },

//               },
//             ],
//           });
//         },
//         onApprove:function(data,actions)
//         {
//           return actions.order.capture().then(function(details){
//             alert("Transaction completed");
//           });
//         },
//         onError: function(err){
//           alert('an error occured');
//         }
//       })
//       .render('#paypal-button-container')
//     }else{
//       alert('paypal sdk is stil loading')
//     }
//   }
//    return (
//      <Layout>
//        <div className=" cart-page">
//          <div className="row">
//            <div className="col-md-12">
//              <h1 className="text-center bg-light p-2 mb-1">
//                {!auth?.user
//                  ? "Hello Guest"
//                  : `Hello  ${auth?.token && auth?.user?.name}`}
//                <p className="text-center">
//                  {cart?.length
//                    ? `You Have ${cart.length} items in your cart ${
//                        auth?.token ? "" : "please login to checkout !"
//                      }`
//                    : " Your Cart Is Empty"}
//               </p>
//              </h1>
//            </div>
//          </div>
//          <div className="container ">
//            <div className="row ">
//              <div className="col-md-7  p-0 m-0">
//                {cart?.map((p) => (
//                  <div className="row card flex-row" key={p._id}>
//                   <div className="col-md-4">
//                      <img
//                        src={`/api/v1/product/product-photo/${p._id}`}
//                        className="card-img-top"
//                        alt={p.name}
//                        width="100%"
//                        height={"130px"}
//                      />
//                    </div>
//                    <div className="col-md-4">
//                     <p>{p.name}</p>
//                     <p>{p.description.substring(0, 30)}</p>
//                      <p>Price : {p.price}</p>
//                    </div>
//                    <div className="col-md-4 cart-remove-btn">
//                      <button
//                       className="btn btn-danger"
//                       onClick={() => removeCartItem(p._id)}
//                      >
//                       Remove
//                     </button>
//                    </div>
//                  </div>
//                ))}
//              </div>
//              <div className="col-md-5 cart-summary ">
//                <h2>Cart Summary</h2>
//                <p>Total | Checkout | Payment</p>
//                <hr />
//                <h4>Total : {totalPrice()} </h4>
//                {auth?.user?.address ? (
//                  <>
//                    <div className="mb-3">
//                      <h4>Current Address</h4>
//                      <h5>{auth?.user?.address}</h5>
//                      <button
//                        className="btn btn-outline-warning"
//                        onClick={() => navigate("/dashboard/user/profile")}
//                      >
//                        Update Address
//                      </button>
//                    </div>
//                  </>
//                ) : (
//                  <div className="mb-3">
//                    {auth?.token ? (
//                      <button
//                        className="btn btn-outline-warning"
//                        onClick={() => navigate("/dashboard/user/profile")}
//                      >
//                        Update Address
//                      </button>
//                    ) : (
//                      <button
//                        className="btn btn-outline-warning"
//                        onClick={() =>
//                          navigate("/login", {
//                            state: "/cart",
//                          })
//                        }
//                      >
//                        Plase Login to checkout
//                      </button>
//                    )}
//                  </div>
//                )}
//                <div className="mt-2">
//                  {!clientToken || !auth?.token || !cart?.length ? (
//                    ""
//                  ) : (
//                    <>
//                      <DropIn
//                        options={{
//                          authorization: clientToken,
//                          // paypal: {
//                          //   flow: "vault",
//                          // },
//                        }}
//                        onInstance={(instance) => setInstance(instance)}
//                      />

//                      <button
//                        className="btn btn-primary"
//                       onClick={handlePayment}
//                        disabled={loading || !instance || !auth?.user?.address}
//                      >
//                        {loading ? "Processing ...." : "Make Payment"}
//                      </button>
//                    </>
//                  )}
//                </div>
//              </div>
//            </div>
//          </div>
//        </div>
//      </Layout>
//    );
//  };

// export default CartPage;
import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import { AiFillWarning } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import "../styles/CartStyles.css";

const CartPage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const [loading, setLoading] = useState(false);
  const [isPayPalLoaded, setIsPayPalLoaded] = useState(false);
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.forEach((item) => {
        total = total + item.price;
      });
      return total.toFixed(2); // Return the total price as a string with 2 decimal places
    } catch (error) {
      console.log(error);
      return "0.00";
    }
  };

  // Remove item from cart
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  // Load PayPal SDK
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AfekG1i2okRM3Xjb6q73dhx-y3sDueDRL7Jyv0NkFr09BDLGexBltKwJJO0MgLcI0zTxW50EzJtJ4PSF&currency=USD";
    script.async = true;
    script.onload = () => setIsPayPalLoaded(true);
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Handle PayPal payment
  const handlePayment = () => {
    if (isPayPalLoaded) {
      window.paypal
        .Buttons({
          createOrder: function (data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: totalPrice(), // Use the total price from the cart
                    currency_code: "USD", // Set the currency to USD
                  },
                },
              ],
            });
          },
          onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
              // Handle successful payment
              toast.success("Payment Completed Successfully");
              localStorage.removeItem("cart");
              setCart([]);
              navigate("/dashboard/user/orders");
            });
          },
          onError: function (err) {
            // Handle payment error
            toast.error("Payment Failed. Please try again.");
            console.error(err);
          },
        })
        .render("#paypal-button-container"); // Render the PayPal button
    } else {
      toast.error("PayPal SDK is still loading. Please try again.");
    }
  };

  return (
    <Layout>
      <div className="cart-page">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2 mb-1">
              {!auth?.user
                ? "Hello Guest"
                : `Hello  ${auth?.token && auth?.user?.name}`}
              <p className="text-center">
                {cart?.length
                  ? `You Have ${cart.length} items in your cart ${
                      auth?.token ? "" : "please login to checkout !"
                    }`
                  : " Your Cart Is Empty"}
              </p>
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-7 p-0 m-0">
              {cart?.map((p) => (
                <div className="row card flex-row" key={p._id}>
                  <div className="col-md-4">
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                      width="100%"
                      height={"130px"}
                    />
                  </div>
                  <div className="col-md-4">
                    <p>{p.name}</p>
                    <p>{p.description.substring(0, 30)}</p>
                    <p>Price : {p.price}</p>
                  </div>
                  <div className="col-md-4 cart-remove-btn">
                    <button
                      className="btn btn-danger"
                      onClick={() => removeCartItem(p._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-5 cart-summary">
              <h2>Cart Summary</h2>
              <p>Total | Checkout | Payment</p>
              <hr />
              <h4>Total : Rs-{totalPrice()}</h4>
              {auth?.user?.address ? (
                <>
                  <div className="mb-3">
                    <h4>Current Address</h4>
                    <h5>{auth?.user?.address}</h5>
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => navigate("/dashboard/user/profile")}
                    >
                      Update Address
                    </button>
                  </div>
                </>
              ) : (
                <div className="mb-3">
                  {auth?.token ? (
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => navigate("/dashboard/user/profile")}
                    >
                      Update Address
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-warning"
                      onClick={() =>
                        navigate("/login", {
                          state: "/cart",
                        })
                      }
                    >
                      Please Login to checkout
                    </button>
                  )}
                </div>
              )}
              <div className="mt-2">
                {!auth?.token || !cart?.length ? (
                  ""
                ) : (
                  <>
                    <div id="paypal-button-container"></div>
                    <button
                      className="btn btn-primary"
                      onClick={handlePayment}
                      disabled={loading || !auth?.user?.address}
                    >
                      {loading ? "Processing ...." : "Make Payment"}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;