import React from "react";

const AttractionInvoicePdfTemplate = ({ data }) => {
  console.log(data);

  const totalAmount = data?.activites
    ?.map((ele) => {
      return ele?.amount;
    })
    .reduce((acc, x) => {
      return acc + x;
    });

  return (
    <div className="p-[80px]">
      <div className="p-5 flex justify-between">
        <h1 className="text-[80px]">INVOICE</h1>
      </div>
      <div className="p-5 flex justify-between align-bottom">
        <div className="text-3 font-normal">
          <p className="text-[40px] font-semibold">Bill To:</p>
          <p className="text-[40px] font-normal capitalize">{data?.name}</p>
          <p className="text-[25px] font-normal">{data?.email}</p>
          <p className="text-[25px] font-normal">{data?.phoneNumber}</p>
          <p className="text-[25px] font-normal capitalize">
            {data?.country?.countryName}
          </p>
        </div>
        <div className="text-[12px] font-normal flex flex-col pt-[60px] ">
          <p className="text-[40px] font-semibold">Invoice Details</p>
          <p className="text-[25px] font-normal">
            <span>Invoice Date: </span>
            <span></span>
          </p>
          <p className="text-[25px] font-normal">
            <span>Invoice No: {data?.referenceNumber}</span>
            <span></span>
          </p>
        </div>
      </div>
      <div className="pb-5 mt-5 w-[100%] ">
        <div className="table w-[100%]">
          <table id="invoice" className="w-[100%] border-collapse">
            <thead className="text-[30px]">
              <tr className="text-white text-left bg-[#4f4f4f]">
                <th className="p-2 border-white border-solid border-[1px] py-3 ">
                  Name
                </th>
                <th className="p-2 border-white border-solid border-[1px] py-3">
                  Adult
                </th>
                <th className="p-2 border-white border-solid border-[1px] py-3">
                  Child
                </th>
                <th className="p-2 border-white border-solid border-[1px] py-3">
                  Infant
                </th>
                <th className="p-2 border-white border-solid border-[1px] py-3">
                  Transfer
                </th>
                <th className="p-2 border-white border-solid border-[1px] py-3">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="text-[25px]">
              {data?.activites?.map((ele) => (
                <tr>
                  <td className="p-2 border-solid border-white border-[1px]">
                    {ele?.activity?.name}
                  </td>
                  <td className="p-2 border-solid border-white border-[1px]">
                    {ele?.adultsCount}
                  </td>
                  <td className="p-2 border-solid border-white border-[1px]">
                    {ele?.childrenCount}
                  </td>
                  <td className="p-2 border-solid border-white border-[1px]">
                    {ele?.infantCount}
                  </td>
                  <td className="p-2 border-solid border-white border-[1px]">
                    {ele?.transferType}
                  </td>
                  <td className="p-2 border-solid border-white border-[1px]">
                    {ele?.amount} AED
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pt-[60px] flex justify-end w-[100%] text-[25px] mt-10">
          <div className="grand_total w-[600px]">
            <div className="flex justify-between text-[30px]">
              <p className="">Sub Total</p>
              <p className="w-[40%]  text-right">{totalAmount} AED</p>
            </div>

            <div className="flex justify-between text-[40px] font-bold">
              <p className=" ">Grand Total</p>
              <p className="w-[40%] text-right">{totalAmount} AED</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="pt-2.5 flex justify-start text-[25px]">
        <div className="payment w-[300px]">
          <div className="">
            <h4 className="">Payment Info</h4>
          </div>
          <div className="flex justify-between">
            <p className="">Account</p>
            <p className="">145556545</p>
          </div>
          <div className="flex justify-between">
            <p className="">Account Name</p>
            <p className="">Name of User</p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold">Bank Details</p>
            <p className="font-bold">FEderal</p>
          </div>
        </div>
      </div> */}
      <div className="pt-2.5 flex justify-start text-[25px] mt-10">
        <div className=" flex flex-col">
          <div className=" font-bold">
            <h4 className="text-[30px]">Terms & Condition</h4>
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

export default AttractionInvoicePdfTemplate;
