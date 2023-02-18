import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../redux/slices/excursionSlice";

function SearchHomePage({ setCategory, setSearch, category }) {
  const dispatch = useDispatch();

  const [viewFilter, setViewFilter] = useState(false);
  const [keyword, setKeyword] = useState("");

  const { categories } = useSelector((state) => state.excursion);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    setSearch(keyword);
  }, [keyword]);

  return (
    <>
      <div
        className={`${
          viewFilter ? "fixed" : "hidden"
        }  z-10 bottom-0 left-0 right-0 top-0 lightglass`}
        onClick={() => setViewFilter(!viewFilter)}
      ></div>
      <div className="lg:pb-10 py-5">
        <div className=" space-y-7">
          <form>
            <div className="mx-5 lg:mx-0 flex">
              <input
                type="search"
                placeholder="Search here for attractions!!!"
                onChange={(e) => setKeyword(e.target.value)}
                className="input"
              />
            </div>
          </form>

          <div
            className={`  p-5 lg:p-0 rounded-t-3xl lg:rounded-none lg:h-auto lg:w-auto max-h-[80vh] w-full fixed lg:static ${
              viewFilter ? "bottom-0 bg-light" : "-bottom-full"
            } z-10 transition-all duration-500`}
          >
            <div className="flex lg:hidden justify-between text-darktext p-3">
              <span className="text-xl font-semibold">Category</span>
              <span
                className="text-3xl"
                onClick={() => setViewFilter(!viewFilter)}
              >
                <AiOutlineClose />
              </span>
            </div>
            <div className="relative lg:px-7">
              <div
                className="hidden absolute left-0 top-5 z-10 h-7 w-7 rounded-full bg-gray-400 lg:flex justify-center items-center text-white"
                onClick={() => {
                  document.querySelector(".containerBAL").scrollLeft -= 200;
                }}
              >
                <AiOutlineLeft />
              </div>
              <div
                className="hidden absolute right-0 top-5 z-10 h-7 w-7 rounded-full bg-gray-400 lg:flex justify-center items-center text-white"
                onClick={() => {
                  document.querySelector(".containerBAL").scrollLeft += 200;
                }}
              >
                <AiOutlineRight />
              </div>
              <div
                className={`containerBAL scroll-smooth flex overflow-x-auto scrollbar-hide snap-x `}
              >
                <div className=" justify-between lg:space-x-3  lg:flex w-full  px-1">
                  {categories?.map((item) => (
                    <div
                      key={item?._id}
                      className={`relative my-2 space-x-2 lg:max-w-full lg:min-w-[190px] w-full flex px-3 ${
                        category === item?._id ? "bg-lightblue" : "bg-blue-100/50"
                      }  hover:text-lightblue lg:justify-center items-center py-4 rounded-full lg:border lg:border-gray-300 cursor-pointer capitalize`}
                      onClick={() => setCategory(item?._id)}
                    >
                      {category === item?._id && (
                        <span
                          className="absolute -top-2 -right-2 text-xl rounded-full w-[17px] h-[17px] flex justify-center items-center bg-darktext"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <p
                            className="text-sm text-white"
                            onClick={() => setCategory("")}
                          >
                            <RiCloseLine />{" "}
                          </p>
                        </span>
                      )}
                      <img
                        src={process.env.REACT_APP_SERVER_URL + item?.icon}
                        alt="icon"
                        className="w-5 h-5"
                      />
                      <span
                        className={`whitespace-nowrap font-[500] uppercase text-sm ${
                          category === item?._id
                            ? "text-white"
                            : "text-gray-500"
                        }`}
                      >
                        {item?.categoryName}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchHomePage;
