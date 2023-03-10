import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { monthNames } from "../../data";
import {
  handleb2cDOBChange,
  handleb2cRowItemChange,
  handleb2cPEDChange,
} from "../../redux/slices/b2cvisaSlice";

const TravellerDetailsForm = ({ index, info }) => {
  const { countries } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  const visa = useSelector((state) => state.b2cVisa);

  let limit = new Date().getFullYear();
  let year = [];
  for (let i = limit; i > limit - 100; i--) {
    year.push(i);
  }

  let day = [];
  for (let i = 1; i <= 31; i++) {
    day.push(i);
  }

  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    dispatch(handleb2cRowItemChange({ index, name, value }));
  };

  const handledobChange = (e) => {
    const {
      target: { name, value },
    } = e;
    dispatch(handleb2cDOBChange({ index, name, value }));
  };

  const handlePEChange = (e) => {
    const {
      target: { name, value },
    } = e;
    dispatch(handleb2cPEDChange({ index, name, value }));
  };

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
              name="title"
              value={info?.title}
              required
              className="w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none"
              onChange={handleChange}
            >
              <option hidden>choose title</option>
              <option value={"mr"}>Mr.</option>
              <option value={"ms"}>Ms.</option>
              <option value={"mrs"}>Mrs.</option>
              <option value={"mstr"}>Mstr.</option>
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
              value={info?.firstName}
              className="w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none"
              name="firstName"
              onChange={handleChange}
              required
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
              value={info?.lastName}
              className="w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none"
              name="lastName"
              onChange={handleChange}
              required
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
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-span-4">
          <div className="">
            <label className="label">Nationality</label>
          </div>
          <div className="">
            <select
              type="text"
              className="w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none"
              name="country"
              value={info?.country}
              onChange={handleChange}
              required
            >
              <option hidden>Ex: United Arab Emirates</option>
              {countries?.map((item, index) => (
                <option className="capitalize " value={item?._id} key={index}>
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
              name="contactNo"
              value={info?.contactNo}
              onChange={handleChange}
              required
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
              name="passportNo"
              value={info?.passportNumber}
              onChange={handleChange}
              required
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
              name="day"
              value={info?.dateOfBirth?.day}
              onChange={handledobChange}
              required
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
              name="month"
              value={info?.dateOfBirth?.month}
              onChange={handledobChange}
              required
            >
              <option hidden>Month</option>
              {monthNames.map((item, index) => (
                <option key={index} value={item.value} className="capitalize">
                  {item.name}
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
              name="year"
              value={info?.dateOfBirth?.year}
              onChange={handledobChange}
              required
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
              placeholder="Day"
              className="w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none"
              name="day"
              value={info?.expiryDate?.day}
              onChange={handlePEChange}
              required
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
              name="month"
              value={info?.expiryDate?.month}
              onChange={handlePEChange}
              required
            >
              <option hidden>Month</option>
              {monthNames.map((item, index) => (
                <option key={index} value={item.value} className="capitalize">
                  {item.name}{" "}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-span-2 flex items-end">
          <div className="w-full">
            <input
              type="number"
              max={9999}
              className="w-full py-2 rounded-md p-1 placeholder-gray-900 text-primaryColor border border-lightblue outline-none"
              name="year"
              onChange={handlePEChange}
              value={info?.expiryDate?.year}
              required
              placeholder="Year"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravellerDetailsForm;
