import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { successAnimation } from "../../../data";
import axios from "../../../axios";
import { useSelector } from "react-redux";
import priceConversion from "../../../utils/PriceConversion";

function AttractionInvoice() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [output, setOutput] = useState({});

  const { token, agent } = useSelector((state) => state.agents);
  const { selectedCurrency } = useSelector((state) => state.home);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError("");

      const config = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `/b2b/attractions/orders/single/${id}`,
        config
      );
      setIsLoading(false);
      setOutput(response.data);
      console.log(output);
      return response.data;
    } catch (error) {
      setError(
        error?.response?.data?.error || "Something went wrong, Try again"
      );
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" ">
      <div className="bg-white flex items-center justify-between gap-[10px] px-2 lg:px-6 shadow-sm border-t py-2">
        <h1 className="font-[600] text-[15px] uppercase">Invoice</h1>
        <div className="text-sm text-grayColor flex items-center gap-[7px]">
          <Link to="/b2b" className="text-textColor">
            Dashboard{" "}
          </Link>
          <span>{">"} </span>
          <span className="text-textColor">Attraction</span>
          <span>{">"} </span>
          <span className="text-textColor">Details</span>
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
                    You have Ordered Successfully!
                  </h2>
                </div>
              <div className="mt-4 text-center space-y-2">
                <p className="text-[14px] font-[500] text-gray-600">Download the E-Ticket from here</p>
                <button className="text-[13px] font-[500] uppercase text-white bg-green-500 px-3 py-1 rounded"
                onClick={() => navigate(`/ticket/attraction/${id}`)}
                >Download Ticket</button>
              </div>
              </div>
            </div>
            <div className="flex justify-center w-full mt-5">
              <div className="first__section  w-full">
                <div className="bg-white shadow-sm m-6 rounded-[0.30rem] p-6 w-6/12 mx-auto border">
                  <div className="text-center">
                    <h2 className="text-xl font-[600] text-darktext">
                      {agent?.companyName}{" "}
                    </h2>
                  </div>
                  {/* <p className='text-sm text-gray-500 font-[600]'>Dec 3 2023</p> */}
                  <div className="flex gap-2 items-center">
                    <p className="text-[16px] font-[650] whitespace-nowrap">
                      {priceConversion(
                        output?.totalAmount,
                        selectedCurrency,
                        true
                      )}
                    </p>
                    <span className="text-xs bg-[#cbedfd] px-2 rounded text-lightblue py-[2px]">
                      Success
                    </span>
                  </div>
                  <div className="bg-soft my-2 rounded-[.30rem] p-3">
                    {output?.activites?.map((item, index) => (
                      <div key={index}>
                        <div className="grid grid-cols-12">
                          <div className="grid__first col-span-7">
                            <p className="text-[14px]">
                              {item?.activity?.name}
                            </p>
                            <p className="text-[14px] text-[#12acfd] uppercase">
                              {item?.bookingType}
                            </p>
                          </div>
                          <div className="grid__first col-span-5 text-right">
                            <p className="text-[14px]">Without Transfer</p>
                            <p className="text-[14px] text-[#12acfd] uppercase">
                              December 3, 2023
                            </p>
                          </div>
                        </div>
                        <div className="grid grid-cols-12 py-3 border-b-2">
                          <div className="grid__first col-span-7 flex gap-2">
                            <div>
                              <p className="text-[14px] text-text">Adults</p>
                              <p className="text-[10px] text-lightblue bg-[#cbedfd] uppercase w-fit px-2 rounded  py-[2px]">
                                {item?.adultsCount} adults
                              </p>
                            </div>
                            <div>
                              <p className="text-[14px] text-text">children</p>
                              <p className="text-[10px] text-lightblue bg-[#cbedfd] uppercase w-fit px-2 rounded  py-[2px]">
                                {item?.childrenCount} children
                              </p>
                            </div>
                            <div>
                              <p className="text-[14px] text-text">Infants</p>
                              <p className="text-[10px] text-lightblue bg-[#cbedfd] uppercase w-fit px-2 rounded  py-[2px]">
                                {item?.infantCount} infants
                              </p>
                            </div>
                          </div>
                          <div className="grid__first col-span-5 flex justify-end items-end">
                            <p className="text-[16px] text-text whitespace-nowrap">
                              {priceConversion(
                                item?.amount,
                                selectedCurrency,
                                true
                              )}{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* <div className='grid grid-cols-12 py-3 border-b-2'>
                      <div className='grid__first col-span-7'>
                        <p className='text-[14px] text-text'>VAT Amount</p>
                        <p className='text-[10px] text-lightblue bg-[#cbedfd] uppercase w-fit px-2 rounded  py-[2px]'>null</p>
                      </div>
                      <div className='grid__first col-span-5 flex justify-end items-end'>
                        <p className='text-[16px] text-text'>5.00 AED</p>
                      </div>
                    </div>  */}
                    <div className="grid grid-cols-12 py-3">
                      <div className="grid__first col-span-7">
                        <p className="text-[16px] font-[650] text-darktext">
                          Grand Total
                        </p>
                      </div>
                      <div className="grid__first col-span-5 flex justify-end items-end">
                        <p className="text-[16px] text-darktext">
                          {priceConversion(
                            output?.totalAmount,
                            selectedCurrency,
                            true
                          )}
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
                    Order placed successfull. Further details are given in your
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
                <button
                  className="text-light bg-darktext px-2 py-2 rounded"
                  onClick={() => navigate("/b2b")}
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

export default AttractionInvoice;
