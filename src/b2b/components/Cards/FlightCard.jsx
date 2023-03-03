import React from "react";
import { TbArrowsRight } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { json, useNavigate } from "react-router-dom";
import {
  addFlightRow,
  handleRescentSearchCardClick,
  removeFlightRow,
  setTripType,
} from "../../../redux/slices/flightSlice";

import FlightCardForm from "./FlightCardForm";

function FlightCard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { tripType, flightsData, travellers } = useSelector(
    (state) => state.flight
  );

  const handleTripTypeChange = (e) => {
    dispatch(setTripType(e.target.value));
    if (e.target.value === "multicity") {
      dispatch(addFlightRow());
    } else {
      dispatch(removeFlightRow({ index: "notMultiCity" }));
    }
  };

  // const handleDetailChange = (data, index) => {
  //   dispatch(handleFlightDeatilsChange({ data, index }));
  //   // const dataArray = [...flightDetails];
  //   // dataArray[index] = { ...dataArray[index], [name]: value };

  //   // if (tripType === "multicity" && index < dataArray.length - 1) {
  //   //   if (name === "cityTo") {
  //   //     dataArray[index + 1] = { ...dataArray[index + 1], cityFrom: value };
  //   //   }
  //   // }
  //   // if (tripType === "multicity" && index > 0) {
  //   //   if (name === "cityFrom") {
  //   //     dataArray[index - 1] = { ...dataArray[index + 1], cityTo: value };
  //   //   }
  //   // }
  //   // setFlightDetails([...dataArray]);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    let prev = localStorage.getItem("flightSearches");
    const info = {
      flightsData,
      tripType,
      travellers,
    };

    let data;

    console.log(info);

    if (prev) {
      prev = JSON.parse(prev);
      console.log(prev);
      data = [...prev, info];
    } else {
      data = [info];
    }
    localStorage.setItem("flightSearches", JSON.stringify(data));
    navigate("/b2b/flight/order");
  };

  let rescentSearches = localStorage.getItem("flightSearches");

  if (rescentSearches) {
    rescentSearches = JSON.parse(rescentSearches);
    rescentSearches = rescentSearches.reverse();
  }

  console.log(rescentSearches);

  const handlerescentCardClick = (data) => {
    dispatch(handleRescentSearchCardClick(data));
    navigate("/b2b/flight/order");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex px-5 pt-7 pb-4 space-x-3">
          <div className="flex space-x-2">
            <div className="">
              <input
                type="radio"
                name="choose"
                className="cursor-pointer"
                value="oneway"
                onChange={handleTripTypeChange}
                checked={tripType === "oneway"}
              />
            </div>
            <div className="text-sm">One-way</div>
          </div>
          <div className="flex space-x-2">
            <div className="">
              <input
                type="radio"
                name="choose"
                className="cursor-pointer"
                value="return"
                onChange={handleTripTypeChange}
                checked={tripType === "return"}
              />
            </div>
            <div className="text-sm">Round trip</div>
          </div>
          <div className="flex space-x-2">
            <div className="">
              <input
                type="radio"
                name="choose"
                className="cursor-pointer"
                value="multicity"
                onChange={handleTripTypeChange}
                checked={tripType === "multicity"}
              />
            </div>
            <div className="text-sm">Multi-city</div>
          </div>
        </div>
        {flightsData?.map((data, index, array) => (
          <>
            <FlightCardForm index={index} data={data} length={array.length} />
          </>
        ))}
      </form>
      <div className="p-3">
        <h2 className="text-xl md:text-2xl font-semibold text-darktext mb-4">
          Recent Search
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {rescentSearches?.map((ele) => {
            console.log(ele);
            return (
              <>
                <div
                  className=" rounded-xl flex flex-col justify-center p-4 pt-8 cursor-pointer bg-white shadow-lg relative shadow-blue-300/20 transform hover:translate-y-[-4px]"
                  onClick={() => {
                    handlerescentCardClick(ele);
                  }}
                >
                  <div
                    className={`absolute top-2 left-4 capitalize font-medium text-[14px] ${
                      ele?.tripType === "oneway"
                        ? "text-teal-500"
                        : "text-red-500"
                    } `}
                  >
                    {ele?.tripType === "return" ? "Round Trip" : "One-Way"}
                  </div>
                  {ele?.flightsData?.map((data) => (
                    <>
                      <div className="w-[100%] ">
                        <div className="flex justify-between items-center w-[100%] ">
                          <div className="flex gap-1 pr-2">
                            <span>{data?.cityFrom?.name}</span>
                            <span className="text-gray-300 font-medium">
                              ({data?.cityFrom?.iata})
                            </span>
                          </div>
                          <div className="flex  text-blue-400 text-[25px]">
                            <TbArrowsRight />
                          </div>
                          <div className="flex gap-1 pl-2">
                            <span>{data?.cityTo?.name}</span>
                            <span className="text-gray-300 font-medium">
                              ({data?.cityTo?.iata})
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-2 text-[14px]">
                          Departure Date :{" "}
                          <span className="text-gray-300 ">
                            {data?.departureDate}
                          </span>
                        </div>
                      </div>
                    </>
                  ))}
                  {ele?.tripType === "return" && (
                    <div className="flex gap-2 mt-2 text-[14px]">
                      Return Date :{" "}
                      <span className="text-gray-300 ">
                        {ele?.flightsData[0].returnDate}
                      </span>
                    </div>
                  )}
                  <div className="flex gap-2 mt-2">
                    <span className="flex  gap-1 text-[12px]">
                      <span>Adult :</span>
                      {ele?.travellers?.adult}
                    </span>
                    <span className="flex  gap-1 text-[12px]">
                      <span>Child :</span>
                      {ele?.travellers?.children}
                    </span>
                    <span className="flex  gap-1 text-[12px]">
                      <span>Infant :</span>
                      {ele?.travellers?.infant}
                    </span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FlightCard;
