import React from "react";
<<<<<<< HEAD
import { logoPng } from "../../../static/imagesB2B";

function PaymentSuccessPage() {
   return (
      <div className="h-screen w-full flex justify-center items-center">
         <div className=" bg-white shadow-sm p-4 w-7/12 rounded-[0.40rem]">
            <div className="border-b flex justify-center pb-3">
               <img src={logoPng} alt="hero" className="h-16" />
            </div>
            <div className="">
               <h2 className="">Payment Successfull!</h2>
=======
import { useNavigate } from "react-router-dom";
import { logoPng } from "../../../static/imagesB2B";

function PaymentSuccessPage() {
   const navigate = useNavigate()
   return (
      <div className="h-screen w-full flex justify-center items-center">
         <div className=" bg-white shadow-sm p-4 w-full md:w-7/12 rounded-[0.40rem] success-page h-screen object-center">
            <div className="border-b flex justify-center pb-3">
               <img src={logoPng} alt="hero" className="h-16" />
            </div>
            <div className="flex  items-center h-full ">
               <h2 className="text-2xl lg:text-4xl font-[700] text-green-600 bg-green-300/50 p-5 w-full text-center rounded-lg">Payment Successfull...!</h2>
            </div>
            <div className="">
               <button className="" 
               onClick={() => navigate('/b2b/')}
               ></button>
>>>>>>> b87ed9f2ab9d1620aefb38d54583ffd5c8cfabf5
            </div>
         </div>
      </div>
   );
}

export default PaymentSuccessPage;
