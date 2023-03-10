import React, { useEffect, useMemo, useState } from "react";
import Barcode from "react-barcode";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import QRCode from "react-qr-code";

import axios from "../../../axios";
import formatDate from "../../../utils/formatDate";
import { PageLoader } from "../../components";

function AttractionSingleTicketPage() {
  const [order, setOrder] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id, activityId } = useParams();
  const { token } = useSelector((state) => state.agents);

  const fetchSingleTicket = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `/b2b/attractions/orders/${id}/ticket/${activityId}`,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );
      setOrder(response?.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSingleTicket();
  }, []);

  const tickets = useMemo(() => {
    return () => {
      const ele = order?.activities;

      if (ele?.bookingType === "ticket") {
        let tickets = [];
        if (ele?.adultTickets) tickets = [...tickets, ...ele?.adultTickets];
        if (ele?.childTickets) tickets = [...tickets, ...ele?.childTickets];
        tickets = tickets?.map((tkt) => {
          return {
            ...tkt,
            type: "ticket",
            attraction: ele?.attraction,
            activity: ele?.activity,
            destination: ele?.destination,
          };
        });
        return tickets;
      }
      return [
        {
          type: "booking",
          attraction: ele?.attraction,
          activity: ele?.activity,
          ticketNo: ele?.bookingConfirmationNumber,
          destination: ele?.destination,
          note: ele?.note,
        },
      ];
    };
  }, [order]);

  const ticketList = tickets();
  const baseUrl = process.env.REACT_APP_SERVER_URL;
  return isLoading ? (
    <PageLoader />
  ) : (
    <>
      <div>
        {ticketList?.map((ticket) => {
          return (
            <div className="min-w-screen min-h-screen bg-white">
              <main className="w-[700px] mx-auto">
                <div className="primary__section w-[100%]">
                  <div className="grid grid-cols-5 pt-7">
                    <div className=" col-span-2 ">
                      {ticket?.attraction?.logo?.length > 0 && (
                        <img
                          className="w-[200px] h-[100px] "
                          src={`${baseUrl}${ticket?.attraction?.logo}`}
                          alt=""
                        />
                      )}
                    </div>
                    <div className="col-span-3 flex justify-end">
                      <Barcode
                        value={ticket?.ticketNo}
                        width={1}
                        height={50}
                        textMargin={0}
                        fontSize={20}
                      />
                    </div>
                  </div>
                </div>
                <div className="secondary__section">
                  <div className="bg-[#e3f2fd] rounded-2xl mt-4 border-2 border-[#a3c4dc] grid grid-cols-12 items-center">
                    <div className="col-span-7 border-r-2 border-dashed border-[#a3c4dc] p-4">
                      <div className=" border-b border-dashed border-[#a3c4dc] ">
                        <h1 className="text-[14px] py-2 font-[600]">
                          Tour Name : {ticket?.activity?.name}
                        </h1>
                      </div>
                      {ticket?.type === "ticket" && (
                        <div className="grid grid-cols-2 text-[10px] mt-4">
                          <div className="grid grid-cols-2 gap-x-1 gap-y-2">
                            <div className="">Ticket Type:</div>
                            <div className="capitalize">
                              {ticket?.ticketFor}
                            </div>
                            <div className="">Destination:</div>
                            <div className="capitalize">
                              {ticket?.destination?.name}
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-x-1 gap-y-2">
                            <div className="">Validity Till:</div>
                            <div className="">
                              {ticket?.validity
                                ? formatDate(ticket?.validTill)
                                : "N/A"}
                            </div>
                            <div className="">Number:</div>
                            <div className="">{ticket?.lotNo}</div>
                          </div>
                        </div>
                      )}
                      {ticket?.type === "booking" && (
                        <>
                          <div className="grid grid-cols-2 text-[10px] mt-4">
                            {ticket?.note}
                          </div>
                        </>
                      )}
                    </div>
                    <div className="col-span-5 py-10 relative">
                      <div className="h-5 w-5 rounded-full bg-white absolute -top-3 -left-[10px]"></div>
                      <div className="h-5 w-5 rounded-full bg-white absolute -bottom-3 -left-[10px]"></div>
                      <div className="w-full h-full flex justify-center items-center">
                        <div className="">
                          <div className="flex justify-center">
                            <div className="h-[100px] w-[100px]">
                              <QRCode
                                size={256}
                                style={{
                                  height: "auto",
                                  maxWidth: "100%",
                                  width: "100%",
                                }}
                                value={ticket?.ticketNo}
                                viewBox={`0 0 256 256`}
                              />
                            </div>
                          </div>
                          <p className="text-[9px] text-center mt-2">
                            {ticket?.ticketNo}
                          </p>
                          <p className="text-[9px] text-center">
                            Place Image against the scanner
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="last__section">
                  <div className=" grid grid-cols-3  w-[100%]  h-[200px] rounded-2xl overflow-hidden mt-4 ">
                    {ticket?.attraction?.images?.map((link) => {
                      return (
                        <div className=" h-[300px]  ">
                          <img
                            src={`${baseUrl}${link}`}
                            alt="images"
                            className="h-[300px] w-[100%]"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-7 text-[12px] leading-[22px]">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: ticket?.activity?.description,
                    }}
                    id="ticket-description"
                  ></div>
                </div>
              </main>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AttractionSingleTicketPage;
