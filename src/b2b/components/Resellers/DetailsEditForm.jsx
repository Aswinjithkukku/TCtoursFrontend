import React, { useState } from "react";
import { GiFactory } from "react-icons/gi";
import { GoPerson } from "react-icons/go";
import { useSelector } from "react-redux";

function DetailsEditForm() {
  const [data, setData] = useState({
    agency_name: "",
    address: "",
    website: "",
    country: "",
    trn_number: "",
    registration_number: "",
    city: "",
    zip_code: "",
    agent_name: "",
    Phonecode: "",
    PhoneNumber: "",
    TeleCode: "",
    TelephoneNumber: "",
    email: "",
    confirm_email: "",
    currency: "",
    director: "",
    skype: "",
    whatsapp: "",
  });

  const { countries, UAE } = useSelector((state) => state.home);

  const onChangeHandler = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const countryArray = countries?.filter((item) => item._id === data.country);

  return (
    <div className="">
      <div className="p-3 lg:p-6">
        <div className="flex items-center justify-between border-b border-dashed p-4">
          <h2 className="text-xl font-bold tracking-wide space-x-2 flex">
            <span className="">
              <GiFactory />{" "}
            </span>
            <span className="">Company Details</span>
          </h2>
        </div>
        <div className="space-y-2 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-4">
          <div className="relative w-full h-14 px-3  border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
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

          <div className="relative w-full h-14 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
              Address
            </span>
            <input
              className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
              type="text"
              name="address"
              value={data.address}
              onChange={onChangeHandler}
              required
            />
          </div>

          <div className="relative w-full h-14 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
              Nationality
            </span>
            <select
              className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
              name="country"
              value={data.country}
              onChange={onChangeHandler}
            >
              <option className="text-text" hidden></option>
              {countries?.map((item, index) => (
                <option className="capitalize" value={item?._id} key={index}>
                  {item?.countryName}{" "}
                </option>
              ))}
            </select>
          </div>
          {data.country && data.country === UAE?._id && (
            <>
              <div className="relative w-full h-14 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                  TRN Number
                </span>
                <input
                  className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium no-spinner"
                  type="number"
                  name="trnNumber"
                  value={data.trnNumber}
                  onChange={onChangeHandler}
                />
              </div>

              <div className="relative w-full h-14 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                  Company Registration Number
                </span>
                <input
                  className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium no-spinner"
                  type="number"
                  name="companyRegistration"
                  value={data.companyRegistration}
                  onChange={onChangeHandler}
                />
              </div>
            </>
          )}

          <div className="relative w-full h-14 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
              Website
            </span>
            <input
              className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
              type="text"
              name="website"
              value={data.website}
              onChange={onChangeHandler}
            />
          </div>

          <div className="relative w-full h-14 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
              City
            </span>
            <input
              className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
              type="text"
              name="city"
              value={data.city}
              onChange={onChangeHandler}
            />
          </div>
          {data.country && data.country !== UAE?._id && (
            <div className="relative w-full h-14 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
              <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                Zip Code
              </span>
              <input
                className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium no-spinner"
                type="number"
                name="zipCode"
                value={data.zipCode}
                onChange={onChangeHandler}
              />
            </div>
          )}
        </div>
        <div className="flex items-center justify-between border-b border-dashed p-4">
          <h2 className="text-xl font-bold tracking-wide space-x-2 flex">
            <span className="">
              <GoPerson />{" "}
            </span>
            <span className="">Profile Details</span>
          </h2>
        </div>

        <div className="space-y-2 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-4">
          <div className="relative w-full h-14 px-3  border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
              Agent Name
            </span>
            <input
              className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
              type="text"
              name="name"
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
                value={countryArray?.map((item) => item?.phonecode) || ""}
                readOnly
              />
            </div>

            <div className="relative w-10/12 h-14 py-4 px-3  border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
              <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                Number
              </span>
              <input
                className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium no-spinner"
                type="number"
                name="phoneNumber"
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
                value={countryArray?.map((item) => item?.phonecode) || ""}
                readOnly
              />
            </div>

            <div className="relative w-10/12 h-14 py-4 px-3  border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
              <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                Telephone Number
              </span>
              <input
                className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium no-spinner"
                type="number"
                name="telephoneNumber"
                value={data.telephoneNumber}
                onChange={onChangeHandler}
              />
            </div>
          </div>

          <div className="relative w-full h-14 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
              Email
            </span>
            <input
              className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
              type="email"
              name="email"
              value={data.email}
              onChange={onChangeHandler}
              required
            />
          </div>

          <div className="relative w-full h-14 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
              Preffered Currency
            </span>
            <input
              className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
              type="text"
              value={countryArray?.map((item) => item?.currencySymbol) || ""}
              readOnly
            />
          </div>

          <div className="relative w-full h-14 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
              Designation
            </span>
            <input
              className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
              type="text"
              name="designation"
              value={data.designation}
              onChange={onChangeHandler}
              required
            />
          </div>

          <div className="relative w-full h-14 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
              Skype Id
            </span>
            <input
              className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
              type="text"
              name="skypeId"
              value={data.skypeId}
              onChange={onChangeHandler}
            />
          </div>

          <div className="relative w-full h-14 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
              Whatsapp
            </span>
            <input
              className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium no-spinner"
              type="number"
              name="whatsappNumber"
              value={data.whatsappNumber}
              onChange={onChangeHandler}
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="button w-[100px]">Update</button>
        </div>
      </div>
    </div>
  );
}

export default DetailsEditForm;
