import React, { useState } from "react";
import { BiPhone, BiUser } from "react-icons/bi";
import { FaBus } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { MdNoTransfer, MdOutlineEmail } from "react-icons/md";
import { useSelector } from "react-redux";
import priceConversion from "../../../utils/PriceConversion";

function AttractionOrderTable({ item }) {
  const [orderDetails, setOrderDetails] = useState(false);
  const { selectedCurrency } = useSelector((state) => state.home);
  return (
    <>
      <tr
        className="border-b border-tableBorderColor"
        onClick={() => setOrderDetails(!orderDetails)}
      >
        <td className="p-3">{item?.referenceNumber} </td>
        <td className="p-3">{item?.reseller?.companyName} </td>
        <td className="p-3">{item?.reseller?.agentCode}</td>
        <td className="p-3 min-w-[200px]">{item?.activities?.activity?.name} </td>
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
          {item?.activities?.status === "booked" ? (
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
      </tr>
      {orderDetails && (
        <tr className="border-b border-tableBorderColor">
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
      )}
    </>
  );
}

export default AttractionOrderTable;