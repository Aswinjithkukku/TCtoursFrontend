import React, { useState } from "react";
import { BiPhone, BiUser } from "react-icons/bi";
import { FaBus } from "react-icons/fa";
import { FcDownload } from "react-icons/fc";
import { FiMapPin } from "react-icons/fi";
import { MdNoTransfer, MdOutlineEmail } from "react-icons/md";
import { useSelector } from "react-redux";
import priceConversion from "../../../utils/PriceConversion";
import AttractionTicketTemplate from "../Ticket/AttractionTicketTemplate";
import { useMemo } from "react";
import domToPdf from "dom-to-pdf";

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

  const handleTicketsDownload = () => {
    const ticketList = tickets();

    ticketList?.forEach((ele) => {
      var node = document.getElementById(ele?.ticketNo);

      var options = {
        filename: `${ele?.ticketNo}.pdf`,
      };
      domToPdf(node, options, function (pdf) {});
    });
  };

  const handleSingleTicketDownload = (ticketNo) => {
    var node = document.getElementById(ticketNo);

    var options = {
      filename: `${ticketNo}.pdf`,
    };
    domToPdf(node, options, function (pdf) {});
  };

  const list = tickets();
  return (
    <>
      <div className=" absolute left-[2000px]">
        {list?.map((ele) => (
          <>
            <div id={ele?.ticketNo} className="w-[100%] pt-[200px] ">
              <AttractionTicketTemplate ticket={ele} />
            </div>
          </>
        ))}
      </div>
      <tr
        className="border-b border-tableBorderColor"
        onClick={() => setOrderDetails(!orderDetails)}
      >
        <td className="p-3">{item?.referenceNumber} </td>
        <td className="p-3">{item?.reseller?.companyName} </td>
        <td className="p-3">{item?.reseller?.agentCode}</td>
        <td className="p-3 min-w-[200px]">
          {item?.activities?.activity?.name}{" "}
        </td>
        <td className="p-3 capitalize">{item?.activities?.bookingType}</td>
        <td className="p-3 ">{item?.activities?.date?.slice(0, 10)}</td>
        <td className="p-3 ">{item?.createdAt?.slice(0, 10)} </td>
        <td className="p-3">{item?.activities?.adultsCount} </td>
        <td className="p-3">{item?.activities?.childrenCount} </td>
        <td className="p-3">{item?.activities?.infantCount} </td>
        <td className="p-3 whitespace-nowrap">
          {priceConversion(item?.activities?.amount, selectedCurrency, true)}{" "}
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
          ) : (
            <span className="bg-red-400 text-sm text-light px-4 rounded capitalize">
              {item?.activities?.status}
            </span>
          )}
        </td>

        <td className="p-3">
          <button
            disabled={item?.activities?.status !== "confirmed"}
            onClick={handleTicketsDownload}
            className=" px-2 py-1  rounded text-white text-[20px] flex justify-center w-[100%]"
          >
            <FcDownload />
          </button>{" "}
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
            <td colSpan="12">
              <ul className="flex">
                {list?.map((ele) => (
                  <>
                    <button
                      disabled={
                        !ele?.validity ||
                        item?.activities?.status !== "confirmed"
                      }
                      className="px-3 py-1 flex gap-2 items-center cursor-pointer "
                      onClick={() => {
                        handleSingleTicketDownload(ele?.ticketNo);
                      }}
                    >
                      {ele?.ticketNo}{" "}
                      <span>
                        <FcDownload />
                      </span>
                    </button>
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
