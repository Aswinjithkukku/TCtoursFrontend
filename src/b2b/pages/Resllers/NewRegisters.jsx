import React, { useState } from "react";
import { GiFactory } from "react-icons/gi";
import { GoPerson } from "react-icons/go";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../../axios";
import { BtnLoader } from "../../components";

function NewRegisters() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    companyName: "",
    address: "",
    country: "",
    trnNumber: "",
    companyRegistration: "",
    website: "",
    city: "",
    zipCode: "",
    name: "",
    phoneNumber: "",
    telephoneNumber: "",
    email: "",
    designation: "",
    skypeId: "",
    whatsappNumber: "",
  });

  const onChangeHandler = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { token } = useSelector((state) => state.agents);
  const { countries, UAE } = useSelector((state) => state.home);

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      setError("");
      setIsLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        "/b2b/resellers/register",
        data,
        config
      );
      setIsLoading(false);
      navigate("/b2b/resellers");
      return response.data;
    } catch (err) {
      setError(err?.response?.data?.error || "Something went wrong, Try again");
      setIsLoading(false);
    }
  };

  const countryArray = countries?.filter((item) => item._id === data.country);

  return (
    <div className="">
      <div className="p-2">
        <form onSubmit={submitHandler}>
          <div className=" lg:mt-3 p-3 ">
            <div className="flex items-center justify-between border-b border-dashed p-4">
              <h2 className="text-xl font-bold tracking-wide space-x-2 flex">
                <span className="">
                  <GiFactory />{" "}
                </span>
                <span className="">Company Details</span>
              </h2>
            </div>
            <div className="space-y-5 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-[25px] mt-7">
              <div className="relative w-full h-14 py-4 px-3  border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                  Travel Agency Name
                </span>
                <input
                  className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                  type="text"
                  name="companyName"
                  value={data.companyName}
                  onChange={onChangeHandler}
                  required
                />
              </div>

              <div className="relative w-full h-14 py-4 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                Address
                </span>
                <input
                  className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                  type='text'
                  name='address'
                  value={data.address}
                  onChange={onChangeHandler}
                  required
                />
              </div>

              <div className="relative w-full h-14 py-4 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                  Nationality
                </span>
                <select
                  className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                  name='country'
                  value={data.country}
                  onChange={onChangeHandler}
                >
                  <option className='text-text' hidden></option>
                  {countries?.map((item, index) => (
                    <option className='capitalize' value={item?._id} key={index}>{item?.countryName} </option>
                  ))}
                </select>
              </div>
              {data.country && data.country === UAE?._id && (
                <>
                  <div className="relative w-full h-14 py-4 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                    <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                    TRN Number
                    </span>
                    <input
                      className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                      type='number'
                      name='trnNumber'
                      value={data.trnNumber}
                      onChange={onChangeHandler}
                    />
                  </div>

                  <div className="relative w-full h-14 py-4 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                    <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                    Company Registration Number
                    </span>
                    <input
                      className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                      type='number'
                      name='companyRegistration'
                      value={data.companyRegistration}
                      onChange={onChangeHandler}
                    />
                  </div>
                </>
              )}

              <div className="relative w-full h-14 py-4 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                Website
                </span>
                <input
                  className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                  type='text'
                  name='website'
                  value={data.website}
                  onChange={onChangeHandler}
                />
              </div>

              <div className="relative w-full h-14 py-4 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                City
                </span>
                <input
                  className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                  type='text'
                  name='city'
                  value={data.city}
                  onChange={onChangeHandler}
                />
              </div>
              {data.country && data.country !== UAE?._id && (

                <div className="relative w-full h-14 py-4 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                  <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                  Zip Code
                  </span>
                  <input
                    className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                    type='number'
                    name='zipCode'
                    value={data.zipCode}
                    onChange={onChangeHandler}
                  />
                </div>
              )}
            </div>
            <div className="pt-5 lg:pt-10 flex items-center justify-between border-b border-dashed p-4">
              <h2 className="text-xl font-bold tracking-wide space-x-2 flex items-center ">
                <span className="">
                  <GoPerson />{" "}
                </span>
                <span className="">Profile Details</span>
              </h2>
            </div>

            <div className="md:space-y-0 space-y-5 md:grid md:grid-cols-2 lg:grid-cols-3 gap-[25px] mt-7">

              <div className="relative w-full h-14 py-4 px-3  border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                Agent Name
                </span>
                <input
                  className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                  type='text'
                  name='name'
                  value={data.name}
                  onChange={onChangeHandler}
                  required
                />
              </div>

              <div className=" flex gap-2">
                <div className="relative w-2/12 h-14 py-4 px-3  border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                  <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                  Code
                  </span>
                  <input
                    className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                    value={countryArray?.map((item) => item?.phonecode) || ''}
                    readOnly
                  />
                </div>

                <div className="relative w-10/12 h-14 py-4 px-3  border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                  <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                  Number
                  </span>
                  <input
                    className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                    type='number'
                    name='phoneNumber'
                    value={data.phoneNumber}
                    onChange={onChangeHandler}
                    required
                  />
                </div>
              </div>

              <div className=" flex gap-2">
                <div className="relative w-2/12 h-14 py-4 px-3  border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                  <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                  Code
                  </span>
                  <input
                    className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                    value={countryArray?.map((item) => item?.phonecode) || ''}
                    readOnly
                  />
                </div>

                <div className="relative w-10/12 h-14 py-4 px-3  border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                  <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                  Telephone Number
                  </span>
                  <input
                    className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                    type='number'
                    name='telephoneNumber'
                    value={data.telephoneNumber}
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
              
              <div className="relative w-full h-14 py-4 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                Email
                </span>
                <input
                  className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                  type='email'
                  name='email'
                  value={data.email}
                  onChange={onChangeHandler}
                  required
                />
              </div>

              <div className="relative w-full h-14 py-4 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                Preffered Currency
                </span>
                <input
                  className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                  type='text'
                  value={countryArray?.map((item) => item?.currencySymbol) || ''}
                  readOnly
                />
              </div>

              <div className="relative w-full h-14 py-4 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                Designation
                </span>
                <input
                  className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                  type='text'
                  name='designation'
                  value={data.designation}
                  onChange={onChangeHandler}
                  required
                />
              </div>
              
              <div className="relative w-full h-14 py-4 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                Skype Id
                </span>
                <input
                  className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                  type='text'
                  name='skypeId'
                  value={data.skypeId}
                  onChange={onChangeHandler}
                />
              </div>

              <div className="relative w-full h-14 py-4 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                Whatsapp
                </span>
                <input
                  className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                  type='number'
                  name='whatsappNumber'
                  value={data.whatsappNumber}
                  onChange={onChangeHandler}
                />
              </div>
            </div>

            <div className="flex justify-end mt-6 gap-[20px] items-center">
              {error && (
                <div className="flex justify-end">
                  <p className="text-main text-xs capitalize">{error} </p>
                </div>
              )}
              <button
                className=" h-10 rounded-[.25rem] text-gray-400 bg-gray-200 w-[100px]"
                onClick={() => navigate(-1)}
              >
                Back
              </button>
              <button type="submit" className=" button w-[100px]">
                {isLoading ? <BtnLoader /> : "Create"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewRegisters;
