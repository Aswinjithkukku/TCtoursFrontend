import React, { useEffect, useState } from "react";
import { AiOutlineDown, AiOutlineSearch, AiOutlineUp } from "react-icons/ai";
import { BsCalendar2Date } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { TbArrowsRight, TbArrowsRightLeft } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import axios from "../../../axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllAirports } from "../../../redux/slices/generalSlice";
import AirportsCard from "./AirportsCard";
import {
  addFlightRow,
  handleFlightDeatilsChange,
  handleTravellersChange,
  removeFlightRow,
} from "../../../redux/slices/flightSlice";

const FlightCardForm = ({ index, data, length }) => {
  const dispatch = useDispatch();
  const [dropdown, setDropdown] = useState(false);
  const [showCityTo, setShowCityTo] = useState(false);
  const [showCityFrom, setShowCityFrom] = useState(false);
  const { tripType, travellers, flightsData } = useSelector(
    (state) => state.flight
  );

  useEffect(() => {
    dispatch(getAllAirports());
  }, []);

  const handleIncrementPassenger = (name, x) => {
    if (travellers[name] < 1 && x === -1) return;
    if (name === "adult" && travellers[name] === 1 && x === -1) return;

    const data = { ...travellers };

    data[name] = data[name] + x;

    if (data.infant > data.adult) data.infant = data.adult;
    if (data.infant > data.adult) return;

    dispatch(handleTravellersChange({ data }));
  };

  const IncrDecsBtn = ({ name }) => {
    return (
      <>
        <div className="border-2 w-12 grid grid-cols-2">
          <button
            className="border-r-2 bg-white text-[20px] font-bold"
            onClick={() => {
              handleIncrementPassenger(name, -1);
            }}
          >
            -
          </button>
          <button
            className="bg-white text-[20px] font-semibold"
            onClick={() => {
              handleIncrementPassenger(name, 1);
            }}
          >
            +
          </button>
        </div>
      </>
    );
  };

  const handleAddCity = () => {
    dispatch(addFlightRow());
  };

  const handleRemoveCity = (index) => {
    dispatch(removeFlightRow({ index }));
  };

  const handleDetailChange = (data) => {
    const {
      target: { name, value },
    } = data;

    dispatch(handleFlightDeatilsChange({ name, value, index }));
  };

  return (
    <div className="md:grid md:grid-cols-8 gap-0  space-y-4 md:space-y-0 py-4 relative">
      <div className="md:col-span-2 flex justify-center items-center md:border-r-2 relative px-4">
        <div className="space-y-2 w-[100%] ">
          <div className="relative w-full h-14 py-4 px-3  border border-blue-400 hover:border-blue-500 focus-within:border-green-500 ">
            <span className="absolute  left-3 z-10 -top-3 transform translate-y-0.5 text-xs font-semibold text-blue-500  bg-[#f5f5f5]  px-1 flex gap-1 border-l-2 border-r-2 border-blue-400 pr-2">
              <span className="text-xl text-blue">
                <IoLocationOutline />{" "}
              </span>
              <span className="text-sm"> From</span>
            </span>
            <div
              className="text-gray-300  capitalize font-semibold relative cursor-pointer"
              onClick={() => {
                setShowCityFrom(!showCityFrom);
              }}
            >
              {flightsData?.[index]?.cityFrom?.name?.length > 0
                ? `${flightsData?.[index]?.cityFrom?.name} (${flightsData?.[index]?.cityFrom?.iata})`
                : "City From"}
            </div>
            {showCityFrom && (
              <AirportsCard
                name="cityFrom"
                index={index}
                hide={setShowCityFrom}
              />
            )}
          </div>

          <span className="absolute -right-4 bottom-[15px] bg-[#F5F5F5] rounded-lg text-[30px] text-blue-500 ">
            {(tripType === "oneway" || tripType === "multicity") && (
              <TbArrowsRight />
            )}
            {tripType === "return" && <TbArrowsRightLeft />}
          </span>
        </div>
      </div>
      <div className="md:col-span-2 flex justify-center items-center md:border-r-2  px-4">
        <div className="relative w-full h-14 py-4 px-3  border border-blue-400 hover:border-blue-500 focus-within:border-green-500 ">
          <span className="absolute  left-3 z-10 -top-3 transform translate-y-0.5 text-xs font-semibold text-blue-500  bg-[#f5f5f5]  px-1 flex gap-1 border-l-2 border-r-2 border-blue-400 pr-2">
            <span className="text-xl text-blue">
              <IoLocationOutline />{" "}
            </span>
            <span className="text-sm"> To</span>
          </span>
          <div
            className="text-gray-300  capitalize font-semibold relative cursor-pointer"
            onClick={() => {
              setShowCityTo(!showCityTo);
            }}
          >
            {flightsData?.[index]?.cityTo?.name?.length > 0
              ? `${flightsData?.[index]?.cityTo?.name}, (${flightsData?.[index]?.cityTo?.iata})`
              : "City To"}
          </div>
          {showCityTo && (
            <AirportsCard name="cityTo" index={index} hide={setShowCityTo} />
          )}
        </div>
      </div>
      <div className="md:col-span-1 flex justify-center items-center md:border-r-2 px-4 ">
        <div className="relative w-full h-14 py-4 px-3  border border-blue-400 hover:border-blue-500 focus-within:border-green-500 ">
          <span className="absolute  left-3 z-10 -top-3 transform translate-y-0.5 text-xs font-semibold text-blue-500  bg-[#f5f5f5]  px-1 flex gap-1 border-l-2 border-r-2 border-blue-400">
            <span className="text-xl text-blue">
              <BsCalendar2Date />{" "}
            </span>
            <span className="text-sm">Depart</span>
          </span>
          <input
            type="date"
            list="Country"
            placeholder="?"
            name="departureDate"
            value={data?.departureDate}
            onChange={(e) => {
              handleDetailChange(e, index);
            }}
            required
            className="block w-full capitalize outline-none bg-transparent text-sm text-gray-300 font-medium"
          />
        </div>
      </div>
      <div className="md:col-span-1 flex justify-center items-center md:border-r-2 px-4 ">
        <div className="relative w-full h-14 py-4 px-3  border border-blue-400 hover:border-blue-500 focus-within:border-green-500 ">
          <span className="absolute  left-3 z-10 -top-3 transform translate-y-0.5 text-xs font-semibold text-blue-500  bg-[#f5f5f5]  px-1 flex gap-1 border-l-2 border-r-2 border-blue-400">
            <span className="text-xl text-blue">
              <BsCalendar2Date />{" "}
            </span>
            <span className="text-sm">Return</span>
          </span>
          <input
            type="date"
            list="Country"
            placeholder="?"
            disabled={tripType !== "return"}
            name="returnDate"
            value={data?.returnDate}
            onChange={(e) => {
              handleDetailChange(e, index);
            }}
            required
            className="block w-full capitalize outline-none bg-transparent text-sm text-gray-300 font-medium"
          />
        </div>
      </div>
      {index === 0 && (
        <div className="md:col-span-1 flex justify-center items-center   px-4">
          <div className="relative w-full h-14 py-4 px-2  border border-blue-400 hover:border-blue-500 focus-within:border-green-500 ">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setDropdown(!dropdown)}
            >
              <span className="absolute  left-3 z-10 -top-3 transform translate-y-0.5 text-xs font-semibold text-blue-500  bg-[#f5f5f5]  px-1 flex gap-1 border-l-2 border-r-2 border-blue-400">
                <span className="text-xl text-blue"></span>
                <span className="text-sm">Travellers</span>
              </span>
              <span className="px-3 text-[16px]">
                {travellers.adult + travellers.children + travellers.infant}
              </span>

              <span className="px-3 text-sm">
                {dropdown ? <AiOutlineUp /> : <AiOutlineDown />}{" "}
              </span>
            </div>
            {dropdown && (
              <div className="absolute bg-soft border-2 right-0 top-[60px]  w-[100%] z-10 shadow-sm">
                <ul>
                  <li>
                    <div className="grid grid-cols-6 gap-[12px] text-sm px-6 py-[12px]  transition-all text-darktext border-b-2 border-dashed">
                      <span className="col-span-3">Adults</span>
                      <span>{travellers?.adult}</span>
                      <span className="col-span-2">
                        <IncrDecsBtn name="adult" />
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="grid grid-cols-6 gap-[12px] text-sm px-6 py-[12px] transition-all text-darktext  border-b-2 border-dashed">
                      <span className="col-span-3">Children</span>
                      <span>{travellers?.children}</span>
                      <span className="col-span-2">
                        <IncrDecsBtn name="children" />
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="grid grid-cols-6 gap-[12px] text-sm px-6 py-[12px] transition-all text-darktext  ">
                      <span className="col-span-3">Infant</span>
                      <span>{travellers?.infant}</span>
                      <span className="col-span-2">
                        <IncrDecsBtn name="infant" />
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
      {index === length - 1 && (
        <div className="md:col-span-1 flex justify-left px-4 gap-4 items-center">
          <div className="">
            <button
              type="submit"
              className="h-14 w-28 bg-blueColor rounded-xl text-light text-3xl flex justify-center items-center"
            >
              <AiOutlineSearch />
            </button>
          </div>
          {tripType === "multicity" && (
            <div className="">
              <button
                onClick={handleAddCity}
                className="h-6 w-20 bg-blueColor rounded-sm text-light text-sm flex justify-center items-center"
              >
                Add City
              </button>
            </div>
          )}
        </div>
      )}
      {length > 2 && (
        <div className="absolute right-4 h-[100%]  text-red-700 flex items-center">
          <button
            className="text-[25px] transform hover:rotate-[360deg] transition-all transition-1000 "
            onClick={() => {
              handleRemoveCity(index);
            }}
          >
            <RxCross2 />
          </button>
        </div>
      )}
    </div>
  );
};

export default FlightCardForm;
