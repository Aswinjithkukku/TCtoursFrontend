import React, { useState } from "react";
import { AiFillStar, AiOutlineClose } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import InputRange from "react-input-range";
import { NeedHelp } from "../../components/Layouts";

function SearchFunctionalitySection({
  viewCategory,
  setViewCategory,
  setRating,
  setDuration,
  rating,
}) {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [value, setValue] = useState({
      min: 3,
      max: 7,
  })
  return (
    <>
      <div
        className={`lightglass ${
          viewCategory ? "fixed" : "hidden"
        } top-0 bottom-0 right-0 left-0 z-10`}
        onClick={() => setViewCategory(!viewCategory)}
      ></div>
      <div
        className={`bg-soft  p-5 lg:p-0 rounded-t-3xl overflow-y-auto lg:rounded-none lg:bg-soft lg:h-auto lg:w-auto h-[85vh] w-full fixed lg:static ${
          viewCategory ? "bottom-0" : "-bottom-full"
        } z-10 transition-all duration-500`}
      >
        <div className="flex lg:hidden justify-between text-darktext p-3">
          <span className="text-xl font-semibold">Filters</span>
          <span
            className="text-3xl"
            onClick={() => setViewCategory(!viewCategory)}
          >
            <AiOutlineClose />
          </span>
        </div>
        <div className="">
          <div className="lg:border rounded-xl bg-light">
            <div className="p-5 space-y-5">
              <div className="1 space-y-3">
                <div className="text-text text-sm uppercase font-medium underline">
                  <p className="">Explore your travelling</p>
                </div>
              </div>

              <div className="3 space-y-3">
                <div className="text-text font-medium">
                  <p className="">Price Range</p>
                </div>
                <div className="flex items-center space-x-4 w-full">
                  {/* <input type='range' min={'0'} max={'100'} className='w-full' /> */}
                  {/* <InputRange
                    draggableTrack
                    maxValue={20}
                    minValue={0}
                    onChange={(value) => this.setState({ value })}
                    onChangeComplete={(val) => console.log(val)}
                    // value={value}
                  /> */}
                </div>
                <div className="flex items-center space-x-4 justify-start">
                  <input
                    type="number"
                    className="border border-sky-500 w-20 py-2 px-2 text-text rounded-lg focus:border-none focus:ring-1 focus:ring-sky-500 outline-none"
                  />
                  <p> = </p>
                  <input
                    type="number"
                    className="border border-sky-500 w-20 py-2 px-2 text-text rounded-lg focus:border-none focus:ring-1 focus:ring-sky-500 outline-none"
                  />
                </div>
              </div>
              <div className="4 space-y-3">
                <div className="text-text font-medium">
                  <p className="">Duration</p>
                </div>
                <div className="space-y-3">
                  <div className="flex space-x-3">
                    <input
                      type="radio"
                      name="destination"
                      className="w-5"
                      value={"0hourto1hour"}
                      onChange={(e) =>
                        setDuration(e.target.checked === true && e.target.value)
                      }
                    />
                    <p className="text-sm text-darktext">Upto 1 Hour</p>
                  </div>
                  <div className="flex space-x-3">
                    <input
                      type="radio"
                      name="destination"
                      className="w-5"
                      value={"1hourto4hour"}
                      onChange={(e) =>
                        setDuration(e.target.checked === true && e.target.value)
                      }
                    />
                    <p className="text-sm text-darktext">1 to 4 Hour</p>
                  </div>
                  <div className="flex space-x-3">
                    <input
                      type="radio"
                      name="destination"
                      className="w-5"
                      value={"4hourto1day"}
                      onChange={(e) =>
                        setDuration(e.target.checked === true && e.target.value)
                      }
                    />
                    <p className="text-sm text-darktext">4 Hour to 1 Day</p>
                  </div>
                  <div className="flex space-x-3">
                    <input
                      type="radio"
                      name="destination"
                      className="w-5"
                      value={"1dayto3day"}
                      onChange={(e) =>
                        setDuration(e.target.checked === true && e.target.value)
                      }
                    />
                    <p className="text-sm text-darktext">1 to 3 Day</p>
                  </div>
                  <div className="flex space-x-3">
                    <input
                      type="radio"
                      name="destination"
                      className="w-5"
                      value={"3dayto30day"}
                      onChange={(e) =>
                        setDuration(e.target.checked === true && e.target.value)
                      }
                    />
                    <p className="text-sm text-darktext">3 Days or more</p>
                  </div>
                </div>
              </div>
              <div className="5 space-y-3">
                <div className="text-text font-medium flex gap-4 items-center">
                  <p className="">Tour Rating</p>
                  {rating && (
                    <span className="relative bg-gray-200 px-3 py-1 rounded-full">
                      <p className="text-xs flex gap-1 text-yellow-500">
                        {rating}
                        <span className=" text-[15px]">
                          <AiFillStar />
                        </span>
                      </p>
                      <span
                        className="absolute -top-2 -right-2 h-[16px] w-[16px] bg-gray-500 rounded-full flex justify-center items-center"
                        onClick={() => setRating("")}
                      >
                        <p className="text-sm text-white">
                          <RiCloseLine />{" "}
                        </p>
                      </span>
                    </span>
                  )}
                </div>
                <div className="space-y-3">
                  <div className="flex space-x-3">
                    <input
                      type="radio"
                      name="rating"
                      className="w-5"
                      value={1}
                      onChange={(e) =>
                        setRating(e.target.checked === true && e.target.value)
                      }
                    />
                    <div className="text-lg text-darktext flex items-center">
                      <span className="text-yellow-500">
                        <AiFillStar />
                      </span>
                      <span className="text-semisoft">
                        <AiFillStar />
                      </span>
                      <span className="text-semisoft">
                        <AiFillStar />
                      </span>
                      <span className="text-semisoft">
                        <AiFillStar />
                      </span>
                      <span className="text-semisoft">
                        <AiFillStar />
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <input
                      type="radio"
                      name="rating"
                      className="w-5"
                      value={2}
                      onChange={(e) =>
                        setRating(e.target.checked === true && e.target.value)
                      }
                    />
                    <div className="text-lg text-darktext flex items-center">
                      <span className="text-yellow-500">
                        <AiFillStar />
                      </span>
                      <span className="text-yellow-500">
                        <AiFillStar />
                      </span>
                      <span className="text-semisoft">
                        <AiFillStar />
                      </span>
                      <span className="text-semisoft">
                        <AiFillStar />
                      </span>
                      <span className="text-semisoft">
                        <AiFillStar />
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <input
                      type="radio"
                      name="rating"
                      className="w-5"
                      value={3}
                      onChange={(e) =>
                        setRating(e.target.checked === true && e.target.value)
                      }
                    />
                    <div className="text-lg text-darktext flex items-center">
                      <span className="text-yellow-500">
                        <AiFillStar />
                      </span>
                      <span className="text-yellow-500">
                        <AiFillStar />
                      </span>
                      <span className="text-yellow-500">
                        <AiFillStar />
                      </span>
                      <span className="text-semisoft">
                        <AiFillStar />
                      </span>
                      <span className="text-semisoft">
                        <AiFillStar />
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <input
                      type="radio"
                      name="rating"
                      className="w-5"
                      value={4}
                      onChange={(e) =>
                        setRating(e.target.checked === true && e.target.value)
                      }
                    />
                    <div className="text-lg text-darktext flex items-center">
                      <span className="text-yellow-500">
                        <AiFillStar />
                      </span>
                      <span className="text-yellow-500">
                        <AiFillStar />
                      </span>
                      <span className="text-yellow-500">
                        <AiFillStar />
                      </span>
                      <span className="text-yellow-500">
                        <AiFillStar />
                      </span>
                      <span className="text-semisoft">
                        <AiFillStar />
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <input
                      type="radio"
                      name="rating"
                      className="w-5"
                      value={5}
                      onChange={(e) =>
                        setRating(e.target.checked === true && e.target.value)
                      }
                    />
                    <div className="text-lg text-darktext flex items-center">
                      <span className="text-yellow-500">
                        <AiFillStar />
                      </span>
                      <span className="text-yellow-500">
                        <AiFillStar />
                      </span>
                      <span className="text-yellow-500">
                        <AiFillStar />
                      </span>
                      <span className="text-yellow-500">
                        <AiFillStar />
                      </span>
                      <span className="text-yellow-500">
                        <AiFillStar />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <NeedHelp />
        </div>
      </div>
    </>
  );
}

export default SearchFunctionalitySection;
