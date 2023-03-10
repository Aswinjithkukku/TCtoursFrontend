import React, { useState } from "react";
import { BiPhone, BiUser } from "react-icons/bi";
import { FaBus } from "react-icons/fa";
import { FcDownload } from "react-icons/fc";
import { ImTicket } from "react-icons/im";
import { FiMapPin } from "react-icons/fi";
import { MdNoTransfer, MdOutlineEmail } from "react-icons/md";
import { useSelector } from "react-redux";
import priceConversion from "../../../utils/PriceConversion";
import AttractionTicketTemplate from "../Ticket/AttractionTicketTemplate";
import { useMemo } from "react";
import { useRef } from "react";
import ReactToPrint from "react-to-print";
import { AiFillPrinter } from "react-icons/ai";
import B2bAttractionInvoiceTemplate from "../Ticket/B2bAttractionInvoiceTemplate";
import axios from "../../../axios";

function AttractionOrderTable({ item }) {
  const [orderDetails, setOrderDetails] = useState(false);
  const { selectedCurrency } = useSelector((state) => state.home);

  const tickets = useMemo(() => {
    return () => {
      const ele = item?.activities;
      let ticketList = [];
      if (ele?.adultTickets) ticketList = [...ticketList, ...ele?.adultTickets];
      if (ele?.childTickets) ticketList = [...ticketList, ...ele?.childTickets];

      ticketList = ticketList?.map((tkt) => {
        return {
          ...tkt,
          attraction: item?.attraction,
          activity: ele?.activity,
          destination: ele?.destination,
        };
      });
      if (ticketList) return ticketList;
      return [];
    };
  }, [item]);

  const list = tickets();
  const listRef = useRef();

  const handleDownloadAllTickets = async (ele) => {
    try {
      const response = await axios.get(
        `/b2b/attractions/orders/${item?._id}/ticket/${item?.activities?._id}`
      );
      console.log(response);
      const url = window.URL.createObjectURL(
        new Blob([response.data], { type: "application/pdf" })
      );
      var link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "resume.pdf");
      document.body.appendChild(link);
      link.click();
    } catch (error) {}
  };
  const handleDownloadTicket = async (ele) => {
    try {
      const response = await axios.get(
        `/b2b/attractions/orders/${item?._id}/ticket/${item?.activities?._id}/single/${ele?.ticketNo}`
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
      <div className="h-fit absolute left-[20000px]" id="all_tickets">
        <div ref={listRef}>
          {list?.map((ele) => (
            <>
              <div id={ele?.ticketNo} className="w-[100%] ">
                <AttractionTicketTemplate ticket={ele} />
              </div>
            </>
          ))}
        </div>
        <div id="attraction_order_pdf_template" className="w-[21cm]">
          <B2bAttractionInvoiceTemplate data={item} />
        </div>
      </div>
      <tr
        className="relative overflow-hidden border-b border-tableBorderColor "
        onClick={() => setOrderDetails(!orderDetails)}
      >
        <td className="p-3">
          <div className="">
            <p className="">{item?.referenceNumber} </p>
            <span className="flex justify-start gap-2">
              <p className="bg-gray-400 text-gray-100 px-2 py-1 rounded">
                {item?.reseller?.agentCode}
              </p>
              <p
                className={`bg-gray-300 text-gray-100 px-2 py-1 rounded capitalize`}
              >
                {item?.activities?.bookingType}
              </p>
            </span>
          </div>
        </td>
        {/* <td className="p-3">{item?.reseller?.agentCode} </td>
        <td className="p-3">{item?.reseller?.agentCode}</td> */}
        <td className="p-3 min-w-[200px]">
          <div className="">
            <p className="">{item?.activities?.activity?.name}</p>
            <span className="flex justify-start gap-2 text-xs">
              <p className="bg-gray-300 text-gray-100 px-2 py-1 rounded">
                Adult : {item?.activities?.adultsCount}
              </p>
              <p className="bg-gray-300 text-gray-100 px-2 py-1 rounded">
                Child : {item?.activities?.childrenCount}
              </p>
              <p className="bg-gray-300 text-gray-100 px-2 py-1 rounded">
                Infant : {item?.activities?.infantCount}
              </p>
              {/* <p className={`${item?.activities?.bookingType === "ticket" ? " bg-main " :  " bg-blue-500 "} text-gray-100 px-2 py-1 rounded capitalize`}>{item?.activities?.bookingType}</p> */}
            </span>
          </div>
        </td>
        {/* <td className="p-3 capitalize">{item?.activities?.bookingType}</td> */}
        <td className="p-3 ">{item?.activities?.date?.slice(0, 10)}</td>
        <td className="p-3 ">{item?.createdAt?.slice(0, 10)} </td>
        {/* <td className="p-3">{item?.activities?.adultsCount} </td>
        <td className="p-3">{item?.activities?.childrenCount} </td>
        <td className="p-3">{item?.activities?.infantCount} </td> */}
        <td className="p-3 whitespace-nowrap">
          {priceConversion(item?.totalAmount, selectedCurrency, true)}{" "}
        </td>
        {/* <td className="p-3">5 AED</td> */}
        <td className="">
          {item?.activities?.status === "confirmed" ? (
            <span className="bg-green-400 text-sm text-light px-4 rounded capitalize">
              {item?.activities?.status}
            </span>
          ) : item?.activities?.status === "pending" ? (
            <span className="bg-orange-400 text-sm text-light px-4 rounded capitalize">
              {item?.activities?.status}
            </span>
          ) : item?.activities?.status === "booked" ? (
            <span className="bg-lightblue text-sm text-light px-4 rounded capitalize">
              {item?.activities?.status}
            </span>
          ) : (
            <span className="bg-red-400 text-sm text-light px-4 rounded capitalize">
              {item?.activities?.status}
            </span>
          )}
        </td>

        <td className="p-3">
          <div className="flex flex-col gap-1">
            <ReactToPrint
              trigger={() => (
                <button
                  disabled={item?.activities?.status !== "confirmed"}
                  className=" px-2 py-1  rounded text-white text-[16px] flex items-center gap-1 justify-center w-[100%] bg-gray-400"
                >
                  <span className="text-sm">Invoice</span>
                  <AiFillPrinter />
                </button>
              )}
              content={() =>
                document.getElementById("attraction_order_pdf_template")
              }
            />
            <a
              href={`${process.env.REACT_APP_URL}/ticket/attraction/${item?._id}`}
              disabled={item?.activities?.status !== "confirmed"}
              className=" px-2 py-1  rounded text-white text-[16px] flex items-center gap-1 justify-center w-[100%] bg-gray-400"
              // to={`/ticket/attraction/${item?._id}`}
              target="blank"
            >
              View <ImTicket />
            </a>
            <ReactToPrint
              trigger={() => (
                <button
                  disabled={item?.activities?.status !== "confirmed"}
                  className=" px-2 py-1  rounded text-white text-[16px] flex items-center gap-1 justify-center w-[100%] bg-gray-400"
                >
                  <span className="text-sm">Print</span>
                  <AiFillPrinter />
                </button>
              )}
              content={() => listRef.current}
            />
            <button
              disabled={item?.activities?.status !== "confirmed"}
              onClick={handleDownloadAllTickets}
              className=" px-1 py-1  rounded text-white text-[16px] flex items-center gap-1 justify-center w-[100%] bg-gray-400"
            >
              <span className="text-sm">Download</span>
              <ImTicket />
            </button>
          </div>
        </td>
      </tr>
      {orderDetails && (
        <>
          <tr className="border-b border-tableBorderColor border-dashed">
            <td colSpan="12" className="p-3">
              <div className="flex flex-wrap items-start gap-[3em]">
                <div className="flex items-start gap-[1em]">
                  <div className="w-[150px] max-h-[100px] rounded overflow-hidden">
                    <img
                      src={
                        process.env.REACT_APP_SERVER_URL +
                        item?.attraction?.images[0]
                      }
                      alt="Attraction"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-base font-[600]">
                      {item?.attraction?.title}{" "}
                    </h2>
                    <span className="font-medium block mt-1">
                      {item?.activities?.activity?.name}{" "}
                    </span>
                    <span className="block text-grayColor mt-1">
                      {item?.activities?.date?.slice(0, 10)}
                    </span>
                  </div>
                </div>
                <div>
                  <h2 className="font-medium text-grayColor">User Details</h2>
                  <span className="flex items-center gap-[7px] mt-1 capitalize">
                    <BiUser /> {item?.name}
                  </span>
                  <span className="flex items-center gap-[7px] mt-1">
                    <MdOutlineEmail /> {item?.email}
                  </span>
                  <span className="flex items-center gap-[7px] mt-1">
                    <FiMapPin /> {item?.country?.countryName}
                  </span>
                  <span className="flex items-center gap-[7px] mt-1">
                    <BiPhone /> {item?.phoneNumber}
                  </span>
                </div>
                <div>
                  <h2 className="font-medium text-grayColor">Other Option</h2>
                  {item?.activities?.transferType === "without" ? (
                    <span className="flex items-center gap-[7px] mt-1 capitalize">
                      <MdNoTransfer /> {item?.activities?.transferType} Transfer
                    </span>
                  ) : (
                    <span className="flex items-center gap-[7px] mt-1 capitalize">
                      <FaBus /> Transfer
                    </span>
                  )}
                  <span className="block mt-1">
                    Status -{" "}
                    {item?.activities?.status === "booked" ? (
                      <span className="bg-green-100 text-xs text-green-500 px-4 rounded capitalize">
                        {item?.activities?.status}
                      </span>
                    ) : item?.activities?.status === "pending" ? (
                      <span className="bg-orange-100 text-xs text-orange-500 px-4 rounded capitalize">
                        {item?.activities?.status}
                      </span>
                    ) : item?.activities?.status === "confirmed" ? (
                      <span className="bg-green-100 text-xs text-green-500 px-4 rounded capitalize">
                        {item?.activities?.status}
                      </span>
                    ) : (
                      <span className="bg-red-100 text-xs text-red-500 px-4 rounded capitalize">
                        {item?.activities?.status}
                      </span>
                    )}
                  </span>
                  <span className="block mt-2">
                    Adults Count:{" "}
                    <span className="text-sm font-medium">
                      {item?.activities?.adultsCount}
                    </span>
                  </span>
                  <span className="block mt-2">
                    Children Count:{" "}
                    <span className="text-sm font-medium">
                      {item?.activities?.childrenCount}
                    </span>
                  </span>
                  <span className="block mt-2">
                    Infants Count:{" "}
                    <span className="text-sm font-medium">
                      {item?.activities?.infantCount}
                    </span>
                  </span>
                </div>
              </div>
            </td>
          </tr>
          <tr className="border-b border-tableBorderColor">
            <td colSpan="12 max-w-[1600px]">
              <ul className="flex flex-wrap">
                {list?.map((ele) => (
                  <>
                    {/* <ReactToPrint
                      trigger={() => ( */}
                    <button
                      className="px-3 py-1 flex gap-2 items-center cursor-pointer "
                      onClick={() => {
                        handleDownloadTicket(ele);
                      }}
                    >
                      {ele?.ticketNo}{" "}
                      <span>
                        <FcDownload />
                      </span>
                    </button>
                    {/* )}
                      content={() => document.getElementById(ele?.ticketNo)}
                    /> */}
                  </>
                ))}
              </ul>
            </td>
          </tr>
        </>
      )}
    </>
  );
}

export default AttractionOrderTable;
