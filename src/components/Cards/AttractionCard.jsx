import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useHandleClickOutside } from "../../hooks";
import { getSearchQuery } from "../../redux/slices/homeSlice";

function AttractionCard({ setView }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [datalist, setDatalist] = useState(false);

  const { searchQuery } = useSelector((state) => state.home);

  const dropdownWrapperRef = useRef();
  useHandleClickOutside(dropdownWrapperRef, () => setDatalist(false));


  const handleFocus = (e) => {
    setDatalist(true);
  };

  useEffect(() => {
    dispatch(getSearchQuery(value));
  }, [dispatch, value]);

  return (
    <>
        <div className=" py-4 space-y-4 md:space-y-0">
          <div className="w-full flex justify-center items-center">
            <div className="space-y-2 w-10/12 ">
              <div className="flex items-center space-x-2 text-darktext">
                <span className="text-2xl text-blue-500">
                  <IoLocationOutline />{" "}
                </span>
                <span className="text-lg text-white">Destination</span>
              </div>
              <div className="" ref={dropdownWrapperRef}>
                <div className="relative">
                  <input
                    type="text"
                    list="Country"
                    value={value}
                    placeholder="Where do you want to go?"
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={handleFocus}
                    required
                    className="capitalize bg-gray-50/40 px-3 w-full border-none placeholder:text-text py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue rounded-xl text-darktext"
                  />
                </div>
                {datalist && (
                  <div className="absolute max-h-[17em] w-[21em] mt-1  bg-light rounded-lg overflow-y-auto z-20">
                    <div className="w-full p-2 overflow-y-auto">
                      <div className="">
                        <p className="bg-gray-200 py-[2px] px-2 text-[14px] font-[600] text-textColor">
                          Destinations
                        </p>
                        {searchQuery?.destinations.map((item) => (
                          <>
                            <div
                              key={item?.name}
                              className=" py-2 px-2 cursor-pointer capitalize text-darktext z-30 border-b text-sm"
                              onClick={() => {
                                setValue(item?.name);
                                setDatalist(!datalist);
                                navigate(`/search/${item?.name}`);
                              }}
                            >
                              {item?.name}
                            </div>
                          </>
                        ))}
                      </div>
                      <div className="">
                        <p className="bg-gray-200 py-[2px] px-2 text-[14px] font-[600] text-textColor">
                          Attractions
                        </p>
                        {searchQuery?.attractions.map((item) => (
                          <div
                            key={item.title}
                            className=" py-2 px-2 cursor-pointer capitalize text-darktext z-30 border-b text-sm"
                            onClick={() => {
                              setValue(item.title);
                              setDatalist(!datalist);
                              navigate(`/details/${item?._id}`);
                            }}
                          >
                            {item.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default AttractionCard;
