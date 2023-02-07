import React, { useEffect, useState } from "react";
import MonthNames from "../../../data/MonthNames";
import { useDispatch, useSelector } from "react-redux";
import {
  addRows,
  handleRowItemChange,
  handleDOBChange,
} from "../../../redux/slices/visaSlice";

function TravellerDetails({ navigation, setNavigation }) {
  const dispatch = useDispatch();

  let limit = new Date().getFullYear();
  let year = [];
  for (let i = limit; i > limit - 100; i--) {
    year.push(i);
  }

  let day = [];
  for (let i = 1; i <= 31; i++) {
    day.push(i);
  }

  const { rows, visaEnquiry } = useSelector((state) => state.visa);
  const { countries } = useSelector((state) => state.home);
  useEffect(() => {
    dispatch(addRows());
  }, [dispatch, visaEnquiry]);

  const onRowChange = (e, index) => {
    dispatch(
      handleRowItemChange({
        value: e.target.value,
        name: e.target.name,
        index,
      })
    );
  };

  const handleChange = ({ value, name, index }) => {
    dispatch(
      handleDOBChange({
        value,
        name,
        index,
      })
    );
  };

  return (
    <div className="p-6 text-darktext ">
      <div
        className={`my-2 border px-3 py-4 ${
          navigation.details ? "bg-lightblue " : "bg-slate-400"
        } rounded-[.25rem]`}
      >
        <p className="font-[600] text-[20px] text-soft">Traveller Details</p>
      </div>
      {navigation.details && (
        <div className="bg-white p-6 rounded-md shadow">
          {rows.map((row, index) => (
            <div key={index} className="pb-6 ">
              <div className="py-2 text-gray-500 font-[550]  bg-gray-100 border-dashed px-1">
                <p className="">
                  {index === 0 ? "Lead passenger" : `${index + 1} passenger`}{" "}
                </p>
              </div>
              <div className="lg:grid grid-cols-12 gap-5 text-darktext space-y-3 lg:space-y-0 lg:py-2">
                <div className="col-span-2">
                  <div className="">
                    <label className="label">Mr/Mrs</label>
                  </div>
                  <div className="">
                    <select
                      name="title"
                      value={row.title}
                      onChange={(e) => onRowChange(e, index)}
                      className="w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none"
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
                      name="firstName"
                      value={row.firstName}
                      onChange={(e) => onRowChange(e, index)}
                      className="w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none"
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
                      className="w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none"
                      name="lastName"
                      value={row.lastName}
                      onChange={(e) => onRowChange(e, index)}
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
                      type="email"
                      className="w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none"
                      name="email"
                      value={row.email}
                      onChange={(e) => onRowChange(e, index)}
                    />
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="">
                    <label className="label">Country</label>
                  </div>
                  <div className="">
                    <select
                      className="w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none"
                      name="country"
                      value={row.country}
                      onChange={(e) => {
                        onRowChange(e, index);
                      }}
                    >
                      <option hidden>Choose Country</option>
                      {countries?.map((item, index) => (
                        <option
                          key={index}
                          value={item?._id}
                          className="capitalize"
                        >
                          {item?.countryName}{" "}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-span-4 flex gap-2">
                  {/* <div className='w-2/12'>
                    <div className=''>
                      <label className='label'>code</label>
                    </div>
                    <div className=''>
                      <input
                        type='number'
                        className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none no-spinner'
                        name='phonecode'
                        value={countries?.filter((item) => item._id === row.country ) || ''}
                        readOnly
                      />
                    </div>
                  </div> */}
                  <div className="w-full">
                    <div className="">
                      <label className="label">Contact Number</label>
                    </div>
                    <div className="">
                      <input
                        type="number"
                        className="w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none no-spinner"
                        name="contactNo"
                        value={row.contactNo}
                        onChange={(e) => onRowChange(e, index)}
                      />
                    </div>
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
                      className="w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none"
                      name="passportNo"
                      value={row.passportNo}
                      onChange={(e) => onRowChange(e, index)}
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="w-full">
                    <label className="label">Date of Birth</label>
                  </div>
                  <div className="">
                    <select
                      placeholder="Day"
                      className="w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none"
                      name="day"
                      value={row?.dateOfBirth?.day}
                      onChange={(e) => {
                        handleChange({
                          value: e.target.value,
                          name: e.target.name,
                          index,
                        });
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
                      placeholder="Month"
                      className="w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none"
                      name="month"
                      value={row?.dateOfBirth?.month}
                      onChange={(e) => {
                        handleChange({
                          value: e.target.value,
                          name: e.target.name,
                          index,
                        });
                      }}
                    >
                      <option hidden>Month</option>
                      {MonthNames.map((item, index) => (
                        <option
                          key={index}
                          value={item.value}
                          className="capitalize"
                        >
                          {item.name}{" "}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-span-2 flex items-end">
                  <div className="w-full">
                    <select
                      className="w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none"
                      name="year"
                      value={row?.dateOfBirth?.year}
                      onChange={(e) => {
                        handleChange({
                          value: e.target.value,
                          name: e.target.name,
                          index,
                        });
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
          ))}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-lightblue text-[14px] text-white px-3 py-2 rounded"
              onClick={() =>
                setNavigation({
                  itenary: false,
                  details: false,
                  payment: true,
                  upload: false,
                })
              }
            >
              Move to Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TravellerDetails;
