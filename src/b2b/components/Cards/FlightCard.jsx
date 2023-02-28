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
    if (e.target.value === "multiCity") {
      dispatch(addFlightRow());
    } else {
      dispatch(removeFlightRow({ index: "notMultiCity" }));
    }
  };

  // const handleDetailChange = (data, index) => {
  //   dispatch(handleFlightDeatilsChange({ data, index }));
  //   // const dataArray = [...flightDetails];
  //   // dataArray[index] = { ...dataArray[index], [name]: value };

  //   // if (tripType === "multiCity" && index < dataArray.length - 1) {
  //   //   if (name === "cityTo") {
  //   //     dataArray[index + 1] = { ...dataArray[index + 1], cityFrom: value };
  //   //   }
  //   // }
  //   // if (tripType === "multiCity" && index > 0) {
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
                value="multiCity"
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
          Rescent Search
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {rescentSearches?.map((ele) => {
            console.log(ele);
            return (
              <>
                <div
                  className=" h-[80px] rounded-xl flex p-4 cursor-pointer bg-white shadow-lg "
                  onClick={() => {
                    handlerescentCardClick(ele);
                  }}
                >
                  {ele?.flightsData?.map((data) => (
                    <>
                      <div className="flex justify-between items-center w-[100%] ">
                        <div className="flex gap-1 pr-2">
                          <span>{data?.cityFrom?.name}</span>
                          <span>({data?.cityFrom?.iata})</span>
                        </div>
                        <div className="flex  text-blue-400 text-[25px]">
                          <TbArrowsRight />
                        </div>
                        <div className="flex gap-1 pl-2">
                          <span>{data?.cityTo?.name}</span>
                          <span>({data?.cityTo?.iata})</span>
                        </div>
                      </div>
                    </>
                  ))}
                  <div></div>
                  <div></div>
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
