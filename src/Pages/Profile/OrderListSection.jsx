import React from "react";

import AttractionOrderCard from "./AttractionOrderCard";
import VisaOrderCard from "./VisaOrderCard";

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
