import React from "react";
import { useSelector } from "react-redux";
import priceConversion from "../../../utils/PriceConversion";

const B2bAttractionInvoiceTemplate = ({ data }) => {
  console.log(data);
  const { selectedCurrency } = useSelector((state) => state.home);

  return (
    <div className="p-[30px] w-[21cm]">
      <div className="p-5 flex justify-between">
        <h1 className="text-[30px] font-semibold">INVOICE</h1>
      </div>
      <div className="p-5 flex justify-between align-bottom">
        <div className="text-3 font-normal">
          <p className="text-[20px] font-semibold">Bill To:</p>
          <p className="text-[20px] font-normal capitalize">{data?.name}</p>
          <p className="text-[16px] font-normal">{data?.email}</p>
          <p className="text-[16px] font-normal">{data?.phoneNumber}</p>
          <p className="text-[16px] font-normal capitalize">
            {data?.country?.countryName}
          </p>
        </div>
        <div className="text-[12px] font-normal flex flex-col  ">
          <p className="text-[20px] font-semibold">Invoice Details</p>
          <p className="text-[16px] font-normal">
            <span>Invoice Date: </span>
            <span></span>
          </p>
          <p className="text-[16px] font-normal">
            <span>Invoice No: {data?.referenceNumber}</span>
            <span></span>
          </p>
        </div>
      </div>
      <div className="pb-5 mt-5 w-[100%] ">
        <div className="table w-[100%]">
          <table id="invoice" className="w-[100%] border-collapse">
            <thead className="text-[16px]">
              <tr className="text-white text-left bg-[#4f4f4f]">
                <th className="p-2 border-white border-solid border-[1px]  ">
                  Name
                </th>
                <th className="p-2 border-white border-solid border-[1px] ">
                  Adult
                </th>
                <th className="p-2 border-white border-solid border-[1px] ">
                  Child
                </th>
                <th className="p-2 border-white border-solid border-[1px] ">
                  Infant
                </th>
                <th className="p-2 border-white border-solid border-[1px] ">
                  Transfer
                </th>
                <th className="p-2 border-white border-solid border-[1px] ">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="text-[16px]">
              {/* {data?.map((ele) => ( */}
              <tr>
                <td className="p-2 border-solid border-white border-[1px]">
                  {data?.activities?.activity?.name}
                </td>
                <td className="p-2 border-solid border-white border-[1px]">
                  {data?.activities?.adultsCount}
                </td>
                <td className="p-2 border-solid border-white border-[1px]">
                  {data?.activities?.childrenCount}
                </td>
                <td className="p-2 border-solid border-white border-[1px]">
                  {data?.activities?.infantCount}
                </td>
                <td className="p-2 border-solid border-white border-[1px]">
                  {data?.activities?.transferType}
                </td>
                <td className="p-2 border-solid border-white border-[1px]">
                  {data?.activities?.amount} AED
                </td>
              </tr>
              {/* ))} */}
            </tbody>
          </table>
        </div>
        <div className="pt-[20px] flex justify-end w-[100%] text-[16px] mt-10">
          <div className="grand_total w-[250px]">
            <div className="flex justify-between text-[16px]">
              <p className="">Sub Total</p>
              <p className="w-[40%]  text-right">
                {priceConversion(data?.totalAmount, selectedCurrency, true)}{" "}
              </p>
            </div>

            <div className="flex justify-between text-[18px] font-bold">
              <p className=" ">Grand Total</p>
              <p className="w-[40%] text-right">
                {priceConversion(data?.totalAmount, selectedCurrency, true)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-2 flex justify-start text-[16px] mt-4">
        <div className=" flex flex-col text-[14px]">
          <div className=" font-bold">
            <h4 className="text-[20px]">Terms & Condition</h4>
          </div>
          <p className="">
            By default, Tailwind includes grid-template-column utilities f
          </p>
          <p className="">
            By default, Tailwind includes grid-template-column utilities f
          </p>
        </div>
      </div>
    </div>
  );
};

export default B2bAttractionInvoiceTemplate;
