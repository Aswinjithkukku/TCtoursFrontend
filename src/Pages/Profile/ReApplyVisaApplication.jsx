import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "../../axios";
import { monthNames } from "../../data";

const ReApplyVisaApplication = ({ orderId, userId }) => {
  console.log(orderId);
  console.log(userId);
  const { countries } = useSelector((state) => state.home);
  const { jwtToken } = useSelector((state) => state.users);

  const [visaApplication, setVisaApplication] = useState({});
  const [traveller, setTraveller] = useState({});

  const day = [];
  for (let i = 1; i <= 31; i++) {
    day.push(i);
  }

  const limit = new Date().getFullYear();
  const year = [];
  for (let i = limit; i > limit - 100; i--) {
    year.push(i);
  }

  useEffect(() => {
    const config = {
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    };
    const getOrderInfo = async () => {
      try {
        const data = await axios.get(
          `/visa/application/${orderId}/single/${userId}`,
          config
        );
        console.log(data);
      } catch (error) {}
    };
    getOrderInfo();
  }, []);

  const handleChange = (e) => {
    const {
      target: { value, name },
    } = e;

    setTraveller({ ...traveller, [name]: value });
  };

  const handledobChange = (e) => {
    const {
      target: { value, name },
    } = e;

    setTraveller({
      ...traveller,
      dateOfBirth: { ...traveller.dateOfBirth, [name]: value },
    });
  };
  const handlePEChange = (e) => {
    const {
      target: { value, name },
    } = e;

    setTraveller({
      ...traveller,
      expiryDate: { ...traveller.expiryDate, [name]: value },
    });
  };
  return (
    <div className="bg-[whitesmoke] flex justify-center">
      <div className="flex flex-col w-[70%] bg-white p-4">
        <div>
          <div
            className={`my-2 border px-3 py-4  rounded-lg ${
              true ? "bg-primaryColor " : "bg-slate-400"
            } rounded-[.25rem]`}
          >
            <p className="font-[600] text-[20px] text-soft">Visa Order Info</p>
          </div>
          <form action=""></form>
        </div>
        <div>
          <div
            className={`my-2 border px-3 py-4  rounded-lg ${
              true ? "bg-primaryColor " : "bg-slate-400"
            } rounded-[.25rem]`}
          >
            <p className="font-[600] text-[20px] text-soft">Traveller Info</p>
          </div>
          <form action="">
            <div className="w-[100%] px-2">
              <div className="lg:grid grid-cols-12 gap-5 text-darktext space-y-3 lg:space-y-0 lg:py-2">
                <div className="col-span-2">
                  <div className="">
                    <label className="label">Mr/Mrs</label>
                  </div>
                  <div className="">
                    <select
                      type="text"
                      name="title"
                      value={traveller?.title}
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
                      value={traveller?.firstName}
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
                      value={traveller?.lastName}
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
                      value={traveller?.email}
                      onChange={handleChange}
                      required
                    />
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
                      value={traveller?.contactNo}
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
                      value={traveller?.country}
                      onChange={handleChange}
                      required
                    >
                      <option hidden>Ex: United Arab Emirates</option>
                      {countries?.map((item, index) => (
                        <option
                          className="capitalize "
                          value={item?._id}
                          key={index}
                        >
                          {item?.countryName}{" "}
                        </option>
                      ))}
                    </select>
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
                      value={traveller?.passportNumber}
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
                      value={traveller?.dateOfBirth?.day}
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
                      value={traveller?.dateOfBirth?.month}
                      onChange={handledobChange}
                      required
                    >
                      <option hidden>Month</option>
                      {monthNames.map((item, index) => (
                        <option
                          key={index}
                          value={item.value}
                          className="capitalize"
                        >
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
                      value={traveller?.dateOfBirth?.year}
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
                      value={traveller?.expiryDate?.day}
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
                      value={traveller?.expiryDate?.month}
                      onChange={handlePEChange}
                      required
                    >
                      <option hidden>Month</option>
                      {monthNames.map((item, index) => (
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
                    <input
                      type="number"
                      max={9999}
                      className="w-full py-2 rounded-md p-1 placeholder-gray-900 text-primaryColor border border-lightblue outline-none"
                      name="year"
                      onChange={handlePEChange}
                      value={traveller?.expiryDate?.year}
                      required
                      placeholder="Year"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div>
          <div
            className={`my-2 border px-3 py-4  rounded-lg ${
              true ? "bg-primaryColor " : "bg-slate-400"
            } rounded-[.25rem]`}
          >
            <p className="font-[600] text-[20px] text-soft">
              Traveller Documents
            </p>
          </div>
          <form action=""></form>
        </div>
      </div>
    </div>
  );
};

export default ReApplyVisaApplication;
