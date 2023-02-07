import React from "react";
import PaymentApproval from "../../b2b/pages/PaymentApproval/PaymentApproval";

function PaymentSection({ price, navigation, setNavigation }) {
  return (
    <div className="md:max-w-screen-xl md:mx-auto text-darktext my-5">
      <div
        className={`my-2 border px-3 py-4  rounded-lg ${
          navigation?.payment ? "bg-primaryColor " : "bg-slate-400"
        } rounded-[.25rem]`}
      >
        <p className="font-[600] text-[20px] text-soft">Make Payment</p>
      </div>
      {navigation?.payment && (
        <div className="p-6 flex justify-between flex-col align-middle bg-white rounded-md">
          <PaymentApproval
            place="b2cvisa"
            price={price}
            setNavigation={setNavigation}
            navigation={navigation}
          />
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
