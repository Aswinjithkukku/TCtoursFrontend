import React from "react";
import axios from "../../../src/axios";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useHandleClickOutside } from "../../hooks";

function VisaCard() {
  const [destinations, setDestinations] = useState([]);
  const [datalist, setDatalist] = useState(false);
  const [country, setCountry] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const dropdownWrapperRef = useRef();

  useHandleClickOutside(dropdownWrapperRef, () => setDatalist(false));

  const handleFocus = (e) => {
    setDatalist(true);
  };

  useEffect(() => {
    const getVisaLIst = async () => {
      const res = await axios.get("/visa/all");
      if (res.status === 200) {
        setDestinations([...res.data]);
      }
    };
    getVisaLIst();
  }, []);

  useEffect(() => {
    console.log(destinations);
    const list = destinations?.filter((data) => {
      return data.country?.countryName?.toLowerCase().startsWith(country);
    });

    setFilteredData(list);
  }, [country, destinations]);

  console.log(filteredData);

  return (
    <div className="md:grid md:grid-cols-12 gap-0 py-4 space-y-4 md:space-y-0">
      <div className="md:col-span-10 flex justify-center items-center">
        <div className="space-y-2 w-10/12 ">
          <div className="flex items-center space-x-2 text-darktext">
            <span className="text-2xl text-blue-500">
              <IoLocationOutline />{" "}
            </span>
            <span className="text-lg text-white">Country</span>
          </div>

          <div className="" ref={dropdownWrapperRef}>
            <div className="relative">
              <input
                type="text"
                list="Country"
                value={country?.country?.countryName}
                placeholder="Where do you want to go?"
                onChange={(e) => setCountry(e.target.value)}
                onFocus={handleFocus}
                required
                className="capitalize bg-gray-50/80 px-3 w-full border-none placeholder:text-text py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue rounded-xl text-darktext"
              />
            </div>
            {datalist && (
              <div className="absolute max-h-[17em] w-[21em] mt-1  bg-light rounded-lg overflow-y-auto">
                <div className="w-full p-2 overflow-y-auto">
                  {filteredData?.map((item) => (
                    <div
                      key={item?._id}
                      className="bg-soft py-2 px-2 cursor-pointer capitalize  z-30"
                      onClick={() => {
                        setCountry(item);
                        setDatalist(!datalist);
                      }}
                    >
                      {item?.country?.countryName}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="md:col-span-2 flex justify-center items-center">
        <div className="">
          <Link to="/visa" state={country?._id}>
            <button className="h-14 w-14 bg-blueColor rounded-xl text-light text-3xl flex justify-center items-center">
              <AiOutlineSearch />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VisaCard;
