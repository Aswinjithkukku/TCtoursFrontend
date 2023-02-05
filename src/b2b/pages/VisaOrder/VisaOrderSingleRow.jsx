import React from "react";
import { useNavigate } from "react-router-dom";

function VisaOrderSingleRow() {
    const navigate = useNavigate()
  return (
    <>
      <tr className="border-b border-tableBorderColor"
      onClick={() => navigate('/b2b/visa/order/details')}
      >
        <td className="p-3">B2BVSA_54SF64S6F4S64F6SDF</td>
        <td className="p-3">India </td>
        <td className="p-3">120 AED </td>
        <td className="p-3">uploaded</td>
        <td className="p-3">submitted</td>
      </tr>
      <tr className="border-b border-tableBorderColor">
        <td className="p-3">B2BVSA_54SF64S6F4S64F6SDF</td>
        <td className="p-3">India </td>
        <td className="p-3">120 AED </td>
        <td className="p-3">uploaded</td>
        <td className="p-3">submitted</td>
      </tr>
    </>
  );
}

export default VisaOrderSingleRow;
