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

  const submitHandler = (e) => {
    e.preventDefault();
    let result = searchQuery?.destinations?.find((item) => {
      return value === item?.name;
    });
    if (result) {
      navigate(`/search/${value}`);
    } else {
      let data = searchQuery?.attractions?.find((item) => {
        if(value?.toLowerCase() === item?.title?.toLowerCase())  {
          return item?._id
        }
      });
      console.log(data?._id)
      navigate(`/details/${data?._id}`);
    }
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

  useEffect(() => {
    dispatch(getSearchQuery(value));
  }, [dispatch, value]);

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="md:grid md:grid-cols-12 gap-0 py-4 space-y-4 md:space-y-0">
          <div className="md:col-span-10 flex justify-center items-center">
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
                    className="capitalize bg-gray-50/80 px-3 w-full border-none placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-darktext"
                  />
                </div>
                {datalist && (
                  <div className="absolute max-h-[17em] w-[21em] mt-1  bg-light rounded-lg overflow-y-auto z-20">
                    <div className="w-full p-2 overflow-y-auto">
                      <div className="">
                        <p className="bg-gray-200 py-[2px] px-2 text-[14px] font-[600] text-textColor">
                          Destinations
                        </p>
                        {searchQuery?.destinations?.map((item) => (
                          <>
                            <div
                              key={item.name}
                              className=" py-2 px-2 cursor-pointer capitalize text-darktext z-30 border-b text-sm"
                              onClick={() => {
                                setValue(item.name);
                                setDatalist(!datalist);
                              }}
                            >
                              {item.name}
                            </div>
                          </>
                        ))}
                      </div>
                      <div className="">
                        <p className="bg-gray-200 py-[2px] px-2 text-[14px] font-[600] text-textColor">
                          Attractions
                        </p>
                        {searchQuery?.attractions?.map((item) => (
                          <div
                            key={item.title}
                            className=" py-2 px-2 cursor-pointer capitalize text-darktext z-30 border-b text-sm"
                            onClick={() => {
                              setValue(item.title);
                              setDatalist(!datalist);
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
          <div className="md:col-span-2 flex justify-center items-center">
            <div className="">
              <button
                type="submit"
                className="md:h-14 h-12 md:w-14 px-4 md:px-0 bg-blueColor rounded-xl text-light text-3xl flex justify-center items-center"
              >
                <span className="">
                  <AiOutlineSearch />
                </span>
                <span className="text-lg md:hidden">Search</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default AttractionCard;
