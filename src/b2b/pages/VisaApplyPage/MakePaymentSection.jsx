import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { PaymentAnimation } from "../../../data";
import VisaOtpModal from "./VisaOtpModal";
import { useSelector } from "react-redux";
import axios from "../../../axios";
import priceConversion from "../../../utils/PriceConversion";

function MakePaymentSection({ navigation, setNavigation }) {
  const [otpModal, setOtpModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [order, setOrder] = useState({});

  const { visaEnquiry, visa, rows } = useSelector((state) => state.visa);
  const { token } = useSelector((state) => state.agents);
  const { balance } = useSelector((state) => state.wallet);
  const { selectedCurrency } = useSelector((state) => state.home);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError("");

      const config = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        `/b2b/visa/application/create`,
        {
          visaType: visaEnquiry?.visaType,
          email: rows[0]?.email,
          contactNo: rows[0]?.contactNo,
          onwardDate: visaEnquiry?.onwardDate,
          returnDate: visaEnquiry?.returnDate,
          noOfTravellers: Number(visaEnquiry?.traveller),
          travellers: rows,
          country: visa?.visa?.country?._id,
        },
        config
      );
      setIsLoading(false);
      setOrder(response.data);
      setOtpModal(true);
    } catch (err) {
      setError(err?.response?.data?.error || "Something went wrong, Try again");
      setIsLoading(false);
    }
  };

  const [selectedVisa, setSelectedVisa] = useState({});

  useEffect(() => {
    if (visa?.visaType?.length > 0) {
      for (let item of visa?.visaType) {
        if (item._id === visaEnquiry?.visaType) {
          setSelectedVisa(item);
        }
      }
    }
  }, [visaEnquiry]);

  const totalPrice =
    +selectedVisa?.totalPrice + selectedVisa?.insurance + selectedVisa?.tax;

  const grandTotal = totalPrice * visaEnquiry?.traveller;

  return (
    <>
      <div className="py-6 text-darktext">
        <div
          className={`my-2 border px-3 py-4 ${
            navigation.payment ? "bg-lightblue " : "bg-slate-400"
          } rounded-[.25rem]`}
        >
          <p className="font-[600] text-[20px] text-soft">Make Payment</p>
        </div>
        {navigation.payment && (
          <form onSubmit={submitHandler}>
            <div className="flex justify-between gap-3 rounded-md shadow bg-white p-6">
              <div className="space-y-2">
                <p className="text-slate-400 text-sm font-[500]">
                  Make use of our Wallet system to purchase which is help for
                  faster transaction.
                </p>
                <p className="text-green-500 text-sm">
                  Make payment through your wallet.
                </p>
                <p className="text-slate-400 font-[500] text-sm">
                  Your wallet amount is :{" "}
                  <span className="text-main font-[600]">
                    {priceConversion(balance, selectedCurrency, true)}
                  </span>{" "}
                </p>
                <p className="text-slate-400 font-[500] text-sm">
                  Total Price :{" "}
                  <span className="text-darktext font-[550]">
                    {" "}
                    {priceConversion(grandTotal, selectedCurrency, true)}
                  </span>{" "}
                </p>
                <button
                  className="bg-lightblue rounded-[.25rem] text-white w-[100px] h-9"
                  onClick={() => setOtpModal(true)}
                >
                  Pay
                </button>
              </div>
              <div className=" w-[170px] ">
                <Lottie animationData={PaymentAnimation} />
              </div>
            </div>
          </form>
        )}
      </div>
      {otpModal && (
        <VisaOtpModal
          grandTotal={grandTotal}
          order={order}
          setOtpModal={setOtpModal}
          setNavigation={setNavigation}
        />
      )}
    </>
  );
}

export default MakePaymentSection;
