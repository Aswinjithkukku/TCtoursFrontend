import React from "react";
import { Link } from "react-router-dom";
import VisaOrderSingleRow from "./VisaOrderSingleRow";

function VisaOrderPage() {
  return (
    <>
      <div className=" ">
        <div className="bg-white flex items-center justify-between gap-[10px] px-2 lg:px-6 shadow-sm border-t py-2">
          <h1 className="font-[600] text-[15px] uppercase">Visa Order</h1>
          <div className="text-sm text-grayColor">
            <Link to="/b2b" className="text-textColor">
              Dashboard{" "}
            </Link>
            <span>{">"} </span>
            <span>Visa</span>
            <span>{">"} </span>
            <span>Order</span>
          </div>
        </div>
        <div className="p-2 lg:p-6">
          <div className="bg-white rounded shadow-sm mt-2 ">
            <div className="flex items-center justify-between border-b border-dashed p-4">
              <h1 className="font-medium">Visa Orders</h1>
              <span className="w-[400px]">
                <input
                  type="search"
                  className="input w-full"
                  placeholder="search!!!!!"
                />
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#f3f6f9] text-grayColor text-[14px] text-left">
                  <tr>
                    <th className="font-[500] p-3 whitespace-nowrap">
                      Reference Number
                    </th>
                    <th className="font-[500] p-3 whitespace-nowrap">
                      Country
                    </th>
                    <th className="font-[500] p-3 whitespace-nowrap">
                      Default Price
                    </th>
                    <th className="font-[500] p-3 whitespace-nowrap">
                      Document Status
                    </th>
                    <th className="font-[500] p-3 whitespace-nowrap">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-textColor">
                  <VisaOrderSingleRow />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisaOrderPage;
