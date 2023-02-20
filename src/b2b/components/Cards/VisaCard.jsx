import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCalendar2Date, BsEmojiHeartEyes } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useHandleClickOutside } from "../../../hooks";

function VisaCard({ setView }) {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [showValue, setShowValue] = useState("");
  // const [date, setDate] = useState('')
  const [datalist, setDatalist] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const dropdownWrapperRef = useRef();
  useHandleClickOutside(dropdownWrapperRef, () => setDatalist(false));

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/b2b/visa/${showValue}`);
    setView &&
      setView({
        favourite: false,
        search: false,
        profile: false,
        help: false,
      });
  };

  const handleFocus = (e) => {
    setDatalist(true);
  };

  const { visaCountries } = useSelector((state) => state.home);

  useEffect(() => {
    const list = visaCountries?.filter((data) => {
      return data?.country?.countryName?.toLowerCase().startsWith(value);
    });

    setFilteredData(list);
  }, [value, visaCountries]);

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="md:flex gap-2 py-5 space-y-4 md:space-y-0 px-6">
          <div className="md:w-11/12 flex justify-center items-center ">
            <div className="space-y-2 w-full ">
              <div className= "relative w-full h-14 py-4 px-3  border border-blue-400 hover:border-blue-500 focus-within:border-green-500 rounded-lg">
                <span className= "absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-white rounded px-1 bg-blue-600">
                  Where do you want to go?
                </span>
                <input
                  type="text"
                  list="Country"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onFocus={handleFocus}
                  required
                  className= "block w-full capitalize outline-none bg-transparent text-sm text-gray-300 font-medium"
                />
                {datalist && (
                  <div className="absolute max-h-[17em] w-[21em] mt-1  bg-light rounded-lg overflow-y-auto z-20">
                    <div className="w-full p-2 overflow-y-auto">
                      {filteredData?.map((item) => (
                        <div
                          key={item.name}
                          className="bg-soft py-2 px-2 cursor-pointer capitalize  z-30"
                          onClick={() => {
                            setValue(item?.country?.countryName);
                            setShowValue(item?._id);
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
          <div className="md:col-span-1 flex justify-center items-center">
            <div className="">
              <button
                type="submit"
                className="md:h-14 h-12  px-4  bg-blueColor rounded-xl text-light text-3xl flex justify-center items-center"
              >
                <span className="">
                  <AiOutlineSearch />
                </span>
                <span className="text-base uppercase">Search</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default VisaCard;
