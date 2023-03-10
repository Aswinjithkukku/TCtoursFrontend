import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { GiIsland } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useHandleClickOutside } from "../../hooks";
import { getCategories } from "../../redux/slices/excursionSlice";
import { getSearchQuery } from "../../redux/slices/homeSlice";

function SearchHomePage({
   viewCategory,
   setViewCategory,
   setCategory,
   setSearch,
   category,
}) {
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

   const navigate = useNavigate();

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
         <div
            className={`${
               viewFilter ? "fixed" : "hidden"
            }  z-10 bottom-0 left-0 right-0 top-0 lightglass`}
            onClick={() => setViewFilter(!viewFilter)}
         ></div>
         <div className="lg:pb-10 py-5">
            <div className="lg:max-w-screen-xl lg:mx-auto space-y-7">
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
                        className="capitalize bg-gray-50/40 px-3 w-full border outline-none  placeholder:text-text py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue rounded-xl text-darktext"
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

               <div
                  className={`bg-light  p-5 lg:p-0 rounded-t-3xl lg:rounded-none lg:bg-transparent lg:h-auto lg:w-auto max-h-[80vh] w-full fixed lg:static ${
                     viewFilter ? "bottom-0" : "-bottom-full"
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
                           document.querySelector(
                              ".containerBAL"
                           ).scrollLeft -= 200;
                        }}
                     >
                        <AiOutlineLeft />
                     </div>
                     <div
                        className="hidden absolute right-0 top-5 z-10 h-7 w-7 rounded-full bg-gray-400 lg:flex justify-center items-center text-white"
                        onClick={() => {
                           document.querySelector(
                              ".containerBAL"
                           ).scrollLeft += 200;
                        }}
                     >
                        <AiOutlineRight />
                     </div>
                     <div
                        className={`containerBAL scroll-smooth flex overflow-x-auto snap-x scrollbar-hide`}
                     >
                        <div className=" justify-between lg:space-x-3 lg:flex w-full  px-1">
                           {categories?.map((item) => (
                              <div
                                 key={item?._id}
                                 className={`relative my-2 space-x-2 lg:max-w-full lg:min-w-[190px] w-full flex px-3 ${
                                    category === item?._id
                                       ? "bg-lightblue"
                                       : "bg-gray-200"
                                 }  hover:text-lightblue lg:justify-center items-center py-4 rounded-lg lg:border lg:border-gray-300 cursor-pointer capitalize`}
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
                                    src={
                                       process.env.REACT_APP_SERVER_URL +
                                       item?.icon
                                    }
                                    alt="icon"
                                    className="w-5 h-5"
                                 />
                                 <span
                                    className={`whitespace-nowrap  font-[500] uppercase text-sm ${
                                       category === item?._id && "text-white"
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
               <div className=" flex justify-around lg:hidden">
                  <span className="">
                     <button
                        className="border border-blue-500 rounded-lg px-5 py-2 hover:text-blue"
                        onClick={() => setViewFilter(!viewFilter)}
                     >
                        Category
                     </button>
                  </span>
                  <span className="">
                     <button
                        className="border border-blue-500 rounded-lg px-10 py-2"
                        onClick={() => setViewCategory(!viewCategory)}
                     >
                        Filters
                     </button>
                  </span>
               </div>
            </div>
         </div>
      </>
   );
}

export default SearchHomePage;
