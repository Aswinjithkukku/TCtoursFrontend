import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addFlightRow,
  removeFlightRow,
  setTripType,
} from "../../../redux/slices/flightSlice";

import FlightCardForm from "./FlightCardForm";

function FlightCard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { tripType, flightsData } = useSelector((state) => state.flight);

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
                value="oneWay"
                onChange={handleTripTypeChange}
                checked={tripType === "oneWay"}
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
                value="roundTrip"
                onChange={handleTripTypeChange}
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
    </>
  );
}

export default FlightCard;
