import React from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import axios from "../../axios";
import PaymentApproval from "../PaymentApproval/PaymentApproval";
// import PaymentApproval from "../../b2b/pages/PaymentApproval/PaymentApproval";

function PaymentSection({ price, navigation, setNavigation }) {
  const { visaEnquiry, rows } = useSelector((state) => state.b2cVisa);

  // const visaOrder = JSON.parse(localStorage.getItem('visaOrder'));

  const handlePaymentSuccess = async () => {
    setNavigation({ upload: !navigation?.upload });
  };
  return (
    <div className="md:max-w-screen-xl md:mx-auto text-darktext my-5 w-[100%]">
      <div
        className={`my-2 border px-3 py-4  rounded-lg ${
          navigation?.payment ? "bg-primaryColor " : "bg-slate-400"
        } rounded-[.25rem]`}
      >
        <p className="font-[600] text-[20px] text-soft">Make Payment</p>
      </div>
      {navigation?.payment && (
        <div className="p-6 flex justify-between flex-col align-middle bg-white rounded-md">
          <PaymentApproval onSuccess={handlePaymentSuccess} />
          <div className="col-span-10 flex justify-end mt-4 w-[100%]">
            <button
              onClick={() => {
                setNavigation({ upload: !navigation.upload });
              }}
              className="bg-lightblue rounded-[.25rem] text-white px-5 h-9"
            >
              Upload Docs
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentSection;
