import React from "react";
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
            </div>
         </div>
      </div>
   );
}

export default PaymentSuccessPage;
