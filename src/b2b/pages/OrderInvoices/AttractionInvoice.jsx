import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { successAnimation } from "../../../data";
import axios from "../../../axios";
import { useSelector } from "react-redux";
import priceConversion from "../../../utils/PriceConversion";
import AttractionTicketTemplate from "../Ticket/AttractionTicketTemplate";
import { useMemo } from "react";
import domToPdf from "dom-to-pdf";
import { FcDownload } from "react-icons/fc";
import { MdDownload } from "react-icons/md";
import AttractionInvoicePdfTemplate from "./AttractionInvoicePdfTemplate";
import ReactToPrint from "react-to-print";

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
      console.log(response.data);
      setOutput(response.data);

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

  const tickets = useMemo(() => {
    return () => {
      const data = output?.activites?.map((ele) => {
        let tickets = [];
        if (ele?.adultTickets) tickets = [...tickets, ...ele?.adultTickets];
        if (ele?.childTickets) tickets = [...tickets, ...ele?.childTickets];
        tickets = tickets?.map((tkt) => {
          return {
            ...tkt,
            attraction: ele?.attraction,
            activity: ele?.activity,
            destination: ele?.destination,
          };
        });
        return tickets;
      });
      if (data) return data.flat(1);
      return [];
    };
  }, [output]);

  const list = tickets();
  const listRef = useRef();
  const invoiveRef = useRef();

  const handleDownloadAllTickets = async (ele) => {
    try {
      output.activites?.forEach(async (item) => {
        // const response = await axios.get(
        //   `/b2b/attractions/orders/${output?._id}/ticket/${item?._id}`
        // );
        // const url = window.URL.createObjectURL(
        //   new Blob([response.data], { type: "application/pdf" })
        // );
        // var link = document.createElement("a");
        // link.href = url;
        // link.setAttribute("download", "resume.pdf");
        // document.body.appendChild(link);
        // link.click();
        const pdfBuffer = await axios.get(
          `/b2b/attractions/orders/${id}/ticket/${item?._id}`,
          {
            headers: { authorization: `Bearer ${token}` },
            responseType: "arraybuffer",
          }
        );

        console.log(pdfBuffer, "pdfBuffer");
        const blob = new Blob([pdfBuffer.data], {
          type: "application/pdf",
        });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "tickets.pdf";
        document.body.appendChild(link);
        link.click();
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleDownloadTicket = async (ele) => {
    try {
      const response = await axios.get(
        `/b2b/attractions/orders/${output?._id}/ticket/${output?.activities?._id}/single/${ele?.ticketNo}`
      );
      const url = window.URL.createObjectURL(
        new Blob([response.data], { type: "application/pdf" })
      );

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${ele?.ticketNo}.pdf`);
      document.body.appendChild(link);
      link.click();
    } catch (error) {}
  };

  return (
    <>
      <div className=" relative overflow-hidden">
        {/* <div className=""> */}
        <div className="absolute left-[2000000px]">
          <div ref={listRef}>
            {list?.map((ele) => (
              <>
                <div id={ele?.ticketNo} className="w-[100%] bg-white">
                  <AttractionTicketTemplate ticket={ele} />
                </div>
              </>
            ))}
          </div>
          <div
            id="attraction_invoice_pdf_template"
            className="w-[21cm] m-auto"
            ref={invoiveRef}
          >
            <AttractionInvoicePdfTemplate data={output} />
          </div>
        </div>
        <div className="p-2 ">
          <div className=" mt-2 ">
            <div className="main__section mt-4">
              <div className="grid grid-cols-8 px-4 gap-y-10">
                <div className="col-span-8">
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
                </div>
                <div className=" col-span-2 ">
                  <div className=" py-4 bg-white rounded-md">
                    {output?.activites?.map((ele) => {
                      if (ele?.bookingType === "ticket")
                        return (
                          <>
                            <div className=" text-center space-y-2 p-4 pt-0 border-b-[1px] border-dashed">
                              <h2 className="text-left text-blue-500 capitalize">
                                {ele?.attraction?.title}
                              </h2>
                              <p className="text-[14px] font-[500] text-gray-600">
                                Download the E-Ticket from here
                              </p>
                              <div className="flex flex-col">
                                {/* <ReactToPrint
                                  trigger={() => ( */}
                                <button
                                  onClick={() => {
                                    handleDownloadAllTickets();
                                  }}
                                  className="text-[13px] font-[500] uppercase text-white bg-green-500 px-3 py-1 rounded flex justify-center items-center gap-4"
                                >
                                  Download All Tickets{" "}
                                  <span className="text-white text-[18px]">
                                    <MdDownload />
                                  </span>
                                </button>
                                {/* )}
                                  content={() => listRef.current}
                                /> */}
                                <ul className="flex flex-col gap-1 py-2 list-none w-[100%] overflow-y-scroll max-h-[400px] mt-2">
                                  {list?.map((ele, i) => (
                                    <>
                                      <li className="flex justify-between  w-[100%] ">
                                        <span className="flex gap-1">
                                          Ticket No. :{" "}
                                          <span>{ele?.ticketNo}</span>
                                        </span>
                                        {/* <ReactToPrint
                                          trigger={() => ( */}
                                        <button
                                          onClick={() => {
                                            handleDownloadTicket(ele);
                                          }}
                                          className="text-[18px] font-[500] uppercase text-white px-3 py-1 rounded"
                                        >
                                          <span className="">
                                            <FcDownload />
                                          </span>
                                        </button>
                                        {/* )}
                                          content={() =>
                                            document.getElementById(
                                              ele?.ticketNo
                                            )
                                          }
                                        /> */}
                                      </li>
                                    </>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </>
                        );
                      if (ele?.bookingType === "booking") {
                        return (
                          <>
                            <div className="flex flex-col  justify-center gap-2 px-4 pt-2 bg-white  border-b-[1px] border-dashed pb-2">
                              <h2 className="text-left text-blue-500 capitalize">
                                {ele?.attraction?.title}
                              </h2>
                              <div className="flex justify-center">
                                <span className="   text-red-500 tracking-wide">
                                  Waiting for booking confirmation ....
                                </span>
                              </div>
                              <div className=" flex justify-end">
                                <button
                                  className="px-2 bg-blue-500 text-white py-1 rounded-md"
                                  onClick={() => {
                                    navigate("/b2b/order/attraction");
                                  }}
                                >
                                  Go To Orders
                                </button>
                              </div>
                            </div>
                          </>
                        );
                      }
                      return "";
                    })}
                  </div>
                </div>
                <div className="col-span-6 w-[100%]  px-[40px]">
                  <div className="flex justify-center w-[100%]">
                    <div className="first__section  w-full ">
                      <div className="bg-white shadow-sm rounded-[0.30rem] p-6 mx-auto ">
                        <div className="text-center">
                          <h2 className="text-xl font-[600] text-darktext">
                            {agent?.companyName}{" "}
                          </h2>
                        </div>
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
                                  <p className="text-[14px]">
                                    Without Transfer
                                  </p>
                                  <p className="text-[14px] text-[#12acfd] uppercase">
                                    December 3, 2023
                                  </p>
                                </div>
                              </div>
                              <div className="grid grid-cols-12 py-3 border-b-2">
                                <div className="grid__first col-span-7 flex gap-2">
                                  <div>
                                    <p className="text-[14px] text-text">
                                      Adults
                                    </p>
                                    <p className="text-[10px] text-lightblue bg-[#cbedfd] uppercase w-fit px-2 rounded  py-[2px]">
                                      {item?.adultsCount} adults
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-[14px] text-text">
                                      children
                                    </p>
                                    <p className="text-[10px] text-lightblue bg-[#cbedfd] uppercase w-fit px-2 rounded  py-[2px]">
                                      {item?.childrenCount} children
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-[14px] text-text">
                                      Infants
                                    </p>
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
                  <div className="second__section mx-auto ">
                    <div className="py-4 flex justify-between">
                      <div className="text-gray-500 text-sm">
                        <p className="">
                          Order placed successfull. Further details are given in
                          your corresponding email
                        </p>
                        <p className="text-[#12acfd]">
                          Download the invoice from here!
                        </p>
                      </div>
                      <div className="">
                        <ReactToPrint
                          trigger={() => (
                            <button className="bg-[#12acfd] rounded px-3 py-2 text-white">
                              Download Invoice
                            </button>
                          )}
                          content={() => invoiveRef.current}
                        />
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
        </div>
      </div>
    </>
  );
}

export default AttractionInvoice;
