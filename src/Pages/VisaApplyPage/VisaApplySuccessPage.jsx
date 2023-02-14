import React from "react";
import Lottie from "lottie-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "../../axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import { successAnimation } from "../../data";

function VisaApplySuccessPage() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.agents);
  const [visaOrder, setVisaOrder] = useState(
    JSON.parse(localStorage.getItem("visaOrder")) || {
      status: "",
      travellers: "",
      visaType: "",
      onwardDate: "",
      returnDate: "",
      createdAt: "",
    }
  );

  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    const getVisaOrderInfo = async () => {
      try {
        const data = await axios.get(
          `visa/application/invoice/${orderId}`,
          config
        );
        if (data?.status === 200) {
          setVisaOrder(data?.data);
        }
      } catch (error) {}
    };
    getVisaOrderInfo();
  }, []);

  const {
    status,
    travellers,
    visaType,
    onwardDate,
    returnDate,
    createdAt,
    totalAmount,
  } = visaOrder;

  return (
    <div className=" ">
      <div className="bg-white flex items-center justify-between gap-[10px] px-2 lg:px-6 shadow-sm border-t py-2">
        <h1 className="font-[600] text-[15px] uppercase">Invoice</h1>
        <div className="text-sm text-grayColor flex items-center gap-[7px]">
          <Link to="/" className="text-textColor">
            Dashboard{" "}
          </Link>
          <span>{">"} </span>
          <Link to="/visa" className="text-textColor">
            Visa{" "}
          </Link>
          <span>{">"} </span>
          <Link to="/visa/apply" className="text-textColor">
            Apply{" "}
          </Link>
          <span>{">"} </span>
          <Link to="/visa/invoice" className="text-textColor">
            Invoice{" "}
          </Link>
        </div>
      </div>

      <div className="p-2 lg:p-6">
        <div className="bg-white rounded shadow-sm mt-2 ">
          {/* <div className="flex items-center justify-between border-b border-dashed p-4">
            <h1 className="font-medium">Markup Lists</h1>
          </div> */}
          <div className="main__section mt-4 p-4">
            <div className="flex justify-center">
              <div className="">
                <span className="flex justify-center">
                  <div className=" w-[250px] ">
                    <Lottie animationData={successAnimation} />
                  </div>
                </span>
                <div className="text-center">
                  <h2 className="text-[25px] text-[#12acfd] font-[650] ">
                    You have Successfully Applied for Visa!
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex justify-center w-full mt-5">
              <div className="first__section  w-full">
                <div className="bg-white shadow-sm m-6 rounded-[0.30rem] p-6 w-6/12 mx-auto border">
                  {/* <div className="text-center">
                    <h2 className="text-xl font-[600] text-darktext">
                      Company Name
                    </h2>
                  </div> */}
                  <p className="text-sm text-gray-500 font-[600]">
                    {createdAt?.split("T")[0]}
                  </p>
                  <div className="flex gap-2 items-center">
                    <p className="text-[16px] font-[650]">
                      {totalAmount || 0} AED
                    </p>
                    <span
                      className={`text-xs  px-2 rounded  py-[2px]  ${
                        status !== "initiated"
                          ? "bg-[#adebad] text-green-700"
                          : "text-lightblue bg-[#cbedfd]"
                      }`}
                    >
                      {status === "initiated" ? "Pending" : "Success"}
                    </span>
                  </div>
                  <div className="bg-soft my-2 rounded-[.30rem] p-3">
                    {travellers?.map((ele, i) => (
                      <div>
                        <div className="grid grid-cols-12 mt-2">
                          <div className="grid__first col-span-7  ">
                            <p className="text-[14px] font-[600] text-darktext">
                              {visaType?.visaName}
                            </p>
                            <p className="text-[14px]  text-[#12acfd] uppercase">
                              {onwardDate.split("T")[0]}
                            </p>
                          </div>
                          <div className="grid__first col-span-5 text-right">
                            <p className="text-[14px] font-[600] text-darktext">
                              {visaType?.visa?.country?.countryName}
                            </p>
                            <p className="text-[14px] text-[#12acfd] uppercase">
                              {returnDate.split("T")[0]}
                            </p>
                          </div>
                        </div>
                        <div className="grid grid-cols-12 py-3 border-b-2">
                          <div className="grid__first col-span-7 flex gap-2">
                            <div className="">
                              <p className="text-[13px] text-text ">Name</p>
                            </div>
                          </div>
                          <div className="grid__first col-span-5 flex justify-end items-end">
                            <p className="text-[13px] text-text font-[500] capitalize">
                              {`${ele?.title} ${ele?.firstName} ${ele?.lastName}`}
                            </p>
                          </div>
                          <div className="grid__first col-span-7 flex gap-2">
                            <div className="">
                              <p className="text-[13px] text-text ">
                                Date of Birth
                              </p>
                            </div>
                          </div>
                          <div className="grid__first col-span-5 flex justify-end items-end">
                            <p className="text-[13px] text-text font-[500]">
                              {`${ele?.dateOfBirth?.day}/${ele?.dateOfBirth?.month}/${ele?.dateOfBirth?.year}`}
                            </p>
                          </div>
                          <div className="grid__first col-span-7 flex gap-2">
                            <div className="">
                              <p className="text-[13px] text-text ">
                                Passport Number
                              </p>
                            </div>
                          </div>
                          <div className="grid__first col-span-5 flex justify-end items-end">
                            <p className="text-[13px] text-text font-[500]">
                              {ele?.passportNo}
                            </p>
                          </div>
                          <div className="grid__first col-span-7 flex gap-2">
                            <div className="">
                              <p className="text-[13px] text-text ">
                                Passport Expiry Date
                              </p>
                            </div>
                          </div>
                          <div className="grid__first col-span-5 flex justify-end items-end">
                            <p className="text-[13px] text-text font-[500]">
                              {`${ele?.expiryDate?.day}/${ele?.expiryDate?.month}/${ele?.expiryDate?.year}`}
                            </p>
                          </div>

                          {/* <div className="grid__first col-span-7 flex gap-2">
                            <div className="">
                              <p className="text-[13px] text-text ">Country</p>
                            </div>
                          </div>
                          <div className="grid__first col-span-5 flex justify-end items-end">
                            <p className="text-[13px] text-text font-[500]">
                              Egypt
                            </p>
                          </div> */}
                        </div>
                      </div>
                    ))}

                    {/* <div>
                      <div className="grid grid-cols-12 mt-2">
                        <div className="flex gap-2 items-center ">
                          <p className="text-[14px] font-[600] text-darktext">
                            14 Days of UAE
                          </p>
                          <p className="text-[14px] text-[#12acfd] uppercase">
                            November 3, 2023
                          </p>
                        </div>
                        <div className="grid__first col-span-5 text-right">
                          <p className="text-[14px] font-[600] text-darktext">
                            United Arab Emirates
                          </p>
                          <p className="text-[14px] text-[#12acfd] uppercase">
                            December 3, 2023
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-12 py-3 border-b-2">
                        <div className="grid__first col-span-7 flex gap-2">
                          <div className="">
                            <p className="text-[13px] text-text ">Name</p>
                          </div>
                        </div>
                        <div className="grid__first col-span-5 flex justify-end items-end">
                          <p className="text-[13px] text-text font-[500]">
                            Sam Philipie
                          </p>
                        </div>
                        <div className="grid__first col-span-7 flex gap-2">
                          <div className="">
                            <p className="text-[13px] text-text ">
                              Passport Number
                            </p>
                          </div>
                        </div>
                        <div className="grid__first col-span-5 flex justify-end items-end">
                          <p className="text-[13px] text-text font-[500]">
                            445122351142154
                          </p>
                        </div>
                        <div className="grid__first col-span-7 flex gap-2">
                          <div className="">
                            <p className="text-[13px] text-text ">
                              Date of Birth
                            </p>
                          </div>
                        </div>
                        <div className="grid__first col-span-5 flex justify-end items-end">
                          <p className="text-[13px] text-text font-[500]">
                            15/04/2001
                          </p>
                        </div>
                        <div className="grid__first col-span-7 flex gap-2">
                          <div className="">
                            <p className="text-[13px] text-text ">Country</p>
                          </div>
                        </div>
                        <div className="grid__first col-span-5 flex justify-end items-end">
                          <p className="text-[13px] text-text font-[500]">
                            Egypt
                          </p>
                        </div>
                      </div>
                    </div> */}

                    <div className="flex justify-between py-3 border-b-2">
                      <div className="flex gap-2 items-center ">
                        <p className="text-[14px] text-text">Base Fare</p>
                        <p className="text-[9px] text-lightblue bg-[#cbedfd] capitalize w-fit h-4 px-2 rounded  grid place-items-center">
                          Per Traveller
                        </p>
                      </div>
                      <div className="  flex justify-end items-center ">
                        <p className="text-[16px] text-text">
                          {visaType?.totalPrice || visaType?.visaPrice} AED
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between py-3 border-b-2">
                      <div className="flex gap-2 items-center ">
                        <p className="text-[14px] text-text">Tax Amount</p>
                        <p className="text-[9px] text-lightblue bg-[#cbedfd] capitalize w-fit h-4 px-2 rounded  grid place-items-center">
                          Per Traveller
                        </p>
                      </div>
                      <div className="  flex justify-end items-center ">
                        <p className="text-[16px] text-text">
                          {visaType?.tax} AED
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between py-3 border-b-2">
                      <div className="flex gap-2 items-center ">
                        <p className="text-[14px] text-text">
                          Insurance Amount
                        </p>
                        <p className="text-[9px] text-lightblue bg-[#cbedfd] capitalize w-fit h-4 px-2 rounded  grid place-items-center">
                          Per Traveller
                        </p>
                      </div>
                      <div className="  flex justify-end items-center ">
                        <p className="text-[16px] text-text">
                          {visaType?.insurance} AED
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between py-3 border-b-2">
                      <div className="flex gap-2 items-center ">
                        <p className="text-[14px] text-text">Total Amount</p>
                        <p className="text-[9px] text-lightblue bg-[#cbedfd] capitalize w-fit h-4 px-2 rounded  grid place-items-center">
                          Per Traveller
                        </p>
                      </div>
                      <div className="  flex justify-end items-center ">
                        <p className="text-[16px] text-text">
                          {+(+visaType?.totalPrice || +visaType?.visaPrice) +
                            +visaType?.insurance +
                            +visaType?.tax}{" "}
                          AED
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between py-3 border-b-2">
                      <div className="flex gap-2 items-center ">
                        <p className="text-[16px] font-[650] text-darktext">
                          Grand Total
                        </p>
                      </div>
                      <div className="grid__first col-span-5 flex justify-end items-end">
                        <p className="text-[16px] text-darktext">
                          {totalAmount} AED
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="second__section mx-auto w-6/12">
              <div className="py-4 flex justify-between">
                <div className="text-gray-500 text-sm">
                  <p className="">
                    Your visa application is done successfully. Further details
                    are given in your corresponding email
                  </p>
                  <p className="text-[#12acfd]">
                    Download the invoice from here!
                  </p>
                </div>
                <div className="">
                  <button className="bg-[#12acfd] rounded px-3 py-2 text-white">
                    Download
                  </button>
                </div>
              </div>
              <div className="flex justify-center py-10">
                <button
                  className="text-light bg-darktext px-2 py-2 rounded"
                  onClick={() => navigate("/")}
                >
                  Return Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisaApplySuccessPage;
