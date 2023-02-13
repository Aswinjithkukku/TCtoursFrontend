import React from "react";

const AttractionInvoicePdfTemplate = () => {
  return (
    <div>
      <div className="p-5 flex justify-between">
        <h1 className="text-[40px]">INVOICE</h1>
        <h2 className="">Brand Name</h2>
      </div>
      <div className="p-5 flex justify-between">
        <div className="text-3 font-normal">
          <p className="text-[15px]">Bill To:</p>
          <p className="text-[15px] font-semibold">Person Name</p>
          <p className="text-[12px] font-normal">Email Address</p>
          <p className="text-[12px] font-normal">Phone Number</p>
          <p className="text-[12px] font-normal">Nationality</p>
        </div>
        <div className="text-[12px] font-normal">
          <p className="text-[15px] font-semibold">Invoice Details</p>
          <p className="text-[12px] font-normal">
            <span>Invoice Date</span>
            <span></span>
          </p>
          <p className="text-[12px] font-normal">
            <span>Due Date</span>
            <span></span>
          </p>
          <p className="text-[12px] font-normal">
            <span>Invoice No</span>
            <span></span>
          </p>
        </div>
      </div>
      <div className="pb-5 ">
        <div className="table">
          <table id="invoice" className="w-[100%] border-collapse">
            <thead>
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
            <tbody>
              <tr>
                <td className="p-2 border-solid border-white border-[1px]">
                  Name of Excursion
                </td>
                <td className="p-2 border-solid border-white border-[1px]">
                  1
                </td>
                <td className="p-2 border-solid border-white border-[1px]">
                  2
                </td>
                <td className="p-2 border-solid border-white border-[1px]">
                  0
                </td>
                <td className="p-2 border-solid border-white border-[1px]">
                  Without
                </td>
                <td className="p-2 border-solid border-white border-[1px]">
                  1200 INR
                </td>
              </tr>
              <tr>
                <td className="p-2 border-solid border-white border-[1px]">
                  Name of Excursion
                </td>
                <td className="p-2 border-solid border-white border-[1px]">
                  1
                </td>
                <td className="p-2 border-solid border-white border-[1px]">
                  2
                </td>
                <td className="p-2 border-solid border-white border-[1px]">
                  0
                </td>
                <td className="p-2 border-solid border-white border-[1px]">
                  Without
                </td>
                <td className="p-2 border-solid border-white border-[1px]">
                  1200 INR
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pt-2.5 flex justify-end w-[100%]">
          <div className="grand_total w-[300px]">
            <div className="flex justify-between">
              <p className="">Sub Total</p>
              <p className="">2400 INR</p>
            </div>
            <div className="flex justify-between ">
              <p className="">VAT Amount</p>
              <p className="">100 INR</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[17px] font-bold">Grand Total</p>
              <p className="text-[17px] font-bold ">2500 INR</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-2.5 flex justify-start ">
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
      </div>
      <div className="pt-2.5 flex justify-start">
        <div className=" flex flex-col">
          <div className=" font-bold">
            <h4 className="">Terms & Condition</h4>
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
