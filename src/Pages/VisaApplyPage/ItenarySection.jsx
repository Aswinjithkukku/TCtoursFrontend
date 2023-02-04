import React from "react";
import { useState } from "react";

function ItenarySection({ itenaryInfo, setItenaryInfo, visaTypes }) {
  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setItenaryInfo({ ...itenaryInfo, [name]: value });
  };

  return (
    <div className="md:max-w-screen-xl md:mx-auto text-darktext my-5">
      <div className="my-2 border px-3 py-4 bg-primaryColor rounded-lg">
        <p className="font-[600] text-[20px] text-soft">Itenary</p>
      </div>
      <div className="grid grid-cols-10 gap-3 rounded-md shadow-sm bg-white p-6">
        <div className="col-span-4 flex flex-col">
          <label htmlFor="" className="label">
            Visa Type
          </label>
          <select
            type="s"
            name="visaType"
            value={itenaryInfo.visaType}
            required
            onChange={handleChange}
            placeholder="Visa type"
            className="w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none"
          >
            <option selected disabled>
              choose one
            </option>
            {visaTypes?.map((ele) => (
              <>
                <option value={ele?._id}>{ele.visaName}</option>
              </>
            ))}
          </select>
        </div>
        <div className="col-span-2">
          <label htmlFor="" className="label">
            From Date
          </label>
          <input
            type="date"
            value={itenaryInfo.fromDate}
            name="fromDate"
            className="w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none"
            onChange={handleChange}
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="" className="label">
            To Date
          </label>
          <input
            type="date"
            value={itenaryInfo.toDate}
            name="toDate"
            className="w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none"
            onChange={handleChange}
          />
        </div>
        <div className="col-span-2 flex flex-col">
          <label htmlFor="" className="label">
            Travellers
          </label>
          <select
            name="travellersCount"
            value={itenaryInfo.travellersCount}
            required
            onChange={handleChange}
            placeholder="Travellers"
            className="w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none"
          >
            <option selected disabled>
              Travellers
            </option>
            {Array(9)
              .fill(1)
              .map((ele, i) => (
                <option value={i + 1}>{i + 1}</option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default ItenarySection;
