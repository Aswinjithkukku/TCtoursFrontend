import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios";

function RazorpayComponent() {
  // const [amount, setAmount] = 0;
  const {id} = useParams()

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  function openPayModal() {
    try {
      var options = {
        key: process.env.REACT_APP_razorpaytest_id,
        amount: 0,
        name: "",
        description: "",
        order_id: "",
        handler: function (response) {
          console.log(response);
          var values = {
            razorpay_signature: response.razorpay_signature,
            razorpay_order_id: response.razorpay_order_id,
            transactionid: response.razorpay_payment_id,
            orderId: id,
          };
          axios
            .post("/attractions/orders/razorpay/capture", values)
            .then((res) => {
              console.log("Success");
            })
            .catch((e) => console.log(e));
        },
        prefill: {
          name: "Sanjana Kumari",
          email: "sanjana@gmail.com",
          contact: "1234567890",
        },
        notes: {
          address: "Hello World",
        },
        theme: {
          color: "#528ff0",
        },
      };

      axios
        .post(`/attractions/orders/initiate/${id}`, {
          paymentProcessor: "razorpay",
        })
        .then((res) => {
          options.order_id = res.data.id;
          options.amount = res.data.amount;
          console.log(options);
          var rzp1 = new window.Razorpay(options);
          rzp1.open();
        })

        .catch((e) => console.log(e));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="my-10">
      <button 
      className='button w-[250px] italic'
        onClick={(e) => {
          openPayModal();
        }}
      >
        Razorpay
      </button>
    </div>
  );
}

export default RazorpayComponent;
