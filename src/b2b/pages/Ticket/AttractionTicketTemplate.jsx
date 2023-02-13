import React from "react";
import Barcode from "react-barcode";
import { FaHandPointRight } from "react-icons/fa";
import QRCode from "react-qr-code";
import formatDate from "../../../utils/formatDate";

const AttractionTicketTemplate = ({ ticket }) => {
  return (
    <>
      <div id="ticket_template" className="w-[100%] min-h-screen p-[40px] ">
        <section className="w-[100%] mx-auto flex flex-col items-center">
          <div className="primary__section w-[90%]">
            <div className="flex justify-end pt-7">
              <div className="">
                <Barcode
                  value={ticket?.ticketNo}
                  width={4}
                  height={100}
                  textMargin={0}
                  fontSize={30}
                />
              </div>
            </div>
          </div>
          <div className="secondary__section  w-[90%] py-[40px] h-[600px]">
            <div className="bg-[#e3f2fd] rounded-2xl mt-4 border-2 border-[#a3c4dc] grid grid-cols-12 items-center h-[500px]">
              <div className="col-span-7 border-r-2 border-dashed border-[#a3c4dc] p-16 h-[450px]">
                <div className="  border-b  border-dashed border-[#a3c4dc] ">
                  <h1 className="text-[40px] py-2 font-[600]">
                    Tour Name : {ticket?.activity?.name}
                  </h1>
                </div>
                <div className="grid grid-cols-2 text-[30px] mt-8">
                  <div className="grid grid-cols-2 gap-x-3 gap-y-16">
                    <div className="">Ticket Type :</div>
                    <div className="capitalize">{ticket?.ticketFor}</div>
                    <div className="">Destination :</div>
                    <div className="capitalize">
                      {ticket?.activity?.attraction?.destination?.name}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-x-1 gap-y-16">
                    <div className="">Validity Till :</div>
                    <div className="">
                      {ticket?.validity ? formatDate(ticket?.validTill) : "N/A"}
                    </div>
                    <div className="">Number :</div>
                    <div className="">{ticket?.lotNo}</div>
                  </div>
                </div>
              </div>
              <div className="col-span-5 py-10 relative h-[500px]">
                <div className="h-10 w-10 rounded-full bg-white absolute -top-4 -left-[20px]"></div>
                <div className="h-10 w-10 rounded-full bg-white absolute -bottom-4 -left-[20px]"></div>
                <div className="w-full h-full flex justify-center items-center">
                  <div className="">
                    <div className="flex justify-center">
                      <div className="h-[300px] w-[300px]">
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
                    <p className="text-[30px] text-center mt-2">
                      {ticket?.ticketNo}
                    </p>
                    <p className="text-[30px] text-center">
                      Place Image against the scanner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-[100px] w-[90%]">
            <div>
              <span className="text-[30px] ">
                General Rules and Regulations :-
              </span>
            </div>
            <ul className="list-none pl-[10px] list-outside  text-[26px] flex flex-col gap-4 mt-2">
              <li className="flex gap-4">
                <span className="pt-2 text-blue">
                  <FaHandPointRight />
                </span>
                Guests are required to carry a printed copy of the ticket which
                needs to be presented at the Entrance to gain the entry.
              </li>
              <li className="flex gap-4">
                <span className="pt-2 text-blue">
                  <FaHandPointRight />
                </span>
                Guests are required to carry a printed copy of the ticket which
                needs to be presented at the Entrance to gain the entry.
              </li>
              <li className="flex gap-4">
                <span className="pt-2 text-blue">
                  <FaHandPointRight />
                </span>
                Guests are required to carry a printed copy of the ticket which
                needs to be presented at the Entrance to gain the entry.
              </li>
              <li className="flex gap-4 ">
                <span className="pt-2 text-blue">
                  <FaHandPointRight />
                </span>
                Guests are required to carry a printed copy of the ticket which
                needs to be presented at the Entrance to gain the entry.
              </li>
              <li className="flex gap-4">
                <span className="pt-2 text-blue">
                  <FaHandPointRight />
                </span>
                Guests are required to carry a printed copy of the ticket which
                needs to be presented at the Entrance to gain the entry.
              </li>
              <li className="flex gap-4">
                <span className="pt-2 text-blue">
                  <FaHandPointRight />
                </span>
                Guests are required to carry a printed copy of the ticket which
                needs to be presented at the Entrance to gain the entry.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default AttractionTicketTemplate;
