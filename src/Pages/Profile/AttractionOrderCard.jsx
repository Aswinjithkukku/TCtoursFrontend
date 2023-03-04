import React, { useMemo, useRef } from "react";
import { BiUser, BiPhone } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../axios";
import Swal from "sweetalert2";
import ReactToPrint from "react-to-print";
import AttractionTicketTemplate from "../../b2b/pages/Ticket/AttractionTicketTemplate";
import { FcDownload } from "react-icons/fc";

const AttractionOrderCard = ({ orderInfo }) => {
  const [list, setList] = useState([]);
  const { jwtToken } = useSelector((state) => state.users);
  const ticketsTemplateRef = useRef();

  useEffect(() => {
    const getAttractionList = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        };

        const response = await axios.get("/attractions/orders/all", config);
        if (response.status === 200) {
          if (response.data?.result?.totalOrders === 0) {
            Swal.fire({
              icon: "error",
              title: "No Visa Application",
              text: "Given user do not have any application",
            });
          } else {
            setList(response.data.result);
          }
        }
      } catch (error) {}
    };

    getAttractionList();
  }, []);

  // const tickets = useMemo((item) => {
  //   return () => {
  //     const ele = item?.activities;
  //     let ticketList = [];
  //     if (ele?.adultTickets) ticketList = [...ticketList, ...ele?.adultTickets];
  //     if (ele?.childTickets) ticketList = [...ticketList, ...ele?.childTickets];

  //     ticketList = ticketList?.map((tkt) => {
  //       return {
  //         ...tkt,
  //         attraction: item?.attraction,
  //         activity: ele?.activity,
  //         destination: ele?.destination,
  //       };
  //     });
  //     if (ticketList) return ticketList;
  //     return [];
  //   };
  // }, [item]);

  const getTicketList = (item) => {
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

  console.log(list);
  const serverUrl = "https://secure.mytravellerschoice.com";
  // const serverUrl = process.env.REACT_APP_SERVER_URL;

  return (
    <>
      {list?.data?.map((ele, i) => {
        const tickets = getTicketList(ele);
        return (
          <>
            <div
              key={ele?._id}
              className=" relative overflow-hidden grid grid-cols-12 gap-y-2 bg-[#f4f7ff] w-full rounded-lg shadow-md p-3 mt-3"
            >
              <div className="absolute left-[2000px]">
                <div id={ele.referenceNumber}>
                  {tickets?.map((ele) => (
                    <>
                      <div id={ele?.ticketNo}>
                        <AttractionTicketTemplate ticket={ele} />
                      </div>
                    </>
                  ))}
                </div>
              </div>
              <div className=" col-span-12 flex bg-gray-300 w-[100%] items-start justify-between py-1 px-2 text-black border-b border-spacing-1  rounded">
                Referance No : {ele?.referenceNumber}
              </div>
              <div className="col-span-2 w-full h-[7em] overflow-hidden rounded-md ">
                <img
                  src={`${process.env.REACT_APP_SERVER_URL + ele?.attraction?.logo}`}
                  alt="Attraction logo"
                  className="h-[100%] w-[100%]"
                />
              </div>
              <div
                className="col-span-10 w-full px-[1em] text-sm text-darktext"
                // key={''}
              >
                <div className="flex flex-wrap items-start gap-[2em]">
                  <div className="flex items-start gap-[1em]">
                    <div>
                      <h2 className="text-base font-[600]">
                        {ele?.attraction?.title}
                      </h2>
                      <span className="font-medium block mt-1">
                        {ele?.activities?.activity?.name}
                      </span>
                      <span className=" flex items-center gap-[7px] text-grayColor mt-1">
                        <BsFillBagCheckFill /> 2023/04/20
                      </span>
                      <span className=" flex items-center gap-[7px] text-grayColor mt-1">
                        <FaMoneyBillAlt /> 2023/04/20
                      </span>
                    </div>
                  </div>
                  <div>
                    <h2 className="font-medium text-grayColor">Details</h2>
                    <span className="flex items-center gap-[7px] mt-1 capitalize">
                      <BiUser /> {ele?.name}
                    </span>
                    <span className="flex items-center gap-[7px] mt-1">
                      <MdOutlineEmail /> {ele?.email}
                    </span>
                    <span className="flex items-center gap-[7px] mt-1">
                      <FiMapPin /> {ele?.country?.countryName}
                    </span>
                    <span className="flex items-center gap-[7px] mt-1">
                      <BiPhone /> {ele?.phoneNumber}
                    </span>
                  </div>
                  <div>
                    <span className="flex items-center gap-[7px] mt-1 capitalize">
                      {ele?.activities?.activity?.transferType} Transfer
                    </span>
                    <span className="block mt-2">
                      Adults Count:{" "}
                      <span className="text-sm font-medium">
                        {ele?.activities?.adultsCount || 0}
                      </span>
                    </span>
                    <span className="block mt-2">
                      Children Count:{" "}
                      <span className="text-sm font-medium">
                        {ele?.activities?.childrenCount || 0}
                      </span>
                    </span>
                    <span className="block mt-2">
                      Infants Count:{" "}
                      <span className="text-sm font-medium">
                        {ele?.activities?.infantCount || 0}
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <span className="block mt-1">
                      <span className="bg-green-100 text-xs text-green-500 px-4 rounded capitalize">
                        {ele?.activities?.status}
                      </span>
                    </span>
                    <span className="flex items-center gap-[7px] mt-1 text-base font-[600] capitalize">
                      <FaMoneyBillAlt /> {ele?.activities?.amount} INR
                    </span>
                    <span>
                      {ele?.activities?.status === "confirmed" && (
                        <ReactToPrint
                          trigger={() => (
                            <button className="text-[13px] font-[500] uppercase text-white bg-green-500 px-3 py-1 rounded flex justify-center items-center gap-4">
                              Download
                            </button>
                          )}
                          content={() =>
                            document.getElementById(ele?.referenceNumber)
                          }
                        />
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className=" col-span-12 flex flex-wrap bg-gray-100 w-[100%] items-start  py-2 px-2 text-black border-b border-spacing-1 gap-y-2 rounded">
                {tickets?.map((ele) => (
                  <>
                    <ReactToPrint
                      trigger={() => (
                        <button className="text-[13px] font-[500] uppercase   flex justify-center items-center gap-1 border-r-black border-[1px] outline-none px-2">
                          {ele.ticketNo}{" "}
                          <span>
                            <FcDownload />
                          </span>
                        </button>
                      )}
                      content={() => document.getElementById(ele?.ticketNo)}
                    />
                  </>
                ))}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default AttractionOrderCard;
