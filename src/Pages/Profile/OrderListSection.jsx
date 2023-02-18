import React from "react";
import { BiUser, BiPhone } from "react-icons/bi";
import { MdNoTransfer, MdOutlineEmail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { FaBus, FaMoneyBillAlt } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import AttractionOrderCard from "./AttractionOrderCard";
import VisaOrderCard from "./VisaOrderCard";
import { useState } from "react";

function OrderListSection({ navigation }) {
  const title = [
    "Attraction Orders",
    "Visa Orders",
    "Hotel",
    "Flight",
    "Transfer",
  ];
  const orderTypes = [
    <AttractionOrderCard />,
    <VisaOrderCard />,
    <VisaOrderCard />,
    <VisaOrderCard />,
    <VisaOrderCard />,
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mt-3">
      <div className="border-b border-spacing-1 border-dashed border-darktext pb-4">
        <h1 className="font-[600] text-gray-700 uppercase">
          {title[navigation]}
        </h1>
      </div>
      {orderTypes[navigation]}
    </div>
  );
}

export default OrderListSection;
