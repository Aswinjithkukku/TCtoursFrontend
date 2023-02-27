import React from "react";
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
            </div>
         </div>
      </div>
   );
}

export default PaymentSuccessPage;
