import React from "react";
import { BsFileRichtext } from "react-icons/bs";
import banner from "../../../static/images/banner.jpg";
import barcode from "../../../static/images/barcode.png";

function DubaiDolphinarium() {
  return (
    <>
      <main className="w-[750px] h-screen bg-white mx-auto shadow-sm">
        <div className="primary__section">
          <div className="flex justify-end pt-7">
            <div className="w-4/12">
              <img
                src={barcode}
                alt="barcode"
                className="w-full object-cover"
              />
              <p className="text-xs text-center">
                152df4fd4f4fd5f656df3fdf65d5
              </p>
            </div>
          </div>
        </div>
        <div className="secondary__section">
          <div className="bg-[#e3f2fd] rounded-md mt-4 border-2 border-[#a3c4dc] grid grid-cols-12">
            <div className="col-span-7 border-r-2 border-dashed border-[#a3c4dc] p-4 py-10 ">
              <div className=" border-b border-dashed border-[#a3c4dc] ">
                <h1 className="text-[10px] py-1 font-[500]">
                  Tour Name : Dubai Mall Aquarium & Underwaterzoo - Online
                </h1>
              </div>
              <div className="grid grid-cols-2 text-[8.5px] py-2">
                <div className="grid grid-cols-2 gap-1">
                  <div className="">Guest Name:</div>
                  <div className="">Sam Philipie</div>
                  <div className="">Ticket Type:</div>
                  <div className="">Adult</div>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="">Confirmation Number:</div>
                  <div className=""> 0402231651</div>
                  <div className="">Validity Till:</div>
                  <div className="">2023 feb-23</div>
                </div>
              </div>
            </div>
            <div className="col-span-5 py-10 relative">
              <div className="h-5 w-5 rounded-full bg-white absolute -top-3 -left-[10px]"></div>
              <div className="h-5 w-5 rounded-full bg-white absolute -bottom-3 -left-[10px]"></div>
              <div className="w-full h-full flex justify-center items-center">
                <div className="">
                  <div className="flex justify-center">
                    <div className="h-14 w-14">
                      <img
                        src={banner}
                        alt="qr"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-[9px] text-center mt-2">
                    oO4E0220231651CA
                  </p>
                  <p className="text-[9px] text-center">
                    Place Image against the scanner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="third__section">
          <div className="w-full h-full p-5 border rounded-md border-[#a3c4dc] mt-7">
            <div className="flex gap-2">
              <span className="text-sm text-main">
                <BsFileRichtext />
              </span>
              <span className="text-xs">General Rules and Regulations</span>
            </div>
            <ol className="text-[9px] list-outside list-decimal ml-2 mt-3">
              <li>
                Guests are required to carry a printed copy of the ticket which
                needs to be presented at the Entrance to gain the entry.
              </li>
              <li>
                Guests are required to carry a printed copy of the ticket which
                needs to be presented at the Entrance to gain the entry.
              </li>
              <li>
                Guests are required to carry a printed copy of the ticket which
                needs to be presented at the Entrance to gain the entry.
              </li>
              <li>
                Guests are required to carry a printed copy of the ticket which
                needs to be presented at the Entrance to gain the entry.
              </li>
              <li>
                Guests are required to carry a printed copy of the ticket which
                needs to be presented at the Entrance to gain the entry.
              </li>
              <li>
                Guests are required to carry a printed copy of the ticket which
                needs to be presented at the Entrance to gain the entry.
              </li>
            </ol>
          </div>
        </div>
        <div className="last__section">
          <div className="grid grid-cols-3 overflow-hidden rounded-md mt-7">
            <div className="w-[250px] h-[170px]">
              <img
                src={banner}
                alt="qr"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[250px] h-[170px]">
              {" "}
              <img
                src={banner}
                alt="qr"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[250px] h-[170px]">
              {" "}
              <img
                src={banner}
                alt="qr"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default DubaiDolphinarium;
