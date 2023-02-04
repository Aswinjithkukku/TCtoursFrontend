import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Month } from "../../utils/Month";

const TravellerDetailsForm = ({ index, info, onchange }) => {
  const { countries } = useSelector((state) => state.home);

  let limit = new Date().getFullYear();
  let year = [];
  for (let i = limit; i > limit - 100; i--) {
    year.push(i);
  }

  let day = [];
  for (let i = 1; i <= 31; i++) {
    day.push(i);
  }
  return (
    <div className="w-[100%]">
      <div className="lg:grid grid-cols-12 gap-5 text-darktext space-y-3 lg:space-y-0 lg:py-2">
        <div className="col-span-2">
          <div className="">
            <label className="label">Mr/Mrs</label>
          </div>
          <div className="">
            <select
              type="text"
              name="gender"
              value={info?.gender}
              className="w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none"
              onChange={(e) => {
                onchange(e, index);
              }}
            >
              <option value={"male"}>Mr.</option>
              <option value={"female"}>Mrs.</option>
              <option value={"other"}>Ms.</option>
            </select>
          </div>
        </div>
        <div className="col-span-5">
          <div className="">
            <label className="label">First Name</label>
          </div>
          <div className="">
            <input
              type="text"
              value={info?.firstname}
              className="w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none"
              name="firstname"
              onChange={(e) => {
                onchange(e, index);
              }}
            />
          </div>
        </div>
        <div className="col-span-5">
          <div className="">
            <label className="label">Last Name</label>
          </div>
          <div className="">
            <input
              type="text"
              value={info?.lastname}
              className="w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none"
              name="lastname"
              onChange={(e) => {
                onchange(e, index);
              }}
            />
          </div>
        </div>
      </div>
      <div className="lg:grid grid-cols-12 gap-5 text-darktext space-y-3 lg:space-y-0 lg:py-2">
        <div className="col-span-4">
          <div className="">
            <label className="label">Email</label>
          </div>
          <div className="">
            <input
              type="text"
              className="w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none"
              name="email"
              value={info?.email}
              onChange={(e) => {
                onchange(e, index);
              }}
            />
          </div>
        </div>
        <div className="col-span-4">
          <div className="">
            <label className="label">Country</label>
          </div>
          <div className="">
            <select
              type="text"
              className="w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none"
              name="country"
              value={info?.country}
              onChange={(e) => {
                onchange(e, index);
              }}
            >
              <option disabled selected>
                Ex: United Arab Emirates
              </option>
              {countries?.map((item, index) => (
                <option className="capitalize" value={item?._id} key={index}>
                  {item?.countryName}{" "}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-span-4">
          <div className="">
            <label className="label">Contact Number</label>
          </div>
          <div className="">
            <input
              type="number"
              className="w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none"
              name="phone"
              value={info?.phone}
              onChange={(e) => {
                onchange(e, index);
              }}
            />
          </div>
        </div>
      </div>
      <div className="lg:grid grid-cols-12 gap-5 text-darktext space-y-3 lg:space-y-0 lg:py-2">
        <div className="col-span-6">
          <div className="">
            <label className="label">Passport Number</label>
          </div>
          <div className="">
            <input
              type="number"
              className="w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none"
              name="passportNumber"
              value={info?.passportNumber}
              onChange={(e) => {
                onchange(e, index);
              }}
            />
          </div>
        </div>
        <div className="col-span-2">
          <div className="w-full">
            <label className="label">Date of Birth</label>
          </div>
          <div className="">
            <select
              type="number"
              placeholder="Day"
              className="w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none"
              name="dobDate"
              value={info?.dobDate}
              onChange={(e) => {
                onchange(e, index);
              }}
            >
              <option hidden> Day</option>
              {day.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-span-2 flex items-end">
          <div className="w-full">
            <select
              type="number"
              placeholder="Month"
              className="w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none"
              name="dobMonth"
              value={info?.dobMonth}
              onChange={(e) => {
                onchange(e, index);
              }}
            >
              <option hidden>Month</option>
              {Month.map((item, index) => (
                <option key={index} value={item} className="capitalize">
                  {item}{" "}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-span-2 flex items-end">
          <div className="w-full">
            <select
              type="number"
              className="w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none"
              name="dobYear"
              value={info?.dobYear}
              onChange={(e) => {
                onchange(e, index);
              }}
            >
              <option hidden>Year</option>
              {year.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-span-2">
          <div className="w-full">
            <label className="label">Passport Expiry</label>
          </div>
          <div className="">
            <select
              type="number"
              placeholder="Month"
              className="w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none"
              name="peMonth"
              value={info?.peMonth}
              onChange={(e) => {
                onchange(e, index);
              }}
            >
              <option hidden>Month</option>
              {Month.map((item, index) => (
                <option key={index} value={item} className="capitalize">
                  {item}{" "}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="col-span-2 flex items-end">
          <div className="w-full">
            <select
              type="number"
              className="w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none"
              name="peYear"
              value={info?.peYear}
              onChange={(e) => {
                onchange(e, index);
              }}
            >
              <option hidden>Year</option>
              {year.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravellerDetailsForm;
