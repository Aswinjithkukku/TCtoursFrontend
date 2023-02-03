import React from "react";
import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import { successAnimation } from "../../../data";

function VisaApplySuccessPage() {
  const navigate = useNavigate()
  return (
    <div className=" ">
      <div className="bg-white flex items-center justify-between gap-[10px] px-2 lg:px-6 shadow-sm border-t py-2">
        <h1 className="font-[600] text-[15px] uppercase">Invoice</h1>
        <div className="text-sm text-grayColor flex items-center gap-[7px]">
          <Link to="/b2b" className="text-textColor">
            Dashboard{" "}
          </Link>
          <span>{">"} </span>
          <span className="text-textColor">Visa</span>
          <span>{">"} </span>
          <span className="text-textColor">Apply</span>
          <span>{">"} </span>
          <span>Invoice</span>
        </div>
      </div>

      <div className="p-2 lg:p-6">
        <div className="bg-white rounded shadow-sm mt-2 ">
          {/* <div className="flex items-center justify-between border-b border-dashed p-4">
            <h1 className="font-medium">Markup Lists</h1>
          </div> */}
          <div className="main__section mt-4">
            <div className="flex justify-center">
              <div className="">
                <span className="flex justify-center">
                  <div className=" w-[250px] ">
                    <Lottie animationData={successAnimation} />
                  </div>
                </span>
                <div className="text-center">
                  <h2 className="text-[25px] text-[#12acfd] font-[650]">
                    You have Successfully Applied for Visa!
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex justify-center w-full mt-5">
              <div className="first__section  w-full">
                <div className="bg-white shadow-sm m-6 rounded-[0.30rem] p-6 w-6/12 mx-auto border">
                  <div className="text-center">
                    <h2 className="text-xl font-[600] text-darktext">
                      Company Name
                    </h2>
                  </div>
                  <p className="text-sm text-gray-500 font-[600]">Dec 3 2023</p>
                  <div className="flex gap-2 items-center">
                    <p className="text-[16px] font-[650]">200 AED</p>
                    <span className="text-xs bg-[#cbedfd] px-2 rounded text-lightblue py-[2px]">
                      Success
                    </span>
                  </div>
                  <div className="bg-soft my-2 rounded-[.30rem] p-3">

                    <div>
                      <div className="grid grid-cols-12 mt-2">
                        <div className="grid__first col-span-7">
                          <p className="text-[14px] font-[600] text-darktext">14 Days of UAE</p>
                          <p className="text-[14px] text-[#12acfd] uppercase">
                          November 3, 2023
                          </p>
                        </div>
                        <div className="grid__first col-span-5 text-right">
                          <p className="text-[14px] font-[600] text-darktext">United Arab Emirates</p>
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
                          <p className="text-[13px] text-text font-[500]">Sam Philipie</p>
                        </div>
                        <div className="grid__first col-span-7 flex gap-2">
                          <div className="">
                            <p className="text-[13px] text-text ">Passport Number</p>
                          </div>
                        </div>
                        <div className="grid__first col-span-5 flex justify-end items-end">
                          <p className="text-[13px] text-text font-[500]">445122351142154</p>
                        </div>
                        <div className="grid__first col-span-7 flex gap-2">
                          <div className="">
                            <p className="text-[13px] text-text ">Date of Birth</p>
                          </div>
                        </div>
                        <div className="grid__first col-span-5 flex justify-end items-end">
                          <p className="text-[13px] text-text font-[500]">15/04/2001</p>
                        </div>
                        <div className="grid__first col-span-7 flex gap-2">
                          <div className="">
                            <p className="text-[13px] text-text ">Country</p>
                          </div>
                        </div>
                        <div className="grid__first col-span-5 flex justify-end items-end">
                          <p className="text-[13px] text-text font-[500]">Egypt</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="grid grid-cols-12 mt-2">
                        <div className="grid__first col-span-7">
                          <p className="text-[14px] font-[600] text-darktext">14 Days of UAE</p>
                          <p className="text-[14px] text-[#12acfd] uppercase">
                          November 3, 2023
                          </p>
                        </div>
                        <div className="grid__first col-span-5 text-right">
                          <p className="text-[14px] font-[600] text-darktext">United Arab Emirates</p>
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
                          <p className="text-[13px] text-text font-[500]">Sam Philipie</p>
                        </div>
                        <div className="grid__first col-span-7 flex gap-2">
                          <div className="">
                            <p className="text-[13px] text-text ">Passport Number</p>
                          </div>
                        </div>
                        <div className="grid__first col-span-5 flex justify-end items-end">
                          <p className="text-[13px] text-text font-[500]">445122351142154</p>
                        </div>
                        <div className="grid__first col-span-7 flex gap-2">
                          <div className="">
                            <p className="text-[13px] text-text ">Date of Birth</p>
                          </div>
                        </div>
                        <div className="grid__first col-span-5 flex justify-end items-end">
                          <p className="text-[13px] text-text font-[500]">15/04/2001</p>
                        </div>
                        <div className="grid__first col-span-7 flex gap-2">
                          <div className="">
                            <p className="text-[13px] text-text ">Country</p>
                          </div>
                        </div>
                        <div className="grid__first col-span-5 flex justify-end items-end">
                          <p className="text-[13px] text-text font-[500]">Egypt</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 py-3 border-b-2">
                      <div className="grid__first col-span-7">
                        <p className="text-[14px] text-text">Process Charge</p>
                        <p className="text-[10px] text-lightblue bg-[#cbedfd] uppercase w-fit px-2 rounded  py-[2px]">
                          null
                        </p>
                      </div>
                      <div className="grid__first col-span-5 flex justify-end items-end">
                        <p className="text-[16px] text-text">5.00 AED</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 py-3 border-b-2">
                      <div className="grid__first col-span-7">
                        <p className="text-[14px] text-text">Tax Amount</p>
                        <p className="text-[10px] text-lightblue bg-[#cbedfd] uppercase w-fit px-2 rounded  py-[2px]">
                          null
                        </p>
                      </div>
                      <div className="grid__first col-span-5 flex justify-end items-end">
                        <p className="text-[16px] text-text">5.00 AED</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 py-3 border-b-2">
                      <div className="grid__first col-span-7">
                        <p className="text-[14px] text-text">Entry Fee</p>
                        <p className="text-[10px] text-lightblue bg-[#cbedfd] uppercase w-fit px-2 rounded  py-[2px]">
                          null
                        </p>
                      </div>
                      <div className="grid__first col-span-5 flex justify-end items-end">
                        <p className="text-[16px] text-text">5.00 AED</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 py-3">
                      <div className="grid__first col-span-7">
                        <p className="text-[16px] font-[650] text-darktext">
                          Grand Total
                        </p>
                      </div>
                      <div className="grid__first col-span-5 flex justify-end items-end">
                        <p className="text-[16px] text-darktext">200.00 AED</p>
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
                    Your visa application is done successfully. Further details are given in your
                    corresponding email
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
                <button className="text-light bg-darktext px-2 py-2 rounded"
                onClick={() => navigate('/b2b')}
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
