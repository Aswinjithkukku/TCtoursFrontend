import React, { useState } from "react";
import Lottie from "lottie-react";
import { PaymentAnimation } from "../../../data";
import { paypalpng, stripepng, atmcardpng } from "../../../static/images";
import AddWalletPaypalComponent from "../../components/Payment/AddWalletPaypalComponent";
import { Link } from "react-router-dom";
import RazorPayPaymentComponent from "../../components/Payment/RazorPayPaymentComponent";
import CCAvenuePaymentComponent from "../../components/Payment/CCAvenuePaymentComponent";

function PaymentApproval() {
  const [payMethod, setPayMethod] = useState("razorpay");
  return (
    <>
      <div className="bg-white flex items-center justify-between gap-[10px] px-2 lg:px-6 shadow-sm border-t py-2">
        <h1 className="font-[600] text-[15px] uppercase">Payment</h1>
        <div className="text-sm text-grayColor">
          <Link to="/b2b" className="text-textColor">
            Dashboard{" "}
          </Link>
          <span>{">"} </span>
          <span>AddToWallet</span>
        </div>
      </div>

      <div className="p-2 lg:p-6">
        <div className="bg-white rounded shadow-sm mt-2 lg:mt-6">
          <div className="flex items-center justify-between border-b border-dashed p-3 lg:p-6">
            <h1 className="font-medium">Add To Wallet</h1>
          </div>

          <div className="p-6">
            <div className="bg-light  md:rounded-md overflow-hidden w-full md:my-6">
              <div className="lg:grid grid-cols-12 gap-5">
                <div className="1 col-span-3 bg-primaryColor p-6 text-white">
                  <div className="h-12 bg-bluetrans flex justify-center items-center font-medium tracking-wide rounded-md">
                    Payments
                  </div>

                  <div
                    onClick={() => {
                      setPayMethod("razorpay");
                    }}
                    className="h-10 hover:bg-bluetrans  tracking-wide items-center cursor-pointer px-2 mt-5"
                  >
                    <p className="">Razorpay</p>
                    <p className="text-[8px] text-text">
                      (credit/debit-card, UPI payment)
                    </p>
                  </div>
                  <div
                    onClick={() => {
                      setPayMethod("paypal");
                    }}
                    className="h-10 hover:bg-bluetrans flex tracking-wide items-center cursor-pointer px-2"
                  >
                    Paypal
                  </div>
                  <div
                    onClick={() => {
                      setPayMethod("ccavenue");
                    }}
                    className="h-10 hover:bg-bluetrans flex tracking-wide items-center cursor-pointer px-2"
                  >
                    CCAvenue
                  </div>
                </div>
                <div className="2 col-span-9 p-6">
                  <div className="md:flex justify-between items-center border-b border-dashed mb-5">
                    <div className="">
                      <h2 className="text-3xl font-bold tracking-wider text-darktext underline">
                        "Add to wallet"
                      </h2>
                    </div>
                    <div className=" w-[150px] ">
                      <Lottie
                        animationData={PaymentAnimation}
                        place="b2cvisa"
                      />
                    </div>
                  </div>

                  <div className="md:flex justify-center">
                    <div className="md:w-7/12">
                      {payMethod === "paypal" && <AddWalletPaypalComponent />}
                      {payMethod === "razorpay" && <RazorPayPaymentComponent />}
                      {payMethod === "ccavenue" && <CCAvenuePaymentComponent />}
                    </div>
                  </div>
                  <div className="flex justify-center items-center space-x-10 border-t border-dashed">
                    <div className="">
                      <img src={paypalpng} alt="paypal" className="w-[60px]" />
                    </div>
                    <div className="">
                      <img src={stripepng} alt="ccavenue" className="w-[50px]" />
                    </div>
                    <div className="">
                      <img src={atmcardpng} alt="cards" className="w-[40px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentApproval;
