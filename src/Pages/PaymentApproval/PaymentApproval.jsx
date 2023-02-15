import React, { useState } from "react";
import Lottie from "lottie-react";
import { PaymentAnimation } from "../../data";
import PaypalComponent from "../../components/Payment/PaypalComponent";
import { paypalpng, stripepng, atmcardpng } from "../../static/images";
import RazorpayComponent from "../../components/Payment/RazorpayComponent";
import CCAvenue from "../../components/Payment/CCAvenue";

function PaymentApproval({ onSuccess }) {
  const visaOrder = JSON.parse(localStorage.getItem("visaOrder"));

  const [method, setMethod] = useState({
    paypal: true,
    razorpay: false,
    ccavenue: false,
  });
  return (
    <div className="lg:max-w-screen-xl lg:mx-auto">
      <div className="bg-light shadow-sm rounded-md overflow-hidden w-full my-6">
        <div className="grid grid-cols-12 gap-5">
          <div className="1 col-span-3 bg-primaryColor p-6 text-white">
            <div className="h-12 bg-bluetrans flex justify-center items-center font-medium tracking-wide rounded-md">
              Payments
            </div>
            <div
              className="h-10 hover:bg-bluetrans flex tracking-wide items-center cursor-pointer px-2 mt-5"
              onClick={() =>
                setMethod({ paypal: true, razorpay: false, ccavenue: false })
              }
            >
              Paypal
            </div>
            <div
              className="h-10 hover:bg-bluetrans flex tracking-wide items-center cursor-pointer px-2"
              onClick={() =>
                setMethod({ paypal: false, razorpay: true, ccavenue: false })
              }
            >
              Razorpay
            </div>
            <div
              className="h-10 hover:bg-bluetrans flex tracking-wide items-center cursor-pointer px-2"
              onClick={() =>
                setMethod({ paypal: false, razorpay: false, ccavenue: true })
              }
            >
              CC Avavnue
            </div>
          </div>
          <div className="2 col-span-9 p-6">
            <div className="flex justify-around items-center border-b border-dashed mb-5">
              <div className="">
                <h2 className="text-3xl font-bold tracking-wider text-darktext underline">
                  Make Payment
                </h2>
              </div>
              <div className=" w-[150px] ">
                <Lottie animationData={PaymentAnimation} />
              </div>
            </div>
            <div className="flex justify-center">
              {method.paypal && (
                <div className="w-8/12">
                  <PaypalComponent
                    visaOrder={visaOrder}
                    onSuccess={onSuccess}
                  />
                </div>
              )}
              {method.razorpay && <RazorpayComponent onSuccess={onSuccess} />}
              {method.ccavenue && <CCAvenue onSuccess={onSuccess} />}
            </div>
            <div className="flex justify-center items-center space-x-10 border-t border-dashed">
              <div className="">
                <img src={paypalpng} alt="paypal" className="w-[60px]" />
              </div>
              <div className="">
                <img src={stripepng} alt="stripe" className="w-[50px]" />
              </div>
              <div className="">
                <img src={atmcardpng} alt="cards" className="w-[40px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentApproval;
