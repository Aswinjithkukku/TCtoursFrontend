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
          <table id="invoice">
            <thead>
              <tr className="text-white text-left bg-[#4f4f4f]">
                <th className="p-2 border-white border-solid border-[1px] pb-3 ">
                  Excursion
                </th>
                <th className="">Adult</th>
                <th className="">Child</th>
                <th className="">Infant</th>
                <th className="">Transfer</th>
                <th className="">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name of Excursion</td>
                <td>1</td>
                <td>2</td>
                <td>0</td>
                <td>Without</td>
                <td>1200 INR</td>
              </tr>
              <tr>
                <td>Name of Excursion</td>
                <td>1</td>
                <td>2</td>
                <td>0</td>
                <td>Without</td>
                <td>1200 INR</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grand">
          <div className="grand_total">
            <div className="">
              <p className="">Sub Total</p>
              <p className="">2400 INR</p>
            </div>
            <div className="">
              <p className="">VAT Amount</p>
              <p className="">100 INR</p>
            </div>
            <div className="">
              <p className="grand_text">Grand Total</p>
              <p className="grand_text">2500 INR</p>
            </div>
          </div>
        </div>
      </div>
      <div className="payment_info__section">
        <div className="payment">
          <div className="">
            <h4 className="">Payment Info</h4>
          </div>
          <div className="">
            <p className="">Account</p>
            <p className="">145556545</p>
          </div>
          <div className="">
            <p className="">Account Name</p>
            <p className="">Name of User</p>
          </div>
          <div className="">
            <p className="grand_text">Bank Details</p>
            <p className="grand_text">FEderal</p>
          </div>
        </div>
      </div>
      <div className="Terms__section">
        <div className="condition">
          <div classNameName="">
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
