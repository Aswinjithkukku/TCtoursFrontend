import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useHandleClickOutside } from "../../../hooks";
import { getSearchQuery } from "../../../redux/slices/homeSlice";
import TopDestination from "../../pages/TopDestination";

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
      <form>
        <div className="md:flex gap-2 py-5 space-y-4 md:space-y-0 ">
          <div className="w-full flex justify-center items-center ">
            <div className=" w-full ">
              <div className="" ref={dropdownWrapperRef}>
                <div className="relative w-full h-14 py-4 px-3  border border-blue-400 hover:border-blue-500 focus-within:border-green-500 rounded-lg">
                  <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-white rounded px-1 bg-blue-600">
                    Where do you want to go?
                  </span>
                  <input
                    type="text"
                    list="Country"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={handleFocus}
                    required
                    className="block w-full capitalize outline-none bg-transparent text-sm text-gray-300 font-medium"
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
                                navigate(`/b2b/attractions/${item?.name}`);
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
                              navigate(`/b2b/attractions/details/${item?._id}`);
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
      </form>
      <div>
        <TopDestination />
      </div>
    </>
  );
}

export default AttractionCard;
