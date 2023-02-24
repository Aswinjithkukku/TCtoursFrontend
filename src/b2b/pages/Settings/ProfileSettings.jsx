import React, { useState } from "react";
import { BtnLoader } from "../../components";
import axios from "../../../axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

function ProfileSettings() {
  const { agent, token } = useSelector((state) => state.agents);

  const [data, setData] = useState({
    name: agent?.name || "",
    country: agent?.country || "",
    phoneNumber: agent?.phoneNumber || "",
    telephoneNumber: agent?.telephoneNumber || "",
    email: agent?.email || "",
    designation: agent?.designation || "",
    skypeId: agent?.skypeId || "",
    whatsappNumber: agent?.whatsappNumber || "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { countries, currencies } = useSelector((state) => state.home);

  const onChangeHandler = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

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

      const response = await axios.patch(
        "/b2b/resellers/auth/update/profileSetings",
        data,
        config
      );
      setIsLoading(false);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Update Successful",
      });
      return response.data;
    } catch (err) {
      setError(err?.response?.data?.error || "Something went wrong, Try again");
      setIsLoading(false);
    }
  };

  const countryArray = countries?.filter((item) => item._id === data.country);
  const currencyArray = currencies?.filter(
    (item) => item?.country?._id === data.country
  );

  return (
    <div className="">
      <form onSubmit={submitHandler}>
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          <div className="relative w-full h-14 py-4 px-3  border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-600">
              Agent Name
            </span>
            <input
              className="block w-full outline-none bg-transparent text-sm text-gray-400 font-medium"
              type="text"
              name="name"
              value={data.name}
              onChange={onChangeHandler}
            />
          </div>
          <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-600">
              Nationality
            </span>
            <select
              className="block w-full outline-none bg-transparent text-sm text-gray-400 font-medium"
              name="country"
              value={data.country}
              onChange={onChangeHandler}
            >
              <option>Ex: United Arab Emirates</option>
              {countries?.map((item, index) => (
                <option className="capitalize" value={item?._id} key={index}>
                  {item?.countryName}{" "}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-2">
            <div className="relative w-2/12 h-14 py-4 px-3 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
              <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-600">
                code
              </span>
              <input
                className="block w-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                type="text"
                value={countryArray?.map((item) => item?.phonecode) || ""}
                readOnly
              />
            </div>
            <div className="relative w-10/12 h-14 py-4 px-3 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
              <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-600">
                Number
              </span>
              <input
                className="block w-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                type="number"
                name="phoneNumber"
                value={data.phoneNumber}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="relative w-2/12 h-14 py-4 px-3 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
              <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-600">
                code
              </span>
              <input
                className="block w-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                readOnly
                type="text"
                value={countryArray?.map((item) => item?.phonecode) || ""}
              />
            </div>
            <div className="relative w-10/12 h-14 py-4 px-3 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
              <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-600">
                Telephone Number
              </span>
              <input
                className="block w-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                type="number"
                name="telephoneNumber"
                value={data.telephoneNumber}
                onChange={onChangeHandler}
              />
            </div>
          </div>

          <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-600">
              Email
            </span>
            <input
              className="block w-full outline-none bg-transparent text-sm text-gray-400 font-medium"
              type="email"
              name="email"
              value={data.email}
              onChange={onChangeHandler}
            />
          </div>
          <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-600">
              Preffered Currency
            </span>
            <input
              className="block w-full outline-none bg-transparent text-sm text-gray-400 font-medium"
              type="text"
              value={
                currencyArray?.length > 0
                  ? currencyArray?.map((item) => item?.currencySymbol)
                  : "د.إ"
              }
              readOnly
            />
          </div>

          <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-600">
              Designation
            </span>
            <input
              className="block w-full outline-none bg-transparent text-sm text-gray-400 font-medium"
              type="text"
              name="designation"
              value={data.designation}
              onChange={onChangeHandler}
            />
          </div>
          <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-600">
              Skype Id
            </span>
            <input
              className="block w-full outline-none bg-transparent text-sm text-gray-400 font-medium"
              type="text"
              name="skypeId"
              value={data.skypeId}
              onChange={onChangeHandler}
            />
          </div>
          <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
            <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-600">
              Whatsapp
            </span>
            <input
              className="block w-full outline-none bg-transparent text-sm text-gray-400 font-medium"
              type="number"
              name="whatsappNumber"
              value={data.whatsappNumber}
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-end gap-[12px]">
          {error && (
            <div className="flex justify-end">
              <p className="text-main text-xs capitalize">{error} </p>
            </div>
          )}
          <button className="button w-[100px] " type="submit">
            {isLoading ? <BtnLoader /> : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileSettings;
