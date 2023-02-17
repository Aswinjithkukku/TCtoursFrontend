import React from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import axios from "../../../axios";

const RazorPayPaymentComponent = () => {
  const inputRef = useRef(null);

  const visaOrder = JSON.parse(localStorage.getItem("visaOrder"));

  const { visaEnquiry } = useSelector((state) => state.b2cVisa);

  const verifyPayment = async (ids) => {
    if (ids) {
      const reqData = {
        ids: {
          razorpay_order_id: ids.razorpay_order_id,
          razorpay_payment_id: ids.razorpay_payment_id,
          razorpay_signature: ids.razorpay_signature,
        },
      };

      const res = await axios.post(
        "visa/razorpay/paymentVerification",
        reqData
      );
      if (res?.status === 200) {
      } else {
        Swal.fire({
          icon: "error",
          title: "Something went wrong!",
          // text: error,
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
        // text: error,
      });
    }
  };

  const handlePayByRazorPay = async () => {
    const {
      data: { key },
    } = await axios.get("visa/razorpay/getkey");

    const res = await axios.post("/visa/razorpay/setOrder", {
      visaOrderId: visaOrder._id,
    });

    const {
      data: { order },
    } = res;

    const options = {
      key: key,
      amount: 100,
      currency: "AED",
      name: "Travellers Choice",
      description: ``,
      image:
        "https://a.walletbot.online/public/images/home/logo-1675491174743-311966466.png",
      order_id: order.id,
      handler: function (response) {
        verifyPayment({
          ids: response,
          amount: 100,
        });
      },
      prefill: {
        email: visaEnquiry.email,
        contact: visaEnquiry.phone,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#E5E5E5",
      },
    };

    const razorPay = new window.Razorpay(options);
    razorPay.open();
  };

  return (
    <div>
      <div className="flex justify-center flex-col gap-4 my-3">
        <input
          ref={inputRef}
          value={100}
          className="input"
          type="number"
          placeholder="Enter Amount to be added to wallet"
          min="0"
          // disabled={!!}
          // value={inputAmount === 0 ? "Enter Amount to be added to wallet" : inputAmount}
          // onChange={(e) => setInputAmount(e.target.value)}
        />
        <button
          onClick={handlePayByRazorPay}
          // onClick={verifyPayment}
          className="italic rounded-md px-4 w-[100%] tracking-wide text-white bg-primaryColor h-[40px]"
        >
          Razorpay
        </button>
      </div>
    </div>
  );
};

export default RazorPayPaymentComponent;
