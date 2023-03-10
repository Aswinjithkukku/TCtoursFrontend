import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import Barcode from "react-barcode";
import QRCode from "react-qr-code";
import formatDate from "../../../utils/formatDate";

const AttractionTicketTemplate = ({ ticket, index, data }) => {
  const ticketBoxRef = useRef();
  const [minHeight, setminHeight] = useState("min-h-[37cm]");
  const ticketDescRef = useRef();

  // if (ticketDescRef?.current) {
  //   ticketDescRef.current.innerHTML = description?.innerHTML;
  // }

  useEffect(() => {
    if (ticketBoxRef.current.clientHeight >= 1400) {
      setminHeight("min-h-[74cm]");
    }
  }, []);

  const baseUrl = process.env.REACT_APP_SERVER_URL;

  return (
    <>
      <div className={`p-[20px] w-[1000px] ${minHeight} `} ref={ticketBoxRef}>
        <section className="w-[100%] mx-auto flex flex-col items-center min-h-[35cm] ">
          <div className="primary__section w-[90%]">
            <div className="grid grid-cols-5 pt-7">
              <div className=" col-span-2 ">
                {ticket?.attraction?.logo && (
                  <img
                    className="w-[200px] h-[120px] "
                    src={`${baseUrl}${ticket?.attraction?.logo}`}
                    alt=""
                  />
                )}
                {data?.attraction?.logo && (
                  <>
                    <img
                      className="w-[200px] h-[120px] "
                      src={`${baseUrl}${data?.attraction?.logo}`}
                      alt=""
                    />
                  </>
                )}
              </div>
              <div className="col-span-3 flex justify-end ">
                {ticket && (
                  <Barcode
                    value={ticket?.ticketNo}
                    width={1}
                    height={50}
                    textMargin={0}
                    fontSize={20}
                  />
                )}
                {data && (
                  <Barcode
                    value={data?.activities?.bookingConfirmationNumber}
                    width={1}
                    height={50}
                    textMargin={0}
                    fontSize={20}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="secondary__section  w-[90%] py-[10px] ">
            <div className="bg-[#e3f2fd] rounded-2xl mt-4 border-2 border-[#a3c4dc] grid grid-cols-12 items-center h-[250px]">
              <div className="col-span-7 border-r-2 border-dashed border-[#a3c4dc] p-4 h-[250px] flex flex-col justify-center">
                <div className="  border-b  border-dashed border-[#a3c4dc] ">
                  <h1 className="text-[20px] py-2 font-[600]">
                    Tour Name :{" "}
                    {ticket?.activity?.name || data?.activities?.activity?.name}
                  </h1>
                </div>

                {ticket ? (
                  <div className="grid grid-cols-2 text-[15px] mt-4">
                    <div className="grid grid-cols-2 gap-x-1 gap-y-2">
                      <div className="">Ticket Type :</div>
                      <div className="capitalize">{ticket?.ticketFor}</div>
                      <div className="">Destination :</div>
                      <div className="capitalize">
                        {ticket?.activity?.attraction?.destination?.name}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-1 gap-y-2">
                      <div className="">Validity Till :</div>
                      <div className="">
                        {ticket?.validity
                          ? formatDate(ticket?.validTill)
                          : "N/A"}
                      </div>
                      <div className="">Number :</div>
                      <div className="">{ticket?.lotNo}</div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex text-[15px] mt-4">
                      <span>{data?.activities?.note}</span>
                    </div>
                  </>
                )}
              </div>
              <div className="col-span-5 py-3 relative h-[250px]">
                <div className="h-5 w-5 rounded-full bg-white absolute -top-2 -left-[10px]"></div>
                <div className="h-5 w-5 rounded-full bg-white absolute -bottom-2 -left-[10px]"></div>
                <div className="w-full h-full flex justify-center items-center">
                  <div className="">
                    <div className="flex justify-center">
                      <div className="h-[150px] w-[150px]">
                        {ticket && (
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
                        )}
                        {data && (
                          <QRCode
                            size={256}
                            style={{
                              height: "auto",
                              maxWidth: "100%",
                              width: "100%",
                            }}
                            value={data?.activities?.bookingConfirmationNumber}
                            viewBox={`0 0 256 256`}
                          />
                        )}
                      </div>
                    </div>
                    <p className="text-[15px] text-center mt-2">
                      {ticket?.ticketNo ||
                        data?.activities?.bookingConfirmationNumber}
                    </p>
                    <p className="text-[15px] text-center">
                      Place Image against the scanner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-3  w-[90%]  h-[200px] rounded-2xl overflow-hidden mt-[10px]">
            {ticket ? (
              <>
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
              </>
            ) : (
              <>
                {data?.attraction?.images?.map((link) => {
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
              </>
            )}
          </div>
          <div
            ref={ticketDescRef}
            className="my-[30px] w-[90%] "
            dangerouslySetInnerHTML={
              ticket
                ? {
                    __html: ticket?.activity?.description,
                  }
                : { __html: data?.activities?.activity?.description }
            }
          ></div>
        </section>
      </div>
    </>
  );
};

export default AttractionTicketTemplate;
