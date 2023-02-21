import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import priceConversion from "../../../utils/PriceConversion";

function VisaOrderSingleRow({ item }) {
    const navigate = useNavigate()

    const { selectedCurrency } = useSelector(state => state.home)
  return (
    <>
      <tr className="border-b border-tableBorderColor"
      onClick={() => navigate(`/b2b/visa/order/${item?._id}/details`)}
      >
        <td className="p-3">{item?.referenceNumber}  </td>
        <td className="p-3">India </td>
        <td className="p-3">{item?.noOfTravellers} </td>
        <td className="p-3">{priceConversion(item?.totalAmount, selectedCurrency, true)} </td>
        <td className="p-3 capitalize">{item?.status} </td>
      </tr>
    </>
  );
}

export default VisaOrderSingleRow;
